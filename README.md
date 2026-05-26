# ENCRE CAFÉ — デモサイト

架空のスペシャルティコーヒーショップ「ENCRE」のウェブサイトデモです。  
東京・代々木上原をテーマにした、ダークエディトリアル調のデザインで構成されています。

## ファイル構成

```
index.html   ページ構造（HTML）
style.css    スタイル・アニメーション
script.js    インタラクション・メニューデータ
```

## ページ構成

| セクション | 内容 |
|---|---|
| **Hero** | フルスクリーンのタイトルビジュアル、アンビエントオーブ演出 |
| **About** | 店舗コンセプト説明、CSSで描いたコーヒーカップアニメーション |
| **Menu** | Coffee / Tea & Others / Food のタブ切り替えメニュー |
| **Gallery** | CSSグラデーションで表現した店内ギャラリーグリッド |
| **Access** | 住所・営業時間・定休日、CSSマップ表示 |

## 技術スタック

- 素のHTML / CSS / JavaScript（フレームワーク・ビルドツール不使用）
- Google Fonts（Cormorant Garamond / Playfair Display / Jost）
- IntersectionObserver によるスクロールリビールアニメーション
- レスポンシブ対応（モバイルドロワーメニュー付き）

## 表示方法

`index.html` をブラウザで直接開くだけで動作します。サーバーは不要です。
