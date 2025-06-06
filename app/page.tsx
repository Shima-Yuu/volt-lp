"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
  Code2, 
  Rocket, 
  Shield,
  MonitorSmartphone,
  Globe,
  Search,
  BarChart,
  LineChart,
  Users,
  MessageSquare,
  Phone,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import ParticlesBackground from "@/components/ParticlesBackground";
import ServiceCard from "@/components/ServiceCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface CaseStudy {
  icon: React.ReactNode;
  title: string;
  description: string;
  result: string;
  challenge: string;
  solution: string;
  impact: string;
}

export default function Home() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "金融系システム開発",
      description: "大手金融機関のオンラインバンキングシステムを最新技術でリニューアル",
      result: "利用者満足度98%達成",
      challenge: "レガシーシステムの刷新と、セキュリティ強化が課題でした。",
      solution: "最新のセキュリティ基準に準拠したシステムを構築し、UXを大幅に改善しました。",
      impact: "システム移行後、ユーザーからの高評価を獲得し、オンラインバンキングの利用率が40%向上しました。"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "人材マッチングアプリ",
      description: "AIを活用した革新的な人材マッチングプラットフォームを開発",
      result: "マッチング率200%向上",
      challenge: "従来の手動マッチングでは効率が悪く、精度も低かった。",
      solution: "機械学習アルゴリズムを活用し、スキルと企業ニーズのマッチング精度を向上。",
      impact: "採用までの期間を平均45%短縮し、企業と求職者双方の満足度が大幅に向上。"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "コミュニケーションツール",
      description: "社内コミュニケーションを活性化するチャットツールを開発",
      result: "業務効率30%改善",
      challenge: "部門間のコミュニケーション不足による業務の非効率化。",
      solution: "リアルタイムコミュニケーションと業務管理機能を統合したプラットフォームを開発。",
      impact: "会議時間の削減と情報共有の効率化により、生産性が大幅に向上。"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "ECサイトリニューアル",
      description: "大手小売業のECサイトをフルリニューアル",
      result: "売上150%増加",
      challenge: "モバイル対応の遅れとUI/UXの改善が急務だった。",
      solution: "最新のデザインシステムを導入し、完全レスポンシブ対応のECサイトを構築。",
      impact: "モバイルからの購入が70%増加し、カート放棄率が40%減少。"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <Header />

      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-blue-900/30" />
        <motion.div 
          className="container mx-auto text-center text-white z-10 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            デジタルの力で<br />
            ビジネスの未来を創造する
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            最新技術と創造力で、お客様のビジネスを次のステージへ。<br />
            私たちは、デジタルトランスフォーメーションの実現をサポートします。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-blue-800"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              お問い合わせはこちら
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 事業概要・強み */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
            {...fadeInUp}
          >
            選ばれる3つの理由
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "確かな実績と信頼",
                description: "創業以来15年以上の実績と、500社以上のお客様からの信頼。大手企業から官公庁まで、多様な開発実績があります。",
                points: ["業界トップクラスの技術力", "豊富な開発実績", "高いクライアント満足度"]
              },
              {
                icon: <Rocket className="w-12 h-12 text-blue-600" />,
                title: "スピーディな開発",
                description: "アジャイル開発手法により、企画から実装まで最短2週間でリリース。迅速なフィードバックと柔軟な対応を実現します。",
                points: ["最短2週間でのリリース", "柔軟な要件対応", "継続的な改善提案"]
              },
              {
                icon: <Code2 className="w-12 h-12 text-blue-600" />,
                title: "最新技術の活用",
                description: "React、Next.js等の最新技術を駆使し、高性能で拡張性の高いシステムを開発。常に最新のトレンドを取り入れています。",
                points: ["モダンな技術スタック", "高いパフォーマンス", "セキュアな実装"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-blue-900 text-center mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-20 bg-blue-50" id="services">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
            {...fadeInUp}
          >
            サービス内容
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: "Webサイト制作",
                description: "ビジネスの成長を加速させる、魅力的なWebサイトを制作します。",
                features: [
                  "コーポレートサイト",
                  "ランディングページ",
                  "採用サイト",
                  "レスポンシブデザイン"
                ]
              },
              {
                icon: <MonitorSmartphone className="w-12 h-12 text-blue-600" />,
                title: "Webアプリケーション開発",
                description: "ビジネスの課題を解決する、カスタムWebアプリケーションを開発します。",
                features: [
                  "業務システム開発",
                  "ECサイト構築",
                  "CMS開発",
                  "API開発"
                ]
              },
              {
                icon: <Search className="w-12 h-12 text-blue-600" />,
                title: "SEO・MEO対策",
                description: "検索エンジン対策で、ビジネスの視認性を向上させます。",
                features: [
                  "SEO内部対策",
                  "コンテンツマーケティング",
                  "Googleマイビジネス最適化",
                  "アクセス解析"
                ]
              },
              {
                icon: <BarChart className="w-12 h-12 text-blue-600" />,
                title: "集客支援・業務効率化",
                description: "デジタルマーケティングと業務効率化で、ビジネスを成長させます。",
                features: [
                  "マーケティング戦略立案",
                  "広告運用支援",
                  "業務プロセス改善",
                  "システム導入支援"
                ]
              }
            ].map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 実績・事例 */}
      <section className="py-20 bg-white" id="works">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
            {...fadeInUp}
          >
            実績・事例
          </motion.h2>
          <div className="relative px-4 md:px-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination',
              }}
              autoplay={{ delay: 5000 }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!pb-5 md:!h-[380px]"
            >
              {caseStudies.map((item, index) => (
                <SwiperSlide key={index} className="h-full">
                  <Card 
                    className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 md:flex md:flex-col"
                    onClick={() => setSelectedCase(item)}
                  >
                    <CardContent className="pt-6 h-full md:flex md:flex-col">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="bg-blue-50 p-3 rounded-lg mt-auto">
                        <p className="text-blue-700 font-semibold">{item.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination" />
            <button className="swiper-button-prev !w-8 !h-8 !text-blue-600 !-left-2 after:!text-lg" />
            <button className="swiper-button-next !w-8 !h-8 !text-blue-600 !-right-2 after:!text-lg" />
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedCase?.icon}
              <span>{selectedCase?.title}</span>
            </DialogTitle>
            <DialogDescription>
              <div className="mt-4">
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-blue-700 font-semibold">{selectedCase?.result}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-900">課題</h4>
                    <p className="text-gray-600">{selectedCase?.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">解決策</h4>
                    <p className="text-gray-600">{selectedCase?.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">成果</h4>
                    <p className="text-gray-600">{selectedCase?.impact}</p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* FAQ */}
      <section className="py-20 bg-blue-50" id="faq">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
            {...fadeInUp}
          >
            よくある質問
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {[
                {
                  question: "開発期間はどのくらいかかりますか？",
                  answer: "プロジェクトの規模や要件によって異なりますが、一般的なWebサイトであれば2-3ヶ月、大規模なシステム開発の場合は6ヶ月以上かかることがあります。まずはご相談ください。"
                },
                {
                  question: "開発費用の目安を教えてください",
                  answer: "プロジェクトの内容によって大きく異なります。小規模なWebサイトで50万円から、大規模なシステム開発では数百万円以上になることもあります。まずはご予算をお聞かせください。"
                },
                {
                  question: "開発後のサポート体制はどうなっていますか？",
                  answer: "保守・運用サポートプランをご用意しています。システムの監視、バグ修正、機能追加など、お客様のニーズに応じた継続的なサポートを提供します。"
                },
                {
                  question: "どのような技術スタックを使用していますか？",
                  answer: "React、Next.js、TypeScriptなどのモダンな技術を中心に、プロジェクトに最適な技術を選定します。常に最新の技術動向をキャッチアップしています。"
                },
                {
                  question: "セキュリティ対策は万全ですか？",
                  answer: "SSL/TLS暗号化、脆弱性診断、定期的なセキュリティアップデートなど、包括的なセキュリティ対策を実施しています。また、ISMS認証も取得済みです。"
                }
              ].map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:text-blue-600 [&[data-state=open]]:text-blue-600 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
            {...fadeInUp}
          >
            お問い合わせ
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 text-xl font-semibold text-blue-900 mb-4">
                <Phone className="w-6 h-6" />
                <span>0120-123-456</span>
              </div>
              <p className="text-gray-600">
                受付時間: 平日 9:00〜18:00
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}