import {
  assertEquals,
  assertArrayContains,
} from "https://deno.land/std/testing/asserts.ts";
import { delay } from "https://deno.land/std/async/delay.ts";
import mockSystem from "./system/mock.ts";
import { compile, kubectlApply, watchDebounced } from "./tools.ts";

Deno.test("compile compiles configurations to yaml", () => {
  const compiled = compile([{ api: "v1" }, { type: "Pod" }]);

  assertEquals(compiled, "api: v1\n\n\n---\ntype: Pod\n");
});

Deno.test("kubectlApply applies compiled k8s configs", async () => {
  let called: string[] | undefined;
  let passedConfig: string | undefined;

  const system = mockSystem({
    runWriteToStdin: async (cmd: string[], input: string) => {
      called = cmd;
      passedConfig = input;
    },
  });

  await kubectlApply(system, "api: v1", ["-v"]);

  assertArrayContains(called!!, ["-v"]);
  assertEquals(passedConfig, "api: v1");
});

Deno.test("watchDebounced yeilds on file changes but not frequently than once in a delay", async () => {
  const watchFs = async function* () {
    yield { kind: "any", paths: [] };
    yield { kind: "any", paths: [] };
    await delay(50);
    yield { kind: "any", paths: [] };
  };

  const system = mockSystem({
    watchFs: watchFs as any, // whatever
  });

  const done = new Promise<boolean>((resolve) =>
    setTimeout(() => resolve(true), 200)
  );

  let events = 0;
  for await (const _ of watchDebounced(system, done, ".", 10)) {
    events += 1;
  }

  assertEquals(events, 2);
});
