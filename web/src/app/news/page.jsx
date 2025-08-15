import { Calendar, Clock, Tag, ChevronRight, ArrowLeft } from "lucide-react";

export default function NewsPage() {
  const newsData = [
    {
      id: 1,
      date: "2025-01-15",
      category: "お知らせ",
      title: "新年営業開始のご案内",
      summary:
        "1月5日より通常営業を開始いたします。新年もより一層のサービス向上に努めて参ります。",
      content:
        "新年あけましておめでとうございます。MASQUERADEは1月5日より通常営業を開始いたしました。本年もお客様にご満足いただける上質なサービスをご提供できるよう、スタッフ一同努力して参ります。何卒よろしくお願い申し上げます。",
      isImportant: true,
    },
    {
      id: 2,
      date: "2024-12-28",
      category: "イベント",
      title: "年末年始休業のお知らせ",
      summary: "12月30日〜1月4日まで年末年始休業とさせていただきます。",
      content:
        "誠に勝手ながら、12月30日（土）〜1月4日（木）まで年末年始休業とさせていただきます。1月5日（金）より通常営業を再開いたします。ご不便をおかけいたしますが、何卒ご理解のほどよろしくお願いいたします。",
      isImportant: true,
    },
    {
      id: 3,
      date: "2024-12-20",
      category: "キャンペーン",
      title: "クリスマス特別企画のご案内",
      summary: "12月24日・25日にクリスマス特別企画を開催いたします。",
      content:
        "クリスマスの特別な夜を演出する企画をご用意いたしました。期間中は特別なお料理とサービスでお客様をおもてなしいたします。詳細はお電話にてお問い合わせください。",
      isImportant: false,
    },
    {
      id: 4,
      date: "2024-12-10",
      category: "採用",
      title: "ホステス・ボーイ募集中",
      summary: "新しい仲間を募集しています。未経験の方も歓迎いたします。",
      content:
        "MASQUERADEでは一緒に働く仲間を募集しています。ホステス・ボーイともに未経験の方も大歓迎です。充実した研修制度でしっかりとサポートいたします。詳細は採用ページをご覧ください。",
      isImportant: false,
    },
    {
      id: 5,
      date: "2024-11-28",
      category: "お知らせ",
      title: "営業時間変更のお知らせ",
      summary: "12月より営業時間を一部変更いたします。",
      content:
        "お客様により快適にお過ごしいただくため、12月1日より営業時間を20:00-3:00に変更いたします。ラストオーダーは2:30となります。ご理解のほどよろしくお願いいたします。",
      isImportant: false,
    },
    {
      id: 6,
      date: "2024-11-15",
      category: "設備",
      title: "VIP個室リニューアル完了",
      summary: "VIP個室の内装をリニューアルいたしました。",
      content:
        "お客様により上質な時間をお過ごしいただくため、VIP個室の内装をリニューアルいたしました。より落ち着いた空間でプライベートなひとときをお楽しみください。",
      isImportant: false,
    },
  ];

  const categories = [
    "全て",
    "お知らせ",
    "イベント",
    "キャンペーン",
    "採用",
    "設備",
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* ヘッダー */}
      <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border-b border-[#d4af37]/20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16">
          {/* トップページに戻るボタン */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg hover:bg-[#d4af37] hover:border-[#d4af37] group transition-all duration-300"
            >
              <ArrowLeft
                size={16}
                className="text-[#d4af37] group-hover:text-black transition-colors duration-300"
              />
              <span className="font-serif text-[#d4af37] group-hover:text-black text-[14px] tracking-wide transition-colors duration-300">
                トップページに戻る
              </span>
            </a>
          </div>

          <div className="text-center">
            <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
            <h1 className="font-serif text-[clamp(32px,5vw,48px)] text-white tracking-wider mb-4">
              NEWS & INFORMATION
            </h1>
            <p className="font-serif text-[16px] text-white/70 tracking-wide">
              お知らせ・最新情報
            </p>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        {/* カテゴリフィルター */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 border font-serif text-[14px] tracking-wide transition-all duration-300 ${
                  index === 0
                    ? "bg-[#d4af37] text-black border-[#d4af37]"
                    : "text-[#d4af37] border-[#d4af37]/50 hover:bg-[#d4af37]/10 hover:border-[#d4af37]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 重要なお知らせ */}
        <div className="mb-16">
          <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-8 text-center">
            重要なお知らせ
          </h2>
          <div className="space-y-6">
            {newsData
              .filter((news) => news.isImportant)
              .map((news) => (
                <div
                  key={news.id}
                  className="bg-gradient-to-r from-[#2a241a] to-[#1a1a1a] border border-[#d4af37] p-8 hover:border-[#d4af37]/80 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#d4af37]" />
                        <span className="font-serif text-white/80 text-[14px] tracking-wide">
                          {news.date}
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded">
                        <span className="font-serif text-[#d4af37] text-[12px] tracking-wide">
                          {news.category}
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded">
                        <span className="font-serif text-red-400 text-[12px] tracking-wide">
                          重要
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-[20px] text-white tracking-wide mb-4">
                      {news.title}
                    </h3>
                    <p className="font-serif text-white/80 text-[16px] leading-[1.6] tracking-wide">
                      {news.content}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 全てのお知らせ */}
        <div>
          <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-8 text-center">
            全てのお知らせ
          </h2>
          <div className="space-y-6">
            {newsData.map((news) => (
              <div
                key={news.id}
                className="bg-[#1a1a1a] border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#d4af37]" />
                        <span className="font-serif text-white/80 text-[14px] tracking-wide">
                          {news.date}
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded">
                        <span className="font-serif text-[#d4af37] text-[12px] tracking-wide">
                          {news.category}
                        </span>
                      </div>
                      {news.isImportant && (
                        <div className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded">
                          <span className="font-serif text-red-400 text-[12px] tracking-wide">
                            重要
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[#d4af37] group-hover:text-[#b8941f] transition-colors duration-300">
                      <span className="font-serif text-[14px] tracking-wide">
                        詳細を見る
                      </span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                  <h3 className="font-serif text-[18px] text-white tracking-wide mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="font-serif text-white/70 text-[14px] leading-[1.6] tracking-wide">
                    {news.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ページネーション */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-[#d4af37]/50 text-[#d4af37] font-serif text-[14px] tracking-wide hover:bg-[#d4af37]/10 transition-all duration-300">
                ← 前へ
              </button>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-[#d4af37] text-black font-serif text-[14px] tracking-wide">
                  1
                </button>
                <button className="px-4 py-2 border border-[#d4af37]/50 text-[#d4af37] font-serif text-[14px] tracking-wide hover:bg-[#d4af37]/10 transition-all duration-300">
                  2
                </button>
                <button className="px-4 py-2 border border-[#d4af37]/50 text-[#d4af37] font-serif text-[14px] tracking-wide hover:bg-[#d4af37]/10 transition-all duration-300">
                  3
                </button>
              </div>
              <button className="px-4 py-2 border border-[#d4af37]/50 text-[#d4af37] font-serif text-[14px] tracking-wide hover:bg-[#d4af37]/10 transition-all duration-300">
                次へ →
              </button>
            </div>
          </div>
        </div>

        {/* お問い合わせセクション */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37]/20 p-8">
            <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-6">
              最新情報のお問い合わせ
            </h2>
            <p className="font-serif text-white/90 text-[16px] tracking-wide leading-relaxed mb-6">
              最新のイベント情報やキャンペーンについては、
              <br />
              お電話にてお気軽にお問い合わせください。
            </p>
            <div className="space-y-4">
              <a
                href="tel:0761-20-2022"
                className="inline-block px-8 py-3 bg-[#d4af37] text-black font-serif font-bold text-[16px] tracking-wider hover:bg-[#b8941f] transition-all duration-300"
              >
                0761-20-2022
              </a>
              <p className="font-serif text-white/60 text-[14px] tracking-wide">
                受付時間：15:00 - 24:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
