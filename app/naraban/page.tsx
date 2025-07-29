"use client"

import React, { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import {
    Menu,
    X,
    Zap,
    Smartphone,
    BarChart3,
    Heart,
    DollarSign,
    TrendingUp,
    Shield,
    Music,
    Handshake,
    ShoppingBag,
    Coffee,
    ChevronDown,
    ChevronUp,
    Star,
    Users,
    Clock,
    CheckCircle
} from 'lucide-react';

function NarabanPageContent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqData = [
        {
            q: "会員登録は必要ですか？",
            a: "いいえ。Webからワンクリックで整理券・特典券を取得できます。"
        },
        {
            q: "発行上限は設定できますか？",
            a: "はい。イベントごとに運営者が上限数を自由に設定可能です。"
        },
        {
            q: "キャンセルはできますか？",
            a: "はい。管理画面からいつでもキャンセルできます。"
        },
        {
            q: "データはどこまで見られますか？",
            a: "発券数・利用数・キャンセル数など、リアルタイムで詳細把握できます。"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <ThemeSwitcher />
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-border-gray shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" className="flex items-center space-x-2">
                                <span>
                                    <img src="/naraban/logo.svg" alt="ナラバン ロゴ" className="h-16 w-auto" />
                                </span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-text-light hover:text-primary transition-colors duration-200">
                                機能
                            </a>
                            <a href="#benefits" className="text-text-light hover:text-primary transition-colors duration-200">
                                メリット
                            </a>
                            <a href="#faq" className="text-text-light hover:text-primary transition-colors duration-200">
                                FAQ
                            </a>
                            <a href="https://naraban.jp/signup" className="bg-accent hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                無料ベータ版
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-text-light hover:text-primary transition-colors duration-200"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t border-border-gray py-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#features" className="text-text-light hover:text-primary transition-colors duration-200 px-4">
                                    機能
                                </a>
                                <a href="#benefits" className="text-text-light hover:text-primary transition-colors duration-200 px-4">
                                    メリット
                                </a>
                                <a href="#faq" className="text-text-light hover:text-primary transition-colors duration-200 px-4">
                                    FAQ
                                </a>
                                <a href="https://naraban.jp/signup" className="bg-accent hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-all duration-200 mx-4 text-center">
                                    無料ベータ版
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="mt-16 pt-16 pb-20 bg-gradient-to-br from-bg-muted via-blue-50 to-primary/10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary-dark rounded-full text-sm font-medium">
                                    <Star className="w-4 h-4 mr-2" />
                                    イベント運営を革新
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-bold text-text-dark">
                                    整理券発行、<br />
                                    管理の
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                                        新常識
                                    </span>
                                </h1>
                                <p className="text-xl text-text-light leading-relaxed">
                                    整理券の発行・管理を、すべてスマホで完結。<br />
                                    運営効率化と顧客満足度向上を実現。
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://naraban.jp/signup" className="group bg-accent hover:bg-primary-dark text-white px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-center">
                                    無料ベータ版を今すぐ試す
                                    <div className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">→</div>
                                </a>
                                <a href="#features" className="border-2 border-border-gray hover:border-primary text-text-dark hover:text-primary px-8 py-4 rounded-xl transition-all duration-200 font-semibold text-center">
                                    機能を見る
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <img src="/naraban/hero.png" alt="ナラバン ヒーローイメージ" className="w-full h-full object-cover rounded-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-text-dark mb-4">
                            イベント運営でこんな<span className="text-accent">"課題"</span>ありませんか？
                        </h2>
                        <p className="text-xl text-text-light">多くの運営者が直面している課題を解決します</p>
                    </div>

                    <div className="grid grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                icon: "😰",
                                title: "整理券配布の列が<br />長く、運営が大変…"
                            },
                            {
                                icon: "📄",
                                title: "紙の整理券の印刷・<br />管理コストが高い…"
                            },
                            {
                                icon: "🎫",
                                title: "不正利用や<br />偽造のリスクも…"
                            },
                            {
                                icon: "📊",
                                title: "発券数や利用状況の<br />集計に時間がかかる…"
                            }
                        ].map((problem, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-border-gray group hover:-translate-y-1">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl">{problem.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-text-dark text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: problem.title }}></h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <div className="inline-block bg-gradient-to-r from-bg-muted to-primary/10 border-2 border-primary/20 rounded-2xl p-8 max-w-2xl">
                            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                            <p className="text-2xl font-bold text-primary-dark mb-2">
                                NARABANなら、これらの課題をすべて解決！
                            </p>
                            <p className="text-primary-dark">
                                運営効率化と顧客満足度向上を同時実現
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gradient-to-br from-bg-muted to-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-text-dark mb-4">
                            NARABANが選ばれる理由
                        </h2>
                        <p className="text-xl text-text-light">革新的な機能で、イベント運営を変革します</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Zap className="w-8 h-8 text-primary" />,
                                title: "簡単・柔軟な<br />整理券発行",
                                description: "イベントごとに定員や発行ルールを自由に設定。ボタン操作で即時発行。",
                                visual: (
                                    <div className="bg-primary/10 rounded-lg p-4">
                                        <div className="bg-white rounded-lg border p-3 text-center">
                                            <div className="text-sm font-bold text-primary mb-2">イベント設定</div>
                                            <div className="text-xs text-text-light">定員: 100名</div>
                                            <div className="text-xs text-text-light">発行開始: 10:00</div>
                                            <div className="mt-2 bg-primary text-white rounded px-3 py-1 text-xs">
                                                設定完了
                                            </div>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                icon: <Smartphone className="w-8 h-8 text-primary-dark" />,
                                title: "デジタル整理券＆<br />特典券",
                                description: "QR/バーコード発行で紙不要。特典会の券もアプリで一元管理。",
                                visual: (
                                    <div className="bg-primary-dark/10 rounded-lg p-4">
                                        <div className="bg-text-dark rounded-lg p-3 mx-auto w-24">
                                            <div className="bg-white rounded p-2 text-center">
                                                <div className="w-6 h-6 bg-primary-dark rounded mx-auto mb-1 flex items-center justify-center">
                                                    <Smartphone className="w-3 h-3 text-white" />
                                                </div>
                                                <div className="text-xs font-bold">券 #001</div>
                                                <div className="text-xs text-text-light">QR</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8 text-primary" />,
                                title: "リアルタイム運営<br />ダッシュボード",
                                description: "発券・利用状況を即時把握。混雑や残券を瞬時に確認し最適誘導。",
                                visual: (
                                    <div className="bg-primary/10 rounded-lg p-4">
                                        <div className="bg-white rounded-lg border p-3">
                                            <div className="text-sm font-bold mb-2">発券状況</div>
                                            <div className="flex justify-between text-xs mb-1">
                                                <span>発券済み</span>
                                                <span className="text-primary font-bold">85/100</span>
                                            </div>
                                            <div className="w-full bg-border-gray rounded-full h-2">
                                                <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                icon: <Heart className="w-8 h-8 text-accent" />,
                                title: "ファン体験を<br />最大化",
                                description: "来場時間通知とリマインダーで、待ち時間を有効活用。安心・快適。",
                                visual: (
                                    <div className="bg-accent/10 rounded-lg p-4">
                                        <div className="bg-white rounded-lg border border-accent/20 p-3">
                                            <div className="flex items-center mb-2">
                                                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                                                <div className="text-sm font-bold text-accent">通知</div>
                                            </div>
                                            <div className="text-xs text-accent">入場時間まで30分です</div>
                                            <div className="text-xs text-accent">会場: メインホール</div>
                                        </div>
                                    </div>
                                )
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-dark mb-3" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
                                    <p className="text-text-light mb-4 leading-relaxed">{feature.description}</p>
                                    {feature.visual}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-text-dark mb-4">
                            運営者のための４大メリット
                        </h2>
                        <p className="text-xl text-text-light">具体的な効果で、投資対効果を実感</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <DollarSign className="w-8 h-8 text-primary" />,
                                title: "運営コストの大幅削減",
                                points: [
                                    "紙の整理券・特典券の印刷・在庫管理が不要",
                                    "問い合わせ対応工数が削減"
                                ]
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                                title: "利用履歴はリアルタイム集計",
                                points: [
                                    "事後の手作業集計がゼロ",
                                    "次回施策に即フィードバック"
                                ]
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-primary-dark" />,
                                title: "不正利用・偽造を防止",
                                points: [
                                    "メール認証で横流しをブロック",
                                    "現場でトラブル時にも即対応可能"
                                ]
                            },
                            {
                                icon: <Smartphone className="w-8 h-8 text-accent" />,
                                title: "顧客満足度アップ",
                                points: [
                                    "待ち時間の削減とスムーズな入場",
                                    "スタッフの作業効率向上と、現場での混乱を最小化"
                                ]
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-border-gray">
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-bg-muted rounded-2xl flex items-center justify-center flex-shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-text-dark mb-4">{benefit.title}</h4>
                                        <ul className="space-y-3 text-text-light">
                                            {benefit.points.map((point, i) => (
                                                <li key={i} className="flex items-start">
                                                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow Section */}
            <section className="py-20 bg-gradient-to-br from-bg-muted to-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-text-dark mb-4">
                            フロー（使い方）
                        </h2>
                        <p className="text-xl text-text-light">📌 「たった3ステップで導入完了！」</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "1️⃣",
                                title: "イベント登録",
                                description: "イベント情報を入力"
                            },
                            {
                                step: "2️⃣",
                                title: "整理券発行",
                                description: "QRコードを自動生成"
                            },
                            {
                                step: "3️⃣",
                                title: "リアルタイム管理",
                                description: "発行状況を確認"
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                    <span className="text-2xl">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-dark mb-4">{item.title}</h3>
                                <p className="text-text-light leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-text-dark mb-4">
                            ご利用シーン例
                        </h2>
                        <p className="text-xl text-text-light">様々なイベントでご活用いただけます</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Music className="w-8 h-8 text-primary" />,
                                title: "ライブ会場での入場整理"
                            },
                            {
                                icon: <Handshake className="w-8 h-8 text-primary-dark" />,
                                title: "特典会や握手会での順番管理"
                            },
                            {
                                icon: <ShoppingBag className="w-8 h-8 text-accent" />,
                                title: "限定グッズ販売イベントでの整理券配布"
                            }
                        ].map((usecase, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {usecase.icon}
                                    </div>
                                    <h3 className="font-bold text-text-dark text-xl leading-relaxed">{usecase.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-20 bg-bg-muted">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-text-dark mb-4">
                            よくある質問（FAQ）
                        </h2>
                        <p className="text-xl text-text-light">お客様からよくいただく質問にお答えします</p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-border-gray overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-bg-muted transition-colors duration-200"
                                >
                                    <span className="font-semibold text-text-dark text-lg">{faq.q}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-text-light" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-text-light" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-4 border-t border-border-gray bg-bg-muted">
                                        <p className="text-text-light pt-4 leading-relaxed">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="signup" className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
                        <blockquote className="text-2xl text-white font-medium leading-relaxed">
                            「整理券も特典券も、もう紙に頼らない。NARABANでイベント運営を革新し、運営効率と顧客満足度を向上させましょう。」
                        </blockquote>
                    </div>

                    <div className="space-y-6">
                        <a href="https://naraban.jp/signup" className="group inline-block bg-white text-accent hover:bg-bg-muted px-10 py-4 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl font-bold text-lg">
                            今すぐ無料ベータ版に登録する
                            <div className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1">→</div>
                        </a>
                        <p className="text-white/80">
                            所要時間：30秒／ベータ版は期間限定・先着順
                        </p>

                        <div className="flex justify-center items-center space-x-8 pt-8">
                            <div className="flex items-center space-x-2 text-white/80">
                                <CheckCircle className="w-5 h-5" />
                                <span>無料で試用</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white/80">
                                <CheckCircle className="w-5 h-5" />
                                <span>導入サポート付き</span>
                            </div>
                            <div className="flex items-center space-x-2 text-white/80">
                                <CheckCircle className="w-5 h-5" />
                                <span>30秒で登録完了</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-text-dark text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <div className="text-2xl font-bold text-white mb-4">NARABAN</div>
                            <p className="text-text-light mb-6 leading-relaxed">
                                "WHACK!WHACK!し続ける"人と環境をつくる
                            </p>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200 cursor-pointer">
                                    <div className="w-5 h-5 bg-white rounded"></div>
                                </div>
                                <div className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200 cursor-pointer">
                                    <div className="w-5 h-5 bg-white rounded"></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6">運営会社</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://e3sys.co.jp/about/" target="_blank" rel="noreferrer noopener" className="text-text-light hover:text-white transition-colors duration-200">
                                        エミシスについて
                                    </a>
                                </li>
                                <li>
                                    <a href="https://e3sys.co.jp/company/" target="_blank" rel="noreferrer noopener" className="text-text-light hover:text-white transition-colors duration-200">
                                        会社情報
                                    </a>
                                </li>
                                <li>
                                    <a href="https://e3sys.co.jp/policy/" target="_blank" rel="noreferrer noopener" className="text-text-light hover:text-white transition-colors duration-200">
                                        セキュリティ・プライバシーポリシー
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-4">今すぐ始める</h4>
                            <div className="w-32 h-32 bg-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="https://placehold.jp/112x112.png"
                                    alt="NARABAN QR Code"
                                    className="w-28 h-28 rounded-xl object-cover"
                                />
                            </div>
                            <p className="text-sm text-text-light">QRコードでアクセス</p>
                        </div>
                    </div>

                    <div className="text-center mt-12 pt-8 border-t border-border-gray">
                        <p className="text-text-light">&copy; 2025 NARABAN. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function NarabanPage() {
    return (
        <ThemeProvider initialTheme="naraban">
            <NarabanPageContent />
        </ThemeProvider>
    );
}
