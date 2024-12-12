import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const featuresList = [
	{ id: 1, text: "チケット制による使いやすい設計" },
	{ id: 2, text: "初月無料（２チケット）" },
	{ id: 3, text: "相談内容に制約無し（ベストエフォート）" },
	{ id: 4, text: "社内の相談者は何名でもOK" },
	{ id: 5, text: "MTG以外の作業タスクも対応可能（別途費用）" },
];

export function Features() {
	return (
		<section id="features" className="text-gray-600 body-font bg-gray-50">
			<div className="container px-5 py-24 mx-auto">
				<div className="text-center mb-20">
					<h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
						BANSOUの特長
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
						我々は、お客様の「自走」を全力でサポートします
					</p>
				</div>
				<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					{featuresList.map((feature) => (
						<div key={feature.id} className="p-2 sm:w-1/2 w-full">
							<div className="bg-gray-100 rounded flex p-4 h-full items-center">
								<CheckCircle2 className="text-indigo-500 h-6 w-6 flex-shrink-0 mr-2" />
								<span className="title-font font-medium">{feature.text}</span>
							</div>
						</div>
					))}
				</div>
				<Link href="#contact">
					<button
						type="button"
						className="flex mx-auto mt-16 text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						無料で相談する
					</button>
				</Link>
			</div>
		</section>
	);
}
