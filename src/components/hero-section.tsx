
interface HeroSectionProps {
	onWaitlistOpen: () => void
}

export function HeroSection({ onWaitlistOpen }: HeroSectionProps) {
	return (
		<section className="px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-24">
			<div className="max-w-6xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
					
					{/* Left Column - Content */}
					<div className="space-y-8 sm:space-y-8">
						{/* Trust Badge */}
						<div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-4 py-2.5 sm:py-2 border border-blue-200 shadow-sm">
							<div className="w-2 h-2 bg-green-500 rounded-full mr-3 sm:mr-2"></div>
							<span className="text-sm sm:text-sm font-medium text-slate-700">Built by doctors, trusted by patients</span>
						</div>

						{/* Main Headline */}
						<div className="space-y-4 sm:space-y-4">
							<h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
								Quality Healthcare,
								<span className="text-[#1C1B3A] block">Anywhere in Australia</span>
							</h1>
							
							<p className="text-lg text-slate-600 leading-relaxed">
								Get started with your healthcare needs.
							</p>
						</div>

						{/* Key Benefits */}
						<div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-sm lg:bg-transparent lg:p-0 lg:border-none lg:shadow-none lg:rounded-none">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
								<BenefitItem text="GP Consultations" />
								<BenefitItem text="Mental Health Support" />
								<BenefitItem text="Women's Health" />
								<BenefitItem text="Specialist Referrals" />
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
							<a 
								href="https://app.heydochealth.com.au/" 
								target="_blank" 
								rel="noopener noreferrer"
								className="bg-[#1C1B3A] text-white px-8 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:bg-[#252347] hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95 inline-flex items-center justify-center"
							>
								Try Demo
							</a>
							
							<button 
								onClick={onWaitlistOpen}
								className="border-2 border-[#1C1B3A] text-[#1C1B3A] px-8 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 bg-white/50 lg:bg-transparent"
							>
								Join Waitlist
							</button>
						</div>

						{/* Social Proof */}
						<div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-sm lg:bg-transparent lg:p-0 lg:pt-4 lg:border-none lg:shadow-none lg:rounded-none">
							<div className="flex items-center justify-between sm:justify-start sm:space-x-6">
								<SocialProofItem number="50,000+" label="Consultations" />
								<SocialProofItem number="500+" label="Healthcare Providers" />
								<SocialProofItem number="24/7" label="Available" />
							</div>
						</div>
					</div>

					{/* Right Column - Visual Element */}
					<div className="relative lg:pl-8 mt-12 lg:mt-0">
						<div className="bg-white/60 backdrop-blur-sm rounded-3xl sm:rounded-3xl p-8 sm:p-8 shadow-xl border border-white/30 lg:bg-white/50 lg:border-white/20">
							<div className="space-y-6 sm:space-y-6">
								{/* Mock consultation interface */}
								<div className="flex items-center space-x-4 sm:space-x-4">
									<div className="w-12 sm:w-12 h-12 sm:h-12 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
										<svg className="w-6 sm:w-6 h-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</div>
									<div className="flex-1 min-w-0">
										<div className="font-semibold text-slate-900 text-base sm:text-base truncate">Dr. Albert Vu</div>
										<div className="text-sm sm:text-sm text-slate-600">General Practitioner</div>
									</div>
									<div className="ml-auto">
										<div className="w-3 sm:w-3 h-3 sm:h-3 bg-green-500 rounded-full"></div>
									</div>
								</div>
								
								<div className="bg-slate-100 rounded-xl sm:rounded-xl p-4 sm:p-4">
									<div className="text-sm sm:text-sm text-slate-600 mb-2 sm:mb-2">Next Available:</div>
									<div className="font-semibold text-slate-900 text-base sm:text-base">Today, 2:30 PM</div>
								</div>
								
								<div className="space-y-3 sm:space-y-3">
									<div className="text-sm sm:text-sm font-medium text-slate-900">Consultation Types:</div>
									<div className="space-y-2">
										<ConsultationType type="General Health" status="Available" />
										<ConsultationType type="Mental Health" status="Available" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

// Reusable sub-components
function BenefitItem({ text }: { text: string }) {
	return (
		<div className="flex items-center space-x-3">
			<div className="w-6 sm:w-6 h-6 sm:h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
				<svg className="w-3 sm:w-3 h-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
					<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
				</svg>
			</div>
			<span className="text-base sm:text-base text-slate-700 font-medium">{text}</span>
		</div>
	)
}

function SocialProofItem({ number, label }: { number: string; label: string }) {
	return (
		<div className="text-center">
			<div className="text-2xl sm:text-2xl font-bold text-[#1C1B3A]">{number}</div>
			<div className="text-sm sm:text-sm text-slate-600">{label}</div>
		</div>
	)
}

function ConsultationType({ type, status }: { type: string; status: string }) {
	return (
		<div className="flex items-center justify-between bg-white rounded-lg p-3 sm:p-3">
			<span className="text-slate-700 text-sm sm:text-sm">{type}</span>
			<span className="text-green-600 font-medium text-sm sm:text-sm">{status}</span>
		</div>
	)
} 