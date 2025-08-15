import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const metadata = {
  title: {
    default:
      "MASQUERADE（マスカレード）| 小松市のキャバクラ・ガールズバー・飲み屋・ポケバラ",
    template: "%s | MASQUERADE（マスカレード）小松市",
  },
  description:
    "小松市のキャバクラ・ガールズバー「MASQUERADE（マスカレード）」。小松駅徒歩8分、上質な空間で心のこもったサービスを提供。マスカレードは飲み屋・ポケバラをお探しの方にも最適。20:00-0:00営業。ご予約はお電話で。",
  keywords:
    "キャバクラ,ガールズバー,小松,小松市,クラブ,ラウンジ,スナック,夜,飲み屋,接客,女性スタッフ,カラオケ,小松夜店,石川県,北陸,MASQUERADE,マスカレード,masquerade,ポケバラ,ナイトクラブ,バー,小松夜遊び,小松飲み屋,小松ポケバラ,小松駅マスカレード,マスカレード小松,小松市マスカレード,石川県マスカレード,小松駅マスカレード",
  openGraph: {
    title:
      "MASQUERADE（マスカレード）| 小松市のキャバクラ・ガールズバー・飲み屋・ポケバラ",
    description:
      "小松市の上質なキャバクラ・ガールズバー。マスカレード（MASQUERADE）は厳選された女性スタッフが心のこもったおもてなしでお迎えします。小松市で飲み屋・ポケバラをお探しの方にも最適な空間です。",
    url: "https://masquerade.created.app",
    siteName: "MASQUERADE（マスカレード）",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MASQUERADE マスカレード 小松市のキャバクラ・ガールズバー・飲み屋・ポケバラ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MASQUERADE（マスカレード）| 小松市のキャバクラ・ガールズバー・飲み屋・ポケバラ",
    description:
      "小松市の上質なキャバクラ・ガールズバー。マスカレード（MASQUERADE）が心のこもったおもてなしでお迎えします。小松市で飲み屋・ポケバラをお探しの方にも。",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://masquerade.created.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "TTrbdMB5RHdJyAKEmCSfPpNqK4YE-VKfifDhj-S0UWE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics GA4 - Must be first for Search Console verification */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E8CTQMG4DK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E8CTQMG4DK');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WSGQ8RLF');`,
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d4af37" />
        <meta name="author" content="MASQUERADE" />
        <meta name="geo.region" content="JP-17" />
        <meta name="geo.placename" content="小松市" />
        <meta name="geo.position" content="36.4017;136.4456" />
        <meta name="ICBM" content="36.4017, 136.4456" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="Uku2Va3MorQPHUzZtFNuuYIy5nrxUQg3WgzzERqPw-s"
        />

        {/* 構造化データ - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NightClub",
              name: "MASQUERADE（マスカレード）",
              alternateName: [
                "マスカレード",
                "小松マスカレード",
                "マスカレード小松",
                "小松市マスカレード",
                "MASQUERADE小松",
                "masquerade小松市",
              ],
              description:
                "小松市の上質なキャバクラ・ガールズバー。マスカレード（MASQUERADE）は厳選された女性スタッフが心のこもったおもてなしでお迎えします。",
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
              openingHours: "Mo-Sa 20:00-24:00",
              priceRange: "$$-$$$",
              servedCuisine: "Beverages",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "マスカレード料金システム",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "マスカレード指名料金システム",
                    },
                  },
                ],
              },
              areaServed: [
                { "@type": "Place", name: "小松市" },
                { "@type": "Place", name: "加賀市" },
                { "@type": "Place", name: "能美市" },
                { "@type": "Place", name: "白山市" },
                { "@type": "Place", name: "金沢市" },
              ],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "カラオケ無料",
                },
                { "@type": "LocationFeatureSpecification", name: "個室完備" },
                { "@type": "LocationFeatureSpecification", name: "駐車場あり" },
              ],
            }),
          }}
        />

        {/* 構造化データ - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MASQUERADE（マスカレード）",
              alternateName: [
                "マスカレード",
                "小松マスカレード",
                "マスカレード小松市",
                "MASQUERADE小松",
              ],
              url: "https://masquerade.created.app",
              logo: "https://masquerade.created.app/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "0761-20-2022",
                contactType: "customer service",
                availableLanguage: "Japanese",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "小松駅徒歩8分",
                addressLocality: "小松市",
                addressRegion: "石川県",
                addressCountry: "JP",
              },
              sameAs: ["https://masquerade.created.app"],
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSGQ8RLF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
