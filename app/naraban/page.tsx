import Image from "next/image";

export default function NarabanPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* ナビゲーション */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-blue-600">NARABAN</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                                機能
                            </a>
                            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
                                メリット
                            </a>

                            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                                FAQ
                            </a>
                            <a href="#signup" className="btn btn-primary">
                                無料ベータ版
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ファーストビュー（結＋プレスリリース冒頭） */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* プレスリリース */}
                    <div className="press-release">
                        <h2 className="text-xl font-bold text-blue-800 mb-2">
                            新サービス「NARABAN」リリースのお知らせ
                        </h2>
                        <p className="text-blue-700 mb-2">
                            ～整理券発行をもっと簡単に、もっとスムーズに～
                        </p>
                        <p className="text-gray-700">
                            2025年1月XX日　株式会社エミシス（本社：東京都渋谷区、代表取締役：XXX）は、整理券管理の課題を解決する新サービス「NARABAN」を本日よりベータ版無料提供開始いたします。
                        </p>
                    </div>

                    {/* ヒーローセクション */}
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                {/* 背景の混雑イメージ */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg opacity-20"></div>
                                <div className="relative bg-white rounded-lg shadow-lg p-6">
                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        {/* 混雑を表現する小さな円 */}
                                        {Array.from({ length: 9 }).map((_, i) => (
                                            <div key={i} className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                                <span className="text-xs">👤</span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* スマホ画面のモック */}
                                    <div className="bg-gray-900 rounded-lg p-4 mx-auto w-48">
                                        <div className="bg-white rounded-lg p-3">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                                    <span className="text-white text-2xl">🎫</span>
                                                </div>
                                                <div className="text-xs text-gray-600 mb-2">NARABAN</div>
                                                <div className="text-xs font-bold">整理券 #001</div>
                                                <div className="text-xs text-gray-500">入場時間: 14:00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                もう"整理券待ち"のために並ばない
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                好きな時間に行ける。あなたの"来場時間"と"デジタル特典券"をスマホにお届け。
                            </p>
                            <a href="#signup" className="btn btn-primary btn-lg">
                                無料ベータ版を今すぐ試す
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 共感セクション（起） */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            こんな"困った"ありませんか？
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="card">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">😰</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">人気イベントなのに、長蛇の列で並びっぱなし…</h3>
                                    <div className="mt-3 bg-gray-100 rounded-lg p-3">
                                        <div className="flex space-x-1">
                                            {Array.from({ length: 8 }).map((_, i) => (
                                                <div key={i} className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                                                    <span className="text-xs">👤</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">📄</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">紙の整理券をもらっても、実際の入場時間がわからず不安</h3>
                                    <div className="mt-3 bg-gray-100 rounded-lg p-3">
                                        <div className="bg-white rounded border-2 border-dashed border-gray-300 p-2 text-center">
                                            <span className="text-xs text-gray-500">整理券 #123</span>
                                            <div className="text-xs text-gray-400">入場時間: ???</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">🎫</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">特典会では紙の特典券がかさばり、紛失や破損が心配</h3>
                                    <div className="mt-3 bg-gray-100 rounded-lg p-3">
                                        <div className="flex space-x-2">
                                            {Array.from({ length: 3 }).map((_, i) => (
                                                <div key={i} className="w-8 h-8 bg-yellow-200 rounded border border-yellow-300 flex items-center justify-center">
                                                    <span className="text-xs">🎁</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">発券数や利用状況の集計に時間がかかり、事後処理が大変</h3>
                                    <div className="mt-3 bg-gray-100 rounded-lg p-3">
                                        <div className="bg-white rounded p-2">
                                            <div className="text-xs text-gray-500 mb-1">手作業集計中...</div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="inline-block bg-green-50 border border-green-200 rounded-lg p-6">
                            <p className="text-xl font-bold text-green-800">
                                NARABANなら、すべてスマホ完結でストレスフリー！
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NARABANが選ばれる理由（承） */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            NARABANが選ばれる理由
                        </h2>
                    </div>

                    <div className="feature-grid">
                        <div className="card">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">簡単・柔軟な整理券発行</h3>
                                <p className="text-gray-600 mb-4">
                                    イベントごとに定員や発行ルールを自由に設定。ボタン操作で即時発行。
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="bg-white rounded border p-3 text-center">
                                        <div className="text-sm font-bold text-blue-600 mb-1">イベント設定</div>
                                        <div className="text-xs text-gray-500">定員: 100名</div>
                                        <div className="text-xs text-gray-500">発行開始: 10:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">デジタル整理券＆特典券</h3>
                                <p className="text-gray-600 mb-4">
                                    QR/バーコード発行で紙不要。特典会の券もアプリで一元管理。
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="bg-gray-900 rounded-lg p-3 mx-auto w-32">
                                        <div className="bg-white rounded p-2 text-center">
                                            <div className="w-8 h-8 bg-blue-500 rounded mx-auto mb-1 flex items-center justify-center">
                                                <span className="text-white text-xs">🎫</span>
                                            </div>
                                            <div className="text-xs font-bold">整理券 #001</div>
                                            <div className="text-xs text-gray-500">QR Code</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">リアルタイム運営ダッシュボード</h3>
                                <p className="text-gray-600 mb-4">
                                    発券・利用状況を即時把握。混雑や残券を瞬時に確認し最適誘導。
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="bg-white rounded border p-3">
                                        <div className="text-sm font-bold mb-2">発券状況</div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span>発券済み</span>
                                            <span className="text-blue-600 font-bold">85/100</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎉</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">ファン体験を最大化</h3>
                                <p className="text-gray-600 mb-4">
                                    来場時間通知とリマインダーで、待ち時間を有効活用。安心・快適。
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="bg-blue-50 rounded border border-blue-200 p-3">
                                        <div className="text-sm font-bold text-blue-800 mb-1">🔔 通知</div>
                                        <div className="text-xs text-blue-700">入場時間まで30分です</div>
                                        <div className="text-xs text-blue-600">会場: メインホール</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 運営者さまのための４大メリット（承） */}
            <section id="benefits" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            運営者さまのための４大メリット
                        </h2>
                    </div>

                    <div className="benefit-grid">
                        <div className="card">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">💰</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">運営コストの大幅削減</h4>
                                    <ul className="space-y-2 text-gray-600 mb-4">
                                        <li>• 紙の整理券・特典券の印刷・在庫管理が不要</li>
                                        <li>• 問い合わせ対応工数が削減</li>
                                    </ul>
                                    <div className="bg-green-50 rounded-lg p-3">
                                        <div className="text-sm font-bold text-green-800 mb-1">コスト削減効果</div>
                                        <div className="text-xs text-green-700">印刷費: -80%</div>
                                        <div className="text-xs text-green-700">人件費: -60%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">📈</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">利用履歴はリアルタイム集計</h4>
                                    <ul className="space-y-2 text-gray-600 mb-4">
                                        <li>• 事後の手作業集計がゼロ</li>
                                        <li>• 次回施策に即フィードバック</li>
                                    </ul>
                                    <div className="bg-green-50 rounded-lg p-3">
                                        <div className="text-sm font-bold text-green-800 mb-1">集計時間</div>
                                        <div className="text-xs text-green-700">従来: 2時間 → 現在: リアルタイム</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">🔒</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">不正利用・偽造を防止</h4>
                                    <ul className="space-y-2 text-gray-600 mb-4">
                                        <li>• QRコード＋DB管理で重複利用や横流しをブロック</li>
                                        <li>• 現場でトラブル時にも即対応可能</li>
                                    </ul>
                                    <div className="bg-green-50 rounded-lg p-3">
                                        <div className="text-sm font-bold text-green-800 mb-1">セキュリティ</div>
                                        <div className="text-xs text-green-700">不正利用: 99.9%削減</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">アプリ内販促で売上アップ</h4>
                                    <ul className="space-y-2 text-gray-600 mb-4">
                                        <li>• 限定販売・割引キャンペーンが簡単設定</li>
                                        <li>• リピーター向けプッシュで再参加を促進</li>
                                    </ul>
                                    <div className="bg-green-50 rounded-lg p-3">
                                        <div className="text-sm font-bold text-green-800 mb-1">売上効果</div>
                                        <div className="text-xs text-green-700">追加売上: +25%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ファンの利便性（承→転） */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ファンの利便性
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">紛失リスクゼロ</h3>
                            <p className="text-gray-600">
                                全特典券をアプリで一括管理。忘れ物・紛失の心配なし。
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">瞬時にQR確認</h3>
                            <p className="text-gray-600">
                                スタッフもファンもスムーズチェックで待ち時間を最小化。
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔔</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">リマインダー機能</h3>
                            <p className="text-gray-600">
                                来場時間や特典利用予定をプッシュ通知でお知らせ。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ご利用シーン例（転） */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ご利用シーン例
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="card text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎵</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-3">ライブ入場整理</h3>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="bg-white rounded border p-2 text-center">
                                    <div className="text-xs text-gray-600 mb-1">ステージA</div>
                                    <div className="text-xs font-bold text-blue-600">整理券 #001-050</div>
                                    <div className="text-xs text-gray-500">入場時間: 19:00</div>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-3">特典会・握手会の順番管理</h3>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="bg-white rounded border p-2 text-center">
                                    <div className="text-xs text-gray-600 mb-1">握手会</div>
                                    <div className="text-xs font-bold text-blue-600">順番: 15番目</div>
                                    <div className="text-xs text-gray-500">予定時間: 14:30</div>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🛍️</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-3">限定グッズ販売の整理券配布</h3>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="bg-white rounded border p-2 text-center">
                                    <div className="text-xs text-gray-600 mb-1">限定Tシャツ</div>
                                    <div className="text-xs font-bold text-blue-600">購入券 #001</div>
                                    <div className="text-xs text-gray-500">販売時間: 13:00</div>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🍔</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-3">フードコートの順番待ち通知</h3>
                            <p className="text-sm text-gray-600 mb-3">（LINE連携オプション）</p>
                            <div className="bg-gray-50 rounded-lg p-3">
                                <div className="bg-white rounded border p-2 text-center">
                                    <div className="text-xs text-gray-600 mb-1">フードコート</div>
                                    <div className="text-xs font-bold text-blue-600">順番: 8番目</div>
                                    <div className="text-xs text-gray-500">予想待ち時間: 15分</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* よくある質問（FAQ）（転） */}
            <section id="faq" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            よくある質問（FAQ）
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="faq-table">
                            <thead>
                                <tr>
                                    <th>Q</th>
                                    <th>A</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>会員登録は必要ですか？</td>
                                    <td>いいえ。Webからワンクリックで整理券・特典券を取得できます。</td>
                                </tr>
                                <tr>
                                    <td>発行上限は設定できますか？</td>
                                    <td>はい。イベントごとに運営者が上限数を自由に設定可能です。</td>
                                </tr>
                                <tr>
                                    <td>キャンセルはできますか？</td>
                                    <td>はい。管理画面からいつでもキャンセルできます。</td>
                                </tr>
                                <tr>
                                    <td>データはどこまで見られますか？</td>
                                    <td>発券数・利用数・キャンセル数など、リアルタイムで詳細把握できます。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* クロージング＆CTA（結） */}
            <section id="signup" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                        <blockquote className="text-xl text-white font-medium italic">
                            「整理券も特典券も、もう紙に頼らない。NARABANでイベント運営を革新し、ファンに最高の体験を。」
                        </blockquote>
                    </div>

                    <div className="space-y-4">
                        <a href="#signup-form" className="btn btn-lg bg-white text-blue-600 hover:bg-gray-100">
                            今すぐ無料ベータ版に登録する
                        </a>
                        <p className="text-blue-100 text-sm">
                            所要時間：30秒／ベータ版は期間限定・先着順
                        </p>
                    </div>
                </div>
            </section>

            {/* フッター */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <a
                                href="https://e3sys.co.jp/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    src="/e3sys_white.png"
                                    alt="株式会社エミシス"
                                    width={200}
                                    height={67}
                                    className="mb-4"
                                />
                            </a>
                            <p>"WHACK!WHACK!し続ける"人と環境をつくる</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">運営会社</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://e3sys.co.jp/about/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="hover:text-gray-300"
                                    >
                                        エミシスについて
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://e3sys.co.jp/company/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="hover:text-gray-300"
                                    >
                                        会社情報
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://e3sys.co.jp/policy/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="hover:text-gray-300"
                                    >
                                        セキュリティ・プライバシーポリシー
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <div className="w-48 h-48 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-lg font-medium">NARABAN QR Code</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8 pt-8 border-t border-gray-800">
                        <p>&copy; 2025 NARABAN. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
