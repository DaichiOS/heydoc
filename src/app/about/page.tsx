'use client'

import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#EFF4F9]">
      {/* Header with Logo */}
      <header className="px-6 sm:px-8 lg:px-12 pt-8 sm:pt-8 pb-6 sm:pb-4">
        <div className="flex justify-start">
          <Link
            href="/"
            className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg active:scale-95"
          >
            <Image
              src="/logos/heydoc.png"
              alt="heydoc"
              width={600}
              height={300}
              className="h-36 sm:h-40 lg:h-48 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              About HeyDoc
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Australia&apos;s only online doctor-led fertility telehealth and referral network
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 space-y-8">

            {/* Who We Are */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                HeyDoc is a specialized fertility telehealth and referral platform founded and run by doctors specializing in fertility medicine and obstetrics. We connect Australian patients with AHPRA-registered fertility doctors through secure online telehealth consultations, providing the specialist referrals needed to access fertility clinics across Australia.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Unlike generic telehealth platforms, HeyDoc is purpose-built for fertility and pre-conception care. We have one goal — supporting your fertility journey with expert medical guidance.
              </p>
            </section>

            {/* What Makes Us Different */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">What Makes Us Different</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Doctor-Led, Not Script-Driven</h3>
                    <p className="text-slate-700">Every referral is reviewed by AHPRA-registered Australian doctors specializing in fertility — not AI or automated systems.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Fertility Is All We Do</h3>
                    <p className="text-slate-700">We&apos;re not a general telehealth platform. HeyDoc is purpose-built exclusively for fertility and pre-conception care.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">We Don&apos;t Prescribe — We Connect</h3>
                    <p className="text-slate-700">HeyDoc removes the risk of online prescribing. We focus solely on referring patients to trusted fertility specialists, ensuring safe, seamless care.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Privacy-First, Always</h3>
                    <p className="text-slate-700">Every consultation is secure, confidential, and fully AHPRA-compliant. Your fertility journey is personal, and we treat it that way.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Partnering with Specialists</h3>
                    <p className="text-slate-700">Our model supports fertility clinics and streamlines referrals. We enhance continuity of care, not disrupt it.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Services */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href="https://app.heydochealth.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer group"
                >
                  <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-[#1C1B3A]">Fertility Consultation</h3>
                  <p className="text-slate-700 mb-3">Start your fertility journey with expert guidance and personalized care.</p>
                  <span className="text-[#1C1B3A] font-medium text-sm group-hover:underline">Book consultation →</span>
                </a>

                <a
                  href="https://app.heydochealth.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer group"
                >
                  <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-[#1C1B3A]">Male Fertility Support</h3>
                  <p className="text-slate-700 mb-3">Specialized fertility assessment and care designed for men.</p>
                  <span className="text-[#1C1B3A] font-medium text-sm group-hover:underline">Book consultation →</span>
                </a>

                <a
                  href="https://app.heydochealth.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer group"
                >
                  <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-[#1C1B3A]">Specialist Referrals</h3>
                  <p className="text-slate-700 mb-3">Get referrals to leading fertility clinics across Australia.</p>
                  <span className="text-[#1C1B3A] font-medium text-sm group-hover:underline">Get referral →</span>
                </a>

                <a
                  href="https://app.heydochealth.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer group"
                >
                  <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-[#1C1B3A]">Pre-Conception Care</h3>
                  <p className="text-slate-700 mb-3">Optimize your health before starting your fertility journey.</p>
                  <span className="text-[#1C1B3A] font-medium text-sm group-hover:underline">Get started →</span>
                </a>
              </div>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1C1B3A] font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Answer Questions</h3>
                    <p className="text-slate-700">Complete a secure questionnaire about your fertility journey and health history.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1C1B3A] font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Speak with a Fertility Doctor</h3>
                    <p className="text-slate-700">Connect online with an Australian AHPRA-registered fertility specialist.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1C1B3A] font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-1">Get Your Referral</h3>
                    <p className="text-slate-700">Receive your specialist referral by email, ready to take to your chosen fertility clinic.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Special Opening Offer</h2>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 border-2 border-emerald-200">
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-2xl font-bold text-slate-400 line-through">$49</span>
                  <span className="text-5xl font-bold text-emerald-600">$10</span>
                  <span className="text-slate-700 font-medium">AUD</span>
                </div>
                <p className="text-lg text-slate-700 mb-3">Limited time opening price for new patients</p>
                <p className="text-slate-600 text-sm">Includes secure video consultation with an AHPRA-registered fertility doctor and specialist referral letter.</p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center pt-8 border-t border-slate-200">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Ready to Start Your Fertility Journey?</h2>
              <p className="text-lg text-slate-600 mb-6">Connect with a fertility specialist today.</p>
              <a
                href="https://app.heydochealth.com.au/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1C1B3A] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#252347] hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
              >
                Book Consultation
              </a>
            </section>

          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-2">Have questions?</p>
            <a href="mailto:support@heydochealth.com.au" className="text-[#1C1B3A] font-medium hover:underline">
              support@heydochealth.com.au
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#EFF4F9] border-t border-slate-200/50 mt-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="text-center text-slate-500 text-sm">
            © 2025 HeyDoc. All rights reserved. | ABN 88 526 376 986
          </div>
        </div>
      </footer>
    </div>
  )
}
