import { CheckCircle2 } from "lucide-react";

const caseStudies = [
	{
		title: "新規サービス開発相談（CTOとして伴走）",
		description:
			"週１回の２時間の打ち合わせを重ねサービスリリースに伴走いただきました。現在も伴走してもらいながら、先日ベータ版リリースを行い、１０社の契約を獲得できました。",
		client: "デザイン・動画制作企業（関東）",
		tasks: [
			"企画の壁打ち",
			"バックエンドプログラミングのレクチャー",
			"システム設計・コードレビュー",
			"AWSインフラ構築サポート",
		],
		image:
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
	},
	{
		title: "社員教育（先輩として伴走）",
		description:
			"Wordpressによるサイト制作には慣れているが、システム開発も自社で開発できるようにしたいと思い相談しました。自社には教えられるエンジニアがおらず、頼れる先輩エンジニアとして育てていただきました。",
		client: "Web制作企業（九州）",
		tasks: [
			"従業員へのプログラミング教育",
			"要件定義の実施方法レクチャー",
			"設計・コードレビュー",
		],
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
	},
];

export function CaseStudies() {
	return (
		<section id="case-study" className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">事例</h2>
				<div className="max-w-4xl mx-auto space-y-12">
					{caseStudies.map((study, index) => (
						<div key={index} className="bg-white rounded-lg shadow-lg p-8">
							<div className="flex flex-col md:flex-row gap-8">
								<div className="flex-1">
									<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
										<CheckCircle2 className="text-green-500" />
										{study.title}
									</h3>
									<p className="text-gray-600 mb-4">{study.description}</p>
									<div className="space-y-4">
										<div>
											<h4 className="font-semibold mb-2">相談者</h4>
											<p>{study.client}</p>
										</div>
										<div>
											<h4 className="font-semibold mb-2">相談内容</h4>
											<ul className="list-disc list-inside space-y-1">
												{study.tasks.map((task, i) => (
													<li key={i}>{task}</li>
												))}
											</ul>
										</div>
									</div>
								</div>
								<div className="md:w-64 flex-shrink-0">
									<img
										src={study.image}
										alt={study.title}
										className="rounded-lg w-full h-48 object-cover"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
