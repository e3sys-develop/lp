import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "naraban | 整理券発行・管理システム | イベント運営を革新",
    description:
        "narabanは、整理券の発行・管理をスマホで完結するデジタル整理券システムです。紙の整理券が不要で、リアルタイム運営ダッシュボードで効率的なイベント運営を実現。ライブ会場、特典会、限定販売など様々なイベントでご活用いただけます。",
    keywords: [
        "整理券",
        "デジタル整理券",
        "イベント運営",
        "QRコード",
        "特典券",
        "入場整理",
        "ライブ会場",
        "握手会",
        "限定販売",
        "イベント管理システム",
        "naraban",
        "ナラバン"
    ],
    authors: [{ name: "株式会社エミシス" }],
    creator: "株式会社エミシス",
    publisher: "株式会社エミシス",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://naraban.jp'),
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "https://naraban.jp",
        siteName: "naraban",
        title: "naraban | 整理券発行・管理システム | イベント運営を革新",
        description:
            "narabanは、整理券の発行・管理をスマホで完結するデジタル整理券システムです。紙の整理券が不要で、リアルタイム運営ダッシュボードで効率的なイベント運営を実現。",
        images: [
            {
                url: "/naraban/ogp-naraban.png",
                width: 1472,
                height: 832,
                alt: "naraban - デジタル整理券システム",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "naraban | 整理券発行・管理システム | イベント運営を革新",
        description:
            "narabanは、整理券の発行・管理をスマホで完結するデジタル整理券システムです。紙の整理券が不要で、リアルタイム運営ダッシュボードで効率的なイベント運営を実現。",
        images: ["/naraban/ogp-naraban.png"],
        creator: "@e3sys",
        site: "@e3sys",
    },
    verification: {
        google: "your-google-verification-code", // Google Search Consoleの検証コードを追加
    },
};

// 構造化データ（JSON-LD）
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "naraban",
    "description": "整理券の発行・管理をスマホで完結するデジタル整理券システム",
    "url": "https://naraban.jp",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "JPY",
        "description": "フリープラン：月間1,000枚まで発券可能"
    },
    "provider": {
        "@type": "Organization",
        "name": "株式会社エミシス",
        "url": "https://e3sys.co.jp"
    },
    "featureList": [
        "デジタル整理券発行",
        "QRコード・バーコード対応",
        "リアルタイム運営ダッシュボード",
        "複数イベント管理",
        "特典券管理",
        "顧客通知機能"
    ],
    "screenshot": "https://naraban.jp/naraban/ogp-naraban.png"
};

export default function narabanLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={noto.className}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </div>
    );
} 