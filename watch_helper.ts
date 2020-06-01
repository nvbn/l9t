import { log } from "https://deno.land/x/denon/deps.ts";
import { Denon } from "https://deno.land/x/denon/denon.ts";

const config = {
  scripts: {},
  watcher: {
    interval: 350,
    paths: [],
    exts: ["ts", "js", "json"],
    match: ["*.*"],
    skip: ["**/.git/**"],
  },
  logger: {},
  args: {
    cmd: Deno.args,
    help: false,
    version: false,
    init: false,
  },
};

// Makes it log to stderr instead of stdout
const logHandler = new log.handlers.ConsoleHandler("INFO");
logHandler.log = (msg: string): void => {
  console.warn(msg);
}

if (import.meta.main) {
  await log.setup({
    handlers: {
      console: logHandler,
    },
    loggers: {
      default: {
        level: "INFO",
        handlers: ["console"],
      }
    }
  });

  const denon = new Denon(config);

  for await (let _ of denon.run(Deno.args[0])) {}
}
