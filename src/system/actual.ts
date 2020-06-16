import { System } from "./types.ts";

const decoder = new TextDecoder();
const encoder = new TextEncoder();

/** Actual implementation of methods to interact with the system. */
const Actual: System = {
  run(cmd: string[]) {
    return {
      async readStdout(): Promise<string> {
        const proc = Deno.run({
          cmd,
          stdout: "piped",
          stderr: "inherit",
        });

        const output = await proc.output();
        return decoder.decode(output);
      },

      async writeToStdin(input: string): Promise<void> {
        const proc = Deno.run({
          cmd,
          stdin: "piped",
        });

        if (!proc.stdin) {
          throw new Error("unable to get stdin");
        }

        const encoded = encoder.encode(input);

        await proc.stdin.write(encoded);
        proc.stdin.close();
        await proc.status();
      },
    };
  },

  watchFs: Deno.watchFs,

  printToStdout(data: string) {
    console.log(data);
  },

  printToStderr(data: string) {
    console.warn(data);
  },

  denoExecPath: Deno.execPath,

  atExit(callback: () => void) {
    globalThis.addEventListener("unload", callback);
  },
};

export default Actual;
