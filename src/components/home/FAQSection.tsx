'use client'

import { useState, useRef } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface FAQItem {
	question: string
	answer: string
}

const faqData: FAQItem[] = [
	{
		question: 'How quickly can I get a fertility specialist referral?',
		answer: 'You receive your fertility specialist referral during your consultation, which takes around 15 minutes. With our AHPRA-registered doctors available 24/7, most patients are seen within minutes of booking.'
	},
	{
		question: 'Do I need a GP referral first?',
		answer: 'No, you don\'t need a GP referral to use HeyDoc. Our doctors can provide you with a direct referral to a fertility specialist. This saves you time and gets you on the path to treatment faster.'
	},
	{
		question: 'Is this service available across all of Australia?',
		answer: 'Yes! HeyDoc is available to patients across all of Australia. Our telehealth platform connects you with AHPRA-registered Australian doctors who can provide referrals to fertility clinics nationwide.'
	},
	{
		question: 'How much does a fertility consultation cost?',
		answer: 'Our standard fertility consultation is $49. However, first-time patients get 80% off with code WELCOME10, bringing the cost down to just $10. This includes your consultation and specialist referral.'
	},
	{
		question: 'What fertility services can I get referred for?',
		answer: 'Our doctors can provide referrals for a wide range of fertility services including IVF, fertility testing, egg freezing, male fertility assessment, fertility preservation, and consultations with reproductive endocrinologists.'
	},
	{
		question: 'Will my referral be accepted by fertility clinics?',
		answer: 'Absolutely. All referrals are provided by AHPRA-registered Australian doctors and meet the requirements of fertility clinics across Australia. We can send your referral directly to your chosen clinic.'
	}
]

export function FAQSection() {
	const [openIndexes, setOpenIndexes] = useState<number[]>([0])
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.85", "start 0.2"]
	})

	// Animations for title - MUCH more dramatic
	const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
	const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
	const titleScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1])

	// Animations for FAQ items - staggered and dramatic
	const faqOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1])
	const faqY = useTransform(scrollYProgress, [0.3, 0.8], [120, 0])
	const faqScale = useTransform(scrollYProgress, [0.3, 0.8], [0.9, 1])

	const toggleQuestion = (index: number) => {
		setOpenIndexes(prev =>
			prev.includes(index)
				? prev.filter(i => i !== index)
				: [...prev, index]
		)
	}

	return (
		<section id="faq" ref={ref} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-100 to-white relative overflow-hidden">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<motion.div
					className="text-center mb-10 sm:mb-12"
					style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B3A] mb-3 sm:mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
						Frequently Asked Questions
					</h2>
					<p className="text-base sm:text-lg text-[#1C1B3A]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
						Everything you need to know about getting your fertility specialist referral through HeyDoc
					</p>
				</motion.div>

				{/* FAQ Items */}
				<motion.div
					className="space-y-3 sm:space-y-4"
					style={{ opacity: faqOpacity, y: faqY, scale: faqScale }}
				>
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
						>
							<button
								onClick={() => toggleQuestion(index)}
								className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
							>
								<span className="text-base sm:text-lg font-medium text-[#1C1B3A] pr-4 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									{faq.question}
								</span>
								<div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-100/60 backdrop-blur-md border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:bg-blue-200/70 group-hover:border-blue-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
									{openIndexes.includes(index) ? (
										<Minus className="w-4 h-4 sm:w-5 sm:h-5" />
									) : (
										<Plus className="w-4 h-4 sm:w-5 sm:h-5" />
									)}
								</div>
							</button>

							{/* Answer */}
							<div
								className={`transition-all duration-300 ease-in-out ${
									openIndexes.includes(index)
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
								} overflow-hidden`}
							>
								<div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
									<p className="text-sm sm:text-base text-[#1C1B3A]/80 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
										{faq.answer.split('WELCOME10').map((part, i, arr) => (
											<span key={i}>
												{part}
												{i < arr.length - 1 && (
													<span className="font-bold text-blue-500">WELCOME10</span>
												)}
											</span>
										))}
									</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
