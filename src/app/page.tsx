'use client'

import { AppHeader } from '@/components/ui/app-header'
import { useState } from 'react'
import { PrivacyModal } from '@/components/legal/privacy-modal'
import { TermsModal } from '@/components/legal/terms-modal'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustBarSection } from '@/components/home/TrustBarSection'
import { ProcessSection } from '@/components/home/ProcessSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { NotificationCardsSection } from '@/components/home/NotificationCardsSection'
import { FAQSection } from '@/components/home/FAQSection'
import { CTASection } from '@/components/home/CTASection'
import { FooterSection } from '@/components/home/FooterSection'

export default function HomePage() {
	const [showPrivacyModal, setShowPrivacyModal] = useState(false)
	const [showTermsModal, setShowTermsModal] = useState(false)

	// Structured data for SEO
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "MedicalOrganization",
		"name": "HeyDoc",
		"description": "Australia's leading online fertility referral service with AHPRA-registered doctors",
		"url": "https://www.heydochealth.com.au",
		"logo": "https://www.heydochealth.com.au/logos/heydoc-socials2.png",
		"image": "https://www.heydochealth.com.au/logos/heydoc-socials2.png",
		"telephone": "+61-support",
		"email": "support@heydochealth.com.au",
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "AU",
			"addressRegion": "Australia"
		},
		"areaServed": {
			"@type": "Country",
			"name": "Australia"
		},
		"medicalSpecialty": [
			"Fertility Medicine",
			"Reproductive Health",
			"Telehealth"
		],
		"availableService": [
			{
				"@type": "MedicalProcedure",
				"name": "Fertility Consultation",
				"description": "Online fertility consultation with AHPRA-registered doctors"
			},
			{
				"@type": "MedicalProcedure",
				"name": "Fertility Specialist Referral",
				"description": "Get referrals to fertility specialists across Australia"
			},
			{
				"@type": "MedicalProcedure",
				"name": "Male Fertility Assessment",
				"description": "Specialized fertility assessment and care for men"
			}
		],
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "5",
			"reviewCount": "100"
		}
	}

	return (
		<div className="min-h-screen bg-[#FDFCFA] flex flex-col">
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			{/* Fixed Header */}
			<AppHeader />

			{/* All Sections */}
			<HeroSection />
			<TrustBarSection />
			<ProcessSection />
			<HowItWorksSection />
			<NotificationCardsSection />
			<FAQSection />
			<CTASection />
			<FooterSection
				onPrivacyClick={() => setShowPrivacyModal(true)}
				onTermsClick={() => setShowTermsModal(true)}
			/>

			{/* Modals */}
			<PrivacyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
			<TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
		</div>
	)
}
