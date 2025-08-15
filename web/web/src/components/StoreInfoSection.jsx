import { MapPin, Clock, Phone, Train, Car, Wifi, Shield, Music, Camera } from "lucide-react";

export default function StoreInfoSection() {
  const storeFeatures = [
    { icon: Wifi, title: "高速Wi-Fi完備", description: "快適なネット環境" },
    { icon: Shield, title: "完全個室対応", description: "プライバシー保護" },
    { icon: Music, title: "カラオケ設備", description: "最新機種完備" },
    { icon: Camera, title: "撮影サービス", description: "記念写真撮影" }
  ];

  const accessInfo = [
    { icon: Train, title: "電車でお越しの場合", description: "銀座駅C8出口より徒歩3分\n東銀座駅A2出口より徒歩5分" },
    { icon: Car, title: "お車でお越しの場合", description: "近隣コインパーキング多数\n提携駐車場割引あり" }
  ];

  return (
    <section id="access" className="relative py-20 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="font-noto-sans font-medium text-[12px] text-pink-300 uppercase tracking-[0.1em] bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/20">
              STORE INFO
            </span>
          </div>
          <h2 className="font-noto-sans font-bold text-white text-[clamp(28px,5vw,48px)] leading-[1.2] mb-4">
            店舗情報・アクセス
          </h2>
          <p className="font-noto-sans text-gray-300 text-[16px] leading-[1.6] max-w-[600px] mx-auto">
            銀座の中心部に位置する当店は、アクセス抜群で洗練された空間をご提供しています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左側：店舗情報 */}
          <div className="space-y-8">
            {/* 基本情報 */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="font-noto-sans font-bold text-white text-[24px] mb-6 flex items-center gap-3">
                <MapPin className="text-pink-400" size={24} />
                基本情報
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-noto-sans font-semibold text-pink-300 text-[16px] mb-2">店名</h4>
                  <p className="font-noto-sans text-white text-[18px]">Club Elegance</p>
                </div>
                
                <div>
                  <h4 className="font-noto-sans font-semibold text-pink-300 text-[16px] mb-2">住所</h4>
                  <p className="font-noto-sans text-gray-300 text-[16px] leading-relaxed">
                    〒104-0061<br />
                    東京都中央区銀座5-10-15<br />
                    銀座クリスタルビル 7F
                  </p>
                </div>
                
                <div>
                  <h4 className="font-noto-sans font-semibold text-pink-300 text-[16px] mb-2 flex items-center gap-2">
                    <Phone size={16} />
                    電話番号
                  </h4>
                  <p className="font-noto-sans text-white text-[18px]">03-1234-5678</p>
                </div>
                
                <div>
                  <h4 className="font-noto-sans font-semibold text-pink-300 text-[16px] mb-2 flex items-center gap-2">
                    <Clock size={16} />
                    営業時間
                  </h4>
                  <div className="space-y-2">
                    <p className="font-noto-sans text-white text-[16px]">20:00 - 5:00</p>
                    <p className="font-noto-sans text-gray-400 text-[14px]">年中無休（年末年始を除く）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 設備・サービス */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="font-noto-sans font-bold text-white text-[24px] mb-6">設備・サービス</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {storeFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center">
                        <IconComponent size={20} className="text-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-noto-sans font-semibold text-white text-[16px] mb-1">{feature.title}</h4>
                        <p className="font-noto-sans text-gray-400 text-[14px]">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 右側：アクセス情報とマップ */}
          <div className="space-y-8">
            {/* アクセス情報 */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="font-noto-sans font-bold text-white text-[24px] mb-6">アクセス</h3>
              
              <div className="space-y-8">
                {accessInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                        <IconComponent size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-noto-sans font-semibold text-white text-[16px] mb-2">{info.title}</h4>
                        <p className="font-noto-sans text-gray-300 text-[14px] leading-relaxed whitespace-pre-line">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* マップエリア */}
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10">
              {/* マップヘッダー */}
              <div className="p-6 border-b border-white/10">
                <h3 className="font-noto-sans font-bold text-white text-[20px]">地図</h3>
              </div>
              
              {/* マップ表示エリア */}
              <div className="relative h-[300px] bg-gray-700/50">
                {/* Google Maps風のプレースホルダー */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-pink-400 mx-auto mb-4" />
                    <h4 className="font-noto-sans font-semibold text-white text-[18px] mb-2">Club Elegance</h4>
                    <p className="font-noto-sans text-gray-400 text-[14px]">
                      東京都中央区銀座5-10-15<br />
                      銀座クリスタルビル 7F
                    </p>
                  </div>
                </div>
                
                {/* グリッド背景 */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* マップフッター */}
              <div className="p-6 bg-gray-900/50">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-center sm:text-left">
                    <p className="font-noto-sans text-gray-400 text-[14px]">
                      最寄り駅から徒歩3分
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#ff6b9d] to-[#c44b99] text-white font-noto-sans font-semibold text-[14px] rounded-full hover:from-[#ff5a8c] hover:to-[#b03a88] transition-all duration-200">
                    Google Mapで開く
                  </button>
                </div>
              </div>
            </div>

            {/* 予約案内 */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-pink-500/20">
              <div className="text-center">
                <h3 className="font-noto-sans font-bold text-white text-[20px] mb-3">
                  ご予約・お問い合わせ
                </h3>
                <p className="font-noto-sans text-gray-300 text-[14px] mb-6 leading-relaxed">
                  お電話またはWebフォームより<br />
                  お気軽にお問い合わせください
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#ff6b9d] to-[#c44b99] text-white font-noto-sans font-semibold text-[16px] rounded-full hover:from-[#ff5a8c] hover:to-[#b03a88] transition-all duration-200">
                    <Phone size={18} className="mr-2" />
                    電話で予約
                  </button>
                  <button className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 text-white font-noto-sans font-semibold text-[16px] rounded-full hover:border-pink-400 hover:bg-pink-400/10 transition-all duration-200">
                    Webで予約
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}