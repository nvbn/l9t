import system from "./system/actual.ts";
export * from "./types/k8s.ts";
import { KubernetesResources } from "./types/k8s.ts";
import {
  compileCommand,
  applyCommand,
  watchCommand,
  helpCommand,
} from "./commands.ts";

export default <T extends object = KubernetesResources>(
  cfgs: T[],
  { url, main }: ImportMeta,
) => {
  if (!main) {
    console.warn(
      "l9t should be called only from a main file",
    );
    return;
  }

  const [command, ...kubectlArgs] = Deno.args;
  switch (command) {
    case "compile":
      compileCommand(system, cfgs);
      return;
    case "apply":
      applyCommand(system, cfgs, kubectlArgs).catch((e) =>
        console.error("unable to apply configuration", e)
      );
      return;
    case "watch":
      watchCommand(system, url, kubectlArgs).catch((e) =>
        console.error("unable to watch configuration changes", e)
      );
      return;
    default:
      helpCommand(system);
      return;
  }
};
