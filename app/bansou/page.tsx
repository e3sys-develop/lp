"use client";

import { Navbar } from '@/app/bansou/components/navbar';
import { HeroSection } from '@/app/bansou/components/hero-section';
import { Problems } from '@/app/bansou/components/problems';
import { AboutSection } from '@/app/bansou/components/about-section';
import { CaseStudies } from '@/app/bansou/components/case-studies';
import { Features } from '@/app/bansou/components/features';
import { Pricing } from '@/app/bansou/components/pricing';
import { ContactForm } from '@/app/bansou/components/contact-form';
import { Footer } from '@/app/bansou/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Problems />
        <AboutSection />
        <CaseStudies />
        <Features />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}