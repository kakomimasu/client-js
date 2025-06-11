import denoJson from "../../deno.json" with { type: "json" };

const jsonVersion = denoJson.version;

const tagVersion = Deno.args[0];

if (jsonVersion === tagVersion) {
  console.log(
    "✅ Version check passed: deno.json version matches tag version.",
  );
}
if (jsonVersion !== tagVersion) {
  console.error(
    `::error:: Version mismatch: deno.json version(${jsonVersion}) does not match tag version(${tagVersion}).`,
  );
  Deno.exit(1);
}
