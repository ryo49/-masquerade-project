import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ConceptSection from "../components/ConceptSection";
import SystemSection from "../components/SystemSection";
import AccessSection from "../components/AccessSection";
import RecruitSection from "../components/RecruitSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// SEO対策のためのメタデータ - 強化版
export const metadata = {
  description:
    "小松市のキャバクラ・ガールズバー「MASQUERADE（マスカレード）」。小松駅徒歩8分の好立地で、厳選された女性スタッフが心のこもったおもてなしを提供。飲み屋・ポケバラをお探しの方にも最適。カラオケ無料、20:00-0:00営業。ご予約・お問い合わせは0761-20-2022まで。",
  keywords:
    "キャバクラ,ガールズバー,小松,小松市,クラブ,ラウンジ,スナック,夜,飲み屋,接客,女性スタッフ,カラオケ,小松夜店,石川県,北陸,MASQUERADE,マスカレード,masquerade,ポケバラ,ナイトクラブ,バー,小松夜遊び,小松飲み屋,小松ポケバラ,小松駅,ナイトライフ,0761-20-2022,小松マスカレード,マスカレード小松,小松市マスカレード",
  openGraph: {
    title:
      "MASQUERADE（マスカレード）| 小松市のキャバクラ・ガールズバー・飲み屋・ポケバラ",
    description:
      "小松市で上質な夜をお過ごしください。マスカレード（MASQUERADE）は厳選された女性スタッフが心のこもったおもてなしでお迎えします。飲み屋・ポケバラをお探しの方にも最適。",
    type: "website",
    url: "https://masquerade.created.app",
    siteName: "MASQUERADE（マスカレード）",
  },
  alternates: {
    canonical: "https://masquerade.created.app",
  },
  other: {
    "google-site-verification": "TTrbdMB5RHdJyAKEmCSfPpNqK4YE-VKfifDhj-S0UWE",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* 構造化データ追加 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NightClub",
            name: "MASQUERADE（マスカレード）",
            alternateName: ["マスカレード", "masquerade", "小松 MASQUERADE"],
            description:
              "小松市の上質なキャバクラ・ガールズバー。厳選された女性スタッフが心のこもったおもてなしでお迎えします。",
            url: "https://masquerade.created.app",
            telephone: "0761-20-2022",
            address: {
              "@type": "PostalAddress",
              streetAddress: "小松駅徒歩8分",
              addressLocality: "小松市",
              addressRegion: "石川県",
              addressCountry: "JP",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 36.4017,
              longitude: 136.4456,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "20:00",
              closes: "24:00",
            },
            priceRange: "$$-$$$",
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "カラオケ無料" },
              { "@type": "LocationFeatureSpecification", name: "個室完備" },
              { "@type": "LocationFeatureSpecification", name: "駐車場あり" },
            ],
            areaServed: [
              { "@type": "Place", name: "小松市" },
              { "@type": "Place", name: "加賀市" },
              { "@type": "Place", name: "能美市" },
              { "@type": "Place", name: "白山市" },
              { "@type": "Place", name: "金沢市" },
            ],
          }),
        }}
      />

      {/* SEO向けの非表示コンテンツ */}
      <div className="sr-only">
        <h1>
          小松市のキャバクラ・ガールズバー・飲み屋・ポケバラ
          MASQUERADE（マスカレード）
        </h1>
        <p>
          石川県小松市にあるキャバクラ・ガールズバー「MASQUERADE（マスカレード）」は、小松駅から徒歩8分の好立地にございます。上質な空間で、厳選された女性スタッフが心のこもったおもてなしを提供いたします。飲み屋・ポケバラをお探しの方にも最適な特別空間です。カラオケ無料、個室完備で、大切なお時間をお過ごしください。営業時間は20:00-0:00、ご予約・お問い合わせは0761-20-2022まで。小松エリアのナイトライフを彩る上質な飲み屋・ポケバラです。masquerade、マスカレードとしても親しまれています。
        </p>

        {/* 詳細な営業情報 */}
        <div>
          <h2>営業時間・アクセス情報</h2>
          <p>営業時間：月曜日〜土曜日 20:00-24:00（日曜定休）</p>
          <p>住所：石川県小松市（小松駅徒歩8分）</p>
          <p>電話番号：0761-20-2022</p>
          <p>最寄り駅：小松駅（徒歩8分）</p>
          <p>駐車場：あり</p>
        </div>

        {/* サービス詳細 */}
        <div>
          <h2>サービス・料金</h2>
          <p>カラオケ無料、個室完備、指名システム</p>
          <p>ドリンク各種、フード軽食あり</p>
          <p>歓送迎会、接待、お一人様歓迎</p>
          <p>クレジットカード対応</p>
        </div>

        {/* 地域キーワード強化 */}
        <div>
          <h2>対応エリア</h2>
          <p>小松市、加賀市、能美市、白山市、金沢市からのお客様歓迎</p>
          <p>小松空港、小松工業団地、小松製作所周辺の方もご利用ください</p>
          <p>小松駅周辺、小松市中心街の夜の社交場</p>
        </div>

        <ul>
          <li>小松市 キャバクラ MASQUERADE</li>
          <li>小松 ガールズバー マスカレード</li>
          <li>小松 クラブ 20時から</li>
          <li>小松 ラウンジ 個室</li>
          <li>小松 スナック カラオケ</li>
          <li>小松 夜店 駅近</li>
          <li>小松 飲み屋 女性スタッフ</li>
          <li>小松 ポケバラ 接待</li>
          <li>小松 masquerade 0761-20-2022</li>
          <li>小松駅 徒歩8分 キャバクラ</li>
          <li>石川県小松市 ナイトクラブ</li>
          <li>小松製作所 近く 飲み屋</li>
          <li>小松空港 アクセス良好</li>
          <li>北陸 高級クラブ</li>
          <li>小松市中心街 夜遊び</li>
          <li>加賀 白山 からアクセス</li>
          <li>金沢 からも30分</li>
          <li>能美市 からも近い</li>
          <li>小松夜の社交場</li>
          <li>小松接待クラブ</li>
          <li>小松歓送迎会</li>
          <li>小松マスカレード MASQUERADE</li>
          <li>マスカレード 小松市</li>
          <li>小松市 マスカレード キャバクラ</li>
          <li>マスカレード ガールズバー 小松</li>
          <li>石川県 マスカレード 小松</li>
          <li>小松駅 マスカレード 徒歩8分</li>
          <li>マスカレード 小松 20:00</li>
          <li>小松 マスカレード 0761-20-2022</li>
          <li>マスカレード 小松市 夜店</li>
          <li>小松 マスカレード クラブ</li>
          <li>マスカレード 小松駅 近く</li>
          <li>小松市中心街 マスカレード</li>
        </ul>

        {/* マスカレード専用セクション - 日本語キーワード強化 */}
        <div>
          <h2>マスカレード（MASQUERADE）について</h2>
          <p>
            小松市のマスカレード（MASQUERADE）は、上質なサービスを提供するキャバクラ・ガールズバーです。マスカレードでは、厳選された女性スタッフがお客様をお迎えします。
          </p>
          <p>
            マスカレード（小松市）の特徴：カラオケ無料、個室完備、指名システム
          </p>
          <p>小松マスカレードの営業時間：20:00-24:00（月〜土）</p>
          <p>マスカレード小松店へのアクセス：小松駅徒歩8分</p>
          <p>お電話でのご予約：0761-20-2022（マスカレード専用）</p>
          <p>石川県小松市のナイトライフといえばマスカレード</p>
          <p>小松市で飲み屋・ポケバラをお探しならマスカレードへ</p>
          <p>マスカレード小松は、北陸地方でも評判の高級クラブです</p>
          <p>小松製作所、小松空港からもアクセス良好なマスカレード</p>
          <p>小松市中心街の夜の社交場として愛されるマスカレード</p>
        </div>

        {/* 関連検索キーワード強化 */}
        <div>
          <h3>関連検索ワード</h3>
          <p>
            小松 マスカレード、マスカレード 小松、小松市 マスカレード、石川県
            マスカレード、マスカレード キャバクラ、マスカレード
            ガールズバー、小松駅 マスカレード、マスカレード 0761-20-2022、小松
            夜店 マスカレード、小松市 クラブ マスカレード、マスカレード 小松
            営業時間、小松 飲み屋 マスカレード、マスカレード 小松 予約、小松市
            ポケバラ マスカレード
          </p>
        </div>
      </div>

      {/* ヘッダー */}
      <Header />

      {/* メインヒーローセクション */}
      <HeroSection />

      {/* コンセプトセクション */}
      <ConceptSection />

      {/* 料金システムセクション */}
      <SystemSection />

      {/* アクセス情報セクション */}
      <AccessSection />

      {/* リクルートセクション */}
      <RecruitSection />

      {/* お問い合わせセクション */}
      <ContactSection />

      {/* フッター */}
      <Footer />
    </div>
  );
}
