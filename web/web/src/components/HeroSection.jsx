import { Phone, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // 背景画像の配列（店舗の外観・内観）
  const backgroundImages = [
    {
      url: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "店内の雰囲気",
    },
    {
      url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "VIPルーム",
    },
    {
      url: "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "バーカウンター",
    },
    {
      url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "店舗外観",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 背景画像を自動切り替え（5秒間隔）
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* 背景画像スライダー */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* 装飾的な光の効果 */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-[600px] text-center mx-auto">
          {/* 装飾的なロゴマーク */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 border-2 border-[#d4af37] rounded-full animate-pulse"></div>
              <div className="absolute inset-2 border border-[#d4af37]/50 rounded-full"></div>
              <div className="flex items-center justify-center h-full">
                <div className="font-serif text-[20px] text-[#d4af37] font-bold">
                  M
                </div>
              </div>
            </div>
          </div>

          {/* メインタイトル */}
          <h1 className="font-serif font-bold text-white leading-[1.1] mb-8">
            <span className="block text-[clamp(28px,6vw,60px)] tracking-wider">
              MASQUERADE
            </span>
          </h1>

          {/* キャッチコピー */}
          <div className="mb-8">
            <div className="w-16 h-[1px] bg-[#d4af37] mb-6 mx-auto"></div>
            <p className="font-serif text-[18px] lg:text-[20px] text-white leading-[1.8] tracking-wide mb-4">
              小松の夜を彩る上質な時間
            </p>
            <p className="font-serif text-[16px] lg:text-[18px] text-white/90 leading-[1.8] tracking-wide">
              大人だけの特別な空間で過ごす、至福のひととき
            </p>
          </div>

          {/* 営業情報 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-[500px] mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Clock size={20} className="text-[#d4af37]" />
              <div className="text-[#d4af37] text-[12px] font-serif tracking-wider">
                OPEN
              </div>
              <div className="text-white text-[14px]">20:00 - 0:00</div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <MapPin size={20} className="text-[#d4af37]" />
              <div className="text-[#d4af37] text-[12px] font-serif tracking-wider">
                LOCATION
              </div>
              <div className="text-white text-[14px]">小松市</div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Phone size={20} className="text-[#d4af37]" />
              <div className="text-[#d4af37] text-[12px] font-serif tracking-wider">
                TEL
              </div>
              <div className="text-white text-[14px]">0761-20-2022</div>
            </div>
          </div>

          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-10 py-4 bg-[#d4af37] text-black font-serif font-bold text-[14px] tracking-wider hover:bg-[#b8941f] transition-all duration-300 shadow-lg">
              <Phone size={18} className="mr-3" />
              ご予約・お問い合わせ
            </button>

            <button className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-[#d4af37] text-[#d4af37] font-serif font-semibold text-[14px] tracking-wider hover:bg-[#d4af37]/10 transition-all duration-300">
              アクセス情報
            </button>
          </div>

          {/* 注意事項 */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/60 text-[12px] font-serif tracking-wide">
              ※ 20歳未満の方のご利用はお断りしております
            </p>
          </div>
        </div>
      </div>

      {/* スクロール指示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-white/60 text-[12px] font-serif tracking-wider mb-2">
          scroll
        </div>
        <div className="w-[1px] h-12 bg-[#d4af37] animate-pulse"></div>
      </div>

      {/* 背景画像インジケーター */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-[#d4af37] scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* 装飾的な要素 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
