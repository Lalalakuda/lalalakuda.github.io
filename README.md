# My Tech Notes（ブログのひな形）

Astro で作ったブログです。記事は Markdown で書き、GitHub Pages で無料公開します。

## 0. 必要なもの

- **Node.js 22.12 以上**（[nodejs.org](https://nodejs.org/ja) から LTS 版をインストール）
- **Git**
- **GitHub アカウント**
- テキストエディタ（VS Code がおすすめ）

ターミナルで次を実行して、バージョンが表示されれば準備完了です。

```bash
node -v
git -v
```

## 1. 自分のパソコンで動かす

このフォルダで次を実行します。

```bash
npm install
npm run dev
```

表示された `http://localhost:4321` をブラウザで開くとサイトが見えます。ファイルを保存すると自動で画面が更新されます。止めるときは `Ctrl + C`。

> `npm install` で `package-lock.json` ができます。これは消さずに GitHub に一緒に上げてください（公開時に使います）。

## 2. 自分の情報に書き換える

| ファイル | 書き換える内容 |
| --- | --- |
| `src/consts.ts` | サイト名、説明文、名前、LinkedIn・GitHub の URL |
| `src/pages/about.astro` | 自己紹介文 |
| `src/content/blog/` | 記事（サンプル2本は消して OK） |
| `src/styles/global.css` | 色（ファイル先頭の変数） |

### 記事の追加

`src/content/blog/` に `.md` ファイルを作るだけです。ファイル名がそのまま URL になります（例：`my-first-post.md` → `/blog/my-first-post/`）。英数字とハイフンのファイル名がおすすめです。

```markdown
---
title: 記事タイトル
description: 一覧に表示される短い説明
pubDate: 2026-10-20
tags: [半導体, 研究メモ]
draft: false
---

ここから本文。
```

`draft: true` にすると公開されません。トップページのウェハーは、公開記事が1本増えるごとにダイが1つ点灯します。

## 3. GitHub Pages に公開

1. GitHub で新しいリポジトリを作ります。名前を **`ユーザー名.github.io`** にすると、URL が `https://ユーザー名.github.io/` になり一番シンプルです。
2. `astro.config.mjs` の `YOUR-USERNAME` を自分の GitHub ユーザー名に書き換えます。
   - 別の名前（例：`my-blog`）にした場合は、`base: '/my-blog'` の行の `//` を外してください。
3. このフォルダを GitHub に上げます。

   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/ユーザー名/リポジトリ名.git
   git push -u origin main
   ```

4. GitHub のリポジトリ画面で **Settings → Pages** を開き、Source を **GitHub Actions** にします。
5. **Actions** タブで処理が緑のチェックになれば公開完了です（数分かかります）。

以降は、記事を書いて `git add .` → `git commit -m "記事追加"` → `git push` するだけで自動的にサイトが更新されます。

## うまくいかないとき

- **Actions が赤い ×**：クリックするとエラー内容が見られます。まず手元で `npm run build` を実行して、同じエラーが出るか確認してください。
- **ページは出るが見た目が崩れる**：`astro.config.mjs` の `site` と `base` がリポジトリ名と合っているか確認してください。
- **Astro のバージョン関連のエラー**：`npx @astrojs/upgrade` で最新版にそろえられます。

## あとから追加できること

- 数式（KaTeX）、RSS、サイトマップ、独自ドメイン、アクセス解析など。必要になったら追加しましょう。
