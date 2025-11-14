'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { AppHeader } from '@/components/ui/app-header'
import { FooterSection } from '@/components/home/FooterSection'

export default function BarangarooPartnershipPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Fixed Header */}
      <AppHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-100 to-blue-50 pt-44 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Your fertility journey, supported by <span className="text-blue-600">HeyDoc</span> and <span className="text-blue-600">Barangaroo Pharmacy</span>
              </h1>
              <p className="text-xl mb-8 text-gray-700" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Partnering to support your pregnancy journey
              </p>
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Book a consultation for <span className="font-semibold text-blue-600">10% off selected items & services</span>
                </p>
                <a href="https://app.heydochealth.com.au/register?type=patient" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Book now →
                  </button>
                </a>
              </div>
            </div>
            <div className="relative h-[400px] flex items-center justify-center">
              <Image
                src="/images/doctor-pharmacy.png"
                alt="Doctor and Pharmacy Partnership"
                width={600}
                height={450}
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curved Rectangle Box for Description - Positioned to straddle blue/white sections */}
      <div className="relative -mt-16 px-4 pb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl max-w-5xl mx-auto">
          <p className="text-lg text-[#1C1B3A] text-center leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            <span className="font-bold">HeyDoc</span> and <span className="font-bold">Barangaroo Pharmacy</span> have partnered to provide comprehensive support for fertility patients, combining HeyDoc's fertility specialist referral service with exclusive discounts at Barangaroo Pharmacy.
          </p>
        </div>
      </div>

      {/* Partner Logos & Value Props */}
      <section className="py-16">
        <div className="grid md:grid-cols-2">
          {/* HeyDoc Column - Light Blue Background */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 py-12 px-8 flex items-center justify-center">
            <div className="max-w-md">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/logos/heydoc.png"
                  alt="HeyDoc"
                  width={300}
                  height={100}
                  className="h-24 w-auto"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-[#1C1B3A] text-white rounded-lg p-4 text-center">
                  <p className="font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>Fertility-Focused Consultations</p>
                </div>
                <div className="bg-[#1C1B3A] text-white rounded-lg p-4 text-center">
                  <p className="font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>Instant referrals to a specialist of your choice</p>
                </div>
                <p className="text-sm text-gray-600 text-center pt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Fast, professional care from Australian doctors who understand your fertility journey
                </p>
              </div>
            </div>
          </div>

          {/* Barangaroo Column - White Background */}
          <div className="bg-white py-12 px-8 flex items-center justify-center">
            <div className="max-w-md">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/logos/barangaroo.png"
                  alt="Barangaroo Pharmacy"
                  width={300}
                  height={100}
                  className="h-24 w-auto"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-blue-500 text-white rounded-lg p-4 text-center">
                  <p className="font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>Convenient CBD location</p>
                </div>
                <div className="bg-blue-500 text-white rounded-lg p-4 text-center">
                  <p className="font-semibold" style={{ fontFamily: 'Satoshi, sans-serif' }}>10% off selected items</p>
                </div>
                <p className="text-sm text-gray-600 text-center pt-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Your local pharmacy partner for fertility supplements and medications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo section aligned with split */}
          <div className="relative mb-12">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Left side - HeyDoc logo */}
              <div className="flex justify-center md:justify-end items-center md:pr-20">
                <Image
                  src="/logos/heydoc.png"
                  alt="HeyDoc"
                  width={280}
                  height={95}
                  className="h-24 w-auto"
                />
              </div>
              {/* Right side - Barangaroo logo */}
              <div className="flex justify-center md:justify-start items-center md:pl-20">
                <Image
                  src="/logos/barangaroo.png"
                  alt="Barangaroo Pharmacy"
                  width={280}
                  height={95}
                  className="h-24 w-auto"
                />
              </div>
            </div>
            {/* X in the middle - overlaid */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full">
              <span className="text-3xl text-gray-300">×</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1B3A] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            How to Benefit from This Partnership
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
            <div className="space-y-6 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#1C1B3A] text-white rounded-full flex items-center justify-center font-bold">
                  <span style={{ fontFamily: 'Satoshi, sans-serif' }}>1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Get Your Fertility Referral</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Book a consultation with a HeyDoc doctor and receive your fertility referral
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#1C1B3A] text-white rounded-full flex items-center justify-center font-bold">
                  <span style={{ fontFamily: 'Satoshi, sans-serif' }}>2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Visit Barangaroo Pharmacy</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Show your HeyDoc fertility referral when purchasing supplements or services
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#1C1B3A] text-white rounded-full flex items-center justify-center font-bold">
                  <span style={{ fontFamily: 'Satoshi, sans-serif' }}>3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Receive 10% Discount</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Get 10% off selected pharmacy items and services (excludes prescription medications and sale items)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <a
                href="https://app.heydochealth.com.au"
                className="inline-flex items-center justify-center gap-2 bg-[#1C1B3A] hover:bg-[#2A2951] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Book Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Pharmacy Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C1B3A] mb-12" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Visit Barangaroo Pharmacy
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#1C1B3A] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>Contact & Hours</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Location</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>Tower 3, Shop 3/300 Barangaroo Ave</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>Barangaroo NSW 2000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Opening Hours</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>Monday - Friday: 8:00 AM - 7:00 PM</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Satoshi, sans-serif' }}>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Phone</p>
                    <a href="tel:0292402900" className="text-blue-600 hover:underline" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      (02) 9240 2900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#1C1B3A]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Website</p>
                    <a
                      href="https://www.barangaroo.com/shop/barangaroo-pharmacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="https://www.google.com/maps/search/Barangaroo+Pharmacy+NSW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1C1B3A] hover:bg-[#2A2951] text-white px-6 py-2 rounded-full font-medium transition-colors text-sm shadow-md"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=Tower+3,+Shop+3/300+Barangaroo+Ave,+Barangaroo+NSW+2000,+Australia&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fertility Resources */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C1B3A] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Fertility Support Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Supporting your fertility journey with expert guidance and resources
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Resource 1 - Due Date Calculator */}
            <Link href="/tools/due-date-calculator" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 cursor-pointer group">
              <h3 className="font-bold text-xl mb-3 text-[#1C1B3A] group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Satoshi, sans-serif' }}>Due Date Calculator</h3>
              <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Calculate your estimated due date and track your pregnancy timeline with our free calculator tool.
              </p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Calculate now →
              </span>
            </Link>

            {/* Resource 2 - Pregnancy Health Guide */}
            <Link href="/tools/due-date-calculator/pregnancy-health-guide" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 cursor-pointer group">
              <h3 className="font-bold text-xl mb-3 text-[#1C1B3A] group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Satoshi, sans-serif' }}>Pregnancy Health Guide</h3>
              <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Evidence-based guidance on medications, nutrition, and prenatal care from Australian fertility specialists.
              </p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Read guide →
              </span>
            </Link>

            {/* Resource 3 - Fertility Supplements */}
            <Link href="/tools/fertility-supplements" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 cursor-pointer group">
              <h3 className="font-bold text-xl mb-3 text-[#1C1B3A] group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Satoshi, sans-serif' }}>Fertility Supplements</h3>
              <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Learn about recommended supplements for male and female fertility, including dosages and benefits.
              </p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <svg
              className="w-12 h-12 text-[#9AD134]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1B3A] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Ready to Start Your Fertility Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Book a consultation with a HeyDoc doctor to receive your fertility referral and get 10% off at Barangaroo Pharmacy.
          </p>
          <a
            href="https://app.heydochealth.com.au/register?type=patient"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1C1B3A] hover:bg-[#2A2951] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Book Consultation Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <FooterSection
        onPrivacyClick={() => window.location.href = '/privacy'}
        onTermsClick={() => window.location.href = '/terms'}
      />
    </div>
  )
}
