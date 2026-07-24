import type { Metadata } from "next"
import { FloatingBanner } from "@/components/floating-banner"
import "./globals.css"

export const metadata: Metadata = {
  title: "bricoLOOPe | 愛犬の人生を変える天然鹿内臓定期便",
  description: "愛犬の寿命は、飼い主の選択で変わります。天然鹿内臓サブスクリプション bricoLOOPe",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <FloatingBanner />
      </body>
    </html>
  )
}
