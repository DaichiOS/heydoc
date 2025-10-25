import Image from 'next/image'

export function HowItWorksSection() {
	return (
		<section className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title at top */}
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#475C21]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
						Your Fertility Journey
						<br />
						Starts with Us.
					</h2>
				</div>

				{/* Grid layout for mobile and desktop */}
				<div className="grid grid-cols-1 lg:grid-cols-[280px_280px_280px] gap-6 justify-center max-w-6xl mx-auto">
					{/* Card 1 */}
					<div className="bg-[#F9FAF2] rounded-xl p-6 h-[240px] flex flex-col justify-center lg:col-start-1 lg:row-start-1">
						<div className="flex gap-4 items-start">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 rounded-full bg-[#475C21] flex items-center justify-center text-white font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
									1
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium text-[#475C21] mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									Complete a Short Questionnaire
								</h3>
								<p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
									Tell us about your fertility journey in just a few minutes from the comfort of your home.
								</p>
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div className="bg-[#F9FAF2] rounded-xl p-6 h-[240px] flex flex-col justify-center lg:col-start-3 lg:row-start-1">
						<div className="flex gap-4 items-start">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 rounded-full bg-[#475C21] flex items-center justify-center text-white font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
									2
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium text-[#475C21] mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									Speak with an AHPRA Doctor
								</h3>
								<p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
									Connect with an Australian fertility doctor within minutes, not weeks.
								</p>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className="relative w-full h-[500px] overflow-hidden flex-shrink-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
						<Image
							src="/images/new1.jpg"
							alt="HeyDoc fertility consultation"
							fill
							style={{
								objectFit: 'cover',
								objectPosition: 'center'
							}}
						/>
					</div>

					{/* Card 3 */}
					<div className="bg-[#F9FAF2] rounded-xl p-6 h-[240px] flex flex-col justify-center lg:col-start-1 lg:row-start-2">
						<div className="flex gap-4 items-start">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 rounded-full bg-[#475C21] flex items-center justify-center text-white font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
									3
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium text-[#475C21] mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									Receive Your Referral
								</h3>
								<p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
									Get your fertility specialist referral sent directly to you and your chosen clinic via email or SMS.
								</p>
							</div>
						</div>
					</div>

					{/* Card 4 */}
					<div className="bg-[#F9FAF2] rounded-xl p-6 h-[240px] flex flex-col justify-center lg:col-start-3 lg:row-start-2">
						<div className="flex gap-4 items-start">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 rounded-full bg-[#475C21] flex items-center justify-center text-white font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
									4
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium text-[#475C21] mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									Begin Your Treatment
								</h3>
								<p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
									Take your referral to a fertility clinic to start your personalised treatment plan, from IVF to fertility testing and more.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
