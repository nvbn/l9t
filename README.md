# L9T

![screenshot](https://raw.githubusercontent.com/nvbn/l9t/master/screenshot.png)

Reusable typesafe kubernetes configurations with fast development cycle and no yaml.

*One symbol ahead from K8S*

## Why?

Because working with kubernetes configs and helm is painful:

* YAML/JSON without proper valdiation is error prone.
* Go templates are ugly and too limited.
* Subcharts are pain to manage.

## How?

TypeScript + Deno + just kubectl.

## Usage

To use l9t you need to install [deno](https://deno.land/manual/getting_started/installation).
To enable hot reloading/watch mode you need to install [fswatch](https://github.com/emcrisostomo/fswatch).

Then you can create a configuration:

```typescript
import l9t, {
  io$k8s$api$apps$v1$Deployment,
  io$k8s$api$core$v1$Service,
} from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";

const deployment: io$k8s$api$apps$v1$Deployment = { // types for variables aren't required but useful for ides
  apiVersion: "apps/v1",
  kind: "Deployment",
  metadata: {
    name: "hello-world",
  },
  spec: {
    selector: {
      matchLabels: {
        app: "hello-world",
      },
    },
    // allows to change configuration depending on environment variables
    replicas: Deno.env.get("BUILD") === "prod" ? 10 : 2,
    template: {
      metadata: {
        labels: {
          app: "hello-world",
        },
      },
      spec: {
        containers: [
          {
            name: "hello-world",
            image: "nginx:latest",
            ports: [
              {
                containerPort: 80,
              },
            ],
          },
        ],
      },
    },
  },
};

const service: io$k8s$api$core$v1$Service = {
  apiVersion: "v1",
  kind: "Service",
  metadata: {
    name: "hello-world",
  },
  spec: {
    selector: {
      app: "hello-world",
    },
    ports: [
      {
        protocol: "TCP",
        port: 80,
        targetPort: 80,
      },
    ],
    type: "LoadBalancer",
  },
};

l9t([deployment, service], import.meta);
```

Apply the configuration with:

```bash
deno run --allow-env hello_world.ts | kubectl apply -f -
```

And check that it works with:

```bash
curl localhost:80
```

For interactive development you can use watch mode:

```bash
deno run hello_world.ts --allow-env --allow-run watch | kubectl apply -f -
```

As the configuration has `Deno.env.get("BUILD") === "prod" ? 10 : 2`, it's possible
to make a prod configurationwith more replicas with:

```bash
BUILD=prod deno run --allow-env index.ts
```

Look at `examples` folder for more examples.

## Goals

❓ Types for Kubernetes APIs.

❓ Hot reloading.

❌ Helm charts-like reusable configuration packages.

## Development

### Prerequisites

* kubectl
* [deno](https://deno.land/manual/getting_started/installation)

### Generate types

To generate new version of the default types run:

```bash
kubectl proxy --port=8080
curl -k localhost:8080/openapi/v2 > spec.json
deno run --unstable --allow-read src/scripts/make_types.ts > src/types/k8s.ts
deno fmt
```

## License MIT
