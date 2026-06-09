# tokyotc-website 現状調査レポート（ハンドオフ用）

> 東京トータルコンサルティング（TTC）コーポレートサイト
> 本番URL: https://tokyotc.com / Netlify: ttc-website.netlify.app
> GitHub: TTC-website/tokyotc-website
> 生成日: 2026-05-26

このレポートは、別チャットの Claude にリポジトリの現状を引き渡すための調査結果です。機密情報（APIキー・顧客個人情報等）は検出されませんでした（コード内の電話番号・住所・公式LINE URLは公開済みの事業者情報です）。

---

## 1. プロジェクト構成

### ディレクトリツリー（`tree -L 3 -I 'node_modules|dist|build|.git'`）

```
.
├── .claude/
│   └── launch.json
├── ONBOARDING.md
├── README.md                 （Vite テンプレートの初期 README のまま）
├── download.html             （ガイド配布用の一時ファイル・未コミット）
├── eslint.config.js
├── index.html                （Vite エントリ HTML）
├── netlify.toml
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── ホームページ更新ガイド.md       （運用ドキュメント・未コミット）
├── 山上さん_セットアップガイド.md   （運用ドキュメント・未コミット）
├── public/
│   ├── favicon.svg
│   ├── icons.svg             （未使用の可能性大）
│   ├── inheritance/          （静的ページ：相続・遺言・任意後見）
│   │   ├── index.html
│   │   ├── story-cover.jpg
│   │   └── story-01.jpg 〜 story-10.jpg
│   └── salon/                （静的ページ：相談サロン）
│       ├── index.html
│       ├── salon.css
│       ├── logo.png
│       ├── archive-lounge-photo-web.jpg
│       ├── customer-maeda.jpg
│       └── salon-screen.jpg
└── src/
    ├── App.jsx               （メインページ全体。実質これ1枚で構成）
    ├── App.css               （未 import の可能性大／テンプレート残骸）
    ├── index.css             （グローバル CSS・Tailwind 読込）
    ├── main.jsx              （React エントリ）
    └── assets/
        ├── hero.png          （未使用）
        ├── react.svg         （未使用・テンプレート残骸）
        └── vite.svg          （未使用・テンプレート残骸）
```

### package.json 抜粋

- **name**: `tokyotc-website`
- **version**: `0.0.0`
- **private**: true / **type**: module
- **scripts**:
  - `dev`: `vite`
  - `build`: `vite build`
  - `lint`: `eslint .`
  - `preview`: `vite preview`
- **dependencies**:
  - `react` ^19.2.5
  - `react-dom` ^19.2.5
- **devDependencies**:
  - `vite` ^8.0.10
  - `@vitejs/plugin-react` ^6.0.1
  - `tailwindcss` ^3.4.19 / `postcss` ^8.5.14 / `autoprefixer` ^10.5.0
  - `eslint` ^10.2.1 / `@eslint/js` ^10.0.1 / `eslint-plugin-react-hooks` ^7.1.1 / `eslint-plugin-react-refresh` ^0.5.2 / `globals` ^17.5.0
  - `@types/react` ^19.2.14 / `@types/react-dom` ^19.2.3

### ビルドツール判定

- **Vite + React**（CRA でも Next.js でもない）。React 19 / Vite 8。
- **ルーティングライブラリなし**（react-router 等の依存なし）。メインページは単一 `App.jsx` のセクションスクロール型。サブページは `public/` 配下の静的 HTML。
- **設定ファイルの要点**:
  - `vite.config.js`: `@vitejs/plugin-react` を読み込むだけの最小構成。
    ```js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    export default defineConfig({ plugins: [react()] })
    ```
  - `postcss.config.js`: `tailwindcss` + `autoprefixer`。
  - `tailwind.config.js`: 後述（セクション2）。
  - **注意**: Tailwind は v3 系（3.4.19）。過去に v4 が入りビルド失敗 → v3 へ固定した経緯あり。v4 へ上げる場合は構文変更が必要。

---

## 2. デザインシステム

### tailwind.config.js（全文）

```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- **theme.extend は空**。カスタムカラー / フォント / spacing / breakpoint の **theme 拡張定義は一切なし**。
- 色やフォントはすべて **Tailwind のユーティリティに直接ハードコード**（任意値 `[#xxxxxx]` 記法）で表現されている。

### 実際に使われている色（App.jsx 内の任意値クラスから抽出）

| 役割 | 値 | 用途 |
|------|-----|------|
| ネイビー（主） | `#0B1F3A` | ヘッダー / Hero / Flow / Contact 背景・見出し文字 |
| ネイビー（濃） | `#071529` | フッター背景 |
| ネイビー（hover） | `#183B68` | ボタン hover |
| ゴールド（明） | `#D8B46A` | アクセント・CTA ボタン・kicker |
| ゴールド（hover） | `#e5c77d` | ゴールドボタン hover |
| ゴールド（濃） | `#B28A36` | 見出し上の小ラベル・リンク |
| ベージュ（背景） | `#F7F3EA` | ページ全体の地色・カード背景 |
| ベージュ（補助） | `#E5D3A2` | Hero 内グラデーション |
| slate 系 | `slate-100/600/700/900` | 本文テキスト |

- **フォントファミリーのカスタム指定なし**（Tailwind デフォルトのサンセリフ＝OS標準フォント）。
- **重要**: 静的サブページ（salon / inheritance）は **別のデザインシステム**（明朝体・クリーム系）を採用。後述。

### グローバル CSS

**`src/index.css`（全文）**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body { height: 100%; }
body { @apply bg-slate-100 text-slate-900; }
a { @apply text-inherit; }
```
※ `body` の地色 `bg-slate-100` は指定されているが、`App.jsx` のルート要素が `bg-[#F7F3EA]` で上書きするため実画面はベージュ。

**`src/App.css`（184行）**: `.counter` `.hero` 等、Vite + React テンプレートの初期スタイル。**`App.jsx` から import されていない**ため、現状デッドコード（テンプレート残骸）。

### Web フォントの読み込み

- **メインページ（Vite）**: Web フォント読み込みなし（`index.html` に link/@import なし）。
- **静的サブページ**: salon / inheritance とも CSS 変数で OS フォントを指定（`Hiragino Mincho ProN`, `Yu Mincho`, `Noto Serif JP` 等のフォールバック）。外部フォント CDN は未使用。

---

## 3. ルーティングとページ構成

ルーターライブラリは不使用。構成は以下の3つ。

| パス | 種別 | 役割（1行） |
|------|------|------------|
| `/` | React SPA（`src/App.jsx`） | TTC のトップページ。会社理念・サービス・流れ・サロン紹介・問い合わせを縦スクロールで提示 |
| `/salon/` | 静的 HTML（`public/salon/index.html`） | 相談サロンの紹介ページ（実写真・お客様の声）。明朝体の温かいデザイン |
| `/inheritance/` | 静的 HTML（`public/inheritance/index.html`） | 相続・遺言・任意後見の専用LP。漫画ストーリー「誇りの代償」を含む |

トップページ内アンカー: `#concept` / `#service` / `#flow` / `#contact`。

---

## 4. 各ページのテキスト内容

### 4-1. トップページ `/`（src/App.jsx）

**見出し階層**
- `h2`（Hero）: 「保険・相続・不動産を横断し、**本当の安心**を手に入れる。」
  - kicker: `TOTAL LIFE CONSULTING` / バッジ: 「お客様のための総合相談パートナー」
- `h3`（#concept, OUR MISSION）: 「知識と考え方で、人生と未来を豊かにする。」
- `h3`（WHY CHOOSE US）: 「選ばれる理由」
- `h3`（#service, SERVICE）: 「相談できること」
- `h3`（#flow, CONSULTING FLOW）: 「ご相談の流れ」
- `h3`（CONSULTATION SALON）: 「相談に来るというより、お話をしに来る気持ちで。」
- `h3`（OUR VALUES）: 「私たちが大切にしていること」
- `h3`（#contact, CONTACT）: 「まずは公式LINEからご相談ください」
  - `h4`（RESERVATION）: 「相談の第一歩を、もっと気軽に。」

**本文の主要パラグラフ（要約）**
- Hero: 「保険を売るだけの会社ではなく、将来のお金・相続・資産形成・事業承継に不安を残さないための総合相談パートナー」である旨。
- Hero 側カード: `CONSULTING THEME` / お客様の未来を守る設計 / `Total Life Design` / 「保険・相続・不動産・老後資金をひとつの地図に」。
  - 強み4点: 保険だけで終わらない総合相談 / 一人ひとりに寄り添う実務感覚 / 相続・任意後見・不動産まで横断 / 公式LINE・オンライン相談対応。
- Mission: 「所得の多寡だけで幸せが決まるのではなく、知識と考え方で人生の選択肢は広がる」旨。
- 選ばれる理由（4カード）: 総合設計 / 安心設計 / 専門家連携 / 実行支援。
- サービス（4カード）: 保険相談・事業承継 / 資産形成・老後資金 / **遺言・相続・任意後見（→ /inheritance/ へ「詳しく見る」リンクあり）** / 不動産・資産承継。
- 流れ（4ステップ）: 01 初回相談 / 02 見える化 / 03 ご提案 / 04 実行支援。
- サロン紹介: お客様の声（前田珠里さん・不動産業/20代）を1点引用し、`/salon/` へ誘導。
- 価値観（3点）: まじめに、ちゃんと。/ 知識と考え方を届ける。/ 共に成長する。

**CTA ボタンと遷移先**
| 文言 | 遷移先 |
|------|--------|
| 公式LINEで相談する | `#contact` |
| 相談内容を見る | `#service` |
| 詳しく見る →（サービスカード内） | `/inheritance/` |
| サロンの様子をもっと見る → | `/salon/` |
| 公式LINE →（Contact） | `https://lin.ee/tT6CaJn` |
| 0120-900-984 | `tel:0120900984` |
| Google Mapで開く | `https://maps.app.goo.gl/WudMb6uoqz1r4xkBA` |

**フォーム項目**: なし（問い合わせは公式LINE・電話・地図リンクのみ）。

### 4-2. `/salon/`（相談サロン）

- `title`: 相談サロンのご案内 | 東京トータルコンサルティング
- `h1`: 相談サロンのご案内（kicker: `Consultation Salon`）
- `h2`: はじめてのご相談も、安心してお話しいただける場所に。/ サロンでご相談いただけること / 相談に来るというより、お話をしに来る気持ちで。/ お客様の声 / まずはお気軽に、お話をお聞かせください。
- `h3`: 今の状況を整理 / 選択肢を分かりやすく / 次の一歩まで支援 / 前田 珠里さん
- 主要内容: サロンの雰囲気紹介、提供内容3点、面談空間の特長、お客様の声（前田珠里さん）全文掲載＋免責注記、アクセス（森下駅A5出口 徒歩1分）。
- CTA: 公式サイトへ(`https://tokyotc.com/`) / 公式LINEで予約相談・公式LINEで相談予約(`https://lin.ee/tT6CaJn`) / お電話でのご予約 0120-900-984(`tel:0120900984`) / Google Mapで確認する(`https://maps.app.goo.gl/...`) / 相談を予約する(`#reserve`)。
- フォーム項目: なし。

### 4-3. `/inheritance/`（相続・遺言・任意後見）

- `title`: 相続・遺言・任意後見のご相談 | 東京トータルコンサルティング
- `h1`: 家族への想いを、きちんと形に。（kicker: `Inheritance & Future Planning`）
- `h2`: 言葉だけでは、伝わらないことがあります。/ 誇りの代償：書かれなかった契約書 / ご相談いただけること / お気持ちを伺うことから始めます。/ ご家族の大切なお話を、落ち着いた場所で。/ よくあるご質問 / 家族の安心について、いま話してみませんか。
- `h3`: 相続の整理 / 遺言書作成サポート / 任意後見・将来の備え / 専門家との連携
- 主要内容: 任意後見・相続の重要性を訴求 → 漫画ストーリー「誇りの代償：書かれなかった契約書」（全10ページ＋表紙、ボタン押下で展開）→ 相談内容4点 → 相談の流れ → サロン紹介（/salon/ へ相互リンク）→ Q&A → 予約導線。
- CTA: 相談の第一歩を予約する / 相談を予約する / 相続・遺言・任意後見について相談する（いずれも `#reserve`）/ このストーリーを読む(`#story-reader`) / 相談サロンの様子を見る →(`/salon/`) / 公式LINEで相談予約(`lin.ee/tT6CaJn`) / 0120-900-984(`tel:`) / Google Map。
- フォーム項目: なし。

---

## 5. ナビゲーション

### ヘッダー（トップページ）

固定（sticky）ヘッダー。左にロゴ、右にメニュー（モバイルでは非表示・ハンバーガー未実装）。

| 項目 | リンク先 |
|------|---------|
| 私たちについて | `#concept` |
| 相談できること | `#service` |
| 相談の流れ | `#flow` |
| 公式LINEで相談（ゴールドのボタン） | `#contact` |

> ⚠️ モバイル幅ではナビが `hidden`（`md:flex`）。**ハンバーガーメニュー未実装**のため、スマホではヘッダーのナビゲーションが出ない。

### フッター（トップページ）

- ロゴ（footer サイズ）
- 業務表記: 「生命保険代理業 / 損害保険代理業 / ファイナンシャルプランニング / 遺言書作成サポート」
- リンク3点（**すべて `href="#"` のダミー＝未リンク**）:
  - 勧誘方針 → `#`
  - プライバシーポリシー → `#`
  - FD宣言 → `#`
- 住所・会社情報・SNS リンクはフッターには無し（住所は Contact セクション内に記載: 東京都墨田区立川1-2-8 赤津ビル1F / 森下駅 A5出口 徒歩1分）。SNS リンクは公式LINE のみ。

---

## 6. アセット使用状況

### 画像ファイル一覧（サイズ）

| ファイル | サイズ | 使用箇所 |
|---------|--------|---------|
| `public/favicon.svg` | 9.3K | `index.html` の favicon |
| `public/icons.svg` | 4.9K | **参照箇所なし（未使用の可能性大）** |
| `public/salon/logo.png` | 131K | salon ページのヘッダー / フッター |
| `public/salon/archive-lounge-photo-web.jpg` | 481K | salon ページ＋トップのサロン紹介セクション |
| `public/salon/customer-maeda.jpg` | 33K | salon＋トップのお客様の声（前田氏） |
| `public/salon/salon-screen.jpg` | 367K | salon ページ2段目（大画面ディスプレイ写真） |
| `public/inheritance/story-cover.jpg` | 314K | inheritance 漫画 表紙 |
| `public/inheritance/story-01〜10.jpg` | 191〜417K | inheritance 漫画 各ページ |
| `src/assets/hero.png` | 13K | **参照箇所なし（未使用）** |
| `src/assets/react.svg` | 4.0K | **参照箇所なし（テンプレート残骸）** |
| `src/assets/vite.svg` | 8.5K | **参照箇所なし（テンプレート残骸）** |

### TTC ロゴの使用状況（重要）

ロゴは**3系統が混在**しており、ファイル実体が統一されていない点に注意。

1. **トップページ（App.jsx）**: 外部CDN（Peraichi）URL を直接参照。
   `https://cdn.peraichi.com/.../original.png`
   - 金色＋文字付き（横型）ロゴ。CSS フィルタ（`brightness-[1.55] contrast-[1.12] saturate-[1.18]` + drop-shadow）でネイビー背景上で発色させている。
   - ヘッダー（`h-10 md:h-12`）／フッター（`h-12 md:h-14`）で使用。
   - ⚠️ ローカルにロゴを持たず**外部ホスト依存**。Peraichi 側が消えると表示崩れのリスク。
2. **salon ページ**: ローカル `./logo.png`（131K）を使用。
3. **inheritance ページ**: ロゴを **base64 で HTML に直接埋め込み**（外部ファイルなし）。

> 金/モノクロ・マーク単体/文字付き/横型 の正式なロゴ素材セットはリポジトリ内に整備されていない。現状は「金色・文字付き横型」を CDN／ローカル png／base64 の3経路で使い回している状態。**ロゴ資産の一元管理が今後の課題。**

---

## 7. 未完成箇所

- **TODO / FIXME / console.log**: `src/` `public/` `index.html` を grep した結果 **検出ゼロ**（クリーン）。
- **Lorem ipsum / placeholder テキスト**: 本文には無し。ただし以下は実質プレースホルダ:
  - `index.html`（Vite エントリ）の `<title>` が **`tokyotc-website`** のまま、`<html lang="en">` も英語のまま（→ `lang="ja"` と適切な title・meta description が未設定。SInheritance/Salon の静的ページには title/description あり）。
  - `README.md` が **Vite + React テンプレートの初期内容のまま**（プロジェクト説明未記載）。
- **ダミーリンク**: フッターの「勧誘方針 / プライバシーポリシー / FD宣言」が **すべて `href="#"`**（リンク先ページ未作成）。
- **大きなコメントアウトブロック**: 検出なし。
- **デッド資産**: `src/App.css`（未 import）、`src/assets/{hero.png,react.svg,vite.svg}`、`public/icons.svg`、ルートの `download.html`（ガイド配布用の一時ファイル）が未使用・未整理。
- **未コミットの運用ドキュメント**: `ONBOARDING.md` / `ホームページ更新ガイド.md` / `山上さん_セットアップガイド.md` / `.claude/launch.json` がワークツリーに存在（社内運用向け。サイト本体とは無関係）。
- **モバイルナビ未実装**（セクション5参照）。

---

## 8. デプロイ設定

### netlify.toml（全文）

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

- ビルド: `npm run build`（= `vite build`）、公開ディレクトリ: `dist`。
- リダイレクト / ヘッダ / 環境変数の指定は **なし**。
- `public/salon/` `public/inheritance/` は Vite により `dist/` 配下へそのままコピーされ、`/salon/` `/inheritance/` として配信される。

### 環境変数

- `.env` / `.env.example` は **存在しない**。ビルド時・実行時の環境変数依存なし。
- API キー等の秘匿情報はコード・設定に **混入なし**。

### CI / その他

- `.github/`（GitHub Actions 等）**なし**。
- デプロイは **Netlify の GitHub 連携による自動デプロイ**（main ブランチへの push をトリガに `npm run build` → `dist` 公開）。
- ドメイン: お名前.com で `tokyotc.com` を管理し、A レコード `75.2.60.5`（apex）＋ `www` CNAME `ttc-website.netlify.app` で Netlify を指している。

---

## 補足（ハンドオフ時の注意）

- **複数人が同一リポジトリへ push**する運用（小西氏＋山上氏）。作業前に `git pull --rebase` 推奨。
- メインのデザイン（ネイビー×ゴールド・サンセリフ）と、サブLP（明朝体・クリーム）で**世界観が異なる**。統一 or 意図的な使い分けかは要確認。
- 漫画ストーリー画像は AI 生成。透かし除去版へ差し替え済みだが、ページ1・5は元のまま（透かし有無未確認）。
