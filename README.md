# Neck & Shoulder LP

Neck & Shoulder講習（3時間・対面）の申込み増加を目的とした、独立ランディングページです。

`amy-1p` / `tenku-sleep-lp` / `stress-relieve-lp` とは完全に独立したプロジェクトで、
コード・デザイン・文章の共有や依存関係はありません。

## 構成

- `index.html` - LP本体（12セクション）
- `css/style.css` - スタイルシート（黒×ゴールド、スマートフォン最優先）
- `js/config.js` - 申込み先URLの一元管理（現在は仮リンク `#apply`）
- `js/script.js` - CTAへのリンク適用など共通スクリプト
- `NECK_SHOULDER_BRAND_RULES.md` - 基本情報・表現ルール・禁止事項

## 申込みリンクについて

現段階ではすべてのCTAが仮リンク `#apply` です。正式な公式LINE URLが確定した際は、
`js/config.js` の `applyUrl` の値のみを書き換えてください。全CTAに自動反映されます。
他LPのURLを推測・流用しないこと（詳細は `NECK_SHOULDER_BRAND_RULES.md` 参照）。

## ローカル確認

```
python3 -m http.server 8000
```
