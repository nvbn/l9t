import {
  assertEquals,
  assertArrayContains,
  assertStringContains,
} from "https://deno.land/std/testing/asserts.ts";
import mockSystem from "./system/mock.ts";
import {
  compileCommand,
  applyCommand,
  watchCommand,
  helpCommand,
} from "./commands.ts";

Deno.test("compileCommand compiles configs and prints to stdout", () => {
  let printed: string | undefined;
  let system = mockSystem({
    printToStdout: (data) => printed = data,
  });

  compileCommand(system, [{ api: "v1" }, { type: "Pod" }]);

  assertEquals(printed, "api: v1\n\n\n---\ntype: Pod\n");
});

Deno.test("applyCommand applies compiled kubernetes configs", async () => {
  let called: string[] | undefined;
  let passedConfig: string | undefined;

  const system = mockSystem({
    runWriteToStdin: async (cmd: string[], input: string) => {
      called = cmd;
      passedConfig = input;
    },
  });

  await applyCommand(system, [{ api: "v1" }, { type: "Pod" }], ["-v"]);

  assertArrayContains(called!!, ["-v"]);
  assertEquals(passedConfig, "api: v1\n\n\n---\ntype: Pod\n");
});

Deno.test("watchCommand applies configs on file change", async () => {
  let l9tCalled: string[] | undefined;

  let kubectlCalled: string[] | undefined;
  let passedConfig: string | undefined;

  const watchFs = async function* () {
    yield { kind: "any", paths: [] };
  };

  const system = mockSystem({
    runWriteToStdin: async (cmd: string[], input: string) => {
      kubectlCalled = cmd;
      passedConfig = input;
    },
    runReadStdout: async (cmd: string[]) => {
      l9tCalled = cmd;
      return "api: v1";
    },
    watchFs: watchFs as any,
    atExit: (callback) => setTimeout(callback, 500),
    denoExecPath: () => "deno",
  });

  await watchCommand(system, "file:///workspace/index.ts", ["--v"]);

  assertArrayContains(l9tCalled!!, ["deno", "file:///workspace/index.ts"]);
  assertArrayContains(kubectlCalled!!, ["--v"]);
  assertEquals(passedConfig, "api: v1");
});

Deno.test("helpCommand prints help in stderr", () => {
  let stderr: string | undefined;

  const system = mockSystem({ printToStderr: (data: string) => stderr = data });

  helpCommand(system);

  assertStringContains(stderr!!, "L9T");
});
