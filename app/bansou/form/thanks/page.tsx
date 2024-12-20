import Link from 'next/link';

const BansouThankYouPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    お問い合わせいただきありがとうございます。
                </h1>
                <p className="text-gray-700 mb-4">
                    このたびはBANSOUにお問い合わせいただき、誠にありがとうございます。
                    内容を確認のうえ、担当者より改めてご連絡させていただきます。
                    通常、2〜3営業日以内にご返信いたしますので、今しばらくお待ちください。
                </p>
                <p className="text-gray-700 mb-4">
                    もしお急ぎの場合や追加のご質問がある場合は、以下の連絡先までご連絡ください：
                </p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-left text-gray-700 mb-6">
                    <p className="mb-2">
                        <span className="font-semibold">連絡先情報：</span>
                        <a
                            href="mailto:info@e3sys.co.jp"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            info@e3sys.co.jp
                        </a>
                    </p>
                    <p>
                        <span className="font-semibold">電話番号：</span>
                        <a
                            href="tel:092-292-0881"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            092-292-0881
                        </a>
                    </p>
                </div>
                <p className="text-gray-700">
                    引き続き、BANSOUをよろしくお願いいたします。
                </p>
                <p className="text-gray-700 mt-4 font-semibold">BANSOUチーム一同</p>
                <Link href="/bansou">
                    <button
                        type="button"
                        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        TOPに戻る
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BansouThankYouPage;