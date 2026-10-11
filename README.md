# Neck & Shoulder LP

Neck & Shoulder講習（3時間・対面）の申込み増加を目的とした、独立ランディングページです。

`amy-1p` / `tenku-sleep-lp` / `stress-relieve-lp` とは完全に独立したプロジェクトで、
コード・デザイン・文章の共有や依存関係はありません。

## 構成

- `index.html` - LP本体・日本語版（12セクション）／URL: `/`
- `en/index.html` - 英語版LP（海外受講者向け：日本でAmyから直接学ぶ対面実技講習）／URL: `/en/`
- `css/style.css` - スタイルシート（黒×ゴールド、スマートフォン最優先）
- `css/style-en.css` - 英語版専用の追加スタイル（英語版のみ読み込み）
- `js/config.js` - 申込み先URLの一元管理（現在は仮リンク `#apply`）
- `js/script.js` - CTAへのリンク適用など共通スクリプト
- `NECK_SHOULDER_BRAND_RULES.md` - 基本情報・表現ルール・禁止事項

## 英語版について

- 日本語版と英語版はURLを分けています（日本語 `/` ／ 英語 `/en/`）。各ページのヘッダーに相互リンクがあります。
- 英語版は日本語版と同じ `css/style.css`・`js/config.js`・`js/script.js`・画像を共有しています。申込み／相談リンクは日本語版と同じ公式LINEです。
- 料金表記：General JPY 110,000 / GMWBA members JPY 88,000（いずれも税込）。GMWBAの説明と https://gmwba.jp へのリンクを掲載しています。

## 申込みリンクについて

現段階ではすべてのCTAが仮リンク `#apply` です。正式な公式LINE URLが確定した際は、
`js/config.js` の `applyUrl` の値のみを書き換えてください。全CTAに自動反映されます。
他LPのURLを推測・流用しないこと（詳細は `NECK_SHOULDER_BRAND_RULES.md` 参照）。

## ローカル確認

```
python3 -m http.server 8000
```
