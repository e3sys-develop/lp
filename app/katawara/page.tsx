"use client";

import { AboutSection } from "@/app/katawara/components/about-section";
import { CaseStudies } from "@/app/katawara/components/case-studies";
import { CTA } from "@/app/katawara/components/cta";
import { Features } from "@/app/katawara/components/features";
import { HeroSection } from "@/app/katawara/components/hero-section";
import { Pricing } from "@/app/katawara/components/pricing";
import { Problems } from "@/app/katawara/components/problems";
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
