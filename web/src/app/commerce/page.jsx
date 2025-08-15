import { ArrowLeft, Building, CreditCard, Truck, RefreshCw, Phone } from "lucide-react";

export default function CommercePage() {
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
              SPECIFIED COMMERCIAL TRANSACTIONS ACT
            </h1>
            <p className="font-serif text-[16px] text-white/70 tracking-wide">
              特定商取引法に基づく表記
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
              <Building size={24} className="text-[#d4af37]" />
              <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider">
                法定表記事項
              </h2>
            </div>
            <p className="font-serif text-white/90 text-[16px] leading-[1.8] tracking-wide">
              特定商取引法に基づき、以下の通り表記いたします。
              当店でのサービス提供に関する重要な事項ですので、必ずご確認ください。
            </p>
          </div>
        </div>

        {/* 事業者情報 */}
        <div className="space-y-12">
          {/* 事業者の概要 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              事業者の概要
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                    事業者名
                  </h4>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    MASQUERADE
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                    運営責任者
                  </h4>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    店長 田中 太郎
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                    所在地
                  </h4>
                  <p className="font-serif text-white/80 text-[14px] leading-[1.6] tracking-wide">
                    〒923-0336<br />
                    石川県小松市土居原町 199<br />
                    VILLAビル 3F
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                    電話番号
                  </h4>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    0761-20-2022
                  </p>
                  <p className="font-serif text-white/60 text-[12px] tracking-wide">
                    受付時間：15:00 - 24:00
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                    メールアドレス
                  </h4>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    info@masquerade-komatsu.com
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                    営業許可番号
                  </h4>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    石川県公安委員会許可<br />
                    第461234567890号
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 販売・サービス内容 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              販売・サービス内容
            </h3>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6">
                <h4 className="font-serif text-[#d4af37] text-[16px] mb-4 tracking-wide">
                  提供サービス
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="font-serif text-white/80 text-[14px] tracking-wide">
                    • 店内でのお食事・お酒の提供
                  </li>
                  <li className="font-serif text-white/80 text-[14px] tracking-wide">
                    • ホステスによる接客サービス
                  </li>
                  <li className="font-serif text-white/80 text-[14px] tracking-wide">
                    • カラオケ・エンターテインメントサービス
                  </li>
                  <li className="font-serif text-white/80 text-[14px] tracking-wide">
                    • 個室・VIPルームの提供
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 料金・支払い方法 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              料金・お支払い方法
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard size={20} className="text-[#d4af37]" />
                <h4 className="font-serif text-white text-[16px] tracking-wide">
                  お支払い方法
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-serif text-white/90 text-[14px] mb-3 tracking-wide">
                    現金でのお支払い
                  </h5>
                  <ul className="space-y-1 ml-4">
                    <li className="font-serif text-white/70 text-[12px] tracking-wide">
                      • 日本円のみ受付
                    </li>
                    <li className="font-serif text-white/70 text-[12px] tracking-wide">
                      • お会計時に一括払い
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-serif text-white/90 text-[14px] mb-3 tracking-wide">
                    クレジットカード
                  </h5>
                  <ul className="space-y-1 ml-4">
                    <li className="font-serif text-white/70 text-[12px] tracking-wide">
                      • VISA、MasterCard、JCB
                    </li>
                    <li className="font-serif text-white/70 text-[12px] tracking-wide">
                      • American Express、Diners
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-4">
                <p className="font-serif text-white/70 text-[12px] leading-[1.6] tracking-wide">
                  ※ 料金は税込価格です。サービス料・チャージは別途加算されます。<br />
                  ※ 料金の詳細については、ご来店時またはお電話にてお問い合わせください。
                </p>
              </div>
            </div>
          </div>

          {/* サービス提供時期 */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              サービス提供時期
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Truck size={20} className="text-[#d4af37]" />
                <h4 className="font-serif text-white text-[16px] tracking-wide">
                  提供スケジュール
                </h4>
              </div>
              <ul className="space-y-3 ml-6">
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • サービス提供：ご来店と同時に開始
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 営業時間：20:00 - 3:00（ラストオーダー：2:30）
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 定休日：日曜日
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 予約制：推奨（当日受付も可能）
                </li>
              </ul>
            </div>
          </div>

          {/* 申込み・契約について */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              お申込み・契約について
            </h3>
            <div className="space-y-4">
              <ul className="space-y-3 ml-6">
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • ご予約は電話・メールで承ります
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • ご来店時に身分証明書の確認をお願いする場合があります
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • サービス契約はご入店をもって成立いたします
                </li>
                <li className="font-serif text-white/80 text-[14px] tracking-wide">
                  • 満20歳未満の方のご入店・ご利用はお断りいたします
                </li>
              </ul>
            </div>
          </div>

          {/* キャンセル・返金について */}
          <div className="border-b border-white/10 pb-8">
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              キャンセル・返金について
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw size={20} className="text-[#d4af37]" />
                <h4 className="font-serif text-white text-[16px] tracking-wide">
                  キャンセルポリシー
                </h4>
              </div>
              <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-serif text-[#d4af37] text-[14px] mb-2 tracking-wide">
                      ご予約のキャンセル
                    </h5>
                    <ul className="space-y-1 ml-4">
                      <li className="font-serif text-white/70 text-[12px] tracking-wide">
                        • 当日キャンセル：キャンセル料50%
                      </li>
                      <li className="font-serif text-white/70 text-[12px] tracking-wide">
                        • 前日19:00以降のキャンセル：キャンセル料30%
                      </li>
                      <li className="font-serif text-white/70 text-[12px] tracking-wide">
                        • 前日19:00までのキャンセル：キャンセル料なし
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-serif text-[#d4af37] text-[14px] mb-2 tracking-wide">
                      返金について
                    </h5>
                    <ul className="space-y-1 ml-4">
                      <li className="font-serif text-white/70 text-[12px] tracking-wide">
                        • サービス提供後の返金は原則として承っておりません
                      </li>
                      <li className="font-serif text-white/70 text-[12px] tracking-wide">
                        • 当店都合によるサービス中止の場合は全額返金いたします
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
              お問い合わせ先
            </h3>
            <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37]/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Phone size={24} className="text-[#d4af37]" />
                <h4 className="font-serif text-[#d4af37] text-[18px] tracking-wide">
                  お困りの際はお気軽にご連絡ください
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                      電話でのお問い合わせ
                    </h5>
                    <p className="font-serif text-[#d4af37] text-[20px] font-bold tracking-wide">
                      0761-20-2022
                    </p>
                    <p className="font-serif text-white/60 text-[12px] tracking-wide">
                      受付時間：15:00 - 24:00（土曜日も対応）
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-serif text-white text-[16px] mb-2 tracking-wide">
                      メールでのお問い合わせ
                    </h5>
                    <p className="font-serif text-[#d4af37] text-[16px] tracking-wide">
                      info@masquerade-komatsu.com
                    </p>
                    <p className="font-serif text-white/60 text-[12px] tracking-wide">
                      24時間受付（返信は営業時間内）
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#d4af37]/20 pt-6 mt-6">
                <p className="font-serif text-white/70 text-[12px] leading-[1.6] tracking-wide text-center">
                  特定商取引法に関するお問い合わせ、ご相談、苦情等については、
                  上記連絡先までお気軽にご連絡ください。<br />
                  お客様に安心してご利用いただけるよう、誠意をもって対応させていただきます。
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