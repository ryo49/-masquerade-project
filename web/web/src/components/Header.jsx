import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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

          {/* ナビゲーション（デスクトップ） */}
          <nav className="hidden lg:flex space-x-12">
            <a
              href="#"
              className="font-serif text-[14px] text-white hover:text-[#d4af37] relative group transition-all duration-300 tracking-wider"
            >
              HOME
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#concept"
              className="font-serif text-[14px] text-white hover:text-[#d4af37] relative group transition-all duration-300 tracking-wider"
            >
              CONCEPT
            </a>
            <a
              href="#system"
              className="font-serif text-[14px] text-white hover:text-[#d4af37] relative group transition-all duration-300 tracking-wider"
            >
              SYSTEM
            </a>
            <a
              href="#access"
              className="font-serif text-[14px] text-white hover:text-[#d4af37] relative group transition-all duration-300 tracking-wider"
            >
              ACCESS
            </a>
            <a
              href="#recruit"
              className="font-serif text-[14px] text-white hover:text-[#d4af37] relative group transition-all duration-300 tracking-wider"
            >
              RECRUIT
            </a>
          </nav>

          {/* 右側 */}
          <div className="flex items-center space-x-6">
            {/* 電話番号 */}
            <div className={`${mobileMenuOpen ? "hidden" : "hidden md:block"}`}>
              <div className="text-[#d4af37] text-[12px] font-serif">
                RESERVATION
              </div>
              <div className="text-white text-[18px] font-bold">
                0761-20-2022
              </div>
            </div>

            {/* モバイルメニューボタン */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-[#d4af37]" />
              ) : (
                <Menu size={24} className="text-[#d4af37]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-md border-b border-[#d4af37]/20">
          <div className="max-w-[1280px] mx-auto px-6 py-8">
            <nav className="flex flex-col space-y-6">
              <a
                href="#"
                className="font-serif text-[16px] text-white hover:text-[#d4af37] transition-colors duration-200 tracking-wider"
              >
                HOME
              </a>
              <a
                href="#concept"
                className="font-serif text-[16px] text-white hover:text-[#d4af37] transition-colors duration-200 tracking-wider"
              >
                CONCEPT
              </a>
              <a
                href="#system"
                className="font-serif text-[16px] text-white hover:text-[#d4af37] transition-colors duration-200 tracking-wider"
              >
                SYSTEM
              </a>
              <a
                href="#access"
                className="font-serif text-[16px] text-white hover:text-[#d4af37] transition-colors duration-200 tracking-wider"
              >
                ACCESS
              </a>
              <a
                href="#recruit"
                className="font-serif text-[16px] text-white hover:text-[#d4af37] transition-colors duration-200 tracking-wider"
              >
                RECRUIT
              </a>

              {/* モバイル用電話番号 */}
              <div className="pt-4 border-t border-[#d4af37]/20">
                <div className="text-[#d4af37] text-[12px] font-serif">
                  RESERVATION
                </div>
                <div className="text-white text-[18px] font-bold">
                  0761-20-2022
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
