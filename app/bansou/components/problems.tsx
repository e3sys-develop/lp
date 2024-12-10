const problems = [
	{
		title: "教育人材不足",
		description: "自社の若手エンジニアを教育したいが教えられる人がいない・・・",
		icon: "👨‍🏫",
	},
	{
		title: "IT人材の採用難",
		description:
			"エンジニアを採用し、自社開発を行いたいが、どんな人を採用すればいいかわからない・・・",
		icon: "🎯",
	},
	{
		title: "ツール導入への不安",
		description:
			"業務効率化を図りたいがどんなツールを導入すればいいか悩んでいる・・・",
		icon: "🔧",
	},
];

export function Problems() {
	return (
		<section id="about" className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					こんな課題はありませんか？
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{problems.map((problem) => (
						<div
							key={problem.title}
							className="rounded-lg border bg-card text-card-foreground shadow-sm text-center"
						>
							<div className="pt-6 p-6">
								<div className="text-4xl mb-4">{problem.icon}</div>
								<h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
								<p className="text-gray-600">{problem.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
