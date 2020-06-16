import { Service } from "https://deno.land/x/l9t/l9t.ts";

export default ({}): Service => ({
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
