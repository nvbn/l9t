import { stringify } from "https://deno.land/std/encoding/yaml.ts";
export * from "./types/k8s.ts";
import { KubernetesConfig } from "./types/k8s.ts";

export const compile = <T extends object>(cfgs: T[]): string =>
  cfgs.map((cfg) => stringify(cfg as object)).join("\n\n---\n");

export default <T extends object = KubernetesConfig>(cfgs: T[]) => {
  console.log(compile(cfgs));
}
