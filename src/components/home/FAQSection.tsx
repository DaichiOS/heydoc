'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

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
		answer: 'Our standard fertility consultation is $49. However, we\'re currently offering 80% off your first consultation with code OPENING10, bringing the cost down to just $10. This includes your consultation and specialist referral.'
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
	const [openIndex, setOpenIndex] = useState<number | null>(0)

	const toggleQuestion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section id="faq" className="py-16 sm:py-20 md:py-24 bg-[#F7FFCC] relative overflow-hidden">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<div className="text-center mb-10 sm:mb-12">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#475C21] mb-3 sm:mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
						Frequently Asked Questions
					</h2>
					<p className="text-base sm:text-lg text-[#475C21]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
						Everything you need to know about getting your fertility specialist referral through HeyDoc
					</p>
				</div>

				{/* FAQ Items */}
				<div className="space-y-3 sm:space-y-4">
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
						>
							<button
								onClick={() => toggleQuestion(index)}
								className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
							>
								<span className="text-base sm:text-lg font-medium text-[#475C21] pr-4 group-hover:text-[#5a7329] transition-colors" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
									{faq.question}
								</span>
								<div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#475C21] flex items-center justify-center text-white group-hover:bg-[#5a7329] transition-colors">
									{openIndex === index ? (
										<Minus className="w-4 h-4 sm:w-5 sm:h-5" />
									) : (
										<Plus className="w-4 h-4 sm:w-5 sm:h-5" />
									)}
								</div>
							</button>

							{/* Answer */}
							<div
								className={`transition-all duration-300 ease-in-out ${
									openIndex === index
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
								} overflow-hidden`}
							>
								<div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
									<p className="text-sm sm:text-base text-[#475C21]/80 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
