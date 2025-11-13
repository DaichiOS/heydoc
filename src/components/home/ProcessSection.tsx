'use client'

export function ProcessSection() {
	return (
		<section className="pt-12 pb-10 bg-white relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B3A] mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
						How It Works
					</h2>
					<p className="text-base sm:text-lg text-blue-600 max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
						HeyDoc removes the hassle of in-person appointments, uncomfortable waiting rooms, and doctors running late.
					</p>
				</div>

				{/* Step Descriptions */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 max-w-5xl mx-auto">
					{/* Step 1 */}
					<div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-2">
							<div className="w-8 h-8 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
								<span className="text-white text-base font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>1</span>
							</div>
							<h3 className="text-base sm:text-lg font-semibold text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
								Complete a Short Questionnaire
							</h3>
						</div>
						<p className="text-sm sm:text-base text-[#1C1B3A]/70" style={{ fontFamily: 'Satoshi, sans-serif' }}>
							Tell us about your fertility journey in just a few minutes.
						</p>
					</div>

					{/* Step 2 */}
					<div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-2">
							<div className="w-8 h-8 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
								<span className="text-white text-base font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>2</span>
							</div>
							<h3 className="text-base sm:text-lg font-semibold text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
								Speak with an Australian Doctor
							</h3>
						</div>
						<p className="text-sm sm:text-base text-[#1C1B3A]/70" style={{ fontFamily: 'Satoshi, sans-serif' }}>
							Connect with an AHPRA-registered fertility doctor in minutes, not weeks!
						</p>
					</div>

					{/* Step 3 */}
					<div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-2">
							<div className="w-8 h-8 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
								<span className="text-white text-base font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>3</span>
							</div>
							<h3 className="text-base sm:text-lg font-semibold text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
								Receive Your Referral
							</h3>
						</div>
						<p className="text-sm sm:text-base text-[#1C1B3A]/70" style={{ fontFamily: 'Satoshi, sans-serif' }}>
							Get your referral sent directly to you via email or SMS.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
