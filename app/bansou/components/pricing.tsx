import { CheckCircle2 } from "lucide-react";

export function Pricing() {
	return (
		<section id="pricing" className="text-gray-600 overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-4xl text-3xl font-bold mb-2 text-gray-900">
						料金プラン
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
						※ 1チケットは、1時間の打ち合わせとなります。
					</p>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
						※ 契約・支払い完了後からチケット利用が対応となります。
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					<div className="p-4 xl:w-1/4 md:w-1/2 w-full">
						<div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
							<h2 className="text-sm tracking-widest title-font mb-1 font-medium">
								フリートライアル
							</h2>
							<h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
								無料
							</h1>
							<p className="flex items-center text-gray-600 mb-2">
								<CheckCircle2 className="text-gray-400 h-6 w-6 flex-shrink-0 mr-2" />
								2チケット
							</p>
							<p className="flex items-center text-gray-600 mb-12">
								<CheckCircle2 className="text-gray-400 h-6 w-6 flex-shrink-0 mr-2" />
								新規お申込者様限定
							</p>
							<button type="button" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
								試してみる
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-auto"
									viewBox="0 0 24 24"
								>
									<title>Arrow Icon</title>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</button>
							<p className="text-xs text-gray-500 mt-3">
								チケット消費、または申し込み日から1か月でトライアル終了となります
							</p>
						</div>
					</div>
					<div className="p-4 xl:w-1/4 md:w-1/2 w-full">
						<div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
							<span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
								人気
							</span>
							<h2 className="text-sm tracking-widest title-font mb-1 font-medium">
								スタータープラン
							</h2>
							<h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
								<span>¥50,000</span>
								<span className="text-lg ml-1 font-normal text-gray-500">/月</span>
							</h1>
							<p className="flex items-center text-gray-600 mb-2">
								<CheckCircle2 className="text-gray-400 h-6 w-6 flex-shrink-0 mr-2" />
								5チケット／月
							</p>
							<p className="flex items-center text-gray-600 mb-2">
								<CheckCircle2 className="text-gray-400 h-6 w-6 flex-shrink-0 mr-2" />
								サブスクリプション契約
							</p>

							<button type="button" className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
								問い合わせる
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-4 h-4 ml-auto"
									viewBox="0 0 24 24"
								>
									<title>Arrow Icon</title>
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</button>
							<p className="text-xs text-gray-500 mt-3">
								1チケット¥10,000で追加できます。
							</p>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
}
