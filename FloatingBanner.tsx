import { ArrowRight, Gift, ShieldCheck } from "lucide-react"

/**
 * 画面下部に固定表示されるフローティングバナー。
 * 商品写真（3袋セット）と特典のジャーキー写真を使用しています。
 * 配色は参考LP（bricoLOOPe）に合わせています。
 *
 * ▼ リンク先URLの変更
 *   下の LINK_URL を変更してください。
 */

const LINK_URL = "https://bricodog.official.ec/items/148533123"

export function FloatingBanner() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-2 pb-2 sm:px-3 sm:pb-3">
      <a
        href={LINK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="1日210円で愛犬が生まれ変わる。初回購入で2,000円相当のジャーキー無料プレゼント。1ヶ月試してみる"
        className="pointer-events-auto block w-full max-w-2xl overflow-hidden rounded-xl bg-[#e60023] p-1 shadow-2xl ring-2 ring-[#faf4e4] transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div className="overflow-hidden rounded-lg bg-[#e60023]">
          {/* 上段：商品写真 ＋ キャッチコピー ＋ 期間限定オファー */}
          <div className="flex items-center gap-2 px-3 pt-2.5 sm:gap-3 sm:px-4">
            {/* 左：商品写真（3袋セット） */}
            <img
              src="/image/3set.png"
              alt="brico 内臓ジャーキー 3袋セット"
              className="hidden h-20 w-auto shrink-0 object-contain drop-shadow-lg sm:block sm:h-24"
            />

            {/* 中央：キャッチコピー */}
            <div className="min-w-0 flex-1">
              <p className="mb-1 inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-[#e60023] sm:text-xs">
                1日<span className="mx-0.5 text-sm sm:text-base">210円</span>で
              </p>
              <p className="text-balance text-base font-extrabold leading-tight text-white sm:text-xl">
                愛犬が
                <span className="text-[#ffcf33]">生まれ変わる</span>
              </p>

              {/* バッジ */}
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#e60023] sm:text-[11px]">
                  内蔵3種セット
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#c8961e] ring-1 ring-[#e3c375] sm:text-[11px]">
                  <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                  3ヶ月返金保証
                </span>
              </div>
            </div>

            {/* 右：期間限定オファー（ジャーキー写真付き・狭い画面では非表示） */}
            <div className="relative hidden shrink-0 rounded-lg bg-white px-3 py-2 text-center ring-1 ring-[#e3c375] sm:block">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#c69524] px-2 py-0.5 text-[10px] font-bold text-white shadow">
                期間限定
              </span>
              <div className="mt-1 flex items-center gap-2">
                <div>
                  <p className="text-[10px] font-bold leading-tight text-neutral-700">初回購入で</p>
                  <p className="text-sm font-extrabold leading-tight text-[#e60023]">
                    2,000円<span className="text-[10px] text-neutral-700">相当の</span>
                  </p>
                  <p className="text-[11px] font-extrabold leading-tight text-neutral-800">
                    ジャーキー<span className="text-[#e60023]">無料</span>
                  </p>
                  <p className="inline-flex items-center gap-0.5 text-[11px] font-bold leading-tight text-neutral-800">
                    <Gift className="h-3 w-3 text-[#e60023]" aria-hidden="true" />
                    プレゼント!
                  </p>
                </div>
                <img
                  src="/image/jerky.jpg"
                  alt="特典の無添加ジャーキー"
                  className="h-14 w-14 shrink-0 rounded-md object-cover ring-1 ring-black/10"
                />
              </div>
            </div>
          </div>

          {/* 下段：CTAボタン（アニメーション付き） */}
          <div className="px-3 pb-2.5 pt-2 sm:px-4">
            <div className="animate-cta-breathe relative overflow-hidden rounded-full bg-[#39b54a] py-2.5 text-center shadow-lg ring-1 ring-[#2c8f39]">
              <span className="relative z-10 inline-flex items-center gap-2 text-base font-extrabold text-white sm:text-lg">
                1ヶ月試してみる
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
              {/* 光のスイープ */}
              <span
                aria-hidden="true"
                className="animate-cta-shine pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 bg-white/30 blur-md"
              />
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
