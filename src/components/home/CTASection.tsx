'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function CTASection() {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.85", "start 0.2"]
	})

	// Animations for icon - MUCH more dramatic
	const iconOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
	const iconY = useTransform(scrollYProgress, [0, 0.4], [80, 0])
	const iconScale = useTransform(scrollYProgress, [0, 0.4], [0.7, 1])

	// Animations for heading - more dramatic
	const headingOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])
	const headingY = useTransform(scrollYProgress, [0.2, 0.6], [100, 0])
	const headingScale = useTransform(scrollYProgress, [0.2, 0.6], [0.85, 1])

	// Animations for button - dramatic entrance
	const buttonOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1])
	const buttonY = useTransform(scrollYProgress, [0.4, 0.8], [80, 0])
	const buttonScale = useTransform(scrollYProgress, [0.4, 0.8], [0.8, 1])

	return (
		<section ref={ref} className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Leaf Icon */}
				<motion.div
					className="flex justify-center mb-6 sm:mb-8"
					style={{ opacity: iconOpacity, y: iconY, scale: iconScale }}
				>
					<svg
						className="w-12 h-12 sm:w-14 sm:h-14 text-[#9AD134]"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
					</svg>
				</motion.div>

				{/* Heading */}
				<motion.h2
					className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B3A] mb-8 sm:mb-10"
					style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400, opacity: headingOpacity, y: headingY, scale: headingScale }}
				>
					Ready to start your
					<br />
					fertility journey?
				</motion.h2>

				{/* CTA Button */}
				<motion.a
					href="https://app.heydochealth.com.au/register?type=patient"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#1C1B3A] text-white font-semibold text-base sm:text-lg rounded-full hover:bg-[#2A2951] transition-all duration-200 shadow-lg hover:shadow-xl"
					style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600, opacity: buttonOpacity, y: buttonY, scale: buttonScale }}
				>
					Book Consultation
				</motion.a>
			</div>
		</section>
	)
}
