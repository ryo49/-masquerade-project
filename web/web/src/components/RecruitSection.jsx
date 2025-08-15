import { Heart, Star, Crown, Phone } from "lucide-react";

export default function RecruitSection() {
  const benefits = [
    {
      icon: Crown,
      title: "高収入保証",
      description: "業界最高水準の高収入をお約束します",
      detail: "日給5万円以上可能",
    },
    {
      icon: Star,
      title: "充実サポート",
      description: "未経験者も安心の研修システム",
      detail: "先輩ホステスが丁寧指導",
    },
    {
      icon: Heart,
      title: "働きやすい環境",
      description: "アットホームな職場環境",
      detail: "自由出勤制・送り完備",
    },
  ];

  return (
    <section
      id="recruit"
      className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] text-white tracking-wider mb-4">
            RECRUIT
          </h2>
          <p className="font-serif text-[16px] text-white/70 tracking-wide max-w-[600px] mx-auto">
            共に働く仲間を募集しています
          </p>
        </div>

        {/* メインメッセージ */}
        <div className="text-center mb-16">
          <div className="max-w-[800px] mx-auto">
            <h3 className="font-serif text-[clamp(24px,4vw,36px)] text-[#d4af37] tracking-wider mb-8 leading-[1.4]">
              あなたらしく輝ける場所で
              <br />
              新しいスタートを
            </h3>
            <p className="font-serif text-[16px] lg:text-[18px] text-white/90 leading-[1.8] tracking-wide">
              MASQUERADEでは、お客様に最高のおもてなしを提供してくださる女性スタッフを募集しています。
              <br />
              未経験の方も大歓迎。充実した研修制度とサポート体制で、あなたの成長をしっかりとバックアップいたします。
            </p>
          </div>
        </div>

        {/* 特徴・魅力 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#d4af37]/20 p-8 text-center hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent size={28} className="text-[#d4af37]" />
                </div>
                <h4 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-3">
                  {benefit.title}
                </h4>
                <p className="font-serif text-[16px] text-white/90 leading-[1.6] tracking-wide mb-4">
                  {benefit.description}
                </p>
                <div className="font-serif text-[14px] text-white/70 tracking-wide">
                  {benefit.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* 募集要項 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 左側：募集要項 */}
          <div>
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-8">
              <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-8">
                募集要項
              </h3>

              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-serif text-[16px] text-white mb-2 tracking-wide">
                    募集職種
                  </h4>
                  <div className="space-y-2">
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・ホステス（コンパニオン）
                    </p>
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・ボーイ（サービススタッフ）
                    </p>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-serif text-[16px] text-white mb-2 tracking-wide">
                    応募資格
                  </h4>
                  <div className="space-y-1">
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・18歳以上（高校生不可）
                    </p>
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・週2日以上出勤可能な方
                    </p>
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・接客にやりがいを感じられる方
                    </p>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-serif text-[16px] text-white mb-2 tracking-wide">
                    勤務時間
                  </h4>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    20:00 - 0:00（自由出勤制）
                  </p>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-serif text-[16px] text-white mb-2 tracking-wide">
                    給与
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-serif text-[#d4af37] text-[14px] tracking-wide mb-1">
                        ホステス
                      </p>
                      <p className="font-serif text-white/80 text-[14px] tracking-wide">
                        時給 3,000円〜 + 各種バック
                      </p>
                      <p className="font-serif text-white/80 text-[14px] tracking-wide">
                        日給5万円以上も可能
                      </p>
                    </div>
                    <div>
                      <p className="font-serif text-[#d4af37] text-[14px] tracking-wide mb-1">
                        ボーイ
                      </p>
                      <p className="font-serif text-white/80 text-[14px] tracking-wide">
                        時給 1,500円〜
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-[16px] text-white mb-2 tracking-wide">
                    待遇・福利厚生
                  </h4>
                  <div className="space-y-1">
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・送り完備（専用車での送迎）
                    </p>
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・ドレス・ヘアメイク無料
                    </p>
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・研修制度充実
                    </p>
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      ・日払い・週払い対応
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：応募・問い合わせ */}
          <div className="space-y-8">
            {/* 応募フォーム */}
            <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37] p-8">
              <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-6 text-center">
                応募・お問い合わせ
              </h3>

              <div className="text-center mb-8">
                <p className="font-serif text-white/90 text-[16px] tracking-wide leading-relaxed mb-6">
                  まずはお気軽にお電話ください。
                  <br />
                  面接や体験入店のご相談も承ります。
                </p>

                <div className="mb-6">
                  <div className="font-serif text-[14px] text-[#d4af37] tracking-wider mb-2">
                    面接・応募専用ダイヤル
                  </div>
                  <div className="font-serif text-[32px] text-white font-bold tracking-wide mb-2">
                    0761-20-2022
                  </div>
                  <div className="font-serif text-[14px] text-white/70 tracking-wide">
                    受付時間：15:00 - 24:00
                  </div>
                </div>

                <button className="w-full py-4 bg-[#d4af37] text-black font-serif font-bold text-[16px] tracking-wider hover:bg-[#b8941f] transition-all duration-300 mb-4 flex items-center justify-center gap-3">
                  <Phone size={20} />
                  今すぐ応募する
                </button>

                <div className="text-[12px] text-white/60 font-serif tracking-wide">
                  ※ 面接は随時受け付けております
                </div>
              </div>
            </div>

            {/* 体験入店案内 */}
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-8">
              <h4 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-4 text-center">
                体験入店について
              </h4>

              <div className="space-y-4 text-center">
                <p className="font-serif text-white/90 text-[14px] tracking-wide leading-relaxed">
                  いきなりお仕事を始めるのが不安な方は、
                  <br />
                  まずは体験入店からスタートできます。
                </p>

                <div className="bg-[#0f0f0f] p-4 rounded">
                  <div className="font-serif text-[#d4af37] text-[16px] tracking-wider mb-2">
                    体験入店保証
                  </div>
                  <div className="font-serif text-white text-[20px] font-bold">
                    ¥10,000
                  </div>
                  <div className="font-serif text-white/70 text-[12px] mt-1">
                    （3時間勤務）
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="font-serif text-[12px] text-white/70 tracking-wide leading-relaxed">
                    ※ 体験入店時もドレス貸し出し・送りサービスあり
                    <br />※ 当日現金でお支払いします
                  </p>
                </div>
              </div>
            </div>

            {/* よくある質問リンク */}
            <div className="text-center">
              <button className="px-8 py-3 border border-[#d4af37]/50 text-[#d4af37] font-serif text-[14px] tracking-wider hover:bg-[#d4af37]/10 transition-all duration-300">
                よくある質問を見る
              </button>
            </div>
          </div>
        </div>

        {/* 最終メッセージ */}
        <div className="mt-16 pt-12 border-t border-[#d4af37]/20 text-center">
          <div className="max-w-[700px] mx-auto">
            <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-6">
              一緒に素敵な時間を創りませんか？
            </h3>
            <p className="font-serif text-white/80 text-[16px] leading-[1.7] tracking-wide">
              MASQUERADEでは、お客様に心から喜んでいただける接客を大切にしています。
              あなたの笑顔と心遣いで、特別な時間を一緒に創り上げましょう。
              お気軽にお電話ください。スタッフ一同、お待ちしております。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
