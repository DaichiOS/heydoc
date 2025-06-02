'use client'

import { WaitlistModal } from "@/components/waitlist-modal"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <div 
      className="min-h-screen bg-[#EFF4F9]"
    >
      {/* Header with Logo */}
      <header className="px-6 sm:px-8 lg:px-12 pt-8 sm:pt-8 pb-6 sm:pb-4">
        <div className="flex justify-start">
          <Image
            src="/logos/heydoc.png"
            alt="HeyDoc"
            width={600}
            height={300}
            className="h-36 sm:h-40 lg:h-48 w-auto"
            priority
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8 sm:space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-4 py-2.5 sm:py-2 border border-blue-200 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 sm:mr-2"></div>
                <span className="text-sm sm:text-sm font-medium text-slate-700">Built by doctors, trusted by patients</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4 sm:space-y-4">
                <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Quality Healthcare,
                  <span className="text-[#1C1B3A] block">Anywhere in Australia</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed">
                  Connect with licensed healthcare professionals from the comfort of your home. 
                  Accessible, secure, and convenient telehealth services designed by doctors 
                  who understand your needs.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-sm lg:bg-transparent lg:p-0 lg:border-none lg:shadow-none lg:rounded-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 sm:w-6 h-6 sm:h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 sm:w-3 h-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base sm:text-base text-slate-700 font-medium">GP Consultations</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 sm:w-6 h-6 sm:h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 sm:w-3 h-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base sm:text-base text-slate-700 font-medium">Mental Health Support</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 sm:w-6 h-6 sm:h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 sm:w-3 h-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base sm:text-base text-slate-700 font-medium">Women&apos;s Health</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-6 sm:w-6 h-6 sm:h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 sm:w-3 h-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base sm:text-base text-slate-700 font-medium">Specialist Referrals</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-[#1C1B3A] text-white px-8 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:bg-[#252347] hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
                >
                  Join Waitlist
                </button>
                
                <button className="border-2 border-[#1C1B3A] text-[#1C1B3A] px-8 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 bg-white/50 lg:bg-transparent">
                  Learn More
                </button>
              </div>

              {/* Social Proof */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-sm lg:bg-transparent lg:p-0 lg:pt-4 lg:border-none lg:shadow-none lg:rounded-none">
                <div className="flex items-center justify-between sm:justify-start sm:space-x-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-2xl font-bold text-[#1C1B3A]">50,000+</div>
                    <div className="text-sm sm:text-sm text-slate-600">Consultations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-2xl font-bold text-[#1C1B3A]">500+</div>
                    <div className="text-sm sm:text-sm text-slate-600">Healthcare Providers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-2xl font-bold text-[#1C1B3A]">24/7</div>
                    <div className="text-sm sm:text-sm text-slate-600">Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative lg:pl-8 mt-12 lg:mt-0">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl sm:rounded-3xl p-8 sm:p-8 shadow-xl border border-white/30 lg:bg-white/50 lg:border-white/20">
                <div className="space-y-6 sm:space-y-6">
                  {/* Mock consultation interface */}
                  <div className="flex items-center space-x-4 sm:space-x-4">
                    <div className="w-12 sm:w-12 h-12 sm:h-12 bg-[#1C1B3A] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 sm:w-6 h-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 text-base sm:text-base truncate">Dr. Albert Vu</div>
                      <div className="text-sm sm:text-sm text-slate-600">General Practitioner</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 sm:w-3 h-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-100 rounded-xl sm:rounded-xl p-4 sm:p-4">
                    <div className="text-sm sm:text-sm text-slate-600 mb-2 sm:mb-2">Next Available:</div>
                    <div className="font-semibold text-slate-900 text-base sm:text-base">Today, 2:30 PM</div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-3">
                    <div className="text-sm sm:text-sm font-medium text-slate-900">Consultation Types:</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white rounded-lg p-3 sm:p-3">
                        <span className="text-slate-700 text-sm sm:text-sm">General Health</span>
                        <span className="text-green-600 font-medium text-sm sm:text-sm">Available</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-3 sm:p-3">
                        <span className="text-slate-700 text-sm sm:text-sm">Mental Health</span>
                        <span className="text-green-600 font-medium text-sm sm:text-sm">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 sm:px-8 lg:px-12 py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              How it works
            </h2>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Connect with Australian doctors in four simple steps
            </p>
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="w-16 h-0.5 bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-16 h-0.5 bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <div className="w-16 h-0.5 bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              </div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Step 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100 h-full">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-emerald-100 transition-colors duration-300 border border-emerald-100">
                      <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-emerald-600 mt-4 tracking-wider">STEP 01</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Join the queue</h3>
                  <p className="text-slate-600 leading-relaxed">Secure your spot instantly. No appointments needed - get seen by the next available doctor.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100 h-full">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-blue-100 transition-colors duration-300 border border-blue-100">
                      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-blue-600 mt-4 tracking-wider">STEP 02</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Secure payment</h3>
                  <p className="text-slate-600 leading-relaxed">Safe, encrypted payment processing. Transparent pricing with no hidden fees.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-100 h-full">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-indigo-100 transition-colors duration-300 border border-indigo-100">
                      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-indigo-600 mt-4 tracking-wider">STEP 03</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Talk to an Aussie doctor</h3>
                  <p className="text-slate-600 leading-relaxed">Connect with Australian-registered practitioners who understand local health needs.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-100 h-full">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center mx-auto group-hover:bg-teal-100 transition-colors duration-300 border border-teal-100">
                      <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-teal-600 mt-4 tracking-wider">STEP 04</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Receive instantly</h3>
                  <p className="text-slate-600 leading-relaxed">Get your prescription, medical certificate, or referral via SMS and email instantly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div className="max-w-md mx-auto">
              <p className="text-slate-600 mb-8 text-lg">Ready to be notified when we launch?</p>
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="group relative inline-flex items-center justify-center w-full bg-[#1C1B3A] text-white px-8 py-5 rounded-2xl font-semibold text-lg hover:bg-[#252347] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Join the Waitlist</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-sm text-slate-500 mt-4">Be among the first to access HeyDoc when we launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  )
}
