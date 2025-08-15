import { Check, Crown, Star, Sparkles } from "lucide-react";

export default function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      name: "ライトセット",
      duration: "60分",
      price: "8,000",
      originalPrice: null,
      description: "初回のお客様におすすめ",
      features: [
        "指名なし",
        "ドリンク2杯まで",
        "軽食サービス",
        "フリータイム"
      ],
      popular: false,
      color: "from-gray-600 to-gray-800"
    },
    {
      id: 2,
      name: "スタンダードセット",
      duration: "90分",
      price: "15,000",
      originalPrice: "18,000",
      description: "一番人気のプラン",
      features: [
        "キャスト指名可能",
        "ドリンク飲み放題",
        "おつまみプレート",
        "カラオケ利用",
        "記念撮影サービス"
      ],
      popular: true,
      color: "from-[#ff6b9d] to-[#c44b99]"
    },
    {
      id: 3,
      name: "プレミアムセット",
      duration: "120分",
      price: "25,000",
      originalPrice: "30,000",
      description: "特別な夜に最適",
      features: [
        "人気キャスト指名",
        "プレミアムドリンク",
        "コース料理",
        "個室利用",
        "専属サービス",
        "記念品プレゼント"
      ],
      popular: false,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const additionalServices = [
    { name: "延長料金", price: "3,000円/30分" },
    { name: "指名料", price: "2,000円〜" },
    { name: "個室利用", price: "5,000円" },
    { name: "記念撮影", price: "1,000円" },
    { name: "花束オーダー", price: "3,000円〜" }
  ];

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a]">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="font-noto-sans font-medium text-[12px] text-pink-300 uppercase tracking-[0.1em] bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/20">
              PRICING PLAN
            </span>
          </div>
          <h2 className="font-noto-sans font-bold text-white text-[clamp(28px,5vw,48px)] leading-[1.2] mb-4">
            料金システム
          </h2>
          <p className="font-noto-sans text-gray-300 text-[16px] leading-[1.6] max-w-[600px] mx-auto">
            お客様のご予算とお時間に合わせて、多彩なプランをご用意しております。
            <br />
            全てのプランで最高のサービスをお約束いたします。
          </p>
        </div>

        {/* 料金プラン */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-pink-500/50 shadow-lg shadow-pink-500/20 scale-105"
                  : "border-white/10 hover:border-pink-500/30"
              }`}
            >
              {/* 人気バッジ */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-[#ff6b9d] to-[#c44b99] text-white px-4 py-2 rounded-full shadow-lg">
                    <Crown size={16} />
                    <span className="font-noto-sans font-semibold text-[12px]">最人気</span>
                  </div>
                </div>
              )}

              {/* プラン名 */}
              <div className="text-center mb-6">
                <h3 className="font-noto-sans font-bold text-white text-[24px] mb-2">{plan.name}</h3>
                <p className="font-noto-sans text-gray-400 text-[14px]">{plan.description}</p>
              </div>

              {/* 時間 */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star size={16} className="text-pink-400" />
                  <span className="font-noto-sans font-semibold text-white text-[16px]">{plan.duration}</span>
                </div>
              </div>

              {/* 価格 */}
              <div className="text-center mb-8">
                {plan.originalPrice && (
                  <div className="font-noto-sans text-gray-500 text-[18px] line-through mb-1">
                    ¥{plan.originalPrice}
                  </div>
                )}
                <div className="font-noto-sans font-bold text-white text-[36px] mb-2">
                  ¥{plan.price}
                </div>
                <div className="font-noto-sans text-gray-400 text-[14px]">税込価格</div>
              </div>

              {/* 機能リスト */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="font-noto-sans text-gray-300 text-[14px]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTAボタン */}
              <button
                className={`w-full py-4 rounded-full font-noto-sans font-semibold text-[16px] transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#ff6b9d] to-[#c44b99] text-white hover:from-[#ff5a8c] hover:to-[#b03a88] hover:shadow-lg hover:shadow-pink-500/30"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40"
                } active:scale-[0.98]`}
              >
                このプランで予約
              </button>
            </div>
          ))}
        </div>

        {/* 追加サービス */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-pink-400" />
              <h3 className="font-noto-sans font-bold text-white text-[24px]">追加サービス</h3>
            </div>
            <p className="font-noto-sans text-gray-300 text-[14px]">
              より充実した時間をお過ごしいただくための追加オプションです
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all duration-200"
              >
                <span className="font-noto-sans text-white text-[14px]">{service.name}</span>
                <span className="font-noto-sans font-semibold text-pink-400 text-[14px]">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 注意事項 */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
            <h4 className="font-noto-sans font-semibold text-yellow-400 text-[16px] mb-3">ご注意事項</h4>
            <ul className="font-noto-sans text-yellow-100 text-[14px] space-y-2 max-w-[800px] mx-auto text-left">
              <li>• 表示価格は全て税込み価格となっております</li>
              <li>• キャンセルは当日2時間前までにご連絡ください</li>
              <li>• 未成年の方のご利用はお断りしております</li>
              <li>• お支払いは現金・各種クレジットカードをご利用いただけます</li>
              <li>• 混雑時は延長をお受けできない場合がございます</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}