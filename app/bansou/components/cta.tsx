import Link from "next/link";

export function CTA() {
	return (
		<section className="text-gray-600 body-font bg-gray-50">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
					<h1 className="flex-grow sm:pr-8 text-2xl font-bold md:leading-tight">
						無料体験実施中
						<br />
						私たちの伴走力を体感してみませんか？
					</h1>
					<Link href="https://share.hsforms.com/1P1QwdXqTQ-2uufI7qNRbsAsw9sc">
						<button
							type="button"
							className="mt-10 sm:mt-0 flex text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							無料で相談する
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
