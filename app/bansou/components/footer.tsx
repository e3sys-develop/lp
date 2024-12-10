export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BANSOU</h3>
            <p>"WHACK!WHACK!し続ける"人と環境をつくる</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">運営会社</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://e3sys.co.jp/about/" target="_blank" rel="noopener" className="hover:text-gray-300">
                  エミシスについて
                </a>
              </li>
              <li>
                <a href="https://e3sys.co.jp/company/" target="_blank" rel="noopener" className="hover:text-gray-300">
                  会社情報
                </a>
              </li>
              <li>
                <a href="https://e3sys.co.jp/policy/" target="_blank" rel="noopener" className="hover:text-gray-300">
                  セキュリティ・プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <img
              src="./images/QR_BANSOU.png"
              alt="BANSOU QR Code"
              className="w-48 h-48 mx-auto rounded"
            />
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p>&copy; 2024 BANSOU. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}