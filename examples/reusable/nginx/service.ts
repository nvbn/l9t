import { Service } from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";

export type Props = {
  name: string;
  port: number;
};

export default ({ name, port }: Props): Service => ({
  apiVersion: "v1",
  kind: "Service",
  metadata: { name },
  spec: {
    selector: {
      app: name,
    },
    ports: [
      {
        protocol: "TCP",
        port: 80,
        targetPort: port,
      },
    ],
    type: "LoadBalancer",
  },
});
