import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Navbar } from "@/app/bansou/components/navbar";
import { Footer } from "@/app/bansou/components/footer";

const noto = Noto_Sans_JP({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "BANSOU | 現役エンジニアが伴走してくれるサービス",
	description:
		"BANSOUならプロの現役エンジニアに気軽にIT関連のあらゆる相談を行えるサービスです。CTOとして、教育担当者として、IT導入管理部門として、お客様の「自走」にコミットします。",
};

export default function BansouLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={noto.className}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
