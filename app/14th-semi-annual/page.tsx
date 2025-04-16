'use client';

import { useEffect, useState } from 'react';

export default function SemiAnnualEvent() {
    const [isClient, setIsClient] = useState(false);
    const [showCherryBlossoms, setShowCherryBlossoms] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        // ヒーローセクションの表示状態を監視
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const cherryBlossoms = document.getElementById('cherry-blossoms');
                    // ヒーローセクションが画面外に出たとき
                    if (!entry.isIntersecting) {
                        if (cherryBlossoms) {
                            cherryBlossoms.classList.add('fade-out');
                        }
                        setTimeout(() => {
                            setShowCherryBlossoms(false);
                        }, 1500);
                    } else {
                        // ヒーローセクションが画面内に入ったとき
                        if (cherryBlossoms) {
                            cherryBlossoms.classList.remove('fade-out');
                        }
                        setShowCherryBlossoms(true);
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50% 0px 0px 0px' // 画面の中央付近でトリガー
            }
        );

        // ヒーローセクションを監視
        const heroSection = document.getElementById('home');
        if (heroSection) {
            observer.observe(heroSection);
        }

        const createCherryBlossom = () => {
            const cherryBlossoms = document.getElementById('cherry-blossoms');
            if (!cherryBlossoms || !showCherryBlossoms) return;

            // 要素が作成される前にフェードアウトクラスを削除
            cherryBlossoms.classList.remove('fade-out');

            const blossom = document.createElement('div');
            blossom.className = 'cherry-blossom';
            blossom.style.left = `${Math.random() * 100}vw`;
            blossom.style.animationDuration = `${Math.random() * 3 + 2}s`;
            cherryBlossoms.appendChild(blossom);

            setTimeout(() => {
                blossom.remove();
            }, 5000);
        };

        const interval = setInterval(createCherryBlossom, 300);

        return () => {
            clearInterval(interval);
            observer.disconnect();
        };
    }, [isClient, showCherryBlossoms]);

    const content = (
        <>
            {/* Cherry Blossom Animation */}
            {showCherryBlossoms && (
                <div id="cherry-blossoms" className={showCherryBlossoms ? '' : 'fade-out'} />
            )}

            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img
                                src="/logo_square.png"
                                alt="14期半期総会ロゴ"
                                className="w-8 h-8"
                                aria-labelledby="logo-title"
                            />
                            <h1 className="ml-2 text-xl font-bold text-gray-800">14期半期総会</h1>
                        </div>

                        {/* ハンバーガーメニューボタン（モバイル用） */}
                        <button
                            type="button"
                            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                        >
                            <svg
                                className="w-6 h-6 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* デスクトップ用メニュー */}
                        <nav className="hidden lg:block">
                            <ul className="flex space-x-6">
                                <li><button type="button" onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-600 transition">ホーム</button></li>
                                <li><button type="button" onClick={() => document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-600 transition">スケジュール</button></li>
                                <li><button type="button" onClick={() => document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-600 transition">アクティビティ</button></li>
                                <li><button type="button" onClick={() => document.querySelector('#molkky')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-600 transition">モルック大会</button></li>
                                <li><button type="button" onClick={() => document.querySelector('#information')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-600 hover:text-pink-600 transition">マップ</button></li>
                            </ul>
                        </nav>
                    </div>

                    {/* モバイル用メニュー */}
                    <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
                        <nav>
                            <ul className="flex flex-col space-y-4">
                                <li><button type="button" onClick={() => { document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="w-full text-left text-gray-600 hover:text-pink-600 transition py-2">ホーム</button></li>
                                <li><button type="button" onClick={() => { document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="w-full text-left text-gray-600 hover:text-pink-600 transition py-2">スケジュール</button></li>
                                <li><button type="button" onClick={() => { document.querySelector('#activities')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="w-full text-left text-gray-600 hover:text-pink-600 transition py-2">アクティビティ</button></li>
                                <li><button type="button" onClick={() => { document.querySelector('#molkky')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="w-full text-left text-gray-600 hover:text-pink-600 transition py-2">モルック大会</button></li>
                                <li><button type="button" onClick={() => { document.querySelector('#information')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }} className="w-full text-left text-gray-600 hover:text-pink-600 transition py-2">マップ</button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="relative overflow-hidden min-h-screen flex items-center" style={{
                backgroundImage: 'url("/14th-semi-annual/hero-bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* オーバーレイ */}
                <div className="container mx-auto px-4 py-20 flex flex-col items-center relative z-10">
                    <div className="absolute top-0 right-0">
                        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="opacity-20" aria-label="装飾的な背景パターン" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
                        エミシスに、
                        <span className="text-pink-300">咲け。</span>
                        <br />
                        わたしらしさと、チームのチカラ。
                    </h2>
                    <p className="text-lg text-center text-gray-200 max-w-2xl mb-10">
                        大切なのは、自分を知ること。
                        <br className="sm:hidden" />
                        そして、仲間を信じること。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#schedule"
                            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 text-center">
                            スケジュールを見る
                        </a>
                        <a href="#molkky"
                            className="bg-white hover:bg-gray-100 text-pink-600 font-medium py-3 px-8 rounded-full shadow-lg border border-pink-200 transition transform hover:scale-105 text-center">
                            モルック大会を見る
                        </a>
                    </div>
                    <div className="mt-16 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg inline-flex items-center">
                        <div className="bg-pink-100 rounded-full p-3 mr-4">
                            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="calendar-icon">
                                <title id="calendar-icon">カレンダーアイコン</title>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">開催日</p>
                            <p className="text-gray-800 font-bold">2025年4月25日（金）</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section id="schedule" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">イベントスケジュール</h2>
                    <p className="text-center text-gray-600 mb-12">一日のスケジュールをご確認ください。</p>

                    <div className="max-w-3xl mx-auto">
                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>時計アイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">オープニング</h3>
                                    <span className="text-sm text-pink-600 font-medium">9:30 - 9:40 (10分)</span>
                                </div>
                                <p className="text-gray-600">挨拶、イベントの流れ、注意事項の説明</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>メッセージアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">今月の誕生日</h3>
                                    <span className="text-sm text-pink-600 font-medium">9:40 - 9:45 (5分)</span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">アイスブレイク</h3>
                                    <span className="text-sm text-pink-600 font-medium">9:45 - 9:55 (10分)</span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>ミーティングアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">辞令・表彰</h3>
                                    <span className="text-sm text-pink-600 font-medium">9:55 - 10:05 (10分)</span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>プレゼンテーションアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.057M13 21l5-5 5 5M8 4h.01M12 4h.01M16 4h.01M8 8h.01M12 8h.01M16 8h.01" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">上期振り返り＆下期の見込み</h3>
                                    <span className="text-sm text-pink-600 font-medium">10:05 - 11:05 (60分)</span>
                                </div>
                                <p className="text-gray-600">役員チームより</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-gray-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">休憩</h3>
                                    <span className="text-sm text-pink-600 font-medium">11:05 - 11:10 (5分)</span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>本アイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">現場紹介LT（前半）</h3>
                                    <span className="text-sm text-pink-600 font-medium">11:10 - 12:10 (60分)</span>
                                </div>
                                <p className="text-gray-600">15分 × 4案件</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-gray-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">昼休憩</h3>
                                    <span className="text-sm text-pink-600 font-medium">12:10 - 13:10 (60分)</span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>編集アイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">現場紹介LT（後半）</h3>
                                    <span className="text-sm text-pink-600 font-medium">13:10 - 14:10 (60分)</span>
                                </div>
                                <p className="text-gray-600">15分 × 4案件</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-gray-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">休憩</h3>
                                    <span className="text-sm text-pink-600 font-medium">14:10 - 14:20 (10分)</span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">ワーク</h3>
                                    <span className="text-sm text-pink-600 font-medium">14:20 - 15:20 (60分)</span>
                                </div>
                                <p className="text-gray-600">個性や経歴を振り返り、共有しながら自己理解を深める</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>アナウンスアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">お知らせ事項＋来月のスケジュール</h3>
                                    <span className="text-sm text-pink-600 font-medium">15:20 - 15:30 (10分)</span>
                                </div>
                                <p className="text-gray-600">業務推進より</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-gray-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">移動準備・休憩</h3>
                                    <span className="text-sm text-pink-600 font-medium">15:30 - 15:40 (10分)</span>
                                </div>
                                <p className="text-gray-600">オフィスから冷泉公園への移動</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">モルック大会@冷泉公園</h3>
                                    <span className="text-sm text-pink-600 font-medium">15:40 - 18:00 (140分)</span>
                                </div>
                                <p className="text-gray-600">チーム対抗戦で楽しむフィンランド発祥のアウトドアゲーム</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex mb-6 pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-gray-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">移動</h3>
                                    <span className="text-sm text-pink-600 font-medium">18:00 - 18:30 (30分)</span>
                                </div>
                                <p className="text-gray-600">冷泉公園から懇親会会場への移動</p>
                            </div>
                        </div>

                        <div className="timeline-item relative flex pl-12">
                            <div
                                className="absolute left-0 bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <title>イベントアイコン</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-grow bg-pink-50 rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-lg text-gray-800">懇親会@博多水炊き大和</h3>
                                    <span className="text-sm text-pink-600 font-medium">18:30 -</span>
                                </div>
                                <p className="text-gray-600">集合写真、クイズ企画あり</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="activities" className="py-16 bg-pink-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">アクティビティ</h2>
                    <p className="text-center text-gray-600 mb-12">ワークやゲームで楽しみましょう！</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="event-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="h-48 bg-pink-200 relative overflow-hidden">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="wave-pattern-1">
                                    <title id="wave-pattern-1">波紋パターン1</title>
                                    <path fill="#FFCAD4" d="M42.8,-65.2C54.9,-56.3,63.7,-43.2,69.2,-29.1C74.8,-15,77.1,0.1,73.7,14C70.3,27.9,61.2,40.6,49.2,49.2C37.2,57.8,22.3,62.3,7.2,65.5C-7.9,68.7,-23.1,70.6,-36.9,66.1C-50.7,61.6,-63.1,50.7,-69.9,37.1C-76.7,23.5,-77.9,7.2,-74.4,-7.7C-70.9,-22.6,-62.8,-36.1,-51.3,-45.4C-39.8,-54.7,-24.9,-59.8,-9.7,-60.7C5.5,-61.6,30.7,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-pink-600" fill="currentColor" viewBox="0 0 20 20" aria-labelledby="lt-icon">
                                        <title id="lt-icon">ライトニングトークアイコン</title>
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 text-gray-800">現場紹介LT</h3>
                                <p className="text-gray-600 mb-4">各プロジェクトの担当者による15分間のライトニングトーク。前半・後半合わせて8つの案件紹介があります。</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="time-icon">
                                        <title id="time-icon">時間アイコン</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    11:10 - 12:10 / 13:10 - 14:10
                                </div>
                            </div>
                        </div>

                        <div className="event-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="h-48 bg-purple-100 relative overflow-hidden">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="wave-pattern-4">
                                    <title id="wave-pattern-4">波紋パターン4</title>
                                    <path fill="#E9D5FF" d="M42.8,-65.2C54.9,-56.3,63.7,-43.2,69.2,-29.1C74.8,-15,77.1,0.1,73.7,14C70.3,27.9,61.2,40.6,49.2,49.2C37.2,57.8,22.3,62.3,7.2,65.5C-7.9,68.7,-23.1,70.6,-36.9,66.1C-50.7,61.6,-63.1,50.7,-69.9,37.1C-76.7,23.5,-77.9,7.2,-74.4,-7.7C-70.9,-22.6,-62.8,-36.1,-51.3,-45.4C-39.8,-54.7,-24.9,-59.8,-9.7,-60.7C5.5,-61.6,30.7,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 20 20" aria-labelledby="work-icon">
                                        <title id="work-icon">ワークアイコン</title>
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 text-gray-800">自己理解ワーク</h3>
                                <p className="text-gray-600 mb-4">個性や経歴を振り返り、共有しながら自己理解を深めるワークショップ。お互いの強みや価値観を発見し、チームとしての理解を深めます。</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="time-icon-4">
                                        <title id="time-icon-4">時間アイコン</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    14:20 - 15:20
                                </div>
                            </div>
                        </div>

                        <div className="event-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="h-48 bg-green-100 relative overflow-hidden">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="wave-pattern-2">
                                    <title id="wave-pattern-2">波紋パターン2</title>
                                    <path fill="#A7F3D0" d="M45.3,-77.1C58.3,-71.3,68.3,-58.5,76.5,-44.7C84.7,-30.9,89,-16.1,89.9,-1.9C88.8,12.2,80.3,24.4,71.4,35.9C62.5,47.4,53.2,58.2,41.6,65.9C30,73.5,15,78,0.2,77.7C-14.6,77.4,-29.2,72.3,-41.7,64.5C-54.2,56.7,-64.6,46.2,-71.8,33.6C-79,21,-83,6.3,-81.7,-8C-80.4,-22.3,-73.8,-36.2,-63.6,-46.8C-53.4,-57.4,-39.7,-64.7,-26.1,-70.5C-12.5,-76.3,1,-80.6,15.2,-79.9C29.4,-79.2,32.3,-82.9,45.3,-77.1Z" transform="translate(100 100)" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-labelledby="molkky-icon">
                                        <title id="molkky-icon">モルックアイコン</title>
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 text-gray-800">モルック大会</h3>
                                <p className="text-gray-600 mb-4">フィンランド発祥の木製ピンを倒して得点を競うアウトドアゲーム。チーム対抗戦で冷泉公園にて開催します。</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="time-icon-2">
                                        <title id="time-icon-2">時間アイコン</title>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    15:40 - 18:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="molkky" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">モルック大会</h2>
                    <p className="text-center text-gray-600 mb-12">フィンランド発祥のアウトドアスポーツで楽しく交流しましょう</p>

                    <div className="max-w-5xl mx-auto">
                        {/* Rules */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">ルール説明</h3>
                        <div className="bg-white rounded-xl p-6 mb-10 shadow-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>モルックと呼ばれる投げ棒を使用して、番号が書かれたスキットルを倒します</li>
                                        <li>倒したスキットルの番号の合計点を獲得します</li>
                                        <li>1本だけ倒した場合は、そのスキットルの番号の点数を獲得</li>
                                        <li>2本以上倒した場合は、倒した本数が得点となります</li>
                                        <li>3回連続で0点の場合は失格となります</li>
                                    </ul>
                                </div>
                                <div className="relative w-full aspect-video">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/erlM4Eku5e0?si=2vebcuqhJI75egnm"
                                        title="モルックのルール説明動画"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Tournament Format */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">大会形式</h3>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-700 mb-3">チーム編成</h4>
                                        <ul className="list-disc pl-5 text-gray-600 mb-4">
                                            <li>1チーム4〜5名で構成</li>
                                            <li>6チーム編成</li>
                                        </ul>

                                        <h4 className="font-bold text-lg text-gray-700 mb-3">大会方式</h4>
                                        <p className="text-gray-600 mb-2">3チーム対戦リーグ戦方式</p>

                                        <h4 className="font-bold text-lg text-gray-700 mb-3">試合形式</h4>
                                        <ul className="list-disc pl-5 text-gray-600 mb-4">
                                            <li>1試合に3チームが参加</li>
                                            <li>各チームが2試合ずつ行う</li>
                                            <li>合計試合数: 4試合</li>
                                        </ul>

                                        <h4 className="font-bold text-lg text-gray-700 mb-3">順位決定</h4>
                                        <ul className="list-disc pl-5 text-gray-600">
                                            <li>各試合の順位に応じてポイントを付与（1位:3ポイント、2位:2ポイント、3位:1ポイント）</li>
                                            <li>全試合終了後、獲得ポイントの合計で最終順位を決定</li>
                                            <li>同点の場合は総得点で決定</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg text-gray-700 mb-3">試合ルール</h4>
                                        <ul className="list-disc pl-5 text-gray-600 mb-6">
                                            <li>1試合は3チーム対戦</li>
                                            <li>制限時間: 30分/試合</li>
                                            <li>投擲順: じゃんけんで決定（A→B→C→A→...）</li>
                                            <li>制限時間の2分前にアナウンス、その時のターンで全員が投げ終わったら試合終了</li>
                                            <li>時間内に50点に到達したチームが勝利、時間切れの場合は得点の高いチームが1位、次点が2位、最下位が3位</li>
                                            <li>チーム内の投げ順はゲーム毎に変更可能</li>
                                            <li>投擲者は60秒以内に投擲モーションに入ること</li>
                                            <li>上投げによる投擲は禁止</li>
                                        </ul>

                                        <h4 className="font-bold text-lg text-gray-700 mb-3">タイムスケジュール</h4>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            時間</th>
                                                        <th
                                                            className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            内容</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-600">
                                                    <tr>
                                                        <td className="py-2 px-4 border-b border-gray-200">15:40-15:55</td>
                                                        <td className="py-2 px-4 border-b border-gray-200">開会式・ルール説明・チーム分け</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b border-gray-200">15:55-16:25</td>
                                                        <td className="py-2 px-4 border-b border-gray-200">第1試合（チームA vs チームB vs チームC）</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b border-gray-200">16:25-16:55</td>
                                                        <td className="py-2 px-4 border-b border-gray-200">第2試合（チームD vs チームE vs チームF）</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b border-gray-200">16:55-17:25</td>
                                                        <td className="py-2 px-4 border-b border-gray-200">第3試合（チームA vs チームD vs チームE）</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b border-gray-200">17:25-17:55</td>
                                                        <td className="py-2 px-4 border-b border-gray-200">第4試合（チームB vs チームC vs チームF）</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b border-gray-200">17:55-18:00</td>
                                                        <td className="py-2 px-4 border-b border-gray-200">表彰式・閉会式</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Teams */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">チーム編成</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Team A */}
                                <div className="team-card bg-white rounded-xl p-5 shadow-md border border-gray-100">
                                    <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                                        <span className="font-bold text-red-600">A</span>
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800 mb-3">チームA</h4>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>五代智也</li>
                                        <li>中原久美子</li>
                                        <li>内室裕貴</li>
                                        <li>松田和浩</li>
                                        <li>沼舘瞳</li>
                                    </ul>
                                </div>

                                {/* Team B */}
                                <div className="team-card bg-white rounded-xl p-5 shadow-md border border-gray-100">
                                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                                        <span className="font-bold text-blue-600">B</span>
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800 mb-3">チームB</h4>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>川島 達也</li>
                                        <li>中村千浩</li>
                                        <li>森重ゆう</li>
                                        <li>中山友里</li>
                                    </ul>
                                </div>

                                {/* Team C */}
                                <div className="team-card bg-white rounded-xl p-5 shadow-md border border-gray-100">
                                    <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                                        <span className="font-bold text-green-600">C</span>
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800 mb-3">チームC</h4>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>花島宏明</li>
                                        <li>谷口佳奈子</li>
                                        <li>平野春佳</li>
                                        <li>大塚渓</li>
                                    </ul>
                                </div>

                                {/* Team D */}
                                <div className="team-card bg-white rounded-xl p-5 shadow-md border border-gray-100">
                                    <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                                        <span className="font-bold text-yellow-600">D</span>
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800 mb-3">チームD</h4>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>松谷泉希</li>
                                        <li>松隈大輔</li>
                                        <li>手島慎太郎</li>
                                        <li>竹ノ谷 陸</li>
                                    </ul>
                                </div>

                                {/* Team E */}
                                <div className="team-card bg-white rounded-xl p-5 shadow-md border border-gray-100">
                                    <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                                        <span className="font-bold text-purple-600">E</span>
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800 mb-3">チームE</h4>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>西村朋樹</li>
                                        <li>大坪正和</li>
                                        <li>溝上 亮太</li>
                                        <li>吉永達哉</li>
                                    </ul>
                                </div>

                                {/* Team F */}
                                <div className="team-card bg-white rounded-xl p-5 shadow-md border border-gray-100">
                                    <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                                        <span className="font-bold text-pink-600">F</span>
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800 mb-3">チームF</h4>
                                    <ul className="text-gray-600 space-y-2">
                                        <li>藤木寛人</li>
                                        <li>齊城 弘江</li>
                                        <li>大石宏樹</li>
                                        <li>ヤップ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="information" className="py-16 bg-pink-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">マップ</h2>
                        <p className="text-center text-gray-600 mb-12">移動する際のマップです。</p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">冷泉公園</h3>
                        <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl shadow-lg overflow-hidden mb-10">
                            <div className="p-8">
                                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md mb-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.411972803008!2d130.40621877569694!3d33.59461377333273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191eadba524ff%3A0xc1bb7c3cf0d18d33!2z5Ya35rOJ5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1744700609496!5m2!1sja!2sjp"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="冷泉公園の地図"
                                    />
                                </div>
                                <div className="text-gray-600">
                                    <p className="mb-2">〒810-0023 福岡県福岡市中央区警固1丁目1</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">博多水炊き大和</h3>
                        <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl shadow-lg overflow-hidden mb-10">
                            <div className="p-8">
                                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md mb-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4397270816025!2d130.40346861201851!3d33.593893441680954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419194a1044009%3A0xb3642dd14504b683!2z5Y2a5aSa5rC054KK44GN5aSn5ZKM!5e0!3m2!1sja!2sjp!4v1744700946452!5m2!1sja!2sjp"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="博多水炊き大和の地図"
                                    />
                                </div>
                                <div className="text-gray-600">
                                    <p className="mb-2">〒810-0001 福岡県福岡市中央区天神2丁目3-24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">オフィシャルカメラマン</h2>
                        <p className="text-center text-gray-600 mb-12">イベントの素敵な瞬間を写真に残します</p>

                        <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl shadow-lg overflow-hidden mb-16">
                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="bg-pink-200 rounded-full p-1 mr-6 overflow-hidden" style={{ width: '80px', height: '80px' }}>
                                        <img
                                            src="/14th-semi-annual/yap.png"
                                            alt="Yapさんのプロフィール写真"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-1">Yapさん</h3>
                                        <p className="text-gray-600">オフィシャルカメラマン</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-6">
                                    <h4 className="font-bold text-lg text-gray-800 mb-4">当日のお願い</h4>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="check-icon-1">
                                                <title id="check-icon-1">チェックマーク</title>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>カメラを向けられたら、ぜひ笑顔で！</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="check-icon-2">
                                                <title id="check-icon-2">チェックマーク</title>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>撮影された写真は、今後の広報活動に活用される可能性がありますので、ご了承ください</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="check-icon-3">
                                                <title id="check-icon-3">チェックマーク</title>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>公開NGの方はYapさんまたは執行役員までお知らせください</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="check-icon-4">
                                                <title id="check-icon-4">チェックマーク</title>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>イベントの雰囲気を楽しみつつ、最高の一枚を残しましょう！</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-labelledby="check-icon-5">
                                                <title id="check-icon-5">チェックマーク</title>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Yapさんがメインで撮影しますが、皆さんが撮った写真も大歓迎です！（<a href="https://drive.google.com/drive/folders/1VaHZuemFSP17Rk2_sW4Y1zorUpHIyI4Q?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">こちらのフォルダ</a>にアップロードしてください）</span>
                                        </li>
                                    </ul>
                                    <p className="text-center text-gray-800 font-medium mt-6">みんなで総会の思い出を残しましょう！</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

    return isClient ? content : null;
}