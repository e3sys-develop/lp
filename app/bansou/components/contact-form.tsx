export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">お問い合わせ（無料）</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">会社名</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                maxLength={50}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">氏名</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                maxLength={30}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">メールアドレス</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                maxLength={100}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">お問い合わせ内容</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                required
                maxLength={300}
              />
            </div>
            <button
              type="submit"
              className="text-lg px-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}