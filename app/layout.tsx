import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
	title: "株式会社エミシス",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>
				{children}
			</body>
			<GoogleTagManager gtmId="GTM-WT2XGBRR" />
		</html>
	);
}
