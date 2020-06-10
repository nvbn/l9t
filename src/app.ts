import * as path from "https://deno.land/std/path/mod.ts";
export * from "./types/k8s.ts";
import { KubernetesResources } from "./types/k8s.ts";
import { compile, kubectlApply, watchDebounced } from "./tools.ts";

export default <T extends object = KubernetesResources>(
  cfgs: T[],
  { url, main }: ImportMeta,
) => {
  if (!main) {
    console.warn(
      "l9t should be called only from a main stream, use `compiler` instead",
    );
    return;
  }

  const [command, ...kubectlArgs] = Deno.args;
  switch (command) {
    case "compile":
      compileCommand(cfgs);
      return;
    case "apply":
      applyCommand(cfgs, kubectlArgs).catch((e) =>
        console.error("unable to apply configuration", e)
      );
      return;
    case "watch":
      watchCommand(url, kubectlArgs).catch((e) =>
        console.error("unable to watch configuration changes", e)
      );
      return;
    default:
      helpCommand();
      return;
  }
};

const compileCommand = <T extends object>(cfgs: T[]) =>
  console.log(compile(cfgs));

const applyCommand = async <T extends object>(cfgs: T[], args: string[]) => {
  const compiled = compile(cfgs);

  await kubectlApply(compiled, args);
};

const watchCommand = async (url: string, args: string[]) => {
  const fullPath = path.fromFileUrl(url);
  const root = path.dirname(fullPath);

  const decoder = new TextDecoder();

  for await (
    const _ of watchDebounced(root)
  ) {
    const compileProc = Deno.run({
      cmd: [
        Deno.execPath(),
        "run",
        "-A",
        url,
        "compile",
      ],
      stdout: "piped",
      stderr: "inherit",
    });

    const rawCompiled = await compileProc.output();
    const compiled = decoder.decode(rawCompiled);
    await kubectlApply(compiled, args);
  }
};

const helpCommand = () =>
  console.warn(`L9T
Reusable typesafe kubernetes configurations with fast development cycle and no yaml

USAGE:
  deno run -A L9T_CONFIGURATION [command]

COMMANDS:
  apply [kubectl args]  applyes compiled configuration
  watch [kubectl args]   applys compiled configuration on every change, requires fswatch
  compile                Prints compiled configuration
  help                   Prints help message

EXAMPLE:
  deno run -A webapp_config.ts update  # applys the configuration
  deno run -A webapp_config.ts watch  # applys the configuration on every change
`);
