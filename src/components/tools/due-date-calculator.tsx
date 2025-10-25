'use client'

import { useState } from 'react'
import { format, addDays, differenceInDays, differenceInWeeks } from 'date-fns'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

type CalculationMethod = 'lmp' | 'conception' | 'ivf' | 'ultrasound'
type EmbryoAge = 3 | 5
type Step = 'method' | 'input'

interface CalculationResult {
  dueDate: Date
  currentWeek: number
  daysRemaining: number
  trimester: number
  estimatedConceptionDate: Date
}

export function DueDateCalculator() {
  const router = useRouter()
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null

  // Restore state from URL params if available
  const urlMethod = searchParams?.get('method') as CalculationMethod | null
  const [step, setStep] = useState<Step>(urlMethod ? 'input' : 'method')
  const [method, setMethod] = useState<CalculationMethod>(urlMethod || 'lmp')
  const [lmpDate, setLmpDate] = useState(searchParams?.get('lmpDate') || '')
  const [cycleLength, setCycleLength] = useState(Number(searchParams?.get('cycleLength')) || 28)
  const [conceptionDate, setConceptionDate] = useState(searchParams?.get('conceptionDate') || '')
  const [ivfTransferDate, setIvfTransferDate] = useState(searchParams?.get('ivfTransferDate') || '')
  const [embryoAge, setEmbryoAge] = useState<EmbryoAge>((Number(searchParams?.get('embryoAge')) as EmbryoAge) || 5)
  const [ultrasoundDate, setUltrasoundDate] = useState(searchParams?.get('ultrasoundDate') || '')
  const [gestationalAge, setGestationalAge] = useState({
    weeks: Number(searchParams?.get('gestationalWeeks')) || 12,
    days: Number(searchParams?.get('gestationalDays')) || 0
  })
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculateDueDate = () => {
    let dueDate: Date
    let estimatedConceptionDate: Date

    switch (method) {
      case 'lmp':
        if (!lmpDate) return
        const lmp = new Date(lmpDate)
        // Due date = LMP + 280 days, adjusted for cycle length
        const adjustment = cycleLength - 28
        dueDate = addDays(lmp, 280 + adjustment)
        estimatedConceptionDate = addDays(lmp, 14 + adjustment)
        break

      case 'conception':
        if (!conceptionDate) return
        const conception = new Date(conceptionDate)
        // Due date = Conception date + 266 days (38 weeks)
        dueDate = addDays(conception, 266)
        estimatedConceptionDate = conception
        break

      case 'ivf':
        if (!ivfTransferDate) return
        const transferDate = new Date(ivfTransferDate)
        // For 3-day embryo: add 263 days
        // For 5-day embryo (blastocyst): add 261 days
        const daysToAdd = embryoAge === 3 ? 263 : 261
        dueDate = addDays(transferDate, daysToAdd)
        // Conception date is embryo age days before transfer
        estimatedConceptionDate = addDays(transferDate, -embryoAge)
        break

      case 'ultrasound':
        if (!ultrasoundDate) return
        const ultrasound = new Date(ultrasoundDate)
        // Calculate due date based on ultrasound gestational age
        const totalDaysPregnant = (gestationalAge.weeks * 7) + gestationalAge.days
        const daysUntilDue = 280 - totalDaysPregnant
        dueDate = addDays(ultrasound, daysUntilDue)
        estimatedConceptionDate = addDays(ultrasound, -(totalDaysPregnant - 14))
        break

      default:
        return
    }

    const today = new Date()
    const daysPregnant = differenceInDays(today, estimatedConceptionDate) + 14 // Add 14 days for LMP calculation
    const currentWeek = Math.floor(daysPregnant / 7)
    const daysRemaining = differenceInDays(dueDate, today)

    let trimester = 1
    if (currentWeek >= 28) trimester = 3
    else if (currentWeek >= 14) trimester = 2

    setResult({
      dueDate,
      currentWeek,
      daysRemaining,
      trimester,
      estimatedConceptionDate
    })
  }

  const resetCalculator = () => {
    setStep('method')
    setLmpDate('')
    setCycleLength(28)
    setConceptionDate('')
    setIvfTransferDate('')
    setEmbryoAge(5)
    setUltrasoundDate('')
    setGestationalAge({ weeks: 12, days: 0 })
    setResult(null)
  }

  const handleMethodSelect = (selectedMethod: CalculationMethod) => {
    setMethod(selectedMethod)
    setStep('input')
  }

  const handleBack = () => {
    if (step === 'input') {
      setStep('method')
    }
  }

  const canCalculate = () => {
    switch (method) {
      case 'lmp':
        return lmpDate !== ''
      case 'conception':
        return conceptionDate !== ''
      case 'ivf':
        return ivfTransferDate !== ''
      case 'ultrasound':
        return ultrasoundDate !== ''
      default:
        return false
    }
  }

  const handleCalculate = () => {
    calculateDueDate()

    // Get the calculation result
    let dueDate: Date
    let estimatedConceptionDate: Date
    let trimester: number

    switch (method) {
      case 'lmp':
        if (!lmpDate) return
        const lmp = new Date(lmpDate)
        const adjustment = cycleLength - 28
        dueDate = addDays(lmp, 280 + adjustment)
        estimatedConceptionDate = addDays(lmp, 14 + adjustment)
        break

      case 'conception':
        if (!conceptionDate) return
        const conception = new Date(conceptionDate)
        dueDate = addDays(conception, 266)
        estimatedConceptionDate = conception
        break

      case 'ivf':
        if (!ivfTransferDate) return
        const transferDate = new Date(ivfTransferDate)
        const daysToAdd = embryoAge === 3 ? 263 : 261
        dueDate = addDays(transferDate, daysToAdd)
        estimatedConceptionDate = addDays(transferDate, -embryoAge)
        break

      case 'ultrasound':
        if (!ultrasoundDate) return
        const ultrasound = new Date(ultrasoundDate)
        const totalDaysPregnant = (gestationalAge.weeks * 7) + gestationalAge.days
        const daysUntilDue = 280 - totalDaysPregnant
        dueDate = addDays(ultrasound, daysUntilDue)
        estimatedConceptionDate = addDays(ultrasound, -(totalDaysPregnant - 14))
        break

      default:
        return
    }

    const today = new Date()
    // Calculate gestational age (weeks since LMP equivalent)
    // Gestational age = days since conception + 14 days (to account for LMP dating)
    const daysSinceConception = differenceInDays(today, estimatedConceptionDate)
    const gestationalDays = daysSinceConception + 14
    const currentWeek = Math.max(0, Math.floor(gestationalDays / 7))
    const daysRemaining = differenceInDays(dueDate, today)

    if (currentWeek >= 28) trimester = 3
    else if (currentWeek >= 14) trimester = 2
    else trimester = 1

    // Navigate to results page with query params including method and form data
    const params = new URLSearchParams({
      dueDate: dueDate.toISOString(),
      currentWeek: currentWeek.toString(),
      daysRemaining: daysRemaining.toString(),
      trimester: trimester.toString(),
      method: method
    })

    // Add method-specific data to preserve state
    switch (method) {
      case 'lmp':
        params.set('lmpDate', lmpDate)
        params.set('cycleLength', cycleLength.toString())
        break
      case 'conception':
        params.set('conceptionDate', conceptionDate)
        break
      case 'ivf':
        params.set('ivfTransferDate', ivfTransferDate)
        params.set('embryoAge', embryoAge.toString())
        break
      case 'ultrasound':
        params.set('ultrasoundDate', ultrasoundDate)
        params.set('gestationalWeeks', gestationalAge.weeks.toString())
        params.set('gestationalDays', gestationalAge.days.toString())
        break
    }

    router.push(`/tools/due-date-calculator/results?${params.toString()}`)
  }

  const getMethodTitle = () => {
    switch (method) {
      case 'lmp':
        return 'Last Menstrual Period'
      case 'conception':
        return 'Conception Date'
      case 'ivf':
        return 'IVF Transfer'
      case 'ultrasound':
        return 'Ultrasound Scan'
    }
  }

  return (
    <div>
      {/* Logo Section */}
      <div className="text-center mb-2">
        <Link href="/" className="inline-block">
          <Image
            src="/logos/heydoc-green.svg"
            alt="HeyDoc"
            width={140}
            height={48}
            className="mx-auto"
            priority
          />
        </Link>
      </div>

      {/* Page Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#475c21] mb-2">Due Date Calculator</h1>
        <p className="text-[#475c21] text-base sm:text-lg">Calculate your estimated delivery date</p>
      </div>

      {/* Step 1: Method Selection */}
      {step === 'method' && (
        <div className="max-w-xl mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold text-[#475c21] mb-4 text-center">
              How would you like to calculate your due date?
            </h2>

            <div className="space-y-2">
              <button
                onClick={() => handleMethodSelect('lmp')}
                className="group w-full p-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 text-left transition-all hover:border-[#9ad134] hover:shadow-[0_8px_24px_rgba(154,209,52,0.12)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#475c21] text-base group-hover:text-[#9ad134] transition-colors mb-0.5">Last Menstrual Period</div>
                    <div className="text-sm text-[#475c21]/70">Most common method</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#9ad134] transition-all flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleMethodSelect('conception')}
                className="group w-full p-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 text-left transition-all hover:border-[#9ad134] hover:shadow-[0_8px_24px_rgba(154,209,52,0.12)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#475c21] text-base group-hover:text-[#9ad134] transition-colors mb-0.5">Conception/Ovulation Date</div>
                    <div className="text-sm text-[#475c21]/70">If you know when you conceived</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#9ad134] transition-all flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleMethodSelect('ivf')}
                className="group w-full p-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 text-left transition-all hover:border-[#9ad134] hover:shadow-[0_8px_24px_rgba(154,209,52,0.12)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#475c21] text-base group-hover:text-[#9ad134] transition-colors mb-0.5">IVF Transfer Date</div>
                    <div className="text-sm text-[#475c21]/70">For IVF pregnancies</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#9ad134] transition-all flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleMethodSelect('ultrasound')}
                className="group w-full p-3 rounded-xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 text-left transition-all hover:border-[#9ad134] hover:shadow-[0_8px_24px_rgba(154,209,52,0.12)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#475c21] text-base group-hover:text-[#9ad134] transition-colors mb-0.5">Ultrasound Scan</div>
                    <div className="text-sm text-[#475c21]/70">Based on scan measurements</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#9ad134] transition-all flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Input Details */}
        {step === 'input' && (
          <div className="max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-[#475c21]">
                {getMethodTitle()}
              </h2>
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-[#475c21]/50 hover:text-[#475c21] transition-colors text-base ml-4"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            </div>

            <div className="space-y-4 mb-5">
            {method === 'lmp' && (
              <>
                <div>
                  <label className="block text-base font-medium text-[#475c21] mb-2">
                    First day of your last period
                  </label>
                  <input
                    type="date"
                    value={lmpDate}
                    onChange={(e) => setLmpDate(e.target.value)}
                    min={format(addDays(new Date(), -300), 'yyyy-MM-dd')}
                    max={format(new Date(), 'yyyy-MM-dd')}
                    className="w-full px-4 py-2.5 text-base text-slate-900 bg-white border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9ad134]/20 focus:border-[#9ad134] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#475c21] mb-2">
                    Average cycle length
                  </label>
                  <select
                    value={cycleLength}
                    onChange={(e) => setCycleLength(Number(e.target.value))}
                    className="w-full px-4 py-2.5 text-base text-slate-900 bg-white border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9ad134]/20 focus:border-[#9ad134] transition-all outline-none"
                  >
                    {Array.from({ length: 15 }, (_, i) => i + 21).map((days) => (
                      <option key={days} value={days}>{days} days</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {method === 'conception' && (
              <div>
                <label className="block text-base font-medium text-[#475c21] mb-2">
                  Conception or ovulation date
                </label>
                <input
                  type="date"
                  value={conceptionDate}
                  onChange={(e) => setConceptionDate(e.target.value)}
                  min={format(addDays(new Date(), -300), 'yyyy-MM-dd')}
                  max={format(new Date(), 'yyyy-MM-dd')}
                  className="w-full px-4 py-2.5 text-base text-slate-900 bg-white border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9ad134]/20 focus:border-[#9ad134] transition-all outline-none"
                />
              </div>
            )}

            {method === 'ivf' && (
              <>
                <div>
                  <label className="block text-base font-medium text-[#475c21] mb-2">
                    IVF embryo transfer date
                  </label>
                  <input
                    type="date"
                    value={ivfTransferDate}
                    onChange={(e) => setIvfTransferDate(e.target.value)}
                    min={format(addDays(new Date(), -300), 'yyyy-MM-dd')}
                    max={format(new Date(), 'yyyy-MM-dd')}
                    className="w-full px-4 py-2.5 text-base text-slate-900 bg-white border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9ad134]/20 focus:border-[#9ad134] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#475c21] mb-2">
                    Embryo age at transfer
                  </label>
                  <select
                    value={embryoAge}
                    onChange={(e) => setEmbryoAge(Number(e.target.value) as EmbryoAge)}
                    className="w-full px-4 py-2.5 text-base text-slate-900 bg-white border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9ad134]/20 focus:border-[#9ad134] transition-all outline-none"
                  >
                    <option value={3}>Day 3 embryo</option>
                    <option value={5}>Day 5 embryo (blastocyst)</option>
                  </select>
                </div>
              </>
            )}

            {method === 'ultrasound' && (
              <>
                <div>
                  <label className="block text-base font-medium text-[#475c21] mb-2">
                    Ultrasound scan date
                  </label>
                  <input
                    type="date"
                    value={ultrasoundDate}
                    onChange={(e) => setUltrasoundDate(e.target.value)}
                    min={format(addDays(new Date(), -300), 'yyyy-MM-dd')}
                    max={format(new Date(), 'yyyy-MM-dd')}
                    className="w-full px-4 py-2.5 text-base text-slate-900 bg-white border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9ad134]/20 focus:border-[#9ad134] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-[#475c21] mb-2">
                    Gestational age at scan
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-[#475c21] mb-2">Weeks</label>
                      <input
                        type="number"
                        min="4"
                        max="42"
                        value={gestationalAge.weeks}
                        onChange={(e) => setGestationalAge({ ...gestationalAge, weeks: Number(e.target.value) })}
                        className="w-full px-4 py-2.5 text-base text-slate-900 bg-white border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9ad134]/20 focus:border-[#9ad134] transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#475c21] mb-2">Days</label>
                      <input
                        type="number"
                        min="0"
                        max="6"
                        value={gestationalAge.days}
                        onChange={(e) => setGestationalAge({ ...gestationalAge, days: Number(e.target.value) })}
                        className="w-full px-4 py-2.5 text-base text-slate-900 bg-white border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-[#9ad134]/20 focus:border-[#9ad134] transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            </div>

            <button
              onClick={handleCalculate}
              disabled={!canCalculate()}
              className="w-full bg-[#9ad134] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#7ab82b] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md active:scale-[0.99]"
            >
              Calculate Due Date
            </button>
          </div>
        )}
    </div>
  )
}
