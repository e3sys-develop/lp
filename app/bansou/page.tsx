"use client";

import { AboutSection } from "@/app/bansou/components/about-section";
import { CaseStudies } from "@/app/bansou/components/case-studies";
import { ContactForm } from "@/app/bansou/components/contact-form";
import { Features } from "@/app/bansou/components/features";
import { Footer } from "@/app/bansou/components/footer";
import { HeroSection } from "@/app/bansou/components/hero-section";
import { Navbar } from "@/app/bansou/components/navbar";
import { Pricing } from "@/app/bansou/components/pricing";
import { Problems } from "@/app/bansou/components/problems";

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
