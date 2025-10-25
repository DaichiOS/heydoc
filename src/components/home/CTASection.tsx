export function CTASection() {
	return (
		<section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Leaf Icon */}
				<div className="flex justify-center mb-6 sm:mb-8">
					<svg
						className="w-12 h-12 sm:w-14 sm:h-14 text-[#9AD134]"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
					</svg>
				</div>

				{/* Heading */}
				<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#475C21] mb-8 sm:mb-10" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
					Ready to Start Your
					<br />
					Fertility Journey?
				</h2>

				{/* CTA Button */}
				<a
					href="https://app.heydochealth.com.au/register?type=patient"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#475C21] text-white font-semibold text-base sm:text-lg rounded-full hover:bg-[#5a7329] transition-all duration-200 shadow-lg hover:shadow-xl"
					style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}
				>
					Book Consultation
				</a>
			</div>
		</section>
	)
}
