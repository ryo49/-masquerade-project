import { ArrowLeft } from "lucide-react";
import RecruitSection from "@/components/RecruitSection";

export default function RecruitPage() {
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
              RECRUIT
            </h1>
            <p className="font-serif text-[16px] text-white/70 tracking-wide">
              採用情報・求人案内
            </p>
          </div>
        </div>
      </div>

      <RecruitSection />
    </div>
  );
}
