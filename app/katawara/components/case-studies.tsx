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
		<section id="case-study" className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<h1 className="text-3xl font-bold title-font text-gray-900 mb-12 text-center">
					導入事例
				</h1>
				<div className="flex flex-wrap -m-4">
					<div className="p-4 md:w-1/2 w-full">
						<div className="h-full bg-gray-100 p-8 rounded">
							<h2 className="mb-4 text-center font-bold text-gray-900">
								新規サービス開発相談
								<br />
								（CTOとして伴走）
							</h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="block w-5 h-5 text-gray-400 mb-4"
								viewBox="0 0 975.036 975.036"
							>
								<title>Quote Icon</title>
								<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
							</svg>
							<p className="leading-relaxed mb-6">
								週１回の２時間の打ち合わせを重ねサービスリリースに伴走いただきました。現在も伴走してもらいながら、先日ベータ版リリースを行い、１０社の契約を獲得できました。
							</p>
							<div className="inline-flex items-center">
								<img
									alt="testimonial"
									src="/katawara/designer.jpg"
									className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
								/>
								<span className="flex-grow flex flex-col pl-4">
									<span className="title-font font-medium text-gray-900">
										デザイン・動画制作企業（関東）
									</span>
								</span>
							</div>
						</div>
					</div>
					<div className="p-4 md:w-1/2 w-full">
						<div className="h-full bg-gray-100 p-8 rounded">
							<h2 className="mb-4 text-center font-bold text-gray-900">
								社員教育
								<br />
								（先輩として伴走）
							</h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								className="block w-5 h-5 text-gray-400 mb-4"
								viewBox="0 0 975.036 975.036"
							>
								<title>Quote Icon</title>
								<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
							</svg>
							<p className="leading-relaxed mb-6">
								Wordpressによるサイト制作には慣れているが、システム開発も自社で開発できるようにしたいと思い相談しました。自社には教えられるエンジニアがおらず、頼れる先輩エンジニアとして育てていただきました。
							</p>
							<div className="inline-flex items-center">
								<img
									alt="testimonial"
									src="/katawara/engineer.jpg"
									className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
								/>
								<span className="flex-grow flex flex-col pl-4">
									<span className="title-font font-medium text-gray-900">
										Web制作企業（九州）
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
