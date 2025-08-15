import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  User,
  Calendar,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
    visitTime: "",
    guests: "1",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // フォーム送信のシミュレーション
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // 3秒後にフォームをリセット
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        visitDate: "",
        visitTime: "",
        guests: "1",
        message: "",
      });
    }, 3000);
  };

  const timeSlots = [
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] text-white tracking-wider mb-4">
            CONTACT
          </h2>
          <p className="font-serif text-[16px] text-white/70 tracking-wide max-w-[600px] mx-auto">
            ご予約・お問い合わせはこちらから
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 左側：連絡先情報 */}
          <div className="space-y-8">
            {/* 電話予約 */}
            <div className="bg-gradient-to-b from-[#2a241a] to-[#1a1a1a] border border-[#d4af37] p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone size={24} className="text-black" />
                </div>
                <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-4">
                  お電話でのご予約
                </h3>
                <div className="mb-6">
                  <div className="font-serif text-[32px] text-white font-bold tracking-wide mb-2">
                    0761-20-2022
                  </div>
                  <div className="font-serif text-[14px] text-white/70 tracking-wide">
                    受付時間：20:00 - 0:00
                  </div>
                </div>
                <button className="w-full py-4 bg-[#d4af37] text-black font-serif font-bold text-[16px] tracking-wider hover:bg-[#b8941f] transition-all duration-300">
                  今すぐ電話する
                </button>
              </div>
            </div>

            {/* 営業情報 */}
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-8">
              <h4 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6 flex items-center gap-3">
                <Clock size={20} />
                営業案内
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-serif text-white text-[16px] tracking-wide">
                    営業時間
                  </span>
                  <span className="font-serif text-white/90 text-[16px]">
                    20:00 - 0:00
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-serif text-white text-[16px] tracking-wide">
                    営業日
                  </span>
                  <span className="font-serif text-white/90 text-[16px]">
                    月〜土曜日
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-serif text-white text-[16px] tracking-wide">
                    定休日
                  </span>
                  <span className="font-serif text-white/90 text-[16px]">
                    日曜日
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#d4af37]/20">
                <p className="font-serif text-[12px] text-white/60 tracking-wide leading-relaxed">
                  ※ ご予約はお電話にて承っております
                  <br />※ 当日のご予約も可能です
                  <br />※ 祝日が月曜日の場合、日曜日営業・月曜日休業
                </p>
              </div>
            </div>

            {/* その他の連絡方法 */}
            <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-8">
              <h4 className="font-serif text-[20px] text-[#d4af37] tracking-wider mb-6">
                その他のお問い合わせ
              </h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-white text-[16px] tracking-wide mb-1">
                      メール
                    </h5>
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      info@masquerade-komatsu.com
                    </p>
                    <p className="font-serif text-white/60 text-[12px] mt-1">
                      ※ 返信は営業時間内
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-white text-[16px] tracking-wide mb-1">
                      LINE
                    </h5>
                    <p className="font-serif text-white/80 text-[14px] tracking-wide">
                      @masquerade-komatsu
                    </p>
                    <p className="font-serif text-white/60 text-[12px] mt-1">
                      ※ お気軽にメッセージください
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：Web予約フォーム */}
          <div className="bg-[#1a1a1a] border border-[#d4af37]/20 p-8">
            <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-8 text-center">
              Web予約フォーム
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-serif text-white text-[20px] tracking-wider mb-4">
                  ご予約を承りました
                </h4>
                <p className="font-serif text-white/80 text-[14px] tracking-wide leading-relaxed">
                  担当者よりお電話にてご連絡いたします。
                  <br />
                  お楽しみにお待ちください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-serif text-[#d4af37] text-[14px] mb-3 tracking-wide">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0f0f0f] border border-[#d4af37]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] transition-all duration-200 font-serif"
                        placeholder="お名前をご入力ください"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif text-[#d4af37] text-[14px] mb-3 tracking-wide">
                      電話番号 <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-[#0f0f0f] border border-[#d4af37]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] transition-all duration-200 font-serif"
                        placeholder="090-1234-5678"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-serif text-[#d4af37] text-[14px] mb-3 tracking-wide">
                    メールアドレス
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-[#0f0f0f] border border-[#d4af37]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] transition-all duration-200 font-serif"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-serif text-[#d4af37] text-[14px] mb-3 tracking-wide">
                      来店希望日
                    </label>
                    <div className="relative">
                      <Calendar
                        size={18}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                      />
                      <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f0f0f] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37] transition-all duration-200 font-serif"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif text-[#d4af37] text-[14px] mb-3 tracking-wide">
                      来店希望時間
                    </label>
                    <div className="relative">
                      <Clock
                        size={18}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                      />
                      <select
                        name="visitTime"
                        value={formData.visitTime}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#0f0f0f] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37] transition-all duration-200 appearance-none font-serif"
                      >
                        <option value="" className="bg-[#0f0f0f]">
                          時間をお選びください
                        </option>
                        {timeSlots.map((time, index) => (
                          <option
                            key={index}
                            value={time}
                            className="bg-[#0f0f0f]"
                          >
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-serif text-[#d4af37] text-[14px] mb-3 tracking-wide">
                    人数
                  </label>
                  <div className="relative">
                    <Users
                      size={18}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                    />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-[#0f0f0f] border border-[#d4af37]/30 text-white focus:outline-none focus:border-[#d4af37] transition-all duration-200 appearance-none font-serif"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option
                          key={num}
                          value={num.toString()}
                          className="bg-[#0f0f0f]"
                        >
                          {num}名
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-serif text-[#d4af37] text-[14px] mb-3 tracking-wide">
                    ご要望・メッセージ
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#d4af37]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] transition-all duration-200 resize-none font-serif"
                    placeholder="ご要望やご質問がございましたらお聞かせください"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#d4af37] text-black font-serif font-bold text-[16px] tracking-wider hover:bg-[#b8941f] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      送信中...
                    </div>
                  ) : (
                    "予約を送信する"
                  )}
                </button>

                <p className="font-serif text-white/60 text-[12px] text-center leading-relaxed tracking-wide">
                  送信いただいた内容を確認の上、担当者よりお電話いたします。
                  <br />
                  お急ぎの場合は直接お電話でご連絡ください。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
