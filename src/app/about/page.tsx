'use client'

import { AppHeader } from '@/components/ui/app-header'
import { FooterSection } from '@/components/home/FooterSection'
import { useState } from 'react'
import { PrivacyModal } from '@/components/legal/privacy-modal'
import { TermsModal } from '@/components/legal/terms-modal'
import type { Metadata } from "next"

export default function AboutPage() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
              About HeyDoc
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
              Australia&apos;s only online doctor-led fertility telehealth and referral network
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-blue-200/30 space-y-8">

            {/* Who We Are */}
            <section>
              <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                HeyDoc is a specialized fertility telehealth and referral platform founded and run by doctors specializing in fertility medicine and obstetrics. We connect Australian patients with AHPRA-registered fertility doctors through secure online telehealth consultations, providing the specialist referrals needed to access fertility clinics across Australia.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                Unlike generic telehealth platforms, HeyDoc is purpose-built for fertility and pre-conception care. We have one goal — supporting your fertility journey with expert medical guidance.
              </p>
            </section>

            {/* What Makes Us Different */}
            <section>
              <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>What Makes Us Different</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Doctor-Led, Not Script-Driven</h3>
                    <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Every referral is reviewed by AHPRA-registered Australian doctors specializing in fertility — not AI or automated systems.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Fertility Is All We Do</h3>
                    <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>We&apos;re not a general telehealth platform. HeyDoc is purpose-built exclusively for fertility and pre-conception care.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>We Don&apos;t Prescribe — We Connect</h3>
                    <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>HeyDoc removes the risk of online prescribing. We focus solely on referring patients to trusted fertility specialists, ensuring safe, seamless care.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Privacy-First, Always</h3>
                    <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Every consultation is secure, confidential, and fully AHPRA-compliant. Your fertility journey is personal, and we treat it that way.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Partnering with Specialists</h3>
                    <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Our model supports fertility clinics and streamlines referrals. We enhance continuity of care, not disrupt it.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Services */}
            <section>
              <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Our Services</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href="https://app.heydochealth.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors border border-blue-200/30 cursor-pointer group"
                >
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-700" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Fertility Consultation</h3>
                  <p className="text-gray-900/80 mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Start your fertility journey with expert guidance and personalized care.</p>
                  <span className="text-blue-600 font-medium text-sm group-hover:underline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Book consultation →</span>
                </a>

                <a
                  href="https://app.heydochealth.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors border border-blue-200/30 cursor-pointer group"
                >
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-700" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Male Fertility Support</h3>
                  <p className="text-gray-900/80 mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Specialized fertility assessment and care designed for men.</p>
                  <span className="text-blue-600 font-medium text-sm group-hover:underline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Book consultation →</span>
                </a>

                <a
                  href="https://app.heydochealth.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors border border-blue-200/30 cursor-pointer group"
                >
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-700" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Specialist Referrals</h3>
                  <p className="text-gray-900/80 mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Get referrals to leading fertility clinics across Australia.</p>
                  <span className="text-blue-600 font-medium text-sm group-hover:underline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Get referral →</span>
                </a>

                <a
                  href="https://app.heydochealth.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors border border-blue-200/30 cursor-pointer group"
                >
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-700" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Pre-Conception Care</h3>
                  <p className="text-gray-900/80 mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Optimize your health before starting your fertility journey.</p>
                  <span className="text-blue-600 font-medium text-sm group-hover:underline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Get started →</span>
                </a>
              </div>
            </section>

            {/* Pricing */}
            <section>
              <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Special Opening Offer</h2>
              <div className="bg-blue-100 rounded-xl p-6 border-2 border-blue-300/50">
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-2xl font-bold text-gray-900/40 line-through" style={{ fontFamily: 'Satoshi, sans-serif' }}>$49</span>
                  <span className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'Satoshi, sans-serif' }}>$10</span>
                  <span className="text-gray-900/70 font-medium" style={{ fontFamily: 'Satoshi, sans-serif' }}>AUD</span>
                </div>
                <p className="text-lg text-gray-900/80 mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Limited time opening price for new patients</p>
                <p className="text-gray-900/70 text-sm" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Includes secure phone consultation with an AHPRA-registered fertility doctor and specialist referral letter.</p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center pt-8 border-t border-blue-200/30">
              <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Ready to Start Your Fertility Journey?</h2>
              <p className="text-lg text-gray-900/70 mb-6" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Connect with a fertility specialist today.</p>
              <a
                href="https://app.heydochealth.com.au/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
                style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}
              >
                Book Consultation
              </a>
            </section>

          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-900/70 mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Have questions?</p>
            <a href="mailto:support@heydochealth.com.au" className="text-gray-900 font-medium hover:underline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
              support@heydochealth.com.au
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection
        onPrivacyClick={() => setShowPrivacyModal(true)}
        onTermsClick={() => setShowTermsModal(true)}
      />

      {/* Modals */}
      <PrivacyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
    </div>
  )
}
