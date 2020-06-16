import { stringify } from "https://deno.land/std/encoding/yaml.ts";
import { System } from "./system/types.ts";

/** Compiles configurations to yaml. */
export const compile = <T extends object>(cfgs: T[]): string =>
  cfgs.map((cfg) => stringify(cfg as object)).join("\n\n---\n");

/** Applies compiled configuration with kubectl */
export const kubectlApply = (
  system: System,
  compiled: string,
  args: string[],
) =>
  system.run([
    "kubectl",
    "apply",
    ...args,
    "-f",
    "-",
  ]).writeToStdin(compiled);

/** Recursively watches for changes in `path` */
export const watchDebounced = async function* (
  system: System,
  done: Promise<boolean>,
  path: string,
  delay = 100,
) {
  let timeout: number | undefined;

  let resolveShouldYield: () => void;
  let propagateError: (e: Error) => void;
  let shouldYield: Promise<void>;
  let shouldStopWatching = false;

  const resetShouldYield = () =>
    shouldYield = new Promise((resolve, reject) => {
      resolveShouldYield = resolve;
      propagateError = reject;
    });

  const watch = async () => {
    for await (
      const _ of system.watchFs(path, { recursive: true })
    ) {
      clearTimeout(timeout);
      if (shouldStopWatching) {
        return;
      }

      timeout = setTimeout(resolveShouldYield, delay);
    }
  };

  resetShouldYield();
  watch().catch((e) => propagateError(e));

  while (true) {
    // true when done, undefined when not
    if (await Promise.race([shouldYield!!, done])) {
      shouldStopWatching = true;
      return;
    }

    yield;
    resetShouldYield();
  }
};
