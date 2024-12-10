export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-lg border bg-card text-card-foreground shadow-s relative">
              <div className="p-6 pt-0">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-lg">
                  フリートライアル
                </div>
                <h3 className="text-2xl font-bold mb-4">無料</h3>
                <ul className="space-y-3 mb-8">
                  <li>2チケット</li>
                  <li>新規お申込者様限定</li>
                  <li>チケット消費または申し込み日から１か月でトライアル終了となります</li>
                </ul>
                <button
                  type="button"
                  className="text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  今すぐ問合せ
                </button>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-s relative">
              <div className="p-6 pt-0">
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-bl-lg">
                  スタータープラン
                </div>
                <h3 className="text-2xl font-bold mb-4">¥50,000 <span className="text-sm text-gray-500">/月</span></h3>
                <ul className="space-y-3 mb-8">
                  <li>5チケット／月</li>
                  <li>サブスクリプション契約</li>
                  <li>追加１チケット ¥10,000</li>
                </ul>
                <button
                  type="button"
                  className="text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  今すぐ問合せ
                </button>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">
            ※ 1チケットは、1時間の打ち合わせとなります。<br />
            ※ 契約・支払い完了後からチケット利用が対応となります。
          </p>
        </div>
      </div>
    </section>
  );
}