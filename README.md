# L9T

![screenshot](https://deno.land/x/l9t/screenshot.png)

Reusable typesafe kubernetes configurations with [fast development cycle and hot reloading](https://www.youtube.com/watch?v=KCEikoijoWc), and zero yaml.

## Why?

Because working with kubernetes configs and helm is painful:

* YAML/JSON without proper valdiation is error prone.
* Go templates are ugly and too limited.
* Subcharts are pain to manage.

## How?

TypeScript + Deno + kubectl.

## Usage

To use l9t you need to install [deno](https://deno.land/manual/getting_started/installation).

Then you can create a configuration:

```typescript
import l9t, {
  Deployment,
  Service,
} from "https://deno.land/x/l9t/l9t.ts";

// types for variables aren't required but useful for ides
const deployment = (
  { build }: { build: string },
): Deployment => ({
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
    replicas: build === "prod" ? 10 : 2,
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
});

const service = ({}): Service => ({
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
});

const params = {
  build: Deno.env.get("BUILD") || "dev",
};

l9t([deployment(params), service(params)], import.meta);
```

Apply the configuration with:

```bash
deno run -A hello_world.ts apply
```

And check that it works with:

```bash
curl localhost:80
```

For interactive development you can use watch mode:

```bash
deno run hello_world.ts -A watch
```

As the configuration has `Deno.env.get("BUILD") === "prod" ? 10 : 2`, it's possible
to make a prod configurationwith more replicas with:

```bash
BUILD=prod deno run -A hello_world.ts apply
```

If you just want to compile TypeScript configuration to YAML run:

```bash
deno run -A hello_world.ts compile
```

Examples:
* [hello world](https://github.com/nvbn/l9t/tree/master/examples/hello_world)
* [reusable nginx](https://github.com/nvbn/l9t/tree/master/examples/reusable/nginx)

## Goals

❓ Types for Kubernetes APIs.

✅ Hot reloading.

❓ Helm charts-like reusable configuration packages.

## Development

### Prerequisites

* kubectl
* [deno](https://deno.land/manual/getting_started/installation)

### Generate types

To generate new version of the default types run:

```bash
kubectl proxy --port=8080
curl -k localhost:8080/openapi/v2 > spec.json
deno run --unstable --allow-read src/scripts/make_types.ts io.k8s KubernetesResources > src/types/k8s.ts
deno fmt
```

It's possible to generate types for your kuernetes extensions, like:

```bash
deno run --unstable --allow-read src/scripts/make_types.ts EXTENSION_NS MyExtensionResources > ext.ts
```

And use it like:

```typescript
import l9t, { KubernetesResources } from "https://deno.land/x/l9t/l9t.ts";
import { MyExtensionResources } from "./ext.ts";

...

l9t<KubernetesResources | MyExtensionResources>([...], import.meta);
```

### Testing

To run test execute:

```bash
deno test
```

## License MIT
