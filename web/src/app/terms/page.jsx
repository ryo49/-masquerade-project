import { ArrowLeft, FileText, AlertTriangle, Users, Clock } from "lucide-react";

export default function TermsPage() {
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
              <ArrowLeft size={16} className="text-[#d4af37] group-hover:text-black transition-colors duration-300" />
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
              TERMS OF SERVICE
            </h1>
            <p className="font-serif text-[16px] text-white/70 tracking-wide">
              ご利用規約
            </p>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        {/* 前文 */}
        <div className="mb-12">
          <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37]/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText size={24} className="text-[#d4af37]" />
              <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider">
                はじめに
              </h2>
            </div>
            <p className="font-serif text-white/90 text-[16px] leading-[1.8] tracking-wide">
              本規約は、MASQUERADE（以下「当店」といいます）が提供するサービスをご利用いただく際の条件を定めたものです。
              当店をご利用になる前に、必ずお読みいただき、同意の上でご来店ください。
            </p>
          </div>
        </div>

        {/* 各項目 */}
        <div className="space-y-12">
          {/* 1. 適用範囲 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              1. 適用範囲
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide">
                本規約は、お客様と当店との間の一切の関係に適用されるものとします。
                当店は本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます）をすることがあります。
                これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
              </p>
            </div>
          </div>

          {/* 2. 利用資格 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              2. ご利用資格
            </h3>
            <div className="space-y-4">
              <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle size={20} className="text-[#d4af37]" />
                  <h4 className="font-serif text-[#d4af37] text-[16px] tracking-wide">
                    重要：年齢制限
                  </h4>
                </div>
                <p className="font-serif text-white/90 text-[16px] leading-[1.7] tracking-wide font-bold">
                  当店は20歳未満の方のご入店を固くお断りしております。
                </p>
              </div>
              <ul className="space-y-3 ml-6">
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 満20歳以上であること
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 身分証明書の提示に応じられること
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 本規約および当店のルールを遵守できること
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 反社会的勢力に属さない、または関係のない方
                </li>
              </ul>
            </div>
          </div>

          {/* 3. 営業時間・予約 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              3. 営業時間・ご予約について
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-[#d4af37]" />
                <h4 className="font-serif text-white text-[16px] tracking-wide">
                  営業時間
                </h4>
              </div>
              <ul className="space-y-2 ml-6">
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 営業時間：20:00 - 3:00（ラストオーダー：2:30）
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 定休日：日曜日
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • ご予約受付：15:00 - 24:00
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 当日のご予約も承っておりますが、満席の場合はお断りする場合があります
                </li>
              </ul>
            </div>
          </div>

          {/* 4. 料金・支払い */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              4. 料金・お支払いについて
            </h3>
            <div className="space-y-4">
              <ul className="space-y-3 ml-6">
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • セット料金には指名料・サービス料を含みます
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 延長料金は30分単位で計算いたします
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • お支払いは現金またはクレジットカードでお願いいたします
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • タクシー代のお立替えは事前にご相談ください
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 料金は予告なく変更する場合があります
                </li>
              </ul>
              <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-4 mt-4">
                <p className="font-serif text-white/70 text-[12px] leading-[1.6] tracking-wide">
                  ※ 詳細な料金については、ご来店時またはお電話にてお問い合わせください。
                </p>
              </div>
            </div>
          </div>

          {/* 5. 禁止事項 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              5. 禁止事項
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide mb-4">
                以下の行為は固く禁止いたします：
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • スタッフへの過度な身体接触やセクシャルハラスメント
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 店内での写真・動画撮影（許可なく）
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • スタッフの連絡先の交換やプライベートでの交際の強要
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 他のお客様への迷惑行為
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 酒類の過度な摂取による迷惑行為
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 店舗設備の損壊・汚損
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • その他、当店が不適切と判断する行為
                </li>
              </ul>
            </div>
          </div>

          {/* 6. 損害賠償 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              6. 損害賠償
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide">
                お客様が禁止事項に該当する行為により当店に損害を与えた場合、
                その損害について賠償していただく場合があります。
                また、設備等を破損された場合は、修理費用または交換費用をご負担いただきます。
              </p>
            </div>
          </div>

          {/* 7. プライバシー */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              7. プライバシーの保護
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide">
                当店では、お客様のプライバシーを厳格に保護いたします。
                ご来店いただいたお客様の情報や店内での行動について、
                第三者に開示・漏洩することは一切ありません。
                個人情報の取扱いについては、別途定める個人情報保護方針に従います。
              </p>
            </div>
          </div>

          {/* 8. 免責事項 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              8. 免責事項
            </h3>
            <div className="space-y-4">
              <ul className="space-y-2 ml-6">
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 天災地変等の不可抗力による営業停止・変更について
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • お客様の個人の嗜好に関するサービス内容への不満について
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • お客様間でのトラブルについて
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • お客様の所有物の紛失・盗難について（ただし、当店の故意・重過失による場合を除く）
                </li>
              </ul>
            </div>
          </div>

          {/* 9. 規約の変更 */}
          <div>
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              9. 規約の変更
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide">
                当店は、必要と判断した場合には、お客様に通知することなくいつでも本規約を変更することができるものとします。
                なお、本規約の変更後、本サービスの利用を開始した場合には、
                当該お客様は変更後の規約に同意したものとみなします。
              </p>
            </div>
          </div>
        </div>

        {/* お問い合わせ */}
        <div className="mt-16">
          <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37]/20 p-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6 text-center">
              規約に関するお問い合わせ
            </h3>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <Users size={20} className="text-[#d4af37]" />
                <span className="font-serif text-white/90 text-[16px] tracking-wide">
                  店舗責任者：店長 田中
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FileText size={20} className="text-[#d4af37]" />
                <span className="font-serif text-white/90 text-[16px] tracking-wide">
                  電話：0761-20-2022
                </span>
              </div>
              <div className="border-t border-[#d4af37]/20 pt-4 mt-4">
                <p className="font-serif text-white/70 text-[12px] leading-[1.6] tracking-wide">
                  受付時間：15:00 - 24:00（土曜日も対応）<br />
                  規約に関するご不明な点は、お気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 制定日・改定日 */}
        <div className="mt-16 pt-8 border-t border-[#d4af37]/20 text-center">
          <div className="space-y-2">
            <p className="font-serif text-white/60 text-[14px] tracking-wide">
              制定日：2024年1月1日
            </p>
            <p className="font-serif text-white/60 text-[14px] tracking-wide">
              最終改定日：2025年1月1日
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