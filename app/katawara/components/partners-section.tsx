"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TextCarousel } from "@/components/ui/text-carousel";

const aiServices = [
	{ id: 1, name: "ChatGPT", color: "text-black-600" },
	{ id: 2, name: "Dify", color: "text-blue-600" },
	{ id: 3, name: "Cursor", color: "text-black-600" },
	{ id: 4, name: "Github Copilot", color: "text-black-600" },
	{ id: 5, name: "Claude", color: "text-yellow-600" },
	{ id: 6, name: "Gemini", color: "text-blue-600" },
	{ id: 7, name: "DALL-E", color: "text-black-600" },
	{ id: 8, name: "Midjourney", color: "text-black-600" },
];

export function PartnersSection() {
	return (
		<section className="lg:py-16 bg-white" id="ai">
			<div className="container mx-auto px-4">
				<Card className="border-none shadow-lg">
					<CardContent className="pt-12">
						<div className="text-center space-y-4 mb-8">
							<h2 className="text-3xl font-bold tracking-tight leading-none text-gray-900">
								KATAWARAが提供する
								<br />
								AI活用サポート
							</h2>
							<p className="text-base leading-relaxed max-w-2xl mx-auto text-gray-600">
								話題の生成AIも多種にわたり、実績に基づいた活用の支援が可能です。
							</p>
						</div>
						<TextCarousel services={aiServices} />
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
