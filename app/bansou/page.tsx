"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BansouRedirect() {
	const router = useRouter();

	useEffect(() => {
		router.replace("/katawara");
	}, [router]);

	return (
		<div className="flex items-center justify-center min-h-screen">
			<p>リダイレクト中...</p>
		</div>
	);
}
