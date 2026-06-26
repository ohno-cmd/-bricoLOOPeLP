# FloatingBanner コンポーネント

React（TypeScript）+ Tailwind CSSで構築された、bricoLOOPe用のフローティングバナーコンポーネントです。

## 特徴

✨ **デザイン**
- アースカラーベース（ベージュ・ブラウン・オレンジ）
- 温かみのある配色で愛犬サービスに最適
- グラデーション背景で高級感を演出
- 目立つオレンジ色のボタン

🎯 **機能**
- 画面下部に固定表示
- 3set.png商品画像を表示（透過背景対応）
- 高さ150px以下でコンパクト
- スムーズなフェード入場アニメーション

📱 **レスポンシブ対応**
- **モバイル（〜768px）：** 縦並びコンパクトレイアウト
- **PC（768px以上）：** 横並びスタイリッシュレイアウト

🎨 **インタラクション**
- ボタンホバー時に色が濃くなる
- ボタンプレス時にアニメーション
- クリック時にOffer セクションへスクロール

---

## 使用方法

### 1. インポート

```typescript
import FloatingBanner from './FloatingBanner';
```

### 2. コンポーネント配置

```tsx
function App() {
  return (
    <div>
      {/* Your content */}
      <FloatingBanner />
    </div>
  );
}
```

### 3. カスタマイズ（オプション）

カスタムクリックハンドラーを指定：

```tsx
<FloatingBanner 
  onButtonClick={() => {
    // Custom action
    console.log('Button clicked!');
  }} 
/>
```

---

## 必要な環境

- React 16.8+
- TypeScript
- Tailwind CSS
- 商品画像ファイル：`/public/image/3set.png`（透過背景）

---

## デザイン仕様

### 色設定

| 要素 | 色 |
|-----|-----|
| 背景 | Gradient: `from-amber-50 to-orange-50` |
| ボーダー | Orange: `border-orange-300` |
| テキスト | `text-amber-950` / `text-amber-900` |
| 強調数字 | `text-orange-600` |
| ボタン背景 | Gradient: `from-orange-500 to-orange-600` |
| ボタンホバー | Gradient: `from-orange-600 to-orange-700` |

### レイアウト

| デバイス | 配置 | 高さ |
|--------|------|------|
| モバイル | 縦並び（画像 + テキスト、ボタン） | ～140px |
| PC | 横並び（画像、テキスト、ボタン） | ～120px |

---

## アニメーション

- **入場：** Fade in（0.5s）
- **ボタンホバー：** 色変更 + 影 + 上へ移動
- **ボタンアクティブ：** 位置を戻す

---

## ファイル構成

```
FloatingBanner.tsx          ← このコンポーネント
FLOATING_BANNER_README.md   ← このドキュメント
/public/image/3set.png      ← 商品画像（透過背景）
```

---

## 注意事項

⚠️ **Tailwind CSS が必須**
- このコンポーネントはTailwind CSSのユーティリティクラスを使用しています
- プロジェクトにTailwind CSSが導入されていることを確認してください

⚠️ **商品画像パス**
- デフォルトパス：`/public/image/3set.png`
- 環境に応じてパスを調整してください

⚠️ **Z-index**
- `z-50` で固定表示
- 他の固定要素と競合しないか確認してください

---

## カスタマイズ例

### ボタンテキストを変更

コンポーネント内の文字列を修正：
```tsx
> まず1か月試してみる  ← 変更可能
```

### 色を変更

Tailwind CSSクラスを置き換え：
```tsx
// オレンジ → 赤に変更
from-red-500 to-red-600
```

### 高さを調整

スタイル属性を修正：
```tsx
style={{ maxHeight: '150px' }}  ← ここを変更
```

---

## サポート

問題が発生した場合は、以下を確認してください：

1. ✅ Tailwind CSS が正常に動作しているか
2. ✅ 商品画像 `3set.png` が `/public/image/` に存在するか
3. ✅ React と TypeScript が正しく設定されているか
4. ✅ ブラウザキャッシュをクリアしたか
