# TTC Website Agent Rules

このリポジトリで Codex / Claude Code / その他のエージェントが作業するときの共通ルールです。作業前に必ずこのファイルを読み、ここに書かれたローカル正本を基準にしてください。

この `AGENTS.md` は入口資料です。長い引き継ぎ資料を毎回全文読まなくても判断できるよう、絶対に守る要点をここに集約しています。詳細確認が必要なときだけ、補助資料を参照してください。

## 0. 作業前に必ず読む資料

最初に読むのはこのファイルです。必要に応じて、次の補助資料を参照してください。

- `docs/agent/tokyotc-website-status-report.md`
  - 2026年5月時点の現状調査レポート。構成、デザイン、未完成箇所、既知の負債、アセット状況を確認するための資料。
- `docs/agent/ttc-corporate-site-operations.md`
  - Codex / Claude Code 向けの運用仕様書。共同編集、ビルド、プレビュー、push、承認ゲート、画像最適化の詳細手順を確認するための資料。
- `_diane_handoff/site_audit.md`
  - Diane によるサイト監査メモ。最新の実装状態や既存ページの詳細確認に使う。

補助資料と現在のリポジトリ状態が食い違う場合は、必ず現在のファイルを読んで判断してください。最終判断はこの `AGENTS.md` と現在のワークツリーを優先します。

## 1. ローカル正本

- 本番公開用リポジトリの正本は `/Users/hkonishi/Projects/tokyotc-website` です。
- GitHub remote は `git@github.com:TTC-website/tokyotc-website.git` です。
- Netlify は `main` ブランチへの push をトリガーに `npm run build` を実行し、`dist` を公開します。
- 本番 URL は `https://tokyotc.com` です。Netlify 側は `ttc-website.netlify.app` です。
- `/Users/hkonishi/Documents/New project/ttc-retro-ab` は制作・検証用の素材置き場として参照することがありますが、本番へ push する正本ではありません。
- ブラウザで `file:///Users/hkonishi/Documents/New%20project/ttc-retro-ab/...` を見ている場合でも、本番反映作業は必ず `/Users/hkonishi/Projects/tokyotc-website` 側で行います。

## 2. リポジトリ構造の要点

- トップページは Vite + React の `src/App.jsx` が中心です。
- Vite エントリは `index.html`、React エントリは `src/main.jsx` です。
- 静的サブページは `public/` 配下に置き、Vite build 後に `dist/` へコピーされます。
- ルーティングライブラリはありません。トップは React の縦スクロール型、サブページは静的 HTML です。
- Tailwind は v3 系で運用します。v4 へ勝手に上げないでください。
- `package-lock.json` は手動編集しません。依存追加が必要な場合だけ npm に生成させます。

## 3. 体験メニューの配置

体験メニューは `public/experience/` 配下が本番正本です。

- 体験メニュートップ: `public/experience/index.html`
- アマネム個別: `public/experience/amanemu/index.html`
- Dialog in the Dark 外苑前: `public/experience/dialog-in-the-dark-gaien/index.html`
- Dialog in the Dark 竹芝: `public/experience/dialog-in-the-dark-takeshiba/index.html`
- ロードバイク: `public/experience/road-bike/index.html`
- 東京都現代美術館と100本のスプーン: `public/experience/mot-family-day/index.html`

各個別ページの画像は、原則としてそのページ配下の `assets/` に置きます。体験メニュートップで使う共通画像は `public/experience/assets/` に置きます。

制作・検証用の `ttc-retro-ab` から移植する場合は、以下を必ず確認します。

- `file:///Users/...` のローカル参照が残っていないこと
- `../../assets/...` など検証用相対パスを本番配置に合わせて直していること
- 画像を本番リポジトリ側へコピーし、参照パスが 200 で開けること
- トップカードと個別ページの画像配置を分けていること

## 4. 現在の体験メニュー方針

体験メニューの思想は、旧方針の「見抜く / 組み替える / 渡す」から、一般読者向けの「気づく / 変える / つなぐ」に移行しています。

- 世界観: 扉ではなく、種。
- トーン: 教える、導く、評価するではなく、共有する、気づく、育つ、つながる。
- 避ける表現: 説教、正解の提示、上から目線、「すべき」。
- 残したい印象: 「教えられた」ではなく、「なんだか少しやってみたくなった」。
- 高級体験だけでなく、庶民的、再現可能、低コスト、誰でも実践できる体験も重要な対象です。
- 読者が「素敵だな」だけで終わらず、「今度やってみようかな」と思えることを重視します。

## 5. デザイン方針

- トップページ `src/App.jsx` はネイビー `#0B1F3A`、ゴールド `#D8B46A` / `#B28A36`、ベージュ `#F7F3EA` を中心にしたサンセリフ系です。
- 静的サブページはクリーム系・明朝体の warm / retro 系です。現状では2系統を意図的に共存させています。勝手に統一しないでください。
- 体験メニュー個別ページは、既存ページの濃紺・金・明朝系のエディトリアルな調子を基準にします。ただし内容が日常寄りの場合は、過度に高級感を出しすぎないよう調整します。
- モバイルでは横スクロール、見出しの不自然な折れ、画像の見切れ、固定ヘッダーによるアンカー隠れを必ず確認します。

## 6. 共同作業時の競合防止

- Codex と Claude Code / Diane に同じ編集作業を同時に頼まないでください。片方が作業中のとき、もう片方はレビュー・相談だけにします。
- 作業前に `pwd` で `/Users/hkonishi/Projects/tokyotc-website` にいることを確認します。
- 作業前に `git status --short --branch` を確認し、未コミット変更と未 push コミットを把握します。
- 自分が触っていない変更を戻さないでください。
- 別エージェントの作業内容が不明な場合は、まず対象ファイルを読み、差分を確認してから編集します。
- 本番へ反映する作業、push 前、または他者作業と競合しそうな作業では `git pull --rebase origin main` を使って同期します。
- force push は禁止です。

## 7. 標準ワークフロー

通常の本番反映作業は次の順序で進めます。

1. 依頼内容を理解する。曖昧でリスクがある場合だけ簡潔に確認する。
2. `pwd` と `git status --short --branch` を確認する。
3. 必要に応じて `git pull --rebase origin main` で最新化する。
4. 対象ファイルと画像配置を確認する。
5. HTML / CSS / React / 画像を編集する。
6. `npm run build` を実行する。
7. 必要に応じて `npm run preview` でローカル確認する。
8. 公開文言・既存ページ・大きなレイアウト変更・push を伴う場合は、必要に応じて差分や確認結果を共有し、承認を取る。
9. ユーザーがコミット・push・本番反映を求めている場合は、コミット前に再度 `git pull --rebase origin main` を実行し、push する。
10. 完了時に変更内容、確認結果、反映 URL を伝える。

ローカルビルドが失敗している状態で push しないでください。

## 8. 新規静的ページ追加の基本形

新しい静的ページは原則として `public/<slug>/index.html` または体験メニューなら `public/experience/<slug>/index.html` に置きます。

生成 HTML を移植するときは、特に以下を除去・修正します。

- `file:///Users/...` のローカルリンク
- `<!-- saved from url=... -->` の保存元コメント
- `preview-note` など掲載検討用バナー
- 検証用フォルダへの相対パス
- base64 で肥大化した画像。新規追加では外部ファイル参照を推奨します。

トップページのサービスカードに接続する場合は、`src/App.jsx` の `services` 配列に `href` を追加するのが既存パターンです。体験メニューの場合は `public/experience/index.html` のカード構成に合わせます。

## 9. 画像の扱い

- iPhone 写真や生成画像は、そのまま数 MB で置かず、Web 用に最適化します。
- 目安として横幅 1600〜2400px 程度、JPEG quality 82〜86 程度に圧縮します。
- 1MB を大きく超える画像は、必要性を確認して再圧縮を検討します。
- ページ固有画像はページ配下の `assets/`、体験メニュートップ共通画像は `public/experience/assets/` に置きます。
- ロゴは現状、外部 CDN、ローカル PNG、base64 が混在しています。勝手に統一・置換しないでください。
- AI 生成画像の透かしや不自然な文字に気づいたら報告します。

## 10. 既知の負債と注意点

- トップページのモバイルナビは `hidden md:flex` で、ハンバーガー未実装です。
- `index.html` の `<title>` や `lang` などは過去資料で既知の負債として指摘されています。現在のファイルを確認してから扱ってください。
- フッターの「勧誘方針」「プライバシーポリシー」「FD宣言」は、時期によって未接続または改善途中の可能性があります。
- `src/App.css` やテンプレート由来アセットは未使用の可能性があります。依頼なく整理しないでください。
- `dist/` はビルド生成物です。通常はソース側を編集し、ビルドで生成内容を確認します。
- `node_modules/`、`.git/` 内部、DNS 設定、メール関連レコード、外部 CDN ロゴ URLは勝手に触らないでください。

## 11. 品質チェックの最低ライン

本番反映前に以下を確認します。

- `npm run build` がエラーなく完了すること
- 新規ページなら `dist/<slug>/index.html` または `dist/experience/<slug>/index.html` が生成されていること
- プレビューで対象ページが 200 で開けること
- 画像が 404 になっていないこと
- デスクトップとモバイルで大きな崩れや横スクロールがないこと
- 変更範囲外のファイルに副作用がないこと
- 公開文言や大きな見た目の変更は、必要に応じてユーザー確認を取っていること

## 12. 承認ゲート

以下は差分や確認結果を共有し、ユーザーの OK をもらってから push します。

- 既存公開ページの文言変更
- 既存公開ページの大きな配色・レイアウト変更
- 新規ページを本公開導線へ接続する作業
- 新しい依存パッケージ追加
- ロゴ変更
- DNS / Netlify 設定変更

純粋なローカル作業、未公開ページの追加、依頼で明示された軽微修正は、確認なしで進めて構いません。ただし push や本番反映はユーザーの意図を確認してから行います。

## 13. コミットと push

コミットメッセージは Conventional Commits 風にします。

例:

```text
feat: Add sarue park restaurant experience page

- Add the new static experience page and optimized assets.
- Link it from the experience menu index.

Co-Authored-By: Codex <noreply@openai.com>
```

push 前には必ず `git pull --rebase origin main` を実行します。push 後は通常 2〜3分、最大5分程度で Netlify に反映されます。

## 14. よく使うコマンド

```bash
pwd
git status --short --branch
git pull --rebase origin main
npm run build
npm run preview
```

画像最適化の例:

```bash
sips -Z 1600 -s formatOptions 82 input.jpg --out output.jpg
sips -s format jpeg -s formatOptions 82 input.png --out output.jpg
```

## 15. コミュニケーション

- ユーザーとのやり取りは日本語で行います。
- 推測で進めると危険なときだけ、短く確認します。
- 作業中は、何を確認して何を変えるのかを簡潔に共有します。
- 完了報告では、変更ファイル、確認したこと、未実施のこと、反映 URL を端的に伝えます。
- 本番反映後は、必要に応じて `Cmd + Shift + R` で強制リロードして確認するよう案内します。
