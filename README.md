# Kakomimasu server client for deno/node

[![JSR](https://jsr.io/badges/@kakomimasu/client-js)](https://jsr.io/@kakomimasu/client-js)

# 使用方法

```ts
import { ApiClient } from "@kakomimasu/client-js";

const client = new ApiClient();

const boards = await client.getBoards();
console.log(boards);
```

その他の例は、[samples](./samples/) をご覧ください

# Contributing

## OpenAPI Generator のインストール

ソースファイルの生成には [OpenAPI Generator](https://openapi-generator.tech/)
を使用しています。

```console
$ deno task install
```

## 生成

生成は [template ディレクトリ](./template/) のテンプレートを使用して行われます。
コマンド実行時に OpenAPI 定義ファイル
（[https://api.kakomimasu.com/v1/openapi.json](https://api.kakomimasu.com/v1/openapi.json)）
を使って生成されます

```console
$ deno task generate
```

## テスト

テストは PR 作成時の GitHub Actions で行われます。
ローカルで試す方は、[kakomimasu/server](https://github.com/kakomimasu/server)
を起動しておく必要があります。

```
$ deno test -A .
```
