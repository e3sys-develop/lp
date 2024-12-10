import { CheckCircle2 } from 'lucide-react';

const featuresList = [
  'チケット制による使いやすい設計',
  '初月無料（２チケット）',
  '相談内容に制約無し（ベストエフォート）',
  '社内の相談者は何名でもOK',
  'MTG以外の作業タスクも対応可能（別途費用）',
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          我々は、お客様の「自走」を全力でサポートします
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {featuresList.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-xl">
                <CheckCircle2 className="text-yellow-500 h-6 w-6 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}