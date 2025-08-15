import { MapPin, Clock, Phone, Train, Car } from "lucide-react";

export default function AccessSection() {
  return (
    <section
      id="access"
      className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] text-white tracking-wider mb-4">
            ACCESS
          </h2>
          <p className="font-serif text-[16px] text-white/70 tracking-wide max-w-[600px] mx-auto">
            小松市の中心部に位置し、アクセス良好な立地です
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 左側：店舗情報 */}
          <div>
            {/* 基本情報 */}
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-8 mb-8">
              <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-8">
                INFORMATION
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-serif text-[16px] text-[#d4af37] tracking-wide mb-3">
                    店名
                  </h4>
                  <p className="font-serif text-white text-[18px] tracking-wide">
                    MASQUERADE
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-[16px] text-[#d4af37] tracking-wide mb-3 flex items-center gap-2">
                    <MapPin size={18} />
                    住所
                  </h4>
                  <p className="font-serif text-white/90 text-[16px] leading-relaxed tracking-wide">
                    〒923-0864
                    <br />
                    石川県小松市土居原町 199
                    <br />
                    VILLAビル 3F
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-[16px] text-[#d4af37] tracking-wide mb-3 flex items-center gap-2">
                    <Phone size={16} />
                    電話
                  </h4>
                  <p className="font-serif text-white text-[18px] tracking-wide">
                    0761-123-4567
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-[16px] text-[#d4af37] tracking-wide mb-3 flex items-center gap-2">
                    <Clock size={16} />
                    営業時間
                  </h4>
                  <div className="space-y-2">
                    <p className="font-serif text-white text-[16px] tracking-wide">
                      20:00 - 3:00
                    </p>
                    <p className="font-serif text-white/70 text-[14px] tracking-wide">
                      年中無休
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* アクセス情報 */}
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-8">
              <h3 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
                交通アクセス
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Train size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-[16px] tracking-wide mb-2">
                      電車でお越しの場合
                    </h4>
                    <div className="space-y-1 text-[14px] text-white/80 font-serif tracking-wide">
                      <p>JR北陸本線「小松駅」徒歩8分</p>
                      <p>小松バス「土居原町」バス停徒歩2分</p>
                      <p>小松空港から車で約15分</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Car size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-white text-[16px] tracking-wide mb-2">
                      お車でお越しの場合
                    </h4>
                    <div className="space-y-1 text-[14px] text-white/80 font-serif tracking-wide">
                      <p>北陸自動車道「小松IC」より5分</p>
                      <p>国道8号線「土居原町交差点」すぐ</p>
                      <p>専用駐車場完備（3台）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：マップ&予約案内 */}
          <div className="space-y-8">
            {/* マップエリア */}
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 overflow-hidden">
              {/* マップヘッダー */}
              <div className="p-6 border-b border-[#d4af37]/20">
                <h3 className="font-serif text-[20px] text-white tracking-wider">
                  MAP
                </h3>
              </div>

              {/* マップ表示エリア */}
              <div className="relative h-[350px] bg-[#0f0f0f]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-[#d4af37] mx-auto mb-4" />
                    <h4 className="font-serif text-white text-[18px] mb-2 tracking-wider">
                      MASQUERADE
                    </h4>
                    <p className="font-serif text-white/70 text-[14px] tracking-wide leading-relaxed">
                      石川県小松市土居原町 199
                      <br />
                      VILLAビル 3F
                    </p>
                  </div>
                </div>

                {/* グリッド背景 */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(212,175,55,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,.3) 1px, transparent 1px)",
                    backgroundSize: "25px 25px",
                  }}
                ></div>
              </div>

              {/* マップフッター */}
              <div className="p-6 bg-[#0f0f0f] border-t border-[#d4af37]/10">
                <div className="flex justify-between items-center">
                  <p className="font-serif text-white/70 text-[14px] tracking-wide">
                    小松駅より徒歩8分
                  </p>
                  <button className="px-6 py-3 bg-[#d4af37] text-black font-serif font-semibold text-[14px] tracking-wider hover:bg-[#b8941f] transition-all duration-300">
                    Google Map
                  </button>
                </div>
              </div>
            </div>

            {/* 予約案内 */}
            <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37] p-8">
              <div className="text-center">
                <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-4">
                  RESERVATION
                </h3>
                <p className="font-serif text-white/80 text-[16px] tracking-wide leading-relaxed mb-8">
                  ご予約・お問い合わせは
                  <br />
                  お電話にて承っております
                </p>

                <div className="mb-8">
                  <div className="font-serif text-[14px] text-[#d4af37] tracking-wider mb-2">
                    TEL
                  </div>
                  <div className="font-serif text-[28px] text-white font-bold tracking-wide mb-4">
                    0761-123-4567
                  </div>
                  <div className="font-serif text-[14px] text-white/70 tracking-wide">
                    受付時間：19:00 - 2:00
                  </div>
                </div>

                <button className="w-full py-4 bg-[#d4af37] text-black font-serif font-bold text-[16px] tracking-wider hover:bg-[#b8941f] transition-all duration-300 flex items-center justify-center gap-3">
                  <Phone size={20} />
                  今すぐ電話で予約
                </button>

                <div className="mt-6 pt-6 border-t border-[#d4af37]/20">
                  <p className="font-serif text-[12px] text-white/60 tracking-wide leading-relaxed">
                    ※ 20歳未満の方のご入店はお断りいたします
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
