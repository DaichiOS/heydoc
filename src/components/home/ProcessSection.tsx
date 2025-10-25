'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ProcessSection() {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.9", "start 0.3"]
	})

	// Map scroll progress to opacity and position
	const opacity1 = useTransform(scrollYProgress, [0, 0.4], [0, 1])
	const y1 = useTransform(scrollYProgress, [0, 0.4], [40, 0])

	const opacity2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])
	const y2 = useTransform(scrollYProgress, [0.2, 0.6], [40, 0])

	const opacity3 = useTransform(scrollYProgress, [0.4, 0.8], [0, 1])
	const y3 = useTransform(scrollYProgress, [0.4, 0.8], [40, 0])

	return (
		<section className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden" ref={ref}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<motion.div
					className="text-center mb-12 sm:mb-16"
					style={{ opacity: opacity1, y: y1 }}
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B3A] mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
						How It Works
					</h2>
					<p className="text-base sm:text-lg text-blue-600 max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
						HeyDoc removes the hassle of in-person appointments, uncomfortable waiting rooms, and doctors running late.
					</p>
				</motion.div>

				{/* Phone Mockups Row */}
				<motion.div
					className="flex justify-center items-end gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-12 px-8 sm:px-12 overflow-visible"
					style={{ opacity: opacity2, y: y2 }}
				>
					{/* Phone 1 - Questionnaire */}
					<div className="flex-shrink-0 transform -rotate-6 -translate-x-12 sm:-translate-x-16 md:-translate-x-20 hover:scale-105 transition-transform duration-300">
						<div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
							<Image
								src="/images/questionnaire.png"
								alt="Complete fertility questionnaire"
								fill
								style={{
									objectFit: 'contain',
								}}
								priority
							/>
						</div>
					</div>

					{/* Phone 2 - Consultation */}
					<div className="flex-shrink-0 transform -translate-y-4 sm:-translate-y-6 md:-translate-y-8 hover:scale-105 hover:-translate-y-4 sm:hover:-translate-y-6 md:hover:-translate-y-8 transition-transform duration-300">
						<div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
							<Image
								src="/images/consultation.png"
								alt="Speak with AHPRA doctor"
								fill
								style={{
									objectFit: 'contain',
								}}
								priority
							/>
						</div>
					</div>

					{/* Phone 3 - Referral */}
					<div className="flex-shrink-0 transform rotate-6 translate-x-12 sm:translate-x-16 md:translate-x-20 hover:scale-105 transition-transform duration-300">
						<div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
							<Image
								src="/images/referral.png"
								alt="Receive fertility referral"
								fill
								style={{
									objectFit: 'contain',
								}}
								priority
							/>
						</div>
					</div>
				</motion.div>

				{/* Step Descriptions */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 max-w-5xl mx-auto"
					style={{ opacity: opacity3, y: y3 }}
				>
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
						<p className="text-xs sm:text-sm text-[#1C1B3A]/70" style={{ fontFamily: 'Satoshi, sans-serif' }}>
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
						<p className="text-xs sm:text-sm text-[#1C1B3A]/70" style={{ fontFamily: 'Satoshi, sans-serif' }}>
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
						<p className="text-xs sm:text-sm text-[#1C1B3A]/70" style={{ fontFamily: 'Satoshi, sans-serif' }}>
							Get your referral sent directly to you via email or SMS.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
