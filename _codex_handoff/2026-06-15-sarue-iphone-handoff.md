# KonishiClone 引き継ぎメモ: 猿江公園ページ iPhone 表示修正

作成日: 2026-06-15  
対象リポジトリ: `/Users/hkonishi/Projects/tokyotc-website`  
作業ブランチ: `codex/fix-sarue-iphone-clipping`

## 現在の状態

M5 MacBook Pro 側で、猿江公園ページの iPhone 表示崩れ対応を途中まで進めています。

すでに以下は作業ブランチにコミットし、GitHub へ push 済みです。

- コミット: `edb2557 WIP: Fix Sarue Park mobile layout`
- push先: `origin/codex/fix-sarue-iphone-clipping`
- 対象ファイル: `public/experience/sarue-park-restaurant/index.html`

このブランチは `main` にマージしていません。  
したがって、本番公開はまだされていません。

## KonishiClone 側で最初にやること

```bash
cd /Users/hkonishi/Projects/tokyotc-website
git fetch origin
git switch codex/fix-sarue-iphone-clipping
git status -sb
```

`git status -sb` で、`codex/fix-sarue-iphone-clipping` にいることを確認してください。

## 直近で確認された問題

小西さんの iPhone 実機確認で、右上ヘッダーナビがスマホ幅でも表示されていました。

赤丸で囲まれていた箇所:

- `編集の視点`
- `評価`

iPhone幅ではナビが中途半端に見えてしまうため、スマホではヘッダーナビを非表示にするのが自然です。ロゴだけ残す方向でよいと思います。

候補修正:

```css
@media (max-width: 640px) {
  .site-nav {
    display: none;
  }
}
```

既に `public/experience/sarue-park-restaurant/index.html` にはスマホ向けのCSSが多数入っているため、既存の `@media (max-width: 520px)` か、その少し上の `@media (max-width: 860px)` 周辺に合わせて自然に追加してください。

## すでに対応済みのこと

- iPhone幅で横にはみ出していた大きな見出しやカードの文字を折り返す調整
- `.section` / `.recipe-band` / `.cta` などをスマホ幅で安全な横幅に収める調整
- `日常は、少しだけ編集できる。`
- `やり方が軽いほど、思い出は積み重なる。`
- `近所の公園は、案外、最高のレストランになります。`
- 上記のような大きな見出しが右端で切れないよう、スマホ用の `<br class="mobile-break">` とCSSを追加
- アクセシビリティ用の `本文へ移動` リンクがタッチ環境で露出しないよう、`:focus-visible` ベースに調整

## 検証済み

M5 MacBook Pro 側で `npm run build` は成功しています。

```text
✓ built in 718ms
```

ただし、iPhone実機では右上ナビがまだ残っていることが確認されています。  
KonishiClone側では、まず右上ナビ非表示を入れてから再ビルドと実機確認をしてください。

## iPhone 実機確認方法

KonishiClone 側でローカルサーバーを立てます。

```bash
cd /Users/hkonishi/Projects/tokyotc-website/public
python3 -m http.server 8765 --bind 0.0.0.0
```

別ターミナルでMacのIPを確認します。

```bash
ifconfig en0
```

`inet 192.168.x.x` のIPを使って、iPhone Safari で以下を開きます。

```text
http://<MacのIP>:8765/experience/sarue-park-restaurant/?iphone-check=1
```

iPhone と KonishiClone が同じ Wi-Fi にいる必要があります。

## 作業時の注意

- `main` に直接編集しない
- 小西さんの確認前に `main` へマージしない
- `main` へマージして push すると本番公開につながる
- 未追跡の別作業ファイルには触らない

特に、以下のような未追跡ファイルは別作業の可能性があるため、勝手に add / delete しないでください。

- `.claude/`
- `ONBOARDING.md`
- `_codex_handoff/spec.md`
- `download.html`
- `public/experience/sake-event/assets/*`
- `public/experience/assets/illustration-*.png`
- `public/experience/dialog-in-the-dark-*/assets/logo-2026.png`

## 完了条件

1. スマホ幅で右上ナビが表示されない
2. iPhone実機で、見出し・カード・写真キャプション・CTA文が右端で切れない
3. `npm run build` が成功する
4. 小西さんが実機確認してOKを出す

その後、小西さんの指示を受けてから以下を行います。

```bash
git switch main
git pull --rebase origin main
git merge codex/fix-sarue-iphone-clipping
git push origin main
```

