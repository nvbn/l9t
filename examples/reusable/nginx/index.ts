import { KubernetesResources } from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";
import configmap from "./configmap.ts";
import deployment from "./deployment.ts";
import service from "./service.ts";

export type Props = {
  name: string;
  replicas?: number;
  port?: number;
  image?: string;
  configurationFiles?: { [name: string]: string };
};

export default (
  {
    name,
    replicas = 3,
    port = 80,
    image = "nginx:latest",
    configurationFiles = {},
  }: Props,
): KubernetesResources[] => [
  configmap({ name, configurationFiles }),
  deployment(
    {
      name,
      replicas,
      image,
      configurationFiles: Object.keys(configurationFiles),
    },
  ),
  service({ name, port }),
];
