export function WhyHeyDocSection() {
	return (
		<section className="py-10 sm:py-12 md:py-14 bg-white relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="max-w-5xl mx-auto relative z-10">
					{/* Section Header */}
					<div className="text-center mb-8 sm:mb-10">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2520] mb-3">
							Why Aussies Love HeyDoc
						</h2>
						<p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
							Australia's only online doctor-led fertility referral network
						</p>
					</div>

					{/* Features List */}
					<div className="max-w-3xl mx-auto space-y-5">
						<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-default hover:shadow-sm border border-transparent hover:border-slate-200">
							<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1C1B3A] text-white flex items-center justify-center text-base font-bold shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
								✓
							</div>
							<div>
								<h3 className="font-bold text-base sm:text-lg text-[#2C2520] mb-1">Consultations in Minutes</h3>
								<p className="text-sm text-slate-600 leading-relaxed">
									No waiting weeks for GP appointments. Get your fertility referral from an AHPRA-registered doctor in minutes, not weeks.
								</p>
							</div>
						</div>

						<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-default hover:shadow-sm border border-transparent hover:border-slate-200">
							<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1C1B3A] text-white flex items-center justify-center text-base font-bold shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
								✓
							</div>
							<div>
								<h3 className="font-bold text-base sm:text-lg text-[#2C2520] mb-1">Fertility-Focused Platform</h3>
								<p className="text-sm text-slate-600 leading-relaxed">
									Focused on fertility, not general telehealth. We have one goal - your future pregnancy.
								</p>
							</div>
						</div>

						<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-default hover:shadow-sm border border-transparent hover:border-slate-200">
							<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1C1B3A] text-white flex items-center justify-center text-base font-bold shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
								✓
							</div>
							<div>
								<h3 className="font-bold text-base sm:text-lg text-[#2C2520] mb-1">Doctor-Led Care</h3>
								<p className="text-sm text-slate-600 leading-relaxed">
									Founded and run by doctors specialising in fertility medicine and obstetrics.
								</p>
							</div>
						</div>

						<div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-default hover:shadow-sm border border-transparent hover:border-slate-200">
							<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1C1B3A] text-white flex items-center justify-center text-base font-bold shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
								✓
							</div>
							<div>
								<h3 className="font-bold text-base sm:text-lg text-[#2C2520] mb-1">Safe & Ethical</h3>
								<p className="text-sm text-slate-600 leading-relaxed">
									Every referral reviewed by AHPRA-registered Australian doctors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
