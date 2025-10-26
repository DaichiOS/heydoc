'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ProcessSection() {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.85", "start 0.2"]
	})

	// Map scroll progress to opacity and position - MUCH more dramatic
	const opacity1 = useTransform(scrollYProgress, [0, 0.5], [0, 1])
	const y1 = useTransform(scrollYProgress, [0, 0.5], [100, 0])
	const scale1 = useTransform(scrollYProgress, [0, 0.5], [0.85, 1])

	const opacity2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])
	const y2 = useTransform(scrollYProgress, [0.2, 0.6], [120, 0])
	const scale2 = useTransform(scrollYProgress, [0.2, 0.6], [0.9, 1])

	const opacity3 = useTransform(scrollYProgress, [0.4, 0.8], [0, 1])
	const y3 = useTransform(scrollYProgress, [0.4, 0.8], [100, 0])
	const scale3 = useTransform(scrollYProgress, [0.4, 0.8], [0.9, 1])

	// Individual phone animations - staggered and dramatic!
	const phone1Opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
	const phone1Y = useTransform(scrollYProgress, [0.2, 0.5], [150, 0])
	const phone1Scale = useTransform(scrollYProgress, [0.2, 0.5], [0.7, 1])
	const phone1Rotate = useTransform(scrollYProgress, [0.2, 0.5], [-15, -6])

	const phone2Opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
	const phone2Y = useTransform(scrollYProgress, [0.3, 0.6], [180, 0])
	const phone2Scale = useTransform(scrollYProgress, [0.3, 0.6], [0.6, 1])

	const phone3Opacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1])
	const phone3Y = useTransform(scrollYProgress, [0.4, 0.7], [150, 0])
	const phone3Scale = useTransform(scrollYProgress, [0.4, 0.7], [0.7, 1])
	const phone3Rotate = useTransform(scrollYProgress, [0.4, 0.7], [15, 6])

	return (
		<section className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden" ref={ref}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<motion.div
					className="text-center mb-12 sm:mb-16"
					style={{ opacity: opacity1, y: y1, scale: scale1 }}
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B3A] mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
						How It Works
					</h2>
					<p className="text-base sm:text-lg text-blue-600 max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
						HeyDoc removes the hassle of in-person appointments, uncomfortable waiting rooms, and doctors running late.
					</p>
				</motion.div>

				{/* Phone Mockups Row */}
				<div className="flex justify-center items-end gap-1 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-12 px-1 sm:px-12 overflow-visible">
					{/* Phone 1 - Questionnaire */}
					<motion.div
						className="flex-shrink-0 -translate-x-2 sm:-translate-x-16 md:-translate-x-20 hover:scale-105 transition-transform duration-300"
						style={{
							opacity: phone1Opacity,
							y: phone1Y,
							scale: phone1Scale,
							rotate: phone1Rotate
						}}
					>
						<div className="relative w-[72px] sm:w-[155px] md:w-[190px] lg:w-[225px] h-[145px] sm:h-[310px] md:h-[380px] lg:h-[450px]">
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
					</motion.div>

					{/* Phone 2 - Consultation */}
					<motion.div
						className="flex-shrink-0 -translate-y-2 sm:-translate-y-6 md:-translate-y-8 hover:scale-105 hover:-translate-y-2 sm:hover:-translate-y-6 md:hover:-translate-y-8 transition-transform duration-300"
						style={{
							opacity: phone2Opacity,
							y: phone2Y,
							scale: phone2Scale
						}}
					>
						<div className="relative w-[72px] sm:w-[155px] md:w-[190px] lg:w-[225px] h-[145px] sm:h-[310px] md:h-[380px] lg:h-[450px]">
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
					</motion.div>

					{/* Phone 3 - Referral */}
					<motion.div
						className="flex-shrink-0 translate-x-2 sm:translate-x-16 md:translate-x-20 hover:scale-105 transition-transform duration-300"
						style={{
							opacity: phone3Opacity,
							y: phone3Y,
							scale: phone3Scale,
							rotate: phone3Rotate
						}}
					>
						<div className="relative w-[72px] sm:w-[155px] md:w-[190px] lg:w-[225px] h-[145px] sm:h-[310px] md:h-[380px] lg:h-[450px]">
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
					</motion.div>
				</div>

				{/* Step Descriptions */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 max-w-5xl mx-auto"
					style={{ opacity: opacity3, y: y3, scale: scale3 }}
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
				</motion.div>
			</div>
		</section>
	)
}
