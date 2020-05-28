# L9T

Reusable typesafe kubernetes configurations with fast development cycle and no yaml.

*One symbol ahead from K8S*

## Why?

Because working with kuberentes configs and helm is painful:

* YAML/JSON without proper valdiation is error prone.
* Go templates are ugly and too limited.
* Subcharts are paing to manage.

## How?

TypeScript + Deno + just kubectl.

## Goals

❌ Types for Kubernetes APIs.

❌ Hot reloading.

❌ Helm charts-like reusable configration packages.

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
