'use client'

export function TrustBarSection() {
	return (
		<section className="pt-2 pb-0 bg-white relative overflow-hidden">
			<div className="px-3 sm:px-4 lg:px-5">
				{/* Rounded rectangle container matching hero section aesthetic */}
				<div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 sm:p-12 lg:p-16">
					<div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center">
						{/* Left side - Two touching circles */}
						<div className="flex flex-col lg:flex-row items-center justify-center gap-0">
						{/* First Circle - Large (260px desktop, 180px mobile) */}
						<div className="relative">
							<div className="w-[220px] h-[220px] lg:w-[260px] lg:h-[260px] rounded-full bg-blue-500 flex flex-col items-center justify-center shadow-2xl">
								<h1 className="text-6xl lg:text-7xl text-white mb-1 lg:mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>24/7</h1>
								<div className="text-base lg:text-base text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Available</div>
							</div>
						</div>

						{/* Second Circle - Smaller (190px desktop, 140px mobile) */}
						<div className="relative">
							<div className="w-[170px] h-[170px] lg:w-[190px] lg:h-[190px] rounded-full bg-[#1C1B3A] flex flex-col items-center justify-center shadow-xl">
								<h1 className="text-5xl lg:text-6xl text-white mb-1" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>500+</h1>
								<div className="text-sm lg:text-sm text-white" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Consultations</div>
							</div>
						</div>
					</div>

					{/* Right side - Text with value points */}
					<div className="space-y-6">
						<h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
							<span className="text-[#1C1B3A] inline-block">
								At HeyDoc, we're dedicated to helping Australians start their fertility journey.
							</span>
							{" "}
							<span className="text-blue-600 inline-block">
								Our doctors are fully focused on bringing your future child to life.
							</span>
						</h3>

						{/* Three value points with icons */}
						<div className="flex flex-wrap gap-6 sm:gap-8 pt-4">
							<div className="flex items-center gap-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
									<path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
								</svg>
								<span className="text-base sm:text-lg text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Fertility focused</span>
							</div>
							<div className="flex items-center gap-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
								</svg>
								<span className="text-base sm:text-lg text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Same day service</span>
							</div>
							<div className="flex items-center gap-3">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1B3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>
								</svg>
								<span className="text-base sm:text-lg text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>100% Online</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</section>
	)
}
