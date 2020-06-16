/** An interface that allows us to mock interaction with a system. */
export type System = {
  run(cmd: string[]): {
    readStdout(): Promise<string>;
    writeToStdin(input: string): Promise<void>;
  };

  watchFs(
    paths: string | string[],
    options?: { recursive: boolean },
  ): AsyncIterableIterator<Deno.FsEvent>;

  printToStdout(data: string): void;

  printToStderr(data: string): void;

  denoExecPath(): string;

  atExit(callback: () => void): void;
};
