import Image from 'next/image'

export function HeroSection() {
	return (
		<section className="relative h-screen min-h-screen overflow-hidden">
			{/* Background Image - Mobile: couple1.png, Desktop: full.jpg */}
			<div className="absolute inset-0">
				{/* Mobile background */}
				<div className="lg:hidden absolute inset-0">
					<Image
						src="/images/couple1.png"
						alt="Expecting couple"
						fill
						style={{
							objectFit: 'cover',
							objectPosition: '50% 35%'
						}}
						priority
					/>
				</div>
				{/* Desktop background */}
				<div className="hidden lg:block absolute inset-0">
					<Image
						src="/images/couple1.png"
						alt="Expecting couple"
						fill
						style={{
							objectFit: 'cover',
							objectPosition: '50% 30%'
						}}
						priority
					/>
				</div>
				{/* Gradient overlay - stronger on mobile for better readability */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 lg:from-black/10 lg:via-transparent lg:to-black/80"></div>
			</div>

			{/* Content Container */}
			<div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="h-full flex items-end pb-12 sm:pb-16 md:pb-20 lg:pb-24">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 sm:gap-8 lg:gap-24 xl:gap-32 2xl:gap-40 w-full items-end">
						{/* Left side - Headline and pills */}
						<div className="space-y-4 sm:space-y-5">
							{/* Small tags */}
							<div className="flex flex-wrap gap-2">
								<span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm sm:text-base font-medium" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
									Fertility care
								</span>
								<span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm sm:text-base font-medium" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
									Fast referrals
								</span>
								<span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm sm:text-base font-medium" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
									100% Online
								</span>
							</div>

							{/* Main Headline */}
							<div className="space-y-2">
								<h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-tight max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)', wordSpacing: '-0.15em' }}>
									Need a fertility referral?
								</h1>
								<p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xs sm:max-w-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
									Your path to pregnancy starts today
								</p>
							</div>

							{/* Promo code hint */}
							<p className="text-sm sm:text-base md:text-lg text-white/90" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
								First time? Use code <span className="font-bold text-yellow-300">WELCOME10</span> for 80% off
							</p>
						</div>

						{/* Right side - Description and CTA */}
						<div className="space-y-4 sm:space-y-5 lg:pl-16 xl:pl-20 2xl:pl-24">
							<p className="text-sm sm:text-base md:text-lg lg:text-lg text-white leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}>
								Get your fertility specialist referral in minutes, not weeks.<br />
								AHPRA-registered doctors available 24/7 across Australia.
							</p>

							{/* CTA Button */}
							<div className="flex gap-4">
								<a
									href="https://app.heydochealth.com.au/register?type=patient"
									target="_blank"
									rel="noopener noreferrer"
									className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-md border-2 border-white/40 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg transition-all shadow-[0_0_25px_rgba(59,130,246,0.6),0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8),0_0_50px_rgba(59,130,246,0.4)] hover:bg-blue-100/30 hover:border-blue-300/70 hover:scale-105 active:scale-95"
								>
									<span className="relative z-10">Book Consultation</span>
									<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
