import { ConfigMap } from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";

type Props = {
  name: string;
  configurationFiles: { [name: string]: string };
};

export default (
  { name, configurationFiles }: Props,
): ConfigMap => ({
  apiVersion: "v1",
  kind: "ConfigMap",
  metadata: {
    name: `${name}-configuration`,
  },
  data: configurationFiles,
});
