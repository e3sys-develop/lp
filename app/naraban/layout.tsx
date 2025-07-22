import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NARABAN | 整理券発行をもっと簡単に、もっとスムーズに",
    description:
        "NARABANなら、整理券管理の課題を解決。デジタル整理券・特典券で紙不要、リアルタイム運営ダッシュボードで効率的なイベント運営を実現します。",
    openGraph: {
        type: "website",
        title: "NARABAN | 整理券発行をもっと簡単に、もっとスムーズに",
        description:
            "NARABANなら、整理券管理の課題を解決。デジタル整理券・特典券で紙不要、リアルタイム運営ダッシュボードで効率的なイベント運営を実現します。",
        images: [
            {
                url: "/naraban/ogp-naraban.png",
                width: 1472,
                height: 832,
            },
        ],
    },
};

export default function narabanLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={noto.className}>
            {children}
        </div>
    );
} 