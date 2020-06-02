import l9t from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";
// import l9t from "../../l9t.ts";
import deployment from "./deployment.ts";
import service from "./service.ts";

const params = {
  build: Deno.env.get("BUILD") || "dev",
};

l9t([service(params), deployment(params)], import.meta);
