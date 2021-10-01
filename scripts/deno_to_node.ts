const resolve = (p: string) => new URL(p, import.meta.url);

function resolveImport(p: URL) {
  for (const entry of Deno.readDirSync(p)) {
    if (entry.isFile) {
      if (!entry.name.endsWith(".d.ts")) continue;
      const url = new URL(`./${entry.name}`, p);

      console.log(url.pathname);
      const text = Deno.readTextFileSync(url);

      const replacedText = text.replaceAll(
        /(import|export)(.+).ts/g,
        (_match, p1, p2) => {
          return `${p1}${p2}`;
        },
      );
      if (text === replacedText) continue;

      Deno.writeTextFileSync(url, replacedText);
    } else if (entry.isDirectory) {
      resolveImport(new URL(`./${entry.name}/`, p));
    }
  }
}

resolveImport(resolve("../dist/"));
