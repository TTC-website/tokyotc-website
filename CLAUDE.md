# Claude Code Rules

このファイルは Claude Code 向けの入口です。実際の正本ルールは同じディレクトリの `AGENTS.md` に集約されています。

## 最初に必ずやること

1. `/Users/hkonishi/Projects/tokyotc-website` で作業する。
2. `pwd` と `git status --short --branch` を確認する。
3. `AGENTS.md` を読む。
4. 必要に応じて `AGENTS.md` に記載された補助資料を読む。

補助資料:

- `docs/agent/tokyotc-website-status-report.md`
- `docs/agent/ttc-corporate-site-operations.md`
- `_diane_handoff/site_audit.md`

補助資料と現在のファイルが食い違う場合は、現在のワークツリーと `AGENTS.md` を優先する。

## 特に重要

- 本番公開用の正本は `/Users/hkonishi/Projects/tokyotc-website`。
- `/Users/hkonishi/Documents/New project/ttc-retro-ab` は制作・検証用の参照元であり、push 先ではない。
- 体験メニューの本番配置は `public/experience/` 配下。
- 体験メニュー画像は、個別ページ用はページ配下の `assets/`、トップ共通用は `public/experience/assets/` に置く。
- 体験メニューの思想は「気づく / 変える / つなぐ」。世界観は「扉」より「種」。
- 公開前に `npm run build` を通す。ビルド失敗状態で push しない。
- push 前には `git pull --rebase origin main` を実行する。
- force push はしない。
- Codex / Diane / Claude Code が同じファイルを同時編集しない。別エージェントが作業中ならレビュー・相談に留める。

## 承認が必要な作業

以下は差分や確認結果を見せて、ユーザーの OK をもらってから push する。

- 既存公開ページの文言変更
- 大きな配色・レイアウト変更
- 新規ページを本公開導線へ接続する作業
- 新しい依存パッケージ追加
- ロゴ変更
- DNS / Netlify 設定変更

迷ったら `AGENTS.md` の承認ゲートを確認する。
