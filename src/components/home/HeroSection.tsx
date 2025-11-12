import Image from 'next/image'

export function HeroSection() {
	return (
		<section className="relative min-h-screen bg-white pt-[80px]">
			{/* Minimal white padding container - just enough to create subtle border */}
			<div className="px-3 sm:px-4 lg:px-5 pb-4">
				{/* Image container with minimal border effect - much larger */}
				<div className="relative h-[calc(100vh-100px)] rounded-2xl overflow-hidden">
					{/* Background Image */}
					<div className="absolute inset-0">
						<Image
							src="/images/hero.png"
							alt="Expecting couple"
							fill
							style={{
								objectFit: 'cover',
								objectPosition: '50% 35%'
							}}
							priority
						/>
						{/* Gradient overlay for text readability */}
						<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
					</div>

					{/* Centered Content */}
					<div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 max-w-4xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}>
							Need a fertility referral?
						</h1>
						<p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 lg:mb-8 max-w-2xl" style={{ textShadow: '0 3px 16px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.5)' }}>
							Get your fertility specialist referral in minutes, not weeks
						</p>

						{/* CTA Button */}
						<a
							href="https://app.heydochealth.com.au/register?type=patient"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-50 font-semibold transition-all duration-200 px-8 py-4 rounded-full text-base lg:text-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
						>
							Get started
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.5 4L13.5 10L7.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</a>

						{/* Promo code */}
						<p className="mt-6 text-sm sm:text-base text-white/90" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.5)' }}>
							First time? Use code <span className="font-bold text-yellow-400">WELCOME10</span> for a $10 initial consult
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
