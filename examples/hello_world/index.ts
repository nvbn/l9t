import l9t from "https://raw.githubusercontent.com/nvbn/l9t/master/l9t.ts";
import { deployment } from "./deployment.ts";
import { service } from "./service.ts";

l9t([service, deployment]);
