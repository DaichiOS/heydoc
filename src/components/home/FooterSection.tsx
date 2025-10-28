import Image from 'next/image'
import Link from 'next/link'

interface FooterSectionProps {
	onPrivacyClick: () => void
	onTermsClick: () => void
}

export function FooterSection({ onPrivacyClick, onTermsClick }: FooterSectionProps) {
	return (
		<footer className="bg-gradient-to-br from-blue-100 to-white text-[#1C1B3A] py-8 sm:py-10 md:py-12 mt-auto pb-24 md:pb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
					<div className="col-span-1 md:col-span-2">
						<Image
							src="/logos/heydoc.png"
							alt="HeyDoc"
							width={200}
							height={80}
							className="h-10 sm:h-12 w-auto mb-3 sm:mb-4"
						/>
						<p className="text-sm sm:text-base text-[#1C1B3A]/70 max-w-md mb-4 sm:mb-6">
							Quality fertility-focused healthcare, anywhere in Australia. Built by doctors for better patient access.
						</p>

						{/* Social Media */}
						<div className="flex items-center gap-4 sm:gap-5">
							<a href="https://x.com/heydocau" target="_blank" rel="noopener noreferrer" className="text-[#1C1B3A]/70 hover:text-blue-500 transition-colors">
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
								</svg>
							</a>
							<a href="https://www.instagram.com/heydoc.au/" target="_blank" rel="noopener noreferrer" className="text-[#1C1B3A]/70 hover:text-blue-500 transition-colors">
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.072-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
								</svg>
							</a>
							<a href="https://www.linkedin.com/company/heydocau" target="_blank" rel="noopener noreferrer" className="text-[#1C1B3A]/70 hover:text-blue-500 transition-colors">
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</a>
						</div>
					</div>

					<div>
						<h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
						<ul className="space-y-2 text-sm sm:text-base text-[#1C1B3A]/70">
							<li><Link href="/about" className="hover:text-blue-500 transition-colors inline-block py-1">About Us</Link></li>
							<li><a href="mailto:admin@heydochealth.com.au" className="hover:text-blue-500 transition-colors inline-block py-1">Contact</a></li>
							<li><Link href="/careers" className="hover:text-blue-500 transition-colors inline-block py-1">Careers</Link></li>
							<li><Link href="/security" className="hover:text-blue-500 transition-colors inline-block py-1">Security & Privacy</Link></li>
							<li className="pt-2 border-t border-[#1C1B3A]/30">
								<a href="https://app.heydochealth.com.au/register?type=doctor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors inline-block py-1 text-[#1C1B3A]/60">
									For Doctors →
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
						<ul className="space-y-2 text-sm sm:text-base text-[#1C1B3A]/70">
							<li><a href="https://app.heydochealth.com.au/register?type=patient" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors inline-block py-1">Fertility Consultation</a></li>
							<li><a href="https://app.heydochealth.com.au/register?type=patient" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors inline-block py-1">Fertility Specialist Referrals</a></li>
							<li><a href="https://app.heydochealth.com.au/register?type=patient" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors inline-block py-1">Male Fertility Support</a></li>
							<li><a href="https://app.heydochealth.com.au/register?type=patient" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors inline-block py-1">Fertility Referrals</a></li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
						<ul className="space-y-2 text-sm sm:text-base text-[#1C1B3A]/70">
							<li><Link href="/tools/due-date-calculator" className="hover:text-blue-500 transition-colors inline-block py-1">Due Date Calculator</Link></li>
							<li><Link href="/tools/due-date-calculator/pregnancy-health-guide" className="hover:text-blue-500 transition-colors inline-block py-1">Pregnancy Health Guide</Link></li>
						</ul>
					</div>
				</div>

				<div className="border-t border-[#1C1B3A]/30 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-[#1C1B3A]/70">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
						<p className="text-xs sm:text-sm">&copy; 2025 HeyDoc. All rights reserved.</p>
						<div className="flex space-x-6 text-xs sm:text-sm">
							<Link href="/privacy" className="hover:text-blue-500 transition-colors">
								Privacy Policy
							</Link>
							<Link href="/security" className="hover:text-blue-500 transition-colors">
								Security
							</Link>
							<button onClick={onTermsClick} className="hover:text-blue-500 transition-colors cursor-pointer">
								Terms of Service
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
