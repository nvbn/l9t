import l9t from "https://deno.land/x/l9t/l9t.ts";
import deployment from "./deployment.ts";
import service from "./service.ts";

const params = {
  build: Deno.env.get("BUILD") || "dev",
};

l9t([service(params), deployment(params)], import.meta);
