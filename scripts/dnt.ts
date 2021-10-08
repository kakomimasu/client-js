// Deno to Node transform program
import { run } from "https://deno.land/x/dnt@0.0.7/mod.ts";

await run({
  entryPoint: "./mod.ts",
  outDir: ".",
  typeCheck: true,
  package: {
    // package.json properties
    name: "client-js",
    version: Deno.args[0],
    description: "Kakomimasu server client for js/ts(browser/deno/node)",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/kakomimasu/client-js",
    },
    bugs: {
      url: "https://github.com/kakomimasu/client-js/issues",
    },
  },
});
