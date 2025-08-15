import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";

export default function PrivacyPage() {
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
              PRIVACY POLICY
            </h1>
            <p className="font-serif text-[16px] text-white/70 tracking-wide">
              個人情報保護方針
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
              <Shield size={24} className="text-[#d4af37]" />
              <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider">
                基本方針
              </h2>
            </div>
            <p className="font-serif text-white/90 text-[16px] leading-[1.8] tracking-wide">
              MASQUERADE（以下「当店」といいます）は、お客様の個人情報保護の重要性を認識し、
              個人情報の保護に関する法律および関連する法令等を遵守し、
              お客様の個人情報を適切に取り扱うことをお約束いたします。
            </p>
          </div>
        </div>

        {/* 各項目 */}
        <div className="space-y-12">
          {/* 1. 個人情報の定義 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              1. 個人情報の定義
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide">
                本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に規定される個人情報を指し、
                生存する個人に関する情報であって、当該情報に含まれる氏名、電話番号、メールアドレス、
                その他の記述等により特定の個人を識別できるもの、
                および個人識別符号が含まれる情報を指します。
              </p>
            </div>
          </div>

          {/* 2. 個人情報の収集 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              2. 個人情報の収集
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide mb-4">
                当店では、以下の場合に個人情報を収集させていただきます：
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • ご予約をいただく際の氏名、電話番号等
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • お問い合わせをいただく際のメールアドレス、氏名等
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • アンケートにご協力いただく際の情報
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • その他サービス提供に必要な情報
                </li>
              </ul>
            </div>
          </div>

          {/* 3. 利用目的 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              3. 個人情報の利用目的
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide mb-4">
                当店は、収集した個人情報を以下の目的で利用いたします：
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • ご予約の確認・変更・キャンセルのご連絡
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • サービス提供およびアフターサービス
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • お問い合わせへの対応
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 新サービスやイベントのご案内（同意をいただいた場合のみ）
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • サービス向上のための統計データ作成
                </li>
              </ul>
            </div>
          </div>

          {/* 4. 個人情報の管理 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              4. 個人情報の管理
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide">
                当店は、個人情報の漏洩、滅失、毀損を防止するため、必要かつ適切な安全管理措置を講じ、
                従業員および委託先に対して必要かつ適切な監督を行います。
                個人情報は、利用目的達成後、適切な方法で廃棄いたします。
              </p>
            </div>
          </div>

          {/* 5. 第三者提供 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              5. 第三者への提供
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide mb-4">
                当店は、以下の場合を除き、個人情報を第三者に提供することはありません：
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • お客様の同意をいただいた場合
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 法令に基づく場合
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 人の生命、身体または財産の保護のために必要がある場合
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
                </li>
              </ul>
            </div>
          </div>

          {/* 6. お客様の権利 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              6. お客様の権利
            </h3>
            <div className="space-y-4">
              <p className="font-serif text-white/80 text-[14px] leading-[1.7] tracking-wide mb-4">
                お客様は、当店が保有する個人情報について、以下の権利を有しています：
              </p>
              <ul className="space-y-2 ml-6">
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 個人情報の開示請求
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 個人情報の訂正・追加・削除の請求
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 個人情報の利用停止・消去の請求
                </li>
                <li className="font-serif text-white/70 text-[14px] tracking-wide">
                  • 第三者提供の停止請求
                </li>
              </ul>
              <p className="font-serif text-white/70 text-[12px] leading-[1.6] tracking-wide mt-4">
                ※ 請求の際は、ご本人確認のため身分証明書の提示をお願いする場合があります。
              </p>
            </div>
          </div>

          {/* 7. お問い合わせ窓口 */}
          <div>
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              7. お問い合わせ窓口
            </h3>
            <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37]/20 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Eye size={20} className="text-[#d4af37]" />
                  <span className="font-serif text-white/90 text-[16px] tracking-wide">
                    個人情報保護責任者：店長 田中
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-[#d4af37]" />
                  <span className="font-serif text-white/90 text-[16px] tracking-wide">
                    電話：0761-20-2022
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock size={20} className="text-[#d4af37]" />
                  <span className="font-serif text-white/90 text-[16px] tracking-wide">
                    メール：privacy@masquerade-komatsu.com
                  </span>
                </div>
                <div className="border-t border-[#d4af37]/20 pt-4 mt-4">
                  <p className="font-serif text-white/70 text-[12px] leading-[1.6] tracking-wide">
                    受付時間：平日 15:00 - 24:00（土曜日も対応）<br />
                    個人情報に関するお問い合わせは、上記連絡先までお願いいたします。
                  </p>
                </div>
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