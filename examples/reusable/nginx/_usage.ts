import l9t from "https://deno.land/x/l9t/l9t.ts";
import nginx from "https://deno.land/x/l9t/examples/reusable/nginx/index.ts";

l9t([...nginx({
  name: "example-nginx-usage",
  configurationFiles: {
    "static.conf": Deno.readTextFileSync("_usage_nginx_static.conf"),
  },
})], import.meta);
