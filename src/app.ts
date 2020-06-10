import { parse, Args } from "https://deno.land/std/flags/mod.ts";
export * from "./types/k8s.ts";
import { KubernetesResources } from "./types/k8s.ts";
import compiler from "./compiler.ts";

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
      applyCommand(url, kubectlArgs);
      return;
    case "watch":
      watchCommand(url, kubectlArgs);
      return;
    default:
      helpCommand();
      return;
  }
};

const compileCommand = <T extends object>(cfgs: T[]) =>
  console.log(compiler(cfgs));

const applyCommand = (url: string, args: string[]) => {
  const proc = Deno.run({
    cmd: [
      "sh",
      "-c",
      `deno run -A ${url} compile | kubectl apply -f - ${preapreArgs(args)}`,
    ],
  });

  proc.status(); // that'll block
};

const watchCommand = (url: string, args: string[]) => {
  const proc = Deno.run({
    cmd: [
      "sh",
      "-c",
      `fswatch -o . | xargs -n1 -I{} deno run -A ${url} apply ${
        preapreArgs(args)
      }`,
    ],
  });

  proc.status(); // that'll block
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

const preapreArgs = (args: string[]): string =>
  args.map((arg) => arg.replace('"', '\\"')).map((escapedArg) =>
    `"${escapedArg}"`
  ).join(" ");
