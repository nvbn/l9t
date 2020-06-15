import l9t from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";
import nginx from "https://raw.githubusercontent.com/nvbn/l9t/master/examples/reusable/nginx/index.ts";

l9t([...nginx({
  name: "example-nginx-usage",
  configurationFiles: {
    "static.conf": Deno.readTextFileSync("_usage_nginx_static.conf"),
  },
})], import.meta);
