/**
 * サイト共通設定
 *
 * 申込み・相談の連絡先URLをここで一元管理しています。
 * 技術スクールの申込み・相談導線は「aminoel beauty academy」公式LINE（@161uzomr）に統一しています。
 *
 * - applyUrl: 「申込む」系CTA（.js-cta-apply）専用。公式LINEのトーク画面を開き、
 *   「ネック＆ショルダー受講希望」が入力された状態になるLINE公式URLスキーム。
 * - consultUrl: 「受講前に相談する」系CTA（.js-cta-consult）専用。通常のLINE友だち追加URL。
 *
 * URLを変更する場合は、下記の値だけを書き換えてください。対象のCTAボタンに自動で反映されます（新しいタブで開きます）。
 */
window.SITE_CONFIG = {
  applyUrl: "https://line.me/R/oaMessage/%40161uzomr/?%E3%83%8D%E3%83%83%E3%82%AF%EF%BC%86%E3%82%B7%E3%83%A7%E3%83%AB%E3%83%80%E3%83%BC%E5%8F%97%E8%AC%9B%E5%B8%8C%E6%9C%9B",
  consultUrl: "https://lin.ee/C0byPWO"
};
