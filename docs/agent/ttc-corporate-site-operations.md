# TTC コーポレートサイト 運用仕様書（Codex 引き継ぎ用）

> 東京トータルコンサルティング（TTC）のコーポレートサイト `tokyotc.com` の更新・拡張作業を、
> ローカル編集 → GitHub `main` への push → Netlify 自動デプロイの流れで行う役割の手引き。
>
> 既存ロールはダイアン（Claude Sonnet, Claude Code 内）が担当。本書は **Codex（GPT 系）と分担運用するための仕様書**。
> Codex は本書に従って、ダイアンと同じ品質・同じ流儀で作業すること。

---

## 0. このサイトの基本情報

| 項目 | 値 |
|------|----|
| 本番 URL | https://tokyotc.com |
| Netlify | https://app.netlify.com/projects/ttc-website |
| GitHub | https://github.com/TTC-website/tokyotc-website |
| 既定ブランチ | `main`（feature ブランチは原則使わず main へ直 push） |
| ローカルパス | `~/Projects/tokyotc-website` |
| デプロイ | GitHub main push をトリガに Netlify が `npm run build` → `dist/` を公開 |
| 反映時間 | 通常 2〜3 分（最大 5 分） |
| 認証 | SSH（`git@github.com:TTC-website/tokyotc-website.git`）。SSH キーは小西さんの Mac に配置済み |
| 言語 | 小西さんとのやり取りは **日本語**。コード／コミットメッセージは英語可 |

---

## 1. 役割

小西さん（オーナー）と山上さん（社員）から、日本語の自然言語で「〇〇を変更してください」「〇〇ページを追加して」と依頼を受け、以下を一貫して行う：

1. 依頼内容を正確に理解（不明点は聞き返す）
2. リポジトリの最新状態を取得して編集
3. ローカルビルドとプレビューで品質確認
4. 影響が大きい変更は **差分を見せて承認を取る**
5. Conventional な commit message を付けて push
6. ユーザーに反映時間と確認 URL を伝える

「とりあえずこちらと判断した」を**しない**。迷ったら止まり、確認する。

---

## 2. 環境前提

- macOS（小西さんの Mac で作業）
- Node.js 18+ / npm
- 標準ツール: `sips`（画像最適化）、`python3`、`git`、`grep`/`sed`
- ブラウザでの目視確認（Codex CLI なら `npm run preview` → http://localhost:4173 へ手動でアクセス）

リポジトリは既に clone 済み・依存関係インストール済みである前提。新規 clone する場合：

```bash
mkdir -p ~/Projects && cd ~/Projects
git clone git@github.com:TTC-website/tokyotc-website.git
cd tokyotc-website && npm install
```

---

## 3. 共同編集ルール（最重要）

複数の作業者（小西さん／山上さん／ダイアン／Codex）が同じ `main` に push する。**作業前後の同期を必ず守ること**。

### 鉄則

```bash
# 作業開始時：必ず最初に
cd ~/Projects/tokyotc-website
git pull --rebase origin main

# push の直前にも：
git pull --rebase origin main
git push origin main
```

- `pull --rebase` を**毎回**実施。push 拒否が出たら、まず pull してから再 push
- 同じファイルの同じ行を別作業者と編集すると merge conflict。**競合リスクの低い「新規追加」を優先**し、既存ファイルの編集はできるだけ局所化
- ロックファイル（`package-lock.json`）の手動編集は禁止（`npm install` で生成）

### コンフリクト時

- 自分の変更を一時退避（`git stash`）→ `pull` → 退避を適用 → 差分を確認して解決
- 解決が不確実なら **強引な force-push を絶対にしない**。小西さんに状況を共有する

---

## 4. 標準ワークフロー（毎回これを回す）

```
0. 依頼を理解（曖昧なら質問）
1. cd ~/Projects/tokyotc-website && git pull --rebase origin main
2. 編集
3. npm run build （ローカルでエラーが出ないことを必ず確認）
4. プレビュー（preview server / Chrome / Claude Preview MCP）で目視確認
5. 影響大なら差分を見せて「ok」をもらう（後述の承認ゲート参照）
6. git add → git commit → git pull --rebase → git push
7. 反映時間（2〜3分）と確認URLをユーザーに伝える
```

ローカルビルドが**成功するまで push しない**（Netlify のデプロイ失敗履歴を増やさないため）。

---

## 5. リポジトリ構造の要点

```
.
├── index.html                # Vite エントリ（<title>/<lang> は未調整・既知の負債）
├── src/
│   ├── main.jsx              # React エントリ
│   ├── App.jsx               # ★ トップページ全体。実質これ1枚
│   ├── index.css             # Tailwind ディレクティブ＋body 背景
│   └── App.css               # 未 import（テンプレ残骸）
├── public/
│   ├── favicon.svg
│   ├── salon/                # 静的サブページ（実 HTML+CSS）
│   ├── inheritance/          # 同上
│   ├── insurance/            # 同上
│   ├── asset/                # 同上
│   ├── property/             # 同上
│   └── privacy/              # 同上
├── tailwind.config.js        # Tailwind v3 / theme.extend は空
├── vite.config.js            # 最小構成
├── netlify.toml              # build = "npm run build", publish = "dist"
└── _diane_handoff/site_audit.md   # 全体監査レポート（先に読むと早い）
```

### デザイン系統

| 範囲 | デザイン |
|------|---------|
| トップページ（App.jsx） | ネイビー `#0B1F3A` × ゴールド `#D8B46A` / `#B28A36` × ベージュ `#F7F3EA`。サンセリフ |
| 静的サブページ（/salon/, /inheritance/, /insurance/, /asset/, /property/） | クリーム系・明朝体（warm / retro） |

**意図的に2系統を共存**させている。統一は今のところしない方針。

### Tailwind の使い方

- `theme.extend` は空。**色やフォントはユーティリティの任意値記法**（例: `bg-[#0B1F3A]` `text-[#D8B46A]`）でハードコード
- Tailwind は **v3 固定**。v4 を入れない（`tailwindcss@3` を指定して install）

---

## 6. ページ追加の確立パターン（重要）

salon / inheritance / insurance / asset / property は同じ手順で追加した。新しい静的ページ依頼を受けたら以下を踏襲する：

### 6-1. 入力ファイルの典型

- 受け取る HTML は ChatGPT 等で生成されたもの
- 中に以下が混入していることが多い：
  - プレビュー用バナー：`<div class="preview-note">XXX 専用ページ / 掲載検討用</div>`
  - 保存元コメント：`<!-- saved from url=(NNNN)file:///Users/.../something.html -->`
  - `file:///Users/hkonishi/Documents/New%20project/ttc-retro-ab/<page>.html#<anchor>` 形式のローカルリンク
  - `file:///.../salon.html` への参照
- 画像は base64 で埋め込み済みのことが多い（自己完結）。別フォルダで添付されたら同フォルダ配下にコピー

### 6-2. 標準的な置換コマンド

```bash
SLUG="<new-slug>"               # 例: insurance, asset, property
SRC_HTML="<受け取った.html>"
PREFIX='file:///Users/hkonishi/Documents/New%20project/ttc-retro-ab/'

mkdir -p public/$SLUG
cp "$SRC_HTML" public/$SLUG/index.html
cd public/$SLUG

# file:// リンクを修正
sed -i '' "s|${PREFIX}<source>.html#reserve|#reserve|g" index.html
sed -i '' "s|${PREFIX}<source>.html#story-reader|#story-reader|g" index.html  # 該当する場合
sed -i '' "s|${PREFIX}salon.html|/salon/|g" index.html

# バナーと保存元コメントを削除
sed -i '' '/class="preview-note"/d' index.html
sed -i '' '/<!-- saved from url=/d' index.html

# 確認
grep -c "file://" index.html        # 0 が期待
grep -c '<div class="preview-note"' index.html  # 0 が期待
```

> `grep -c` の戻り値が 0 だと exit 1 になる。シェル連鎖は `||  true` で守るか別々に実行する。

### 6-3. トップページへの接続

`src/App.jsx` の `services` 配列の該当サービスオブジェクトに `href: "/<slug>/"` を**追加するだけ**。レンダリング側は `service.href` の有無で「詳しく見る →」ボタン（ゴールドの丸枠 → hover で塗りつぶし）を自動表示する。

```jsx
{
  icon: "<insurance|asset|will|realestate>",
  title: "<カードタイトル>",
  text: "<本文>",
  href: "/<slug>/",   // ← これを足す
},
```

トップのナビ／フッター／その他に手を入れる必要は通常ない。

### 6-4. ビルド・確認・push

```bash
npm run build                   # エラーなしを確認
npm run preview                 # http://localhost:4173/<slug>/ で目視
# OK なら：
git add public/$SLUG src/App.jsx
git commit -m "feat: Add ... page and link from service card"
git pull --rebase origin main && git push origin main
```

ユーザーに「2〜3分後に `https://tokyotc.com/<slug>/` で反映されます」と伝える。

---

## 7. 画像の扱い

### 最適化（必須）

iPhone 写真や生成 AI 画像は数 MB あるので、**そのまま埋め込まない**。`sips` で Web 用に変換：

```bash
# 横幅 1600px 上限、quality 82 程度
sips -Z 1600 -s formatOptions 82 ~/Downloads/input.jpg --out output.jpg

# PNG → JPEG（漫画イラストなど）
sips -s format jpeg -s formatOptions 82 ~/Downloads/input.png --out output.jpg

# HEIC（iPhone）→ JPEG
sips -s format jpeg ~/Downloads/input.heic --out output.jpg
```

### 配置

- 該当ページの隣接フォルダ（例: `public/salon/`, `public/inheritance/`）
- 命名は内容が分かる英語/数字（`story-01.jpg`, `salon-screen.jpg` 等）
- 1MB を超える画像はリサイズ／圧縮を再検討

### base64 埋め込みについて

- 既存の静的ページは画像を base64 で持っているものがある（自己完結のため可）
- ただしファイルが 2MB を超えると：
  - `Read` ツールで読めない（256KB 上限）
  - 修正が `sed` ベースになる
  - HTML が肥大化
- **新規追加では原則として外部ファイル参照を推奨**

### ロゴについて（要注意）

- トップページのロゴ: 外部 Peraichi CDN URL（`https://cdn.peraichi.com/.../original.png`）を直接参照
- salon ページのロゴ: ローカル `./logo.png`
- inheritance / insurance / asset / property のロゴ: HTML 内に base64 で埋め込み
- **3経路に分散している**。統一されていないことを認識して触ること

---

## 8. コミットメッセージ規約

### フォーマット

- 1行目: Conventional Commits 風（`feat:`, `fix:`, `style:`, `chore:`, `refactor:`, `docs:`）。70 文字以内
- 本文（任意）: 何を・なぜを 2〜4 行で
- 末尾に `Co-Authored-By:` 行

### 例

```
feat: Add inheritance page and link from service card

- Add /inheritance/ static page (warm cream design, self-contained).
- Add a "詳しく見る →" link on the will service card on the home page.

Co-Authored-By: <Your model identifier> <noreply@example.com>
```

**Co-Authored-By はあなた（Codex）自身の識別子に変えること**。  
（参考: ダイアンは `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` を使用）

### HEREDOC での渡し方（改行を保つため）

```bash
git commit -m "$(cat <<'EOF'
feat: <one-line summary>

<body lines>

Co-Authored-By: <Codex identifier> <noreply@openai.com>
EOF
)"
```

---

## 9. 承認ゲート（push 前に必ず確認を取る）

以下の変更は **差分を見せて「ok」をもらってから push** すること：

- 既存ファイルの上書き（特に `src/App.jsx`、`public/*/index.html`）
- 公開される文言（コピー）の変更
- 配色／レイアウトの大幅変更
- 新規ページの**本公開**（メインナビに載せる場合）
- 新しい依存パッケージの追加
- ロゴ変更
- DNS 設定の変更（このタスクで通常は触らない）

**確認なしで進めて良いもの:**

- 純粋な追加（新規ファイル、未公開の隠しページ）
- 受け取った仕様どおりの軽微な修正（typo 等で依頼に明示）
- ローカルプレビュー段階（push しないため）

---

## 10. 触ってはいけないもの

- 顧客の個人情報を含むファイル（現状リポジトリ内には無いが、念のため）
- `.git/` の内部
- `package-lock.json` の手動編集
- DNS の MX レコード（メール）、TXT レコード（SPF/DKIM/DMARC、Google 認証）
- 外部 CDN のロゴ URL（`companyLogo`）を勝手に消す
- 既存の commit を rebase でつぶす／force push する

---

## 11. 品質チェックの最低ライン

push 前に以下を満たすこと：

1. `npm run build` がエラーなく完了する
2. `dist/` 配下に変更が反映されている
3. 新規ページなら `dist/<slug>/index.html` が存在する
4. プレビューサーバ（`npm run preview`）で当該ページが 200 で開ける
5. 視覚的な大変更ならスクリーンショットで確認
6. 影響範囲を超える副作用がないか（grep で意図しない箇所が変わっていないか）

---

## 12. 既知の落とし穴

- **Tailwind v3 固定**。`npm install -D tailwindcss` だけだと v4 が入ってビルドが壊れる。必ず `tailwindcss@3` を指定
- React 19 / Vite 8 という比較的新しいバージョン
- `index.html` の `<title>tokyotc-website</title>` `<html lang="en">` は未調整（既知の負債）
- フッターの「勧誘方針」「プライバシーポリシー」「FD宣言」は `href="#"` のダミー。`/privacy/` ページは追加済みだがリンクが未接続（小さな改善候補）
- ローカル PC 上のパスを含む参照（`file:///Users/...`）が生成 AI 由来の HTML に残ることがある。**必ず除去**
- 大きな HTML（2MB 超）は `Read` ツールで読めない。`sed` / `python` / `grep` で扱う
- 受け取った HTML の `<div class="preview-note">` 表示バナーの削除を忘れない
- モバイル幅でナビが `hidden md:flex` のためメニューが消える（ハンバーガー未実装＝既知の負債）
- AI 生成画像には透かしが入ることがある（Gemini 系の "ai" マーク等）。気付いたら小西さんに報告

---

## 13. コミュニケーション規約

- 言語：**日本語**（敬体）
- トーン：丁寧だが端的に。長い前置きや過剰な共感は避ける
- 推測で進めない。迷ったら 1 回だけ簡潔に質問
- 反映後はユーザーに `Cmd + Shift + R`（強制リロード）で確認を促す
- スクリーンショットや実測値で「実際に動く状態」を確認した上で完了報告
- 「やりました」「完璧です」だけでなく、**何をどう変えたか・どこに反映されるか**を伝える

---

## 14. 役割分担の想定

ダイアン（Claude / Claude Code 上）と Codex で重複しないよう、以下のような分担が考えられる（小西さんの指示に従う）：

| 役割 | 候補 |
|------|------|
| 文言の細かい校正・既存ページの軽微修正 | Codex |
| 新規ページ追加・大規模な構造変更 | ダイアン or Codex |
| 画像差し替え・最適化 | どちらも可 |
| デプロイ確認・トラブルシュート | どちらも可 |

**重要：同時に同じファイルを触らないよう、作業開始時に「これから〇〇を触ります」と一言宣言する**運用が安全。
複数人での並行作業中は `pull --rebase` を作業前後に必ず実施。

---

## 15. よく使うコマンド早見表

```bash
# 作業開始（必ず）
cd ~/Projects/tokyotc-website && git pull --rebase origin main

# ビルド
npm run build

# プレビュー
npm run preview                 # http://localhost:4173

# 画像最適化
sips -Z 1600 -s formatOptions 82 ~/Downloads/input.jpg --out output.jpg

# 静的ページのクリーンアップ（テンプレ）
SLUG="<slug>"
PREFIX='file:///Users/hkonishi/Documents/New%20project/ttc-retro-ab/'
sed -i '' "s|${PREFIX}<page>.html#reserve|#reserve|g" public/$SLUG/index.html
sed -i '' "s|${PREFIX}salon.html|/salon/|g" public/$SLUG/index.html
sed -i '' '/class="preview-note"/d' public/$SLUG/index.html
sed -i '' '/<!-- saved from url=/d' public/$SLUG/index.html

# コミット（HEREDOC）
git add <files>
git commit -m "$(cat <<'EOF'
feat: <summary>

<body>

Co-Authored-By: <Codex id> <noreply@openai.com>
EOF
)"

# Push（必ず rebase してから）
git pull --rebase origin main && git push origin main

# 反映確認 URL
echo "https://tokyotc.com/$SLUG/ で 2〜3分後に反映されます"
```

---

## 16. 参考ドキュメント（同リポジトリ内）

- `_diane_handoff/site_audit.md` — リポジトリ全体の調査レポート（**まず読むこと**）
- `ホームページ更新ガイド.md` — 小西さん／山上さん向けの利用ガイド
- `山上さん_セットアップガイド.md` — 山上さんの初回環境構築手順
- `ONBOARDING.md` — Claude Code の Onboarding Guide 用

---

## 付録：チェックリスト（push 直前）

- [ ] `git pull --rebase origin main` を直前に実行した
- [ ] `npm run build` がエラーなく完了
- [ ] 新規/変更したページをプレビューで目視確認
- [ ] 影響範囲外のファイルに副作用がない（`git status` を見た）
- [ ] 公開文言を変更した場合、ユーザーから「ok」をもらった
- [ ] commit メッセージが Conventional 形式で Co-Authored-By を含む
- [ ] `git push origin main` が成功
- [ ] ユーザーに反映時間と URL を伝えた

---

**最終更新**: 2026-05-26 / 担当: Diane（Claude Sonnet, Claude Code）  
本書は運用変更に応じて随時更新すること。
