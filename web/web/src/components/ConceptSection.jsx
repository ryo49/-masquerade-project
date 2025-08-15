export default function ConceptSection() {
  return (
    <section
      id="concept"
      className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-6"></div>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] text-white tracking-wider mb-4">
            CONCEPT
          </h2>
          <p className="font-serif text-[16px] text-white/70 tracking-wide max-w-[600px] mx-auto">
            小松市で上質な夜をお過ごしいただく、大人の時間を彩るおもてなし
          </p>
        </div>

        {/* メインコンセプト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* 左側：コンセプト説明 */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-4">
                洗練された空間
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[1.8] tracking-wide">
                小松駅前の好立地で、新幹線やホテルからのアクセスも良好。石川県小松市のキャバクラ・ガールズバーとして、上質な家具と照明が織りなす洗練されたインテリアで、心安らぐひとときをお過ごしいただけます。
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-4">
                心のこもったサービス
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[1.8] tracking-wide">
                小松市のクラブ・ラウンジの中でも特に厳選された女性スタッフが、お客様一人ひとりに寄り添った丁寧なおもてなしを提供いたします。会話を楽しみながら、特別な時間をお約束します。
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[24px] text-[#d4af37] tracking-wider mb-4">
                プライベートな空間
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[1.8] tracking-wide">
                小松エリアのスナック・夜店とは一線を画すプライバシーを重視した空間設計で、大切なお客様に安心してお過ごしいただける落ち着いた環境をご用意しております。
              </p>
            </div>
          </div>

          {/* 右側：店内画像 */}
          <div className="space-y-6">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="小松市キャバクラ MASQUERADE 店内の雰囲気"
                className="w-full h-[300px] object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="小松ガールズバー MASQUERADE バーカウンター"
                className="w-full h-[200px] object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* 特徴 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-[#d4af37] rounded-full"></div>
            </div>
            <h4 className="font-serif text-[18px] text-[#d4af37] tracking-wider mb-3">
              駅近立地
            </h4>
            <p className="font-serif text-[14px] text-white/80 leading-[1.6] tracking-wide">
              小松駅徒歩8分、新幹線・ホテルからのアクセス抜群の好立地
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-[#d4af37] rounded-full"></div>
            </div>
            <h4 className="font-serif text-[18px] text-[#d4af37] tracking-wider mb-3">
              心のこもったサービス
            </h4>
            <p className="font-serif text-[14px] text-white/80 leading-[1.6] tracking-wide">
              厳選された女性スタッフが、お客様一人ひとりに寄り添った丁寧なおもてなしを提供いたします。会話を楽しみながら、特別な時間をお約束します。
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-[#d4af37] rounded-full"></div>
            </div>
            <h4 className="font-serif text-[18px] text-[#d4af37] tracking-wider mb-3">
              カラオケ無料
            </h4>
            <p className="font-serif text-[14px] text-white/80 leading-[1.6] tracking-wide">
              北陸エリアでも珍しいカラオケを無料でご提供し、楽しいひとときを演出
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
