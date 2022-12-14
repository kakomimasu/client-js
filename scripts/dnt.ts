// Deno to Node transform program
import { build } from "https://deno.land/x/dnt@0.0.19/mod.ts";

const version = Deno.args[0];
if (!version) {
  throw Error("Version args need.");
}

["./esm", "./types", "./umd"].forEach((dir) => {
  try {
    Deno.removeSync(dir, { recursive: true });
  } catch (e) {
    console.error(e);
  }
});

await build({
  entryPoints: ["./deno/mod.ts"],
  outDir: ".",
  typeCheck: true,
  // test: false,
  package: {
    // package.json properties
    name: "@kakomimasu/client-js",
    version,
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
