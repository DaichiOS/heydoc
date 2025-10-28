'use client'

import { AppHeader } from '@/components/ui/app-header'
import { FooterSection } from '@/components/home/FooterSection'
import { useState } from 'react'
import { PrivacyModal } from '@/components/legal/privacy-modal'
import { TermsModal } from '@/components/legal/terms-modal'

export default function SecurityPage() {
	const [showPrivacyModal, setShowPrivacyModal] = useState(false)
	const [showTermsModal, setShowTermsModal] = useState(false)

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
			<AppHeader />
			<main className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pt-24">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="mb-12">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">Security & Privacy FAQ</h1>
						<p className="text-xl text-gray-600">Common questions about how we protect your health information</p>
					</div>

					{/* FAQ Content */}
					<div className="space-y-8">

						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">Is my data encrypted?</h2>
							<p className="text-gray-600 leading-relaxed">
								Yes. All data transmitted between your device and our servers uses TLS 1.2 or higher encryption. Data stored in our database is encrypted at rest using AES-256 encryption, which is the industry standard for protecting sensitive information.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">Where is my data stored?</h2>
							<p className="text-gray-600 leading-relaxed">
								Your data is stored in secure Australian data centers with multiple layers of protection. The database runs on a private network with no public IP address, meaning it's completely isolated from the internet and only accessible through our secure application layer. This architecture ensures your medical records can never be directly accessed from outside our system.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">Do you back up my data?</h2>
							<p className="text-gray-600 leading-relaxed">
								Yes, we back up your data daily with 35 days of retention. Backups are encrypted and stored across multiple geographic locations for disaster recovery.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">Who can access my records?</h2>
							<p className="text-gray-600 leading-relaxed">
								We log all access to patient records - who accessed it, when, and from where. These audit logs are kept for 7 years as required by Australian healthcare regulations.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">Are my consultations secure?</h2>
							<p className="text-gray-600 leading-relaxed">
								Voice consultations are encrypted end-to-end. SMS is only used for verification codes - we never send medical information via text message.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">How are payments handled?</h2>
							<p className="text-gray-600 leading-relaxed">
								Your credit card details never touch our servers - you enter them directly into a secure payment form that's PCI DSS compliant. We only receive confirmation that payment was successful.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">Are doctors verified?</h2>
							<p className="text-gray-600 leading-relaxed">
								Yes. Every doctor on our platform has their AHPRA registration verified before they can access patient records.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">Do you comply with Australian privacy laws?</h2>
							<p className="text-gray-600 leading-relaxed">
								Yes, we comply with the Australian Privacy Act 1988. All data is stored in Australia.
							</p>
						</section>

						{/* Contact */}
						<section className="pt-6 border-t border-gray-300 mt-12">
							<h2 className="text-2xl font-semibold text-gray-900 mb-3">Have more questions?</h2>
							<p className="text-gray-600 leading-relaxed mb-6">
								If you have specific security questions, we're happy to answer them.
							</p>
							<div className="flex flex-col sm:flex-row gap-3">
								<a
									href="/privacy"
									className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
								>
									Read Privacy Policy
								</a>
								<a
									href="mailto:admin@heydochealth.com.au"
									className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
								>
									Contact Us
								</a>
							</div>
						</section>

					</div>
				</div>
			</main>

			{/* Footer */}
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
