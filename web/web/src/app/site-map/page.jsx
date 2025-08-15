import {
  ArrowLeft,
  Map,
  Home,
  Users,
  Info,
  FileText,
  Shield,
  CreditCard,
  Building,
} from "lucide-react";

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "メインページ",
      icon: Home,
      items: [
        {
          name: "トップページ",
          href: "/",
          description: "MASQUERADE の総合案内",
        },
        {
          name: "CONCEPT",
          href: "/#concept",
          description: "コンセプト・店舗の魅力",
        },
        {
          name: "SYSTEM",
          href: "/#system",
          description: "料金システム・プラン",
        },
        { name: "ACCESS", href: "/#access", description: "アクセス情報・地図" },
        {
          name: "CONTACT",
          href: "/#contact",
          description: "お問い合わせフォーム",
        },
      ],
    },
    {
      title: "店舗情報",
      icon: Info,
      items: [
        {
          name: "店舗概要",
          href: "/store-info",
          description: "基本情報・営業時間・アクセス",
        },
        { name: "RECRUIT", href: "/recruit", description: "求人・採用情報" },
        {
          name: "お知らせ",
          href: "/news",
          description: "最新ニュース・イベント情報",
        },
      ],
    },
    {
      title: "法的情報",
      icon: Shield,
      items: [
        {
          name: "プライバシーポリシー",
          href: "/privacy",
          description: "個人情報保護方針",
        },
        { name: "利用規約", href: "/terms", description: "サービス利用規約" },
        {
          name: "特定商取引法",
          href: "/commerce",
          description: "特定商取引法に基づく表記",
        },
        {
          name: "サイトマップ",
          href: "/site-map",
          description: "サイト構成一覧（このページ）",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-black backdrop-blur-md border-b border-[#d4af37]/20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center h-[80px]">
            {/* ロゴ */}
            <div className="flex-shrink-0">
              <div className="font-serif font-bold text-[24px] text-[#d4af37] tracking-wider">
                MASQUERADE
              </div>
              <div className="text-[10px] text-white/60 tracking-[0.2em] mt-1">
                KOMATSU
              </div>
            </div>

            {/* トップページに戻るボタン */}
            <a
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg hover:bg-[#d4af37] hover:border-[#d4af37] group transition-all duration-300"
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
        </div>
      </header>

      {/* ヒーローセクション */}
      <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border-b border-[#d4af37]/20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="text-center">
            <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
            <h1 className="font-serif text-[clamp(32px,5vw,48px)] text-white tracking-wider mb-4">
              SITEMAP
            </h1>
            <p className="font-serif text-[16px] text-white/70 tracking-wide">
              サイトマップ
            </p>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        {/* 前文 */}
        <div className="mb-12">
          <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37]/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Map size={24} className="text-[#d4af37]" />
              <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider">
                サイト構成
              </h2>
            </div>
            <p className="font-serif text-white/90 text-[16px] leading-[1.8] tracking-wide">
              MASQUERADE 公式サイトの全ページをご案内いたします。
              お探しの情報がございましたら、下記のリンクからご確認ください。
            </p>
          </div>
        </div>

        {/* サイト構造 */}
        <div className="space-y-12">
          {siteStructure.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            return (
              <div
                key={sectionIndex}
                className="border-b border-white/10 pb-12 last:border-b-0"
              >
                <div className="flex items-center gap-3 mb-8">
                  <IconComponent size={24} className="text-[#d4af37]" />
                  <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider">
                    {section.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.href}
                      className="block bg-[#1a1a1a] border border-[#d4af37]/20 p-6 hover:bg-[#2a241a] hover:border-[#d4af37]/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-serif text-[18px] text-white group-hover:text-[#d4af37] mb-3 tracking-wide transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="font-serif text-white/70 text-[14px] leading-[1.6] tracking-wide">
                            {item.description}
                          </p>
                        </div>
                        <div className="ml-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowLeft
                            size={16}
                            className="text-[#d4af37] transform rotate-180"
                          />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 追加情報 */}
        <div className="mt-16">
          <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37]/20 p-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6 text-center">
              ご利用案内
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={20} className="text-[#d4af37]" />
                </div>
                <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                  ご予約
                </h4>
                <p className="font-serif text-white/70 text-[12px] tracking-wide">
                  お電話・メールで承ります
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={20} className="text-[#d4af37]" />
                </div>
                <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                  お問い合わせ
                </h4>
                <p className="font-serif text-white/70 text-[12px] tracking-wide">
                  0761-20-2022
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard size={20} className="text-[#d4af37]" />
                </div>
                <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                  お支払い
                </h4>
                <p className="font-serif text-white/70 text-[12px] tracking-wide">
                  現金・カード対応
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building size={20} className="text-[#d4af37]" />
                </div>
                <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                  営業時間
                </h4>
                <p className="font-serif text-white/70 text-[12px] tracking-wide">
                  20:00 - 3:00
                </p>
              </div>
            </div>

            <div className="border-t border-[#d4af37]/20 pt-6 mt-6 text-center">
              <p className="font-serif text-white/70 text-[14px] leading-[1.6] tracking-wide">
                当サイトに関するご質問・ご要望がございましたら、お気軽にお問い合わせください。
                <br />
                より良いサービス提供のため、皆様のご意見をお聞かせください。
              </p>
            </div>
          </div>
        </div>

        {/* アクセシビリティ・ユーザビリティ情報 */}
        <div className="mt-12">
          <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6">
            <h3 className="font-serif text-[18px] text-[#d4af37] tracking-wider mb-4">
              サイト利用について
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif text-white text-[14px] mb-3 tracking-wide">
                  推奨環境
                </h4>
                <ul className="space-y-1">
                  <li className="font-serif text-white/70 text-[12px] tracking-wide">
                    • Chrome、Firefox、Safari、Edge 最新版
                  </li>
                  <li className="font-serif text-white/70 text-[12px] tracking-wide">
                    • JavaScript 有効
                  </li>
                  <li className="font-serif text-white/70 text-[12px] tracking-wide">
                    • スマートフォン・タブレット対応
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-white text-[14px] mb-3 tracking-wide">
                  更新情報
                </h4>
                <ul className="space-y-1">
                  <li className="font-serif text-white/70 text-[12px] tracking-wide">
                    • サイト開設：2024年1月
                  </li>
                  <li className="font-serif text-white/70 text-[12px] tracking-wide">
                    • 最終更新：2025年1月
                  </li>
                  <li className="font-serif text-white/70 text-[12px] tracking-wide">
                    • 定期的にコンテンツを更新
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 制定日・改定日 */}
        <div className="mt-16 pt-8 border-t border-[#d4af37]/20 text-center">
          <div className="space-y-2">
            <p className="font-serif text-white/60 text-[14px] tracking-wide">
              サイトマップ作成日：2025年1月1日
            </p>
            <p className="font-serif text-white/60 text-[14px] tracking-wide">
              最終更新日：2025年1月1日
            </p>
            <p className="font-serif text-[#d4af37] text-[16px] tracking-wider mt-4">
              MASQUERADE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
