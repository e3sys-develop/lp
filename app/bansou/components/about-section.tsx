import Link from "next/link";

export function AboutSection() {
	return (
		<section className="text-gray-600 body-font bg-gray-50">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
					<h1 className="flex-grow sm:pr-16 text-3xl md:text-4xl font-bold md:leading-tight">
						IT関連のあらゆる相談を
						<br />
						プロの現役エンジニアに
						<br />
						気軽に行えます。
					</h1>
					<Link href="#contact">
						<button
							type="button"
							className="flex text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							無料で相談する
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
