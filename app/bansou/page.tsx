"use client";

import { AboutSection } from "@/app/bansou/components/about-section";
import { CaseStudies } from "@/app/bansou/components/case-studies";
import { CTA } from "@/app/bansou/components/cta";
import { Features } from "@/app/bansou/components/features";
import { HeroSection } from "@/app/bansou/components/hero-section";
import { Pricing } from "@/app/bansou/components/pricing";
import { Problems } from "@/app/bansou/components/problems";
import { PartnersSection } from "./components/partners-section";

export default function Home() {
	return (
		<>
			<main>
				<HeroSection />
				<Problems />
				<AboutSection />
				<CaseStudies />
				<Features />
				<PartnersSection />
				<Pricing />
				<CTA />
			</main>
		</>
	);
}
