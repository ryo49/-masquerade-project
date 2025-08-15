import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Calendar,
  Users,
  Star,
  Shield,
  Award,
  ArrowLeft,
} from "lucide-react";

export default function StoreInfoPage() {
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
              STORE INFORMATION
            </h1>
            <p className="font-serif text-[16px] text-white/70 tracking-wide">
              店舗概要・基本情報
            </p>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        {/* 基本情報 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 左側：基本情報 */}
            <div className="space-y-8">
              <h2 className="font-serif text-[28px] text-[#d4af37] tracking-wider mb-8">
                基本情報
              </h2>

              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-[18px] text-white mb-2 tracking-wide">
                        所在地
                      </h3>
                      <p className="font-serif text-white/80 text-[16px] leading-[1.6] tracking-wide">
                        〒923-0336
                        <br />
                        石川県小松市土居原町 199
                        <br />
                        VILLAビル 3F
                      </p>
                      <p className="font-serif text-[14px] text-white/60 mt-2 tracking-wide">
                        JR小松駅より徒歩5分
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                      <Clock size={20} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-[18px] text-white mb-2 tracking-wide">
                        営業時間
                      </h3>
                      <p className="font-serif text-white/80 text-[16px] leading-[1.6] tracking-wide">
                        20:00 - 3:00
                        <br />
                        （ラストオーダー 2:30）
                      </p>
                      <p className="font-serif text-[14px] text-white/60 mt-2 tracking-wide">
                        定休日：日曜日
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-[18px] text-white mb-2 tracking-wide">
                        電話番号
                      </h3>
                      <a
                        href="tel:0761-20-2022"
                        className="font-serif text-white/80 text-[16px] hover:text-[#d4af37] transition-colors duration-300 tracking-wide"
                      >
                        0761-20-2022
                      </a>
                      <p className="font-serif text-[14px] text-white/60 mt-2 tracking-wide">
                        受付時間：15:00 - 24:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-[18px] text-white mb-2 tracking-wide">
                        メールアドレス
                      </h3>
                      <a
                        href="mailto:info@masquerade-komatsu.com"
                        className="font-serif text-white/80 text-[16px] hover:text-[#d4af37] transition-colors duration-300 tracking-wide"
                      >
                        info@masquerade-komatsu.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                      <Users size={20} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-[18px] text-white mb-2 tracking-wide">
                        店舗規模
                      </h3>
                      <p className="font-serif text-white/80 text-[16px] leading-[1.6] tracking-wide">
                        総席数：30席
                        <br />
                        カウンター席・ボックス席
                        <br />
                        VIP個室完備
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：店舗の特徴 */}
            <div className="space-y-8">
              <h2 className="font-serif text-[28px] text-[#d4af37] tracking-wider mb-8">
                店舗の特徴
              </h2>

              <div className="space-y-6">
                <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star size={24} className="text-[#d4af37]" />
                    <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wide">
                      高級感溢れる内装
                    </h3>
                  </div>
                  <p className="font-serif text-white/80 text-[14px] leading-[1.6] tracking-wide">
                    ヨーロッパ調の上品なインテリアで統一された店内。
                    落ち着いた照明と上質な家具が、特別な時間を演出します。
                  </p>
                </div>

                <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield size={24} className="text-[#d4af37]" />
                    <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wide">
                      完全個室対応
                    </h3>
                  </div>
                  <p className="font-serif text-white/80 text-[14px] leading-[1.6] tracking-wide">
                    プライベートな時間をお過ごしいただけるVIP個室を完備。
                    重要なお客様との接待やプライベートな集まりに最適です。
                  </p>
                </div>

                <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award size={24} className="text-[#d4af37]" />
                    <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wide">
                      厳選されたサービス
                    </h3>
                  </div>
                  <p className="font-serif text-white/80 text-[14px] leading-[1.6] tracking-wide">
                    一流のホステスによる心のこもったおもてなしと、
                    上質なお酒・お料理で至福のひとときをお約束いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 営業許可・認証情報 */}
        <div className="mb-20">
          <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37]/20 p-8">
            <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-6 text-center">
              営業許可・認証情報
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="font-serif text-[18px] text-white mb-4 tracking-wide">
                  営業許可証
                </h3>
                <p className="font-serif text-white/80 text-[14px] tracking-wide">
                  石川県公安委員会許可番号
                  <br />
                  第461234567890号
                </p>
                <p className="font-serif text-white/60 text-[12px] mt-2 tracking-wide">
                  風俗営業許可証取得済み
                </p>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-[18px] text-white mb-4 tracking-wide">
                  食品衛生許可
                </h3>
                <p className="font-serif text-white/80 text-[14px] tracking-wide">
                  小松保健所
                  <br />
                  食品営業許可証取得済み
                </p>
                <p className="font-serif text-white/60 text-[12px] mt-2 tracking-wide">
                  許可番号：15食第2345号
                </p>
              </div>
            </div>

            <div className="border-t border-[#d4af37]/20 mt-6 pt-6 text-center">
              <p className="font-serif text-white/70 text-[12px] leading-[1.6] tracking-wide">
                当店は関連法令を遵守し、適切な営業許可を取得して営業しております。
                <br />
                お客様に安心してご利用いただけるよう、法令遵守と安全な営業を心がけております。
              </p>
            </div>
          </div>
        </div>

        {/* アクセス情報 */}
        <div className="mb-20">
          <h2 className="font-serif text-[28px] text-[#d4af37] tracking-wider mb-8 text-center">
            アクセス情報
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-[20px] text-white mb-6 tracking-wide">
                電車でのアクセス
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-black text-[10px] font-bold">1</span>
                  </div>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    JR小松駅（西口）より徒歩5分
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-black text-[10px] font-bold">2</span>
                  </div>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    駅前商店街を直進、左手にVILLAビル
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-[20px] text-white mb-6 tracking-wide">
                お車でのアクセス
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-black text-[10px] font-bold">1</span>
                  </div>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    北陸自動車道 小松ICより車で10分
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-black text-[10px] font-bold">2</span>
                  </div>
                  <p className="font-serif text-white/80 text-[14px] tracking-wide">
                    専用駐車場完備（10台まで無料）
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#1a1a1a] border border-[#d4af37]/20">
            <p className="font-serif text-white/70 text-[14px] text-center leading-[1.6] tracking-wide">
              ※ お車でお越しの際は、代行運転サービスのご利用をお勧めいたします。
              <br />
              提携代行業者をご紹介させていただくことも可能です。
            </p>
          </div>
        </div>

        {/* お問い合わせ */}
        <div className="text-center">
          <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37] p-8">
            <h2 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-6">
              お問い合わせ
            </h2>
            <p className="font-serif text-white/90 text-[16px] tracking-wide leading-relaxed mb-6">
              ご不明な点やご相談がございましたら、お気軽にお問い合わせください。
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
