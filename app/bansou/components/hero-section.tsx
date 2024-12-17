import Link from "next/link";

export function HeroSection() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
						現役エンジニアが
						<br className="hidden lg:inline-block" />
						伴走者としてサポート
					</h1>
					<p className="mb-8 leading-relaxed">
						あるときは先輩社員のように
						<br />
						あるときはシステム管理部門のように
						<br />
						あるときはCTOのように
					</p>
					<div className="flex justify-center">
						<Link href="https://share.hsforms.com/1P1QwdXqTQ-2uufI7qNRbsAsw9sc">
							<button
								type="button"
								className="text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							>
								無料で相談する
							</button>
						</Link>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="https://dummyimage.com/720x600"
					/>
				</div>
			</div>
		</section>
	);
}
