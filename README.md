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
To enable hot reloading you need to install [denon](https://github.com/denosaurs/denon).

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
    replicas: 2,
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

l9t([deployment, service]);
```

Apply the configuration with:

```bash
deno run hello_world.ts | kubectl apply -f -
```

And check that it works with:

```bash
curl localhost:80
```

For interactive development you can use denon:

```bash
denon run hello_world.ts | kubectl apply -f -
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
deno run --unstable --allow-read scripts/make_types.ts > types/k8s.ts
deno fmt
```

## License MIT
