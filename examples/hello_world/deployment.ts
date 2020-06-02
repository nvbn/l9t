import { io$k8s$api$apps$v1$Deployment } from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";

export default (
  { build }: { build: string },
): io$k8s$api$apps$v1$Deployment => ({
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
