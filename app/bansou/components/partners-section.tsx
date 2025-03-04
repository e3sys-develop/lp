"use client";

import { TextCarousel } from "@/components/ui/text-carousel";
import { Card, CardContent } from "@/components/ui/card";

const aiServices = [
  { id: 1, name: "ChatGPT", color: "text-black-600" },
  { id: 2, name: "Dify", color: "text-blue-600" },
  { id: 3, name: "Cursor", color: "text-black-600" },
  { id: 4, name: "Github Copilot", color: "text-black-600" },
  { id: 5, name: "Claude", color: "text-yellow-600" },
  { id: 6, name: "Gemini", color: "text-indigo-600" },
];

export function PartnersSection() {
  return (
    <section className="lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="border-none shadow-lg">
          <CardContent className="pt-12">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight leading-none text-gray-900">
                BANSOUが提供する<br />AI活用サポート
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto text-gray-600">
                現役エンジニアが貴社のビジネス課題を理解し、最適なAI活用に対応。<br />
                ツール選定から導入・運用まで伴走し、業務効率化やデータ活用を加速させます。
              </p>
            </div>
            <TextCarousel services={aiServices} columns={3} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 