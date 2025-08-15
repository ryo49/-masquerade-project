import { Heart, Star, Clock } from "lucide-react";
import { useState } from "react";

export default function CastSection() {
  const [selectedCast, setSelectedCast] = useState(null);

  const castMembers = [
    {
      id: 1,
      name: "あいり",
      age: 19,
      type: "キュート系",
      speciality: "会話上手",
      image:
        "https://raw.createusercontent.com/427ade79-cfdf-4a37-940d-97a06b436da0/",
      schedule: ["月", "水", "金", "土"],
      rating: 4.9,
      description:
        "明るい笑顔が魅力的なあいりちゃん。お話し上手で、どんな話題でも盛り上がります。",
    },
    {
      id: 2,
      name: "みゆき",
      age: 20,
      type: "エレガント系",
      speciality: "お酒の知識",
      image:
        "https://raw.createusercontent.com/724a2bcb-6457-4937-aa37-d3c33f0d4d09/",
      schedule: ["火", "木", "土", "日"],
      rating: 4.8,
      description:
        "上品で知的なみゆきさん。豊富なお酒の知識で素敵な時間を演出します。",
    },
    {
      id: 3,
      name: "さくら",
      age: 18,
      type: "癒し系",
      speciality: "歌とダンス",
      image:
        "https://raw.createusercontent.com/bd6791cd-2415-412f-9a86-80c807665037/",
      schedule: ["月", "火", "金", "日"],
      rating: 4.9,
      description:
        "優しい性格で癒しの時間を提供するさくらちゃん。歌とダンスも得意です。",
    },
    {
      id: 4,
      name: "ゆめか",
      age: 19,
      type: "フレッシュ系",
      speciality: "ゲーム",
      image:
        "https://raw.createusercontent.com/5bead491-4d71-490c-863c-43b9269bb820/",
      schedule: ["水", "木", "土", "日"],
      rating: 4.7,
      description:
        "元気いっぱいのゆめかちゃん。ゲームが得意で一緒に遊んで楽しめます。",
    },
    {
      id: 5,
      name: "ななみ",
      age: 20,
      type: "セクシー系",
      speciality: "カクテル作り",
      image:
        "https://raw.createusercontent.com/8a74d16a-774e-46b7-8195-c0f628c5c9b3/",
      schedule: ["月", "水", "土", "日"],
      rating: 4.8,
      description:
        "魅力的なななみちゃん。カクテル作りが得意で特別なドリンクを作ってくれます。",
    },
    {
      id: 6,
      name: "れい",
      age: 18,
      type: "天然系",
      speciality: "マッサージ",
      image:
        "https://raw.createusercontent.com/0efdba39-009c-4e58-88a8-29a234ef3bc7/",
      schedule: ["火", "木", "金", "土"],
      rating: 4.9,
      description:
        "天然で可愛らしいれいちゃん。優しいマッサージで疲れを癒してくれます。",
    },
    {
      id: 7,
      name: "あやめ",
      age: 22,
      type: "花魁系",
      speciality: "日本舞踊",
      image:
        "https://raw.createusercontent.com/3f570cc3-b782-4a89-bca7-5ccaf9262c89/",
      schedule: ["金", "土", "日"],
      rating: 5.0,
      description:
        "華やかな花魁スタイルで魅了するあやめさん。日本舞踊の美しい所作で特別なひとときを演出します。",
    },
  ];

  return (
    <section
      id="cast"
      className="relative py-20 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]"
    >
      {/* セクションヘッダー */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="text-center">
          <div className="mb-4">
            <span className="font-noto-sans font-medium text-[12px] text-pink-300 uppercase tracking-[0.1em] bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/20">
              OUR CAST
            </span>
          </div>
          <h2 className="font-noto-sans font-bold text-white text-[clamp(28px,5vw,48px)] leading-[1.2] mb-4">
            美しいキャストたち
          </h2>
          <p className="font-noto-sans text-gray-300 text-[16px] leading-[1.6] max-w-[600px] mx-auto">
            個性豊かで魅力的なキャストが、あなたの特別な夜をお手伝いします。
            <br />
            お気に入りのキャストを見つけてください。
          </p>
        </div>
      </div>

      {/* キャストグリッド */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {castMembers.map((cast) => (
            <div
              key={cast.id}
              className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10"
            >
              {/* 画像 */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={cast.image}
                  alt={cast.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* ハートアイコン（お気に入り） */}
                <button className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-pink-500/20 transition-all duration-200">
                  <Heart
                    size={18}
                    className="text-white hover:text-pink-400 transition-colors"
                  />
                </button>

                {/* レーティング */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="font-noto-sans text-[12px] text-white">
                    {cast.rating}
                  </span>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                {/* 名前と年齢 */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-noto-sans font-bold text-white text-[20px]">
                    {cast.name}
                  </h3>
                  <span className="font-noto-sans text-[14px] text-gray-400">
                    {cast.age}歳
                  </span>
                </div>

                {/* タイプと特技 */}
                <div className="flex gap-2 mb-4">
                  <span className="font-noto-sans text-[12px] text-pink-300 bg-pink-500/20 px-3 py-1 rounded-full">
                    {cast.type}
                  </span>
                  <span className="font-noto-sans text-[12px] text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                    {cast.speciality}
                  </span>
                </div>

                {/* 説明 */}
                <p className="font-noto-sans text-[14px] text-gray-300 leading-[1.5] mb-4">
                  {cast.description}
                </p>

                {/* 出勤日 */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-pink-400" />
                    <span className="font-noto-sans text-[12px] text-pink-300">
                      出勤予定
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {["月", "火", "水", "木", "金", "土", "日"].map((day) => (
                      <span
                        key={day}
                        className={`font-noto-sans text-[12px] w-6 h-6 rounded-full flex items-center justify-center ${
                          cast.schedule.includes(day)
                            ? "bg-pink-500 text-white"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* アクションボタン */}
                <button
                  onClick={() => setSelectedCast(cast)}
                  className="w-full bg-gradient-to-r from-[#ff6b9d] to-[#c44b99] text-white font-noto-sans font-semibold text-[14px] py-3 rounded-full hover:from-[#ff5a8c] hover:to-[#b03a88] hover:shadow-lg hover:shadow-pink-500/25 active:from-[#e65584] active:to-[#9e3377] active:scale-[0.98] transition-all duration-200"
                >
                  指名予約
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 詳細を見るボタン */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-pink-400/50 text-pink-400 font-noto-sans font-semibold text-[16px] rounded-full hover:border-pink-400 hover:bg-pink-400/10 active:bg-pink-400/20 active:scale-[0.98] transition-all duration-200">
            すべてのキャストを見る
          </button>
        </div>
      </div>

      {/* モーダル（選択されたキャストの詳細） */}
      {selectedCast && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 max-w-md w-full border border-white/20">
            <div className="text-center">
              <img
                src={selectedCast.image}
                alt={selectedCast.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-noto-sans font-bold text-white text-[24px] mb-2">
                {selectedCast.name}
              </h3>
              <p className="font-noto-sans text-gray-300 text-[14px] mb-6">
                {selectedCast.description}
              </p>
              <div className="flex gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-[#ff6b9d] to-[#c44b99] text-white font-noto-sans font-semibold rounded-full">
                  指名予約
                </button>
                <button
                  onClick={() => setSelectedCast(null)}
                  className="px-6 py-3 bg-gray-700 text-white font-noto-sans font-semibold rounded-full"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
