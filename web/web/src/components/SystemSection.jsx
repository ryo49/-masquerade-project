export default function SystemSection() {
  return (
    <section
      id="system"
      className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] text-white tracking-wider mb-4">
            SYSTEM
          </h2>
          <p className="font-serif text-[16px] text-white/70 tracking-wide max-w-[600px] mx-auto">
            明確な料金システムで、安心してお楽しみいただけます
          </p>
        </div>

        {/* 特徴説明 */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 border border-[#d4af37]/30 p-8 max-w-[800px] mx-auto">
            <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-4">
              時間制限なしのシステム
            </h3>
            <p className="font-serif text-white/90 text-[16px] leading-relaxed tracking-wide mb-4">
              次の店内ご予約が入るまでは、時間は無制限となっております！
            </p>
            <div className="text-[14px] text-white/70 space-y-2">
              <p>※ 店内予約混雑時は時間制となります</p>
              <p>※ ご同伴の女性のお客様は無料！</p>
              <p>※ 店内最大50名様までご利用可能</p>
            </div>
          </div>
        </div>

        {/* セット料金 */}
        <div className="mb-16">
          <h3 className="font-serif text-[28px] text-[#d4af37] tracking-wider text-center mb-12">
            SET CHARGES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1名様 */}
            <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#d4af37]/30 p-6 text-center">
              <div className="text-[20px] text-[#d4af37] font-serif tracking-wider mb-3">
                1名様
              </div>
              <div className="text-[32px] text-white font-serif font-bold">
                ¥5,000
              </div>
            </div>

            {/* 2名様 */}
            <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#d4af37]/30 p-6 text-center">
              <div className="text-[20px] text-[#d4af37] font-serif tracking-wider mb-3">
                2名様
              </div>
              <div className="text-[32px] text-white font-serif font-bold">
                ¥4,000
              </div>
            </div>

            {/* 3-4名様 */}
            <div className="bg-gradient-to-b from-[#3a3023] to-[#2a241a] border-2 border-[#d4af37] p-6 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-black px-3 py-1 text-[10px] font-serif tracking-wider">
                団体様割引
              </div>
              <div className="text-[20px] text-[#d4af37] font-serif tracking-wider mb-3 mt-2">
                3～4名様
              </div>
              <div className="text-[32px] text-white font-serif font-bold">
                ¥3,000
              </div>
            </div>

            {/* 5名様以上 */}
            <div className="bg-gradient-to-b from-[#3a3023] to-[#2a241a] border-2 border-[#d4af37] p-6 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#d4af37] text-black px-3 py-1 text-[10px] font-serif tracking-wider">
                団体様割引
              </div>
              <div className="text-[20px] text-[#d4af37] font-serif tracking-wider mb-3 mt-2">
                5名様以上
              </div>
              <div className="text-[32px] text-white font-serif font-bold">
                ¥2,000
              </div>
            </div>
          </div>
        </div>

        {/* ドリンク料金 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* お客様ドリンク */}
          <div>
            <h4 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6 text-center">
              お客様ドリンク
            </h4>
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6 space-y-4">
              <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 p-4 mb-4 text-center">
                <div className="text-[#d4af37] font-serif text-[18px] tracking-wider mb-2">
                  飲み放題
                </div>
                <div className="text-white/90 text-[14px] font-serif">
                  生ビール・ハイボール・焼酎・水割り・サワー類
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-white font-serif">
                  シャンパン（ボトル）
                </span>
                <span className="text-[#d4af37]">¥15,000〜</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-serif">ワイン（ボトル）</span>
                <span className="text-[#d4af37]">¥8,000〜</span>
              </div>
            </div>
          </div>

          {/* 女性ドリンク */}
          <div>
            <h4 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6 text-center">
              女性ドリンク
            </h4>
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-white font-serif">ソフトドリンク</span>
                <span className="text-[#d4af37]">¥1,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-white font-serif">ビール・サワー</span>
                <span className="text-[#d4af37]">¥1,500</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-white font-serif">カクテル</span>
                <span className="text-[#d4af37]">¥2,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-white font-serif">
                  シャンパン（グラス）
                </span>
                <span className="text-[#d4af37]">¥3,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-serif">同伴出勤</span>
                <span className="text-[#d4af37]">¥5,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="mt-16 pt-8 border-t border-[#d4af37]/20">
          <h5 className="font-serif text-[18px] text-[#d4af37] tracking-wider mb-4 text-center">
            ご利用案内
          </h5>
          <div className="text-white/70 text-[14px] font-serif tracking-wide max-w-[800px] mx-auto space-y-2">
            <p>・表示価格は全て税込みです</p>
            <p>・お支払いは現金・クレジットカードをご利用いただけます</p>
            <p>・ご予約のキャンセルは当日18時までにご連絡ください</p>
            <p>・20歳未満の方のご入店はお断りしております</p>
            <p>・ご同伴の女性のお客様は入場料無料です</p>
          </div>
        </div>
      </div>
    </section>
  );
}
