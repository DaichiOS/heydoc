'use client'

import { WaitlistModal } from "@/components/waitlist-modal"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [queuePosition, setQueuePosition] = useState(4)
  const [userReason, setUserReason] = useState('')
  const [userSymptoms, setUserSymptoms] = useState('')
  const [doctorAvailable, setDoctorAvailable] = useState(false)
  const [callDuration, setCallDuration] = useState(201) // Start at 3:21 (201 seconds)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  // Add smooth scrolling behavior to the page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  // Custom smooth scroll function with better easing
  const smoothScrollToElement = (element: HTMLElement, offset: number = 0) => {
    // Fallback to standard scrollIntoView if custom scroll fails
    try {
      const rect = element.getBoundingClientRect()
      const targetPosition = window.pageYOffset + rect.top - (window.innerHeight / 2) + (rect.height / 2) + offset
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 1200 // Slightly faster for more responsiveness
      let start: number | null = null

      // Responsive easing - starts faster, ends smooth
      const easeOutCubic = (t: number): number => {
        return 1 - Math.pow(1 - t, 3)
      }

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        
        const ease = easeOutCubic(progress)
        window.scrollTo(0, startPosition + distance * ease)
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    } catch {
      console.log('Custom scroll failed, using fallback')
      // Fallback to standard scrollIntoView
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'center'
      })
    }
  }

  useEffect(() => {
    const observers = stepRefs.current.map((ref) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Observer logic here if needed
          }
        },
        { threshold: 0.6 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  // Queue position animation (faster - 2 seconds total)
  useEffect(() => {
    if (demoStep >= 1 && queuePosition > 2) {
      const timer = setTimeout(() => {
        setQueuePosition(prev => Math.max(2, prev - 1))
      }, 1000) // Changed from 1500ms to 1000ms for 2 second total (4->3->2)
      return () => clearTimeout(timer)
    }
  }, [demoStep, queuePosition])

  // Doctor becomes available after queue countdown
  useEffect(() => {
    if (demoStep >= 1 && queuePosition === 2) {
      const timer = setTimeout(() => {
        setDoctorAvailable(true)
      }, 1000) // Reduced from 1500ms to 1000ms
      return () => clearTimeout(timer)
    }
  }, [demoStep, queuePosition])

  // Call duration timer - increments every second when in step 3
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (demoStep === 3) {
      timer = setInterval(() => {
        setCallDuration(prev => prev + 1)
      }, 1000)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [demoStep])

  // Format call duration from seconds to MM:SS
  const formatCallDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleJoinQueue = () => {
    // Use placeholder text if fields are empty
    const reason = userReason.trim() || "Need a medical certificate for work absence due to flu symptoms"
    const symptoms = userSymptoms.trim() || "Mild fever, headache, fatigue for 2 days"
    
    setUserReason(reason)
    setUserSymptoms(symptoms)
    setDemoStep(1)
    setQueuePosition(4) // Start animation from 4th position instead of 5th
    
    // Smooth scroll to step 2 (queue status) after form submission
    setTimeout(() => {
      if (stepRefs.current[1]) {
        smoothScrollToElement(stepRefs.current[1])
      }
    }, 100)
  }

  const handleCancelQueue = () => {
    setDemoStep(0)
    setQueuePosition(4) // Reset to 4th position
    setDoctorAvailable(false)
    
    // Smooth scroll back to step 1 form
    setTimeout(() => {
      if (stepRefs.current[0]) {
        smoothScrollToElement(stepRefs.current[0])
      }
    }, 100)
  }

  const resetDemo = () => {
    setDemoStep(0)
    setQueuePosition(4) // Reset to 4th position
    setUserReason('')
    setUserSymptoms('')
    setDoctorAvailable(false)
    setCallDuration(201) // Reset to 3:21
    
    // Smooth scroll back to step 1
    setTimeout(() => {
      if (stepRefs.current[0]) {
        smoothScrollToElement(stepRefs.current[0])
      }
    }, 100)
  }

  const goToStep3 = () => {
    setDemoStep(3) // Set to step 3 first
    
    // Then smooth scroll to step 3
    setTimeout(() => {
      if (stepRefs.current[2]) {
        smoothScrollToElement(stepRefs.current[2])
      }
    }, 100)
  }

  const goToStep4 = () => {
    setDemoStep(4) // Set to step 4 first
    
    // Then smooth scroll to step 4
    setTimeout(() => {
      if (stepRefs.current[3]) {
        smoothScrollToElement(stepRefs.current[3])
      }
    }, 100)
  }

  return (
    <div 
      className="min-h-screen bg-[#EFF4F9] relative"
    >
      {/* Header with Logo */}
      <header className="px-6 sm:px-8 lg:px-12 pt-8 sm:pt-8 pb-6 sm:pb-4">
        <div className="flex justify-start">
          <a 
            href="https://app.heydochealth.com.au/" 
            target="_blank" 
            rel="noopener noreferrer"
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
          </a>
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
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  Get started with your healthcare needs.
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
                <a 
                  href="https://app.heydochealth.com.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1C1B3A] text-white px-8 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:bg-[#252347] hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95 inline-flex items-center justify-center"
                >
                  Try Demo
                </a>
                
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="border-2 border-[#1C1B3A] text-[#1C1B3A] px-8 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 bg-white/50 lg:bg-transparent"
                >
                  Join Waitlist
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

      {/* Interactive Demo Section */}
      <section className="px-6 sm:px-8 lg:px-12 py-20 lg:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-6 lg:mb-8 tracking-tight">
              Need healthcare on the go?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              See how easy it is to get healthcare with HeyDoc
            </p>
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-8 lg:mt-12">
              <div className="flex items-center space-x-2 sm:space-x-3">
                {[0, 1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                      demoStep >= step ? 'bg-emerald-500 scale-110' : 'bg-slate-300'
                    }`}></div>
                    {step < 3 && <div className="w-8 sm:w-12 lg:w-16 h-0.5 bg-slate-200"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Steps */}
          <div className="space-y-16 lg:space-y-32">
            {/* Step 1 - Health Assessment Form Only */}
            <div 
              ref={(el) => { stepRefs.current[0] = el }}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                    <span className="text-[#1C1B3A] font-bold text-sm lg:text-base">01</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Tell us how we can help</h3>
                </div>
                <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                  Share your symptoms or health concerns. This helps our doctors prepare and makes your consultation faster and more effective.
                </p>
              </div>
              
              <div className="w-full bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100">
                {/* Always show Health Assessment Form for Step 1 */}
                <div className="space-y-4 min-h-[350px] lg:min-h-[400px]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 text-sm lg:text-base">Quick Health Assessment</h4>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-slate-900">What brings you here today? *</div>
                    <textarea
                      value={userReason}
                      onChange={(e) => setUserReason(e.target.value)}
                      className="w-full p-3 border rounded-lg bg-slate-50 border-slate-200 text-slate-900 text-sm resize-none focus:border-[#1C1B3A] focus:ring-2 focus:ring-[#1C1B3A]/20 transition-colors"
                      placeholder="e.g., Need a medical certificate for work absence due to flu symptoms..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-900">Any current symptoms? (Optional)</div>
                    <textarea
                      value={userSymptoms}
                      onChange={(e) => setUserSymptoms(e.target.value)}
                      className="w-full p-3 border rounded-lg bg-slate-50 border-slate-200 text-slate-900 text-sm resize-none focus:border-[#1C1B3A] focus:ring-2 focus:ring-[#1C1B3A]/20 transition-colors"
                      placeholder="e.g., Mild fever, headache, fatigue for 2 days..."
                      rows={2}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleJoinQueue}
                      className="w-full px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-200 bg-[#1C1B3A] text-white hover:bg-[#252347] hover:scale-105 shadow-lg cursor-pointer active:scale-95"
                    >
                      Join the queue
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Queue Status & Doctor Matching */}
            <div 
              ref={(el) => { stepRefs.current[1] = el }}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:order-2 space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                    <span className="text-[#1C1B3A] font-bold text-sm lg:text-base">02</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Get matched with a doctor</h3>
                </div>
                <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                  We&apos;re finding you the right doctor for your needs.
                </p>
              </div>
              
              <div className="lg:order-1 w-full bg-white rounded-2xl lg:rounded-3xl p-3 lg:p-4 shadow-xl border border-slate-100">
                {demoStep >= 1 ? (
                  /* Queue Status Screen */
                  <div className="space-y-4 lg:space-y-6 min-h-[350px] lg:min-h-[400px]">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-semibold text-sm lg:text-base transition-colors duration-500 ${
                        doctorAvailable ? 'text-emerald-600' : 'text-slate-900'
                      }`}>
                        {doctorAvailable ? 'Doctor Available!' : 'Finding You a Doctor'}
                      </h4>
                    </div>
                    
                    <div className={`border rounded-lg p-3 animate-fadeIn transition-colors duration-500 ${
                      doctorAvailable ? 'bg-emerald-50 border-emerald-200' : 'bg-blue-50 border-blue-200'
                    }`}>
                      <div className={`text-sm font-semibold transition-colors duration-500 ${
                        doctorAvailable ? 'text-emerald-800' : 'text-blue-800'
                      }`}>
                        {doctorAvailable ? '✓ Dr. Wilson is ready to see you!' : '✓ Finding your doctor...'}
                      </div>
                    </div>

                    {/* User's Details Summary */}
                    <div className="bg-slate-50 rounded-lg p-3 lg:p-4">
                      <div className="text-sm font-semibold text-slate-900 mb-2">Patient Details:</div>
                      <div className="text-sm text-slate-700 mb-1">&quot;{userReason}&quot;</div>
                      {userSymptoms && (
                        <div className="text-xs text-slate-600">Symptoms: {userSymptoms}</div>
                      )}
                    </div>
                    
                    {/* Queue Status with Loading Animation */}
                    <div className="bg-[#1C1B3A] text-white rounded-xl transition-all duration-500">
                      {!doctorAvailable ? (
                        /* Loading State */
                        <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
                          <div className="text-center">
                            <div className="text-sm opacity-80 mb-1">Your position</div>
                            <div className="text-xl lg:text-2xl font-bold transition-all duration-500">
                              {queuePosition === 2 ? '2nd' : `${queuePosition}th`} in queue
                            </div>
                            <div className="text-sm opacity-80 mt-1">
                              Estimated wait: {queuePosition === 2 ? '2-3' : `${queuePosition * 2}-${queuePosition * 2 + 2}`} minutes
                            </div>
                          </div>
                          
                          {/* Always show loading dots and exit button */}
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                            </div>
                            
                            <button
                              onClick={handleCancelQueue}
                              className="text-xs text-white/60 hover:text-red-300 transition-colors duration-200 flex items-center space-x-1 group cursor-pointer"
                            >
                              <svg className="w-3 h-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3-3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              <span>Exit Queue</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Doctor Ready - Large Video Interface like Step 3 */
                        <div className="p-2">
                          {/* Large Video Interface */}
                          <div className="bg-[#1C1B3A] rounded-xl relative">
                            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg relative overflow-hidden">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white -mt-6 lg:-mt-12">
                                  <div className="w-14 h-14 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4 overflow-hidden">
                                    <Image
                                      src="/images/drwilson.png"
                                      alt="Dr. Sarah Wilson"
                                      width={96}
                                      height={96}
                                      className="w-full h-full object-cover object-top rounded-full"
                                    />
                                  </div>
                                  <div className="font-semibold text-base lg:text-xl">Dr. Sarah Wilson</div>
                                  <div className="text-xs lg:text-sm opacity-80 mt-1">Ready to connect</div>
                                </div>
                              </div>
                              
                              {/* Video controls */}
                              <div className="absolute bottom-1 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:space-x-4">
                                <div className="w-8 h-8 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-white/20">
                                  <svg className="w-4 h-4 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                  </svg>
                                </div>
                                <div className="relative">
                                  {/* Pulsing ring indicator */}
                                  <div className="absolute inset-0 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-green-400/30 animate-ping"></div>
                                  <div 
                                    onClick={goToStep3}
                                    className="relative w-8 h-8 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 cursor-pointer transition-colors"
                                  >
                                    <svg className="w-4 h-4 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center mt-3 lg:mt-6">
                            <button
                              onClick={handleCancelQueue}
                              className="text-xs text-white/60 hover:text-red-300 transition-colors duration-200 flex items-center space-x-1 group cursor-pointer"
                            >
                              <svg className="w-3 h-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3-3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              <span>Exit Queue</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Live Doctor Status - only show when still searching for doctors */}
                    {!doctorAvailable && (
                      <div className="space-y-3">
                        <div className="text-sm font-semibold text-slate-900">Available Doctors</div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 lg:p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#1C1B3A] rounded-full flex items-center justify-center overflow-hidden">
                                <Image
                                  src="/images/drwilson.png"
                                  alt="Dr. Sarah Wilson"
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-cover object-top rounded-full"
                                />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900">Dr. Sarah Wilson</div>
                                <div className="text-xs text-slate-600">General Practice</div>
                              </div>
                            </div>
                            <div className={`text-xs px-2 py-1 rounded-full transition-all duration-500 ${
                              doctorAvailable 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-orange-100 text-orange-800'
                            }`}>
                              {doctorAvailable ? 'Available Now!' : `In consultation (${queuePosition === 2 ? '1' : '3'} min left)`}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-2 lg:p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#1C1B3A] rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">MC</span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900">Dr. Mark Chen</div>
                                <div className="text-xs text-slate-600">General Practice</div>
                              </div>
                            </div>
                            <div className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">
                              In consultation (8 min left)
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-2 lg:p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center space-x-2 lg:space-x-3">
                              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#1C1B3A] rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">AP</span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900">Dr. Anna Park</div>
                                <div className="text-xs text-slate-600">Mental Health</div>
                              </div>
                            </div>
                            <div className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                              Offline
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6 lg:py-8 text-slate-400">
                    <div className="text-base lg:text-lg">Complete step 1 to join the queue</div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 - Video Consultation */}
            <div 
              ref={(el) => { stepRefs.current[2] = el }}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                    <span className="text-[#1C1B3A] font-bold text-sm lg:text-base">03</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Video consultation</h3>
                </div>
                <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                  Connect with your doctor for a comprehensive consultation.
                </p>
              </div>
              
              <div className="w-full bg-white rounded-2xl lg:rounded-3xl p-3 lg:p-4 shadow-xl border border-slate-100">
                {demoStep >= 3 ? (
                  <div>
                    {/* Large Video Interface */}
                    <div className="bg-[#1C1B3A] rounded-xl p-1.5 lg:p-3 relative">
                      <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white -mt-6 lg:-mt-12">
                            <div className="w-14 h-14 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-4 overflow-hidden">
                              <Image
                                src="/images/drwilson.png"
                                alt="Dr. Sarah Wilson"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover object-top rounded-full"
                              />
                            </div>
                            <div className="font-semibold text-base lg:text-xl">Dr. Sarah Wilson</div>
                            <div className="text-xs lg:text-sm opacity-80 mt-1">
                              {demoStep >= 4 ? 'Call ended' : 'Live consultation'}
                            </div>
                          </div>
                        </div>
                        
                        {/* Video controls */}
                        <div className="absolute bottom-1 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:space-x-4">
                          <div className={`w-8 h-8 lg:w-14 lg:h-14 rounded-full flex items-center justify-center ${
                            demoStep >= 4 ? 'bg-slate-600' : 'bg-white/20'
                          }`}>
                            <svg className="w-4 h-4 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </div>
                          <div className="relative">
                            {/* Pulsing ring indicator - only show when call is active */}
                            {demoStep === 3 && (
                              <div className="absolute inset-0 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-red-400/30 animate-ping"></div>
                            )}
                            <div 
                              onClick={demoStep === 3 ? goToStep4 : undefined}
                              className={`relative w-8 h-8 lg:w-14 lg:h-14 rounded-full flex items-center justify-center ${
                                demoStep >= 4 ? 'bg-red-600 cursor-default' : 'bg-red-500 cursor-pointer hover:bg-red-600'
                              } transition-colors`}
                            >
                              <svg className="w-4 h-4 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Call info */}
                      <div className="mt-1.5 lg:mt-3 flex justify-between items-center text-white text-xs lg:text-sm px-1">
                        <span className="truncate">
                          {demoStep >= 4 ? `Call duration: ${formatCallDuration(callDuration)}` : `Connected: ${formatCallDuration(callDuration)}`}
                        </span>
                        <div className="flex items-center space-x-1 lg:space-x-2">
                          <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${
                            demoStep >= 4 ? 'bg-slate-500' : 'bg-green-500 animate-pulse'
                          }`}></div>
                          <span className="text-xs lg:text-sm">{demoStep >= 4 ? 'Secure' : 'Encrypted'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 lg:py-8 text-slate-400">
                    <div className="text-base lg:text-lg">Click on the green call icon to start your consultation!</div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 4 - Receive Results */}
            <div 
              ref={(el) => { stepRefs.current[3] = el }}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:order-2 space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                    <span className="text-[#1C1B3A] font-bold text-sm lg:text-base">04</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Receive instantly</h3>
                </div>
                <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                  Get your prescription, medical certificate, or referral via SMS and email instantly. Ready when you are.
                </p>
              </div>
              
              <div className="lg:order-1 w-full bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-100">
                {demoStep >= 4 ? (
                  <div className="space-y-4">
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 animate-fadeIn">
                      <div className="text-sm text-teal-800 font-semibold">✓ Documents delivered instantly!</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4 gap-3 sm:gap-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm lg:text-base">Email Delivered</div>
                          <div className="text-sm text-slate-600">Medical certificate sent</div>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download PDF</span>
                      </button>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4 gap-3 sm:gap-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm lg:text-base">SMS Sent</div>
                          <div className="text-sm text-slate-600">Download link delivered</div>
                        </div>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Open Link</span>
                      </button>
                    </div>
                    
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <div className="text-sm text-emerald-800 font-semibold">All done! 🎉</div>
                      <div className="text-sm text-emerald-700">Your documents are ready to download</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 lg:py-8 text-slate-400">
                    <div className="text-base lg:text-lg">Complete consultation to receive documents</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Reset Demo */}
          <div className="text-center mt-16 lg:mt-20">
            <button
              onClick={resetDemo}
              className="text-slate-600 hover:text-slate-900 font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 px-4 py-2 rounded-lg hover:bg-slate-100"
            >
              ↻ Try the demo again
            </button>
            <div className="mt-6 lg:mt-8">
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-[#1C1B3A] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-[#252347] hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
              >
                Join the Waitlist
              </button>
              <p className="text-sm text-slate-500 mt-3 lg:mt-4">Be among the first to access HeyDoc when we launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EFF4F9] border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-16">
          {/* Mobile-first simplified layout */}
          <div className="text-center lg:text-left">
            
            {/* Logo and Description */}
            <div className="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
              <Image
                src="/logos/heydoc.png"
                alt="HeyDoc"
                width={400}
                height={200}
                className="h-12 lg:h-16 w-auto mx-auto lg:mx-0 lg:object-left lg:object-contain lg:-ml-12"
              />
              <p className="text-slate-600 text-sm max-w-md mx-auto lg:mx-0 leading-relaxed">
                Quality healthcare, anywhere in Australia. Built by doctors for better patient access.
              </p>
              
              {/* Social Media */}
              <div className="flex justify-center lg:justify-start space-x-3 lg:space-x-4 pt-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <a 
                  href="https://www.instagram.com/heydoc.au/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.072-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/heydocau" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Desktop grid layout for links - hidden on mobile */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:mb-12">
              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-slate-900 font-semibold text-sm">Company</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-slate-600 text-sm hover:text-slate-900 transition-colors">About Us</a>
                  <a href="#" className="block text-slate-600 text-sm hover:text-slate-900 transition-colors">Contact</a>
                  <a href="#" className="block text-slate-600 text-sm hover:text-slate-900 transition-colors">Careers</a>
                  <a href="#" className="block text-slate-600 text-sm hover:text-slate-900 transition-colors">Blog</a>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-slate-900 font-semibold text-sm">Services</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-slate-600 text-sm hover:text-slate-900 transition-colors">GP Consultations</a>
                  <a href="#" className="block text-slate-600 text-sm hover:text-slate-900 transition-colors">Mental Health</a>
                  <a href="#" className="block text-slate-600 text-sm hover:text-slate-900 transition-colors">Women&apos;s Health</a>
                  <a href="#" className="block text-slate-600 text-sm hover:text-slate-900 transition-colors">Specialist Referrals</a>
                </div>
              </div>
            </div>

            {/* Mobile simplified links */}
            <div className="lg:hidden mb-8">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">GP Consultations</a>
                <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Mental Health</a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-200/50 pt-6 lg:pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
                <div className="text-slate-500 text-sm">
                  © 2025 HeyDoc. All rights reserved.
                </div>
                <div className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-1 text-xs lg:text-sm">
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</a>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors lg:hidden">Cookie Policy</a>
                  <a href="#" className="hidden lg:inline text-slate-500 hover:text-slate-900 transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </div>
  )
}


