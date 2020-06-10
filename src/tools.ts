import { stringify } from "https://deno.land/std/encoding/yaml.ts";
export * from "./types/k8s.ts";

export const compile = <T extends object>(cfgs: T[]): string =>
  cfgs.map((cfg) => stringify(cfg as object)).join("\n\n---\n");

export const kubectlApply = async (compiled: string, args: string[]) => {
  const proc = Deno.run({
    cmd: [
      "kubectl",
      "apply",
      ...args,
      "-f",
      "-",
    ],
    stdin: "piped",
  });

  if (!proc.stdin) {
    throw new Error("unable to get kubectl stdin");
  }

  const encoder = new TextEncoder();
  const encoded = encoder.encode(compiled);

  await proc.stdin.write(encoded);
  await proc.stdin.close();
  await proc.status();
};
