import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "株式会社エミシス",
    description: "",
    openGraph: {
        type: "website",
        title: "KATAWARA | 現役エンジニアが伴走してくれるサービス",
        description:
            "KATAWARAならプロの現役エンジニアに気軽にIT関連のあらゆる相談を行えるサービスです。CTOとして、教育担当者として、IT導入管理部門として、お客様の「自走」にコミットします。",
        images: [
            {
                url: "/katawara/ogp-katawara.png",
                width: 1472,
                height: 832,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={notoSansJP.className}>
            {children}
        </div>

    );
}



