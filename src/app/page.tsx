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
      <header className="px-6 sm:px-8 lg:px-12 pt-8 pb-4">
        <div className="flex justify-start">
          <Image
            src="/logos/heydoc.png"
            alt="HeyDoc"
            width={600}
            height={300}
            className="h-48 w-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-slate-700">Built by doctors, trusted by patients</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Quality Healthcare,
                  <span className="text-[#1C1B3A] block">Anywhere in Australia</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed">
                  Connect with licensed healthcare professionals from the comfort of your home. 
                  Accessible, secure, and convenient telehealth services designed by doctors 
                  who understand your needs.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">GP Consultations</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">Mental Health Support</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">Women&apos;s Health</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#1C1B3A] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">Specialist Referrals</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-[#1C1B3A] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#252347] hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
                >
                  Join Waitlist
                </button>
                
                <button className="border-2 border-[#1C1B3A] text-[#1C1B3A] px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95">
                  Learn More
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1C1B3A]">50,000+</div>
                  <div className="text-sm text-slate-600">Consultations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1C1B3A]">500+</div>
                  <div className="text-sm text-slate-600">Healthcare Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1C1B3A]">24/7</div>
                  <div className="text-sm text-slate-600">Available</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative lg:pl-8">
              <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="space-y-6">
                  {/* Mock consultation interface */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1C1B3A] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Dr. Albert Vu</div>
                      <div className="text-sm text-slate-600">General Practitioner</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-100 rounded-xl p-4">
                    <div className="text-sm text-slate-600 mb-2">Next Available:</div>
                    <div className="font-semibold text-slate-900">Today, 2:30 PM</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-slate-900">Consultation Types:</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white rounded-lg p-3">
                        <span className="text-slate-700">General Health</span>
                        <span className="text-green-600 font-medium">Available</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-3">
                        <span className="text-slate-700">Mental Health</span>
                        <span className="text-green-600 font-medium">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
