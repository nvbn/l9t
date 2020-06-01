import { parse, Args } from "https://deno.land/std/flags/mod.ts";
export * from "./types/k8s.ts";
import { KubernetesConfig } from "./types/k8s.ts";
import compiler from "./compiler.ts";

export default <T extends object = KubernetesConfig>(
  cfgs: T[],
  { url, main }: ImportMeta,
) => {
  if (!main) {
    console.warn(
      "l9t should be called only from a main stream, use `compiler` instead",
    );
    return;
  }

  const flags = parse(Deno.args);

  if (shouldShowHelp(flags)) {
    showHelp();
    return;
  }

  if (shouldWatch(flags)) {
    compileMain(cfgs);
    watch(url);
    return;
  }

  compileMain(cfgs);
};

const compileMain = <T extends object>(cfgs: T[]) =>
  console.log(compiler(cfgs));

const shouldWatch = (flags: Args) =>
  flags._.indexOf("watch") !== -1 || flags.watch || flags.w;

const watch = (url: string) => {
  const proc = Deno.run({
    cmd: [
      "sh",
      "-c",
      `fswatch -o . | xargs -n1 -I{} deno run ${url}`,
    ],
  });

  proc.status(); // that'll block
};

const shouldShowHelp = (flags: Args) =>
  flags._.indexOf("help") !== -1 || flags.help || flags.h;

const showHelp = () =>
  console.warn(`L9T
Reusable typesafe kubernetes configurations with fast development cycle and no yaml

USAGE:
  deno run SCRIPT [command]

COMMANDS:
  compile  Prints compiled config (default)
  watch    Prints compiled config on every change, requires --allow-run
  help     Prints help message

EXAMPLE:
  deno run webapp_config.ts | kubectl apply -f -
  deno run --allow-run webapp_config.ts watch | kubectl apply -f -
`);
