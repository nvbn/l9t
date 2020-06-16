import * as path from "https://deno.land/std/path/mod.ts";
import { System } from "./system/types.ts";
export * from "./types/k8s.ts";
import { compile, kubectlApply, watchDebounced } from "./tools.ts";

/** deno run ... compile */
export const compileCommand = <T extends object>(system: System, cfgs: T[]) =>
  system.printToStdout(compile(cfgs));

/** deno run ... apply */
export const applyCommand = async <T extends object>(
  system: System,
  cfgs: T[],
  args: string[],
) => {
  const compiled = compile(cfgs);

  await kubectlApply(system, compiled, args);
};

/** deno run ... watch */
export const watchCommand = async (
  system: System,
  url: string,
  args: string[],
) => {
  const fullPath = path.fromFileUrl(url);
  const root = path.dirname(fullPath);

  const done = new Promise<boolean>((resolve) =>
    system.atExit(() => resolve(true))
  );

  for await (
    const _ of watchDebounced(system, done, root)
  ) {
    const compiled = await system.run([
      system.denoExecPath(),
      "run",
      "-A",
      url,
      "compile",
    ]).readStdout();
    await kubectlApply(system, compiled, args);
  }
};

/** deno run ... help */
export const helpCommand = (system: System) =>
  system.printToStderr(`L9T
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
