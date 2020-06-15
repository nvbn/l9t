import { Deployment } from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";

export type Props = {
  name: string;
  replicas: number;
  image: string;
  configurationFiles: string[];
};

export default (
  { name, replicas, image, configurationFiles }: Props,
): Deployment => ({
  apiVersion: "apps/v1",
  kind: "Deployment",
  metadata: { name },
  spec: {
    selector: {
      matchLabels: {
        app: name,
      },
    },
    replicas,
    template: {
      metadata: {
        labels: {
          app: name,
        },
      },
      spec: {
        containers: [
          {
            name: name,
            image: image,
            ports: [
              {
                containerPort: 80,
              },
            ],
            volumeMounts: [
              {
                name: "confd",
                mountPath: "/etc/nginx/conf.d/",
              },
            ],
          },
        ],
        volumes: [
          {
            name: "confd",
            configMap: {
              name: `${name}-configuration`,
              items: configurationFiles.map((name) => ({
                key: name,
                path: name,
              })),
            },
          },
        ],
      },
    },
  },
});
