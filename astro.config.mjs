// @ts-check
import { defineConfig } from 'astro/config';

// ▼ 公開前にここを書き換えてください（README の「3. GitHub Pages に公開」参照）
export default defineConfig({
  // リポジトリ名を「ユーザー名.github.io」にした場合：
    site: 'https://lalalakuda.github.io',

  // それ以外のリポジトリ名（例: my-blog）にした場合は、下の行の // を外して名前を合わせる：
  // base: '/my-blog',
});
