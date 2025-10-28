'use client'

import { AppHeader } from '@/components/ui/app-header'
import { FooterSection } from '@/components/home/FooterSection'
import { useState } from 'react'
import { PrivacyModal } from '@/components/legal/privacy-modal'
import { TermsModal } from '@/components/legal/terms-modal'
import type { Metadata } from "next"

export default function CareersPage() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
              Join Our Team
            </h1>
            <p className="text-xl sm:text-2xl text-gray-900/70 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
              Help us make fertility care accessible to Australians everywhere
            </p>
          </div>

          {/* Company Values */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-blue-200/30 mb-12">
            <h2 className="text-2xl lg:text-3xl text-gray-900 mb-6" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Why Work at HeyDoc?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Meaningful Impact</h3>
                <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Help families start their fertility journey and make a real difference in people's lives.</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Fast-Growing Startup</h3>
                <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Be part of a pioneering healthcare startup that's disrupting the fertility space in Australia.</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Doctor-Led Team</h3>
                <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Work alongside experienced fertility doctors who are passionate about patient care.</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Flexible Work</h3>
                <p className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Remote-friendly work environment with flexible hours to suit your lifestyle.</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-8" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Open Positions</h2>

            {/* Admin Position */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-blue-200/30 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Administrative Assistant</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-gray-900 rounded-full font-medium" style={{ fontFamily: 'Satoshi, sans-serif' }}>Part-time / Full-time</span>
                    <span className="px-3 py-1 bg-blue-100 text-gray-900 rounded-full font-medium" style={{ fontFamily: 'Satoshi, sans-serif' }}>Remote</span>
                    <span className="px-3 py-1 bg-blue-100 text-gray-900 rounded-full font-medium" style={{ fontFamily: 'Satoshi, sans-serif' }}>Entry Level</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* About the Role */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>About the Role</h4>
                  <p className="text-gray-900/80 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                    We're looking for a detail-oriented and organized Administrative Assistant to join our growing team. You'll play a crucial role in ensuring smooth day-to-day operations and providing excellent support to both our medical team and patients. This is a great opportunity for someone looking to gain experience in the healthcare/startup space.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>Key Responsibilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Respond to patient emails and inquiries in a timely and professional manner</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Check, verify, and upload laboratory results and pathology reports to patient files</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Manage appointment bookings and consultation scheduling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Process and organize patient documentation and referral letters</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Maintain accurate and confidential patient records</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Assist with general administrative tasks and data entry</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Coordinate communication between patients, doctors, and fertility clinics</span>
                    </li>
                  </ul>
                </div>

                {/* What We're Looking For */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>What We're Looking For</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Excellent written and verbal communication skills</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Strong attention to detail and accuracy</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Comfortable using technology and learning new software platforms</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Ability to handle sensitive information with discretion and professionalism</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Self-motivated and able to work independently</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Empathetic and patient-focused mindset</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Previous admin or healthcare experience is a plus but not required</span>
                    </li>
                  </ul>
                </div>

                {/* What We Offer */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-3" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}>What We Offer</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Competitive salary based on experience</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Flexible working hours (part-time or full-time available)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Fully remote work - work from anywhere in Australia</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Opportunity to grow with a fast-expanding healthcare startup</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Supportive team environment with direct access to founders</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#9AD134] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-900/80" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>Make a meaningful impact in people's fertility journeys</span>
                    </li>
                  </ul>
                </div>

                {/* Apply Button */}
                <div className="pt-6 border-t border-blue-200/30">
                  <a
                    href="mailto:admin@heydochealth.com.au?subject=Application: Administrative Assistant Position"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
                    style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}
                  >
                    Apply for this Position
                  </a>
                  <p className="text-sm text-gray-900/70 mt-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
                    Send your resume and a brief cover letter to{" "}
                    <a href="mailto:admin@heydochealth.com.au" className="text-gray-900 font-medium hover:underline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
                      admin@heydochealth.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-blue-200/30">
            <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>Don't See the Right Role?</h2>
            <p className="text-lg text-gray-900/80 mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}>
              We're always looking for talented people to join our team. If you're passionate about making fertility care accessible, we'd love to hear from you.
            </p>
            <a
              href="mailto:admin@heydochealth.com.au?subject=General Inquiry: Careers at HeyDoc"
              className="text-gray-900 font-semibold text-lg hover:underline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}
            >
              Get in touch →
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
