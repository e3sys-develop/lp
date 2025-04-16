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
        title: "14期半期総会",
        description:
            "14期半期総会のイベントサイトです。",
        images: [
            {
                url: "/14th-semi-annual/hero-bg.png",
                width: 1920,
                height: 1080,
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



