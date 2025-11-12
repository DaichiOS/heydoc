'use client'

import Image from 'next/image'

export function HowItWorksSection() {
	return (
		<section className="pt-0 pb-12 bg-white relative overflow-hidden">
			<div className="px-3 sm:px-4 lg:px-5">
				<div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 sm:p-12 lg:p-16">
					<div className="max-w-7xl mx-auto">
				{/* Title at top */}
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B3A] mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
						Why Aussies love HeyDoc
					</h2>
					<p className="text-base sm:text-lg text-blue-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>
						Australia's only online doctor-led fertility referral network
					</p>
				</div>

				{/* Grid layout for mobile and desktop */}
				<div className="grid grid-cols-1 lg:grid-cols-[280px_280px_280px] gap-6 justify-center max-w-6xl mx-auto">
					{/* Card 1 */}
					<div className="bg-gradient-to-br from-blue-100 to-white rounded-xl p-6 h-[240px] flex flex-col justify-center lg:col-start-1 lg:row-start-1">
						<div className="flex gap-4 items-start">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 rounded-full bg-[#1C1B3A] flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: 'Satoshi, sans-serif' }}>
									✓
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium text-[#1C1B3A] mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									Consultations in minutes
								</h3>
								<p className="text-sm text-blue-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
									No waiting weeks for GP appointments. Get your fertility referral from an AHPRA-registered doctor in minutes, not weeks.
								</p>
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div className="bg-gradient-to-br from-blue-100 to-white rounded-xl p-6 h-[240px] flex flex-col justify-center lg:col-start-3 lg:row-start-1">
						<div className="flex gap-4 items-start">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 rounded-full bg-[#1C1B3A] flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: 'Satoshi, sans-serif' }}>
									✓
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium text-[#1C1B3A] mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									Fertility-focused platform
								</h3>
								<p className="text-sm text-blue-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
									Focused on fertility, not general telehealth. We have one goal - your future pregnancy.
								</p>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className="relative w-full h-[500px] overflow-hidden flex-shrink-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 rounded-xl">
						<Image
							src="/images/portrait2.png"
							alt="HeyDoc fertility consultation"
							fill
							style={{
								objectFit: 'cover',
								objectPosition: 'center'
							}}
						/>
					</div>

					{/* Card 3 */}
					<div className="bg-gradient-to-br from-blue-100 to-white rounded-xl p-6 h-[240px] flex flex-col justify-center lg:col-start-1 lg:row-start-2">
						<div className="flex gap-4 items-start">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 rounded-full bg-[#1C1B3A] flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: 'Satoshi, sans-serif' }}>
									✓
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium text-[#1C1B3A] mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									Doctor-led care
								</h3>
								<p className="text-sm text-blue-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
									Founded and run by doctors specialising in fertility medicine and obstetrics.
								</p>
							</div>
						</div>
					</div>

					{/* Card 4 */}
					<div className="bg-gradient-to-br from-blue-100 to-white rounded-xl p-6 h-[240px] flex flex-col justify-center lg:col-start-3 lg:row-start-2">
						<div className="flex gap-4 items-start">
							<div className="flex-shrink-0">
								<div className="w-8 h-8 rounded-full bg-[#1C1B3A] flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: 'Satoshi, sans-serif' }}>
									✓
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium text-[#1C1B3A] mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									Safe & ethical
								</h3>
								<p className="text-sm text-blue-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
									Every referral reviewed by AHPRA-registered Australian doctors.
								</p>
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
