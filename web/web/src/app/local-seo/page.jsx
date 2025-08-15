// 地域特化SEOページ
export const metadata = {
  title: "小松駅近く MASQUERADE | 徒歩8分のキャバクラ・ガールズバー",
  description: "小松駅から徒歩8分。MASQUERADE（マスカレード）は石川県小松市のキャバクラ・ガールズバー。0761-20-2022でご予約を。",
};

export default function LocalSEOPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">小松駅徒歩8分 MASQUERADE</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">アクセス・営業時間</h2>
            <div className="bg-gray-900 p-4 rounded">
              <p><strong>店名:</strong> MASQUERADE（マスカレード）</p>
              <p><strong>住所:</strong> 石川県小松市（小松駅徒歩8分）</p>
              <p><strong>電話:</strong> 0761-20-2022</p>
              <p><strong>営業:</strong> 月〜土 20:00-24:00</p>
              <p><strong>定休日:</strong> 日曜日</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">小松エリアからのアクセス</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>小松駅から徒歩8分</li>
              <li>小松空港から車で15分</li>
              <li>小松製作所から車で10分</li>
              <li>加賀市から車で20分</li>
              <li>金沢市から車で30分</li>
              <li>能美市から車で15分</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">こんな方におすすめ</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>小松市で上質なキャバクラ・ガールズバーをお探しの方</li>
              <li>歓送迎会・接待でご利用の方</li>
              <li>お一人様でも気軽に利用したい方</li>
              <li>カラオケを楽しみたい方（無料）</li>
              <li>個室でプライベートな時間を過ごしたい方</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">ご予約・お問い合わせ</h2>
            <div className="bg-yellow-600 p-4 rounded text-center">
              <p className="text-xl font-bold">0761-20-2022</p>
              <p>営業時間内（20:00-24:00）にお電話ください</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}