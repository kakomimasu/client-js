import extensions from "rollup-plugin-extensions";
import typescript from "@rollup/plugin-typescript";
import command from "rollup-plugin-command";

const config = [
  {
    input: "./mod.ts",
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [
      /*extensions({
        extensions: [".ts", ".js"],
      }),*/
      typescript(),
      command("deno run -A scripts/deno_to_node.ts"),
    ],
  },
];

export default config;
