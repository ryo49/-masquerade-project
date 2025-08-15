import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
  ];

  const footerLinks = {
    services: [
      { name: "CONCEPT", href: "#concept" },
      { name: "SYSTEM", href: "#system" },
      { name: "ACCESS", href: "#access" },
      { name: "CONTACT", href: "#contact" },
    ],
    company: [
      { name: "店舗概要", href: "/store-info" },
      { name: "RECRUIT", href: "/recruit" },
      { name: "お知らせ", href: "/news" },
    ],
    legal: [
      { name: "プライバシーポリシー", href: "/privacy" },
      { name: "利用規約", href: "/terms" },
      { name: "特定商取引法", href: "/commerce" },
      { name: "サイトマップ", href: "/site-map" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-black border-t border-[#d4af37]/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* メインフッターコンテンツ */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* ブランド情報 */}
            <div className="space-y-6">
              {/* ロゴ */}
              <div>
                <div className="font-serif font-bold text-[#d4af37] text-[24px] tracking-wider mb-2">
                  MASQUERADE
                </div>
                <div className="text-[10px] text-white/60 tracking-[0.2em]">
                  KOMATSU
                </div>
              </div>

              {/* 店舗説明 */}
              <p className="font-serif text-white/70 text-[14px] leading-[1.6] tracking-wide">
                小松の一等地に佇む、大人の上質な時間を提供するお店です。
              </p>

              {/* 基本情報 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#d4af37]" />
                  <span className="font-serif text-white/90 text-[14px] tracking-wide">
                    0761-20-2022
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#d4af37]" />
                  <span className="font-serif text-white/90 text-[14px] tracking-wide">
                    info@masquerade-komatsu.com
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#d4af37] mt-1" />
                  <span className="font-serif text-white/90 text-[14px] leading-[1.5] tracking-wide">
                    石川県小松市土居原町 199
                    <br />
                    VILLAビル 3F
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#d4af37]" />
                  <span className="font-serif text-white/90 text-[14px] tracking-wide">
                    20:00 - 3:00
                  </span>
                </div>
              </div>
            </div>

            {/* サービス */}
            <div className="space-y-6">
              <h3 className="font-serif text-[#d4af37] text-[18px] tracking-wider">
                MENU
              </h3>
              <nav className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block font-serif text-white/70 text-[14px] tracking-wide hover:text-[#d4af37] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* 会社情報 */}
            <div className="space-y-6">
              <h3 className="font-serif text-[#d4af37] text-[18px] tracking-wider">
                INFORMATION
              </h3>
              <nav className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block font-serif text-white/70 text-[14px] tracking-wide hover:text-[#d4af37] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* その他 */}
            <div className="space-y-6">
              <h3 className="font-serif text-[#d4af37] text-[18px] tracking-wider">
                OTHER
              </h3>
              <nav className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block font-serif text-white/70 text-[14px] tracking-wide hover:text-[#d4af37] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* ソーシャルメディア */}
              <div>
                <h4 className="font-serif text-[#d4af37] text-[14px] mb-4 tracking-wider">
                  SOCIAL MEDIA
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] group transition-all duration-300"
                        aria-label={social.label}
                      >
                        <IconComponent
                          size={16}
                          className="text-[#d4af37] group-hover:text-black transition-colors duration-300"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ボトムバー */}
        <div className="border-t border-[#d4af37]/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
              {/* 著作権 */}
              <div className="font-serif text-white/50 text-[14px] text-center lg:text-left tracking-wide">
                © 2025 MASQUERADE. All Rights Reserved.
              </div>
              {/* 営業許可証番号 */}
              <div className="font-serif text-white/60 text-[12px] text-center lg:text-left tracking-wide">
                石川県公安委員会許可番号：第461234567890号
              </div>
            </div>

            {/* 重要な注意事項 */}
            <div className="flex flex-col sm:flex-row gap-6 text-center lg:text-right">
              <span className="font-serif text-white/60 text-[12px] tracking-wide">
                20歳未満の方のご入店はお断りしております
              </span>
            </div>
          </div>

          {/* 個人情報保護方針 */}
          <div className="border-t border-[#d4af37]/10 mt-6 pt-6">
            <div className="text-center">
              <h4 className="font-serif text-[#d4af37] text-[14px] mb-4 tracking-wider">
                個人情報保護方針
              </h4>
              <div className="max-w-[800px] mx-auto space-y-3">
                <p className="font-serif text-white/70 text-[12px] leading-[1.6] tracking-wide">
                  当店では、お客様の個人情報を適切に保護し、安心してご利用いただけるよう努めております。
                  お預かりした個人情報は、ご予約・サービス提供・お問い合わせ対応の目的のみに使用し、
                  第三者への提供は一切行いません。
                </p>
                <p className="font-serif text-white/60 text-[11px] leading-[1.5] tracking-wide">
                  個人情報の取扱いに関するお問い合わせ：info@masquerade-komatsu.com
                  | 個人情報保護責任者：店長 田中 |
                  石川県個人情報保護条例に基づく管理を徹底しております
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 緊急時の連絡先 */}
      <div className="bg-gradient-to-r from-[#2a241a] to-[#1a1a1a] border-t border-[#d4af37]/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
            <span className="font-serif text-[#d4af37] text-[14px] tracking-wide">
              緊急時・トラブル時のご連絡先：
            </span>
            <a
              href="tel:0761-20-2022"
              className="font-serif font-bold text-white text-[14px] hover:text-[#d4af37] transition-colors duration-300 tracking-wide"
            >
              0761-20-2022
            </a>
            <span className="font-serif text-white/60 text-[12px] tracking-wide">
              (24時間対応)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
