import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 md:leading-tight">
              現役エンジニアが
              <br />
              伴走者としてサポートします
            </h1>
            <p className="text-xl md:text-xl text-gray-600 mb-8">
              あるときは先輩社員のように
              <br />
              あるときはシステム管理部門のように
              <br />
              あるときはCTOのように
            </p>
            <Link href="#contact">
              <button
                type="button"
                className="text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                無料で相談する
              </button>
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
