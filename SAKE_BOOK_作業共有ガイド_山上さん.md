# SAKE BOOK v2 作業共有ガイド

**宛先**：山上香織さん
**作成**：2026-06-11（ダイアン / Claude Code）
**リポジトリ**：`~/Projects/tokyotc-website`

---

## 0. これは何

**SAKE BOOK v2** ＝ TTC 日本酒の会（月1回・最大10名・清澄庭園 涼亭）で使う**当日採点アプリ**。
コンセプトは「**紙ゼロ・事前準備ゼロ・その場で発表**」。

- 当日、持ち寄った瓶を**その場で撮影して登録**（誰でも可）
- 全員がスマホで採点
- 採点が**リアルタイム集計**され、会の締めに「**発表モード**」でチャンピオンを開示

発注の正典：`~/Downloads/SAKE_BOOK_v2_開発指示書.md`（小西さん作）。世界観は会のサイト `https://tokyotc.com/sake/` と地続き。

---

## 1. 場所・技術スタック

| 項目 | 内容 |
|---|---|
| アプリ本体 | `public/sake/book/index.html`（**単一HTML**・素の HTML/CSS/JS。フレームワークなし） |
| ブランチ | **`feature/sake-book`**（main は CodeX が本体HP担当。SAKE BOOK はこのブランチ） |
| バックエンド | **Firebase Realtime Database**（プロジェクト `ttc-sake-book` / リージョン asia-southeast1） |
| 公開予定 | 将来 main にマージ → `tokyotc.com/sake/book/`（noindex・URL を知る人のみ） |
| 写真アセット | `public/sake/book/assets/`（会の実写真を圧縮配置） |

---

## 2. 起動・テスト方法（重要）

```bash
cd ~/Projects/tokyotc-website
git branch --show-current          # ← まず feature/sake-book にいるか確認
npm run build                      # ビルド（dist/ 生成）
```

- **Mac で確認**：`npm run preview` → `http://localhost:4173/sake/book/`（**末尾スラッシュ必須**。無いと本体トップに飛ぶ＝プレビュー特有の挙動）
- **スマホ実機（LAN）**：`npm run preview -- --host` → `http://<MacのIP>:4173/sake/book/`
  - Mac の IP：`ipconfig getifaddr en0`（例：`192.168.1.14`）
  - **スマホは Mac と同じ Wi-Fi に**（モバイル回線だと届かない）
- **複数端末テスト**：2台で開き、片方の登録/採点が**もう片方に即反映**されるかを見る（これが Firebase リアルタイムの確認）

---

## 3. できている機能（実装済み）

- **入場**：名前入力（`localStorage` に保存、2回目以降不要・変更可）
- **銘柄登録**：写真をその場で撮影/選択 → **クライアント側で自動圧縮**（長辺1200・JPEG0.75）＋銘柄名＋持参者。登録者本人＋管理者が編集削除可
- **採点**：五軸スライダー（**甘辛・香り・濃淡・酸味・余韻**、1.0〜5.0／甘辛は「高いほど辛口」注記）＋**推し度0〜100**＋メモ。自分の採点は編集・取消可
- **ライブ集計**：推し度平均の順位、**五角形レーダー**、採点者数（Firebase リアルタイム反映）
- **発表モード**：「その日の主役を発表する」→ 下位から一本ずつ開示 → チャンピオンに**朱印スタンプ**（`prefers-reduced-motion` 尊重）
- **Markdown エクスポート**：推し度順・五軸平均・メモ一覧を出力（開催レポートの五軸表記に整合 → 図鑑・レポートの素材）
- **管理者モード**：ヘッダーの「**御酒帳**」を**5回タップ**で ON/OFF → 会の管理（エクスポート／新しい会）＋全銘柄の編集削除
- **Firebase リアルタイム化済み**（複数端末同期）

---

## 4. データ構造（Firebase Realtime Database）

```
event:                 { title, date }              # 例: {title:"第3回", date:""}
sakes/{id}:            { id, name, by, photo, regby } # photo は base64(dataURL)
ratings/{sakeId}/{userKey}: { user, sweet, aroma, body, acidity, finish, oshi, memo }
archives:              [ 過去の会のスナップショット ]   # 「新しい会」開始時に退避
```

- `userKey` は名前をサニタイズしたもの（`. # $ / [ ]` → `_`）。表示名は各レコードの `user` を使う。
- 書き込みは**個別ノード**に `set`/`update`/`remove`（全体上書きしない＝同時採点で競合しない）。
- リアルタイムリスナー（`sakes` / `ratings` / `event` の `on('value')`）で全端末が自動再描画。

---

## 5. 残タスク（分担できる候補）

- [ ] **実機テスト**：指示書§5の7項目（PCファイル選択／iPhone Safari カメラ／Android／複数端末同時／発表モード／エクスポート整合／画像300KB以下）をチェックリストで
- [ ] **DBセキュリティルール**：今は「**テストモード**」（誰でも読み書き・**30日で失効**）→ 最低限の検証ルールに置き換え（Firebase コンソール → Realtime Database → ルール）。ダイアンがルール案を用意できる
- [ ] **PR 作成**（`feature/sake-book` → main）＋ `docs/v2-changes.md`（指示書§6の成果物）
- [ ] **Cloud Vision**（写真→銘柄名 自動読み取り）：後続。静的サイトはサーバーが無いので **Netlify Functions 等**が要る（**APIキーをクライアントに直書きしない**）
- [ ] **画像を base64 → Firebase Storage** に移行（将来・無料枠最適化）
- [ ] **デザイン磨き込み**（指示書§3：夜の藍/和紙/朱/金、明朝、五角形レーダーを最も美しく）

---

## 6. Firebase の管理情報

- コンソール：`console.firebase.google.com`（`@tokyotc.com` でログイン）→ プロジェクト **`ttc-sake-book`**
- プラン：**Spark（無料）**。月1回・10名なら無料枠内。**画像圧縮の徹底が無料枠維持の鍵**
- `firebaseConfig` は `index.html` に直書き（Web の config は**公開前提**の設計。秘密ではない。アクセス制御は DB ルールで行う）

---

## 7. 運用上の注意（事故防止）

- **main は CodeX（本体HP）、SAKE BOOK は `feature/sake-book`（ダイアン/山上さん）。** 担当を分けている。
- **複数の人/エージェントが同じローカルツリーを共有**しているため、**作業前に必ず `git branch --show-current` で確認**（朝、勝手に main に切り替わっていたことがある）。
- SAKE BOOK を触るときは `feature/sake-book` に居ること。本番反映は **PR → 小西さんの確認後**。
- こまめに commit/push（未push を短く保つ）。

---

## 8. 指示書の要点（正典・要約）

- コンセプト：紙ゼロ・準備ゼロ・その場で発表。読後感は「自分も推しを持ち寄りたい」
- デザイン：「夜の庭園で開く、一冊の上質な酒記録帳」。テンプレ的ダークUIにしない。五角形レーダーが顔
- 制約：**無料枠を死守**／**APIキーをクライアント直書きしない**／モバイルファースト
- 判断に迷ったら**勝手に進めず、選択肢を挙げて止まる**。「美しいが動かない」より「まず動かす」

---

*このガイドは Obsidian Vault にも置いてあります。SAKE BOOK は `feature/sake-book` ブランチで。*
