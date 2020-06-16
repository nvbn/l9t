import { System } from "./types.ts";

/** Mock implementation with overwrittable methods. */
export default ({
  runReadStdout = async (cmd: string[]) => "",
  runWriteToStdin = async (cmd: string[], input: string) => {},
  watchFs = async function* (
    paths: string | string[],
    options?: { recursive: boolean },
  ) {},
  printToStdout = (data: string) => {},
  printToStderr = (data: string) => {},
  denoExecPath = () => "",
  atExit = (callback: () => void) => {},
}): System => ({
  run(cmd: string[]) {
    return {
      readStdout: () => runReadStdout(cmd),
      writeToStdin: (input: string) => runWriteToStdin(cmd, input),
    };
  },

  watchFs,
  printToStdout,
  printToStderr,
  denoExecPath,
  atExit,
});
