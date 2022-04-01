# Kakomimasu server client for js/ts(browser/deno/node)

# 対応状況

- ブラウザ(ESModules)
- Deno
- Node.js

# メモ
## Deno to Node
開発はブラウザ互換のDenoを使用している。
そのままではNodeモジュールではインポート時の拡張子などの問題が起こるため、Node用に変換が必要

下記コマンドで`package.json`,`package-lock.json`,`esm`フォルダ,`cjs`フォルダを自動生成してくれる。

```console
$ deno task dnt
```
