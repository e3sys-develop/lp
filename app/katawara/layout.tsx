import "./globals.css";
import { Footer } from "@/app/katawara/components/footer";
import { Navbar } from "@/app/katawara/components/navbar";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "KATAWARA | 現役エンジニアが伴走してくれるサービス",
	description:
		"KATAWARAならプロの現役エンジニアに気軽にIT関連のあらゆる相談を行えるサービスです。CTOとして、教育担当者として、IT導入管理部門として、お客様の「自走」にコミットします。",
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

export default function katawaraLayout({
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
