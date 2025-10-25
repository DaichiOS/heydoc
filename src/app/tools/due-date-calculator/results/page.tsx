'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useState } from 'react'
import { AppHeader } from '@/components/ui/app-header'

function ResultsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  // Get results from URL params
  const dueDate = searchParams.get('dueDate')
  const currentWeek = searchParams.get('currentWeek')
  const daysRemaining = searchParams.get('daysRemaining')
  const trimester = searchParams.get('trimester')
  const method = searchParams.get('method')

  // If no data, redirect back
  if (!dueDate || !currentWeek || !daysRemaining || !trimester || !method) {
    router.push('/tools/due-date-calculator')
    return null
  }

  const dueDateObj = new Date(dueDate)
  const isPastDue = Number(daysRemaining) < 0
  const isOverdue = Number(currentWeek) > 42
  const trimesterNum = Number(trimester)

  const getTrimesterInfo = () => {
    switch (trimesterNum) {
      case 1:
        return {
          title: "First Trimester (Weeks 1-13)",
          tips: [
            {
              text: "Start taking prenatal vitamins with folic acid",
              tooltip: "Folic acid prevents neural tube defects like spina bifida, which develop in the first few weeks of pregnancy. Take 400-800mcg daily."
            },
            {
              text: "Schedule your first prenatal appointment (around 8 weeks)",
              tooltip: "Your first visit confirms your pregnancy, establishes your due date with dating scans, and screens for any early complications."
            },
            {
              text: "Eat small, frequent meals to help with nausea",
              tooltip: "Morning sickness is caused by pregnancy hormones. Eating smaller portions more often helps keep your blood sugar stable and reduces nausea."
            },
            {
              text: "Get plenty of rest - fatigue is common in early pregnancy",
              tooltip: "Your body is working hard to build the placenta and support rapid fetal development. The hormone progesterone also makes you feel more tired."
            },
            {
              text: "Avoid alcohol, smoking, and certain medications",
              tooltip: "The first trimester is when your baby's organs form. Alcohol can cause FASD, smoking reduces oxygen to your baby, and some medications can cause birth defects."
            }
          ]
        }
      case 2:
        return {
          title: "Second Trimester (Weeks 14-27)",
          tips: [
            {
              text: "You may start feeling your baby move (quickening)",
              tooltip: "First-time mums usually feel movement around 18-20 weeks. It starts as gentle flutters and becomes stronger kicks as baby grows."
            },
            {
              text: "Continue regular prenatal checkups",
              tooltip: "These appointments monitor your baby's growth, check your blood pressure and urine, and screen for gestational diabetes around 24-28 weeks."
            },
            {
              text: "Consider prenatal classes and hospital tours",
              tooltip: "Classes prepare you for labor, birth, breastfeeding, and newborn care. Hospital tours help you feel more comfortable with where you'll give birth."
            },
            {
              text: "Start thinking about your birth plan",
              tooltip: "Consider your preferences for pain relief, who you want present, and what matters most to you during labor. Stay flexible - plans often change."
            },
            {
              text: "Maintain a healthy, balanced diet with extra calories",
              tooltip: "You need about 300-450 extra calories per day in the second and third trimesters to support your baby's rapid growth."
            }
          ]
        }
      case 3:
        return {
          title: "Third Trimester (Weeks 28-40+)",
          tips: [
            {
              text: "Prenatal visits become more frequent",
              tooltip: "Appointments increase to every 2 weeks, then weekly after 36 weeks to closely monitor you and baby as you approach your due date."
            },
            {
              text: "Pack your hospital bag by week 36",
              tooltip: "Be prepared in case baby arrives early. Include clothes for you and baby, toiletries, phone charger, and any birth plan preferences."
            },
            {
              text: "Learn breathing and relaxation techniques",
              tooltip: "Controlled breathing helps manage labor pain, keeps you calm, and ensures good oxygen flow to your baby during contractions."
            },
            {
              text: "Watch for signs of labor (contractions, water breaking)",
              tooltip: "Regular contractions (5 mins apart), water breaking, bloody show, or pelvic pressure are signs labor is starting. Call your hospital when contractions are regular."
            },
            {
              text: "Get as much rest as possible before baby arrives",
              tooltip: "The third trimester can be uncomfortable, but rest is crucial. Sleep when you can - you'll need your energy for labor and those first weeks with a newborn."
            }
          ]
        }
      default:
        return null
    }
  }

  const trimesterInfo = getTrimesterInfo()

  const handleBack = () => {
    // Build params to restore the form state
    const backParams = new URLSearchParams({ method })

    // Add method-specific params
    const lmpDate = searchParams.get('lmpDate')
    const cycleLength = searchParams.get('cycleLength')
    const conceptionDate = searchParams.get('conceptionDate')
    const ivfTransferDate = searchParams.get('ivfTransferDate')
    const embryoAge = searchParams.get('embryoAge')
    const ultrasoundDate = searchParams.get('ultrasoundDate')
    const gestationalWeeks = searchParams.get('gestationalWeeks')
    const gestationalDays = searchParams.get('gestationalDays')

    if (lmpDate) backParams.set('lmpDate', lmpDate)
    if (cycleLength) backParams.set('cycleLength', cycleLength)
    if (conceptionDate) backParams.set('conceptionDate', conceptionDate)
    if (ivfTransferDate) backParams.set('ivfTransferDate', ivfTransferDate)
    if (embryoAge) backParams.set('embryoAge', embryoAge)
    if (ultrasoundDate) backParams.set('ultrasoundDate', ultrasoundDate)
    if (gestationalWeeks) backParams.set('gestationalWeeks', gestationalWeeks)
    if (gestationalDays) backParams.set('gestationalDays', gestationalDays)

    router.push(`/tools/due-date-calculator?${backParams.toString()}`)
  }

  const handleAddToCalendar = () => {
    const title = '👶 Baby\'s Expected Arrival Day'
    const details = 'The special day when you might meet your little one! Remember, babies arrive when they\'re ready - this is just an estimate. Make sure you\'re prepared and stay in touch with your healthcare provider.'
    const startDate = format(dueDateObj, "yyyyMMdd")

    // Google Calendar URL
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${startDate}&details=${encodeURIComponent(details)}`

    window.open(googleCalUrl, '_blank')
  }

  const handleShareTwitter = () => {
    const text = `I'm expecting! My due date is ${format(dueDateObj, 'MMMM d, yyyy')}! 👶`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
    window.open(url, '_blank')
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* App Header */}
      <AppHeader />

      {/* Results Section */}
      <main className="px-4 pt-20 sm:pt-24 md:pt-28 pb-12">
        <div className="w-full max-w-2xl mx-auto">

          {/* Back Button - Same position as step 2 */}
          <div className="max-w-lg mx-auto">
            <div className="flex justify-end mb-6">
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-[#475c21]/50 hover:text-[#475c21] transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </button>
            </div>

            {/* Results Content */}
            <div className="space-y-5 mb-6">
              {/* Due Date */}
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-[#475c21] mb-2">
                  {format(dueDateObj, 'EEEE, MMMM d, yyyy')}
                </div>
                {isPastDue && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                    <p className="text-sm font-medium text-blue-900 mb-2">
                      Your due date has passed. Keep in touch with your healthcare provider about your delivery plan.
                    </p>
                    <p className="text-sm text-blue-800">
                      Don't have a GP?{' '}
                      <Link href="/register" className="font-semibold underline hover:text-blue-950">
                        Book now
                      </Link>
                    </p>
                  </div>
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xs text-[#475c21]/60 mb-1">You're in</div>
                  <div className="text-2xl font-semibold text-[#9ad134] mb-1">Week {currentWeek}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-[#475c21]/60 mb-1">{isPastDue ? 'Now' : 'Only'}</div>
                  <div className="text-2xl font-semibold text-[#9ad134] mb-1">
                    {isPastDue ? Math.abs(Number(daysRemaining)) : daysRemaining}
                  </div>
                  <div className="text-xs font-medium text-[#475c21]">
                    {isPastDue ? 'Days Overdue' : 'Days to Go'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-[#475c21]/60 mb-1">Currently</div>
                  <div className="text-2xl font-semibold text-[#9ad134] mb-1">
                    {isPastDue ? 'Post-term' : (trimester === '1' ? '1st' : trimester === '2' ? '2nd' : '3rd')}
                  </div>
                  <div className="text-xs font-medium text-[#475c21]">
                    {isPastDue ? '' : 'Trimester'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div className="mb-6">
            <div className="flex justify-center gap-3 flex-wrap">
              {!isPastDue && (
                <button
                  onClick={handleAddToCalendar}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-[#475c21] rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-all"
                  title="Mark your calendar! This is when you might meet your little one."
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to Calendar
                </button>
              )}
              <button
                onClick={handleShareTwitter}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-[#475c21] rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </button>
              <button
                onClick={handleShareFacebook}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-[#475c21] rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-[#475c21] rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link
              href="/tools/due-date-calculator"
              className="flex-1 bg-white border border-slate-300 text-[#475c21] py-3.5 px-6 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 transition-all text-center"
            >
              Calculate Again
            </Link>
            <Link
              href="/register"
              className="flex-1 bg-[#9ad134] text-white py-3.5 px-6 rounded-lg font-medium hover:bg-[#7ab82b] transition-all text-center"
            >
              Book Consultation
            </Link>
          </div>

          {/* Trimester-Specific Tips */}
          {trimesterInfo && (
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-[#475c21] mb-4">{trimesterInfo.title}</h3>
              <div className="space-y-2 mb-4">
                {trimesterInfo.tips.map((tip, index) => (
                  <div key={index} className="group relative flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#9ad134] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1 relative">
                      <p className="text-sm text-[#475c21] cursor-help border-b border-dotted border-slate-400 inline">
                        {tip.text}
                      </p>
                      {/* Tooltip - Above on desktop, below on mobile */}
                      <div className="absolute left-0 top-full mt-2 w-full bg-[#9ad134] text-white text-xs rounded-lg p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 sm:bottom-full sm:top-auto sm:mb-2 sm:mt-0 sm:w-80">
                        <div className="absolute -top-1 left-8 w-2 h-2 bg-[#9ad134] transform rotate-45 sm:hidden"></div>
                        <div className="hidden sm:block absolute -bottom-1 left-8 w-2 h-2 bg-[#9ad134] transform rotate-45"></div>
                        {tip.tooltip}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/tools/due-date-calculator/pregnancy-health-guide"
                className="text-sm text-[#9ad134] font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn more about pregnancy health
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* SEO Content - Hidden but crawlable */}
      <div className="sr-only">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#475c21] mb-6">
            Understanding Your Pregnancy Timeline
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#475c21] mb-4">Pregnancy Trimesters</h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-[#475c21]">First Trimester (Weeks 1-13)</div>
                <p className="text-sm text-[#475c21]/70 mt-1">Major organs and structures develop. This is a critical period for your baby's development.</p>
              </div>
              <div>
                <div className="font-semibold text-[#475c21]">Second Trimester (Weeks 14-27)</div>
                <p className="text-sm text-[#475c21]/70 mt-1">Baby grows rapidly, and you may start feeling movement. Many parents find this the most comfortable trimester.</p>
              </div>
              <div>
                <div className="font-semibold text-[#475c21]">Third Trimester (Weeks 28-40+)</div>
                <p className="text-sm text-[#475c21]/70 mt-1">Baby gains weight and prepares for birth. Regular checkups become more frequent.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#475c21] mb-4">Next Steps</h3>
            <ul className="space-y-3 text-sm text-[#475c21]">
              <li className="flex items-start gap-2">
                <span className="text-[#9ad134] mt-1">•</span>
                <span>Schedule your first prenatal appointment between 6-8 weeks of pregnancy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9ad134] mt-1">•</span>
                <span>Start taking prenatal vitamins with folic acid if you haven't already</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9ad134] mt-1">•</span>
                <span>Discuss any medications or health conditions with your healthcare provider</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9ad134] mt-1">•</span>
                <span>Begin planning for regular prenatal checkups throughout your pregnancy</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#9ad134] to-[#7ab82b] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Need Fertility or Prenatal Support?</h3>
            <p className="mb-6 text-slate-200">
              Whether you're planning to conceive or already pregnant, our AHPRA-registered doctors can provide expert fertility consultations, prenatal care guidance, and IVF referrals online.
            </p>
            <Link
              href="/register"
              className="inline-block bg-white text-[#9ad134] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#475c21]">Loading...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}
