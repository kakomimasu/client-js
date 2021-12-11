// Deno to Node transform program
import { build } from "https://deno.land/x/dnt@0.0.19/mod.ts";

const resolve = (path: string) => new URL(path, import.meta.url);

const version = Deno.args[0];
if (!version) {
  throw Error("Version args need.");
}

try {
  Deno.removeSync(resolve("../esm"), { recursive: true });
  Deno.removeSync(resolve("../umd"), { recursive: true });
  Deno.removeSync(resolve("../types"), { recursive: true });
} catch (e) {
  console.error(e);
}

await build({
  entryPoints: ["./mod.ts"],
  outDir: ".",
  typeCheck: true,
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
