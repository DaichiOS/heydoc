'use client'

import { Metadata } from 'next'
import { AppHeader } from '@/components/ui/app-header'
import { FooterSection } from '@/components/home/FooterSection'
import { useState } from 'react'
import { PrivacyModal } from '@/components/legal/privacy-modal'
import { TermsModal } from '@/components/legal/terms-modal'

export default function PrivacyPage() {
	const [showPrivacyModal, setShowPrivacyModal] = useState(false)
	const [showTermsModal, setShowTermsModal] = useState(false)

	return (
		<div className="min-h-screen bg-white">
			<AppHeader />
			<main>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				{/* Header */}
				<div className="mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
					<p className="text-gray-600">Last Updated: October 2025</p>
					<p className="text-blue-600 mt-2">HeyDoc Health Pty Ltd ABN 88 526 376 986</p>
				</div>

				{/* Content */}
				<div className="prose prose-blue max-w-none space-y-8">
					{/* Section 1 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								HeyDoc Health Pty Ltd (ABN 88 526 376 986) ("HeyDoc", "we", "us", "our") is an Australian healthcare
								provider delivering telehealth and related medical services.
							</p>
							<p>
								We are committed to protecting your privacy and managing your personal information responsibly and in
								accordance with the Privacy Act 1988 (Cth) ("the Act") and the Australian Privacy Principles (APPs).
							</p>
							<p>
								This Privacy Policy explains how we collect, use, store, and disclose your personal information in the
								course of providing our services, including via our website and online platforms.
							</p>
							<p>
								By using our website, telehealth services, or interacting with us, you acknowledge that you have read
								and understood this Privacy Policy.
							</p>
						</div>
					</section>

					{/* Section 2 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What is Personal Information</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								For the purposes of this Privacy Policy, "personal information" (also referred to as personal data) means
								information or an opinion about an identified individual, or an individual who is reasonably identifiable,
								whether the information or opinion is true or not and whether it is recorded in a material form or not.
							</p>
							<p>
								This includes information such as your name, contact details, date of birth, medical history, or any other
								details that can identify you.
							</p>
						</div>
					</section>

					{/* Section 3 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">3. What Information We Collect</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								The type of personal information collected by HeyDoc depends on your interaction with our services but
								typically includes:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Full name, address, email, telephone number, and other contact details;</li>
								<li>Date of birth, age, gender, and next of kin or emergency contact;</li>
								<li>
									Health and medical information, including clinical notes, consultation records, prescriptions,
									pathology results, and other health data relevant to your care;
								</li>
								<li>Details of products or services you have received, requested, or enquired about;</li>
								<li>Billing, payment, and transaction details;</li>
								<li>
									Technical information such as IP address, browser type, and usage data when accessing our website; and
								</li>
								<li>Any additional information you choose to provide or authorise us to collect.</li>
							</ul>
						</div>
					</section>

					{/* Section 4 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Collect Your Information</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>We collect personal information directly from you when you:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Register for or use our telehealth services;</li>
								<li>Submit information through our website or online forms;</li>
								<li>Communicate with us by email, phone, or chat services; or</li>
								<li>Participate in feedback or customer support activities.</li>
							</ul>
							<p>
								We may also collect information indirectly, with your consent, from third parties such as healthcare
								providers, laboratories, pharmacies, or allied health professionals involved in your care.
							</p>
						</div>
					</section>

					{/* Section 5 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Why We Collect and Use Your Information</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>HeyDoc collects, holds, and uses personal information for purposes including:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Providing and managing telehealth consultations and related health services;</li>
								<li>Verifying your identity and eligibility to receive services;</li>
								<li>Administrative, billing, and internal record keeping functions;</li>
								<li>Communicating with you regarding appointments, results, and service updates;</li>
								<li>Conducting quality assurance, staff training, and service improvement activities;</li>
								<li>Performing data analytics, market research, and product development activities;</li>
								<li>Complying with our legal, regulatory, and professional obligations; and</li>
								<li>Responding to enquiries, feedback, or complaints.</li>
							</ul>
						</div>
					</section>

					{/* Section 6 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sensitive Information</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								As part of providing healthcare services, we may collect "sensitive information" as defined in the
								Privacy Act, including details about your:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Health or medical conditions;</li>
								<li>Genetic or biometric information; or</li>
								<li>Racial or ethnic origin where relevant to clinical care.</li>
							</ul>
							<p>
								Sensitive information will only be collected with your consent, unless required or authorised by law,
								and will be handled in accordance with the APPs.
							</p>
						</div>
					</section>

					{/* Section 7 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Use and Disclosure of Personal Information</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								HeyDoc will use or disclose personal information solely for the purposes outlined in this Policy or
								otherwise permitted by law.
							</p>
							<p>We may disclose personal information to:</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>
									Treating doctors, specialists, pathology providers, pharmacies, and other healthcare professionals
									involved in your care;
								</li>
								<li>
									Our employees, contractors, and service providers engaged to assist in operating our platform and
									supporting service delivery;
								</li>
								<li>
									Insurers, regulators, or law enforcement agencies where required by law or to defend legal claims.
								</li>
							</ul>
							<p>We do not sell, rent, or trade personal information to any third parties.</p>
							<p>
								If you choose to opt out of receiving marketing or promotional communications, you can do so at any time
								by using the unsubscribe link in our emails or by contacting us directly.
							</p>
							<p>
								Please note that we may still contact you regarding your ongoing relationship with HeyDoc.
							</p>
						</div>
					</section>

					{/* Section 8 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Website Analytics</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								Our website may use cookies and similar technologies to enhance user experience, analyse traffic, and
								support site functionality.
							</p>
							<p>
								Cookies may collect data such as IP address, browser type, device information, and website usage statistics.
							</p>
							<p>
								You may choose to disable cookies through your browser settings, although this may limit your use of
								certain features on our website.
							</p>
						</div>
					</section>

					{/* Section 9 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Storage and Security of Information</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								We store personal information in electronic form using secure databases and cloud storage solutions based
								in Australia with trusted providers.
							</p>
							<p>
								HeyDoc takes reasonable steps to protect your personal information from misuse, interference, loss,
								unauthorised access, modification or disclosure. This includes encryption of data in transit and at rest,
								private network architecture with no public database access, daily automated backups, and comprehensive
								audit logging of all access to patient records.
							</p>
							<p>
								Access to personal information is restricted to authorised personnel only and protected by appropriate
								security controls including session management and multi-factor authentication.
							</p>
						</div>
					</section>

					{/* Section 10 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Access and Correction</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								You are entitled to request access to the personal information HeyDoc holds about you and to seek
								corrections where you believe it is inaccurate, out-of-date, incomplete, or misleading.
							</p>
							<p>
								Requests for access or correction can be made by contacting our Privacy Officer at the details below.
							</p>
							<p>
								We do not charge a fee for making such requests, and we will respond within a reasonable timeframe in
								accordance with the APPs.
							</p>
						</div>
					</section>

					{/* Section 11 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Overseas Disclosure</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>HeyDoc does not routinely disclose personal information to overseas recipients.</p>
							<p>
								If such disclosure is required (for example, where a cloud storage provider is located overseas), we will
								take reasonable steps to ensure that the recipient complies with the APPs and equivalent privacy protections.
							</p>
						</div>
					</section>

					{/* Section 12 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Anonymity and Pseudonymity</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								Where lawful and practicable, you may choose to interact with HeyDoc anonymously or by using a pseudonym
								(e.g. when making a general enquiry).
							</p>
							<p>However, we may be unable to provide some services unless you identify yourself.</p>
						</div>
					</section>

					{/* Section 13 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Complaints and Enquiries</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								If you have any questions, concerns, or complaints about how HeyDoc has handled your personal information,
								please contact our Privacy Officer:
							</p>
							<p className="font-medium">Email: admin@heydochealth.com.au</p>
							<p>
								We will acknowledge your complaint within seven (7) days and aim to resolve the matter within thirty (30) days.
							</p>
							<p>
								We take privacy concerns seriously and will respond to your inquiry promptly. You also have the right to contact the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a> if you wish.
							</p>
						</div>
					</section>

					{/* Section 14 */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to This Privacy Policy</h2>
						<div className="space-y-3 text-gray-600 leading-relaxed">
							<p>
								HeyDoc may update this Privacy Policy from time to time to reflect legal or operational changes.
							</p>
							<p>
								The latest version will always be available on our website at{' '}
								<a href="https://www.heydochealth.com.au" className="text-blue-600 hover:underline">
									www.heydochealth.com.au
								</a>
								.
							</p>
							<p>
								We encourage you to review this Policy periodically to remain informed about how we manage your personal
								information.
							</p>
						</div>
					</section>
				</div>

				{/* Footer Links */}
				<div className="mt-12 pt-8 border-t border-gray-200">
					<div className="flex flex-wrap gap-6 justify-center text-sm">
						<a href="/security" className="text-blue-600 hover:underline">Security & Data Protection</a>
						<a href="/about" className="text-blue-600 hover:underline">About Us</a>
						<a href="mailto:admin@heydochealth.com.au" className="text-blue-600 hover:underline">Contact Us</a>
					</div>
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
