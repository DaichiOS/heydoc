import type { Metadata } from 'next'
import Link from 'next/link'
import { AppHeader } from '@/components/ui/app-header'

export const metadata: Metadata = {
  title: 'How to Calculate Your Due Date - Methods & FAQ | HeyDoc Australia',
  description: 'Learn how to calculate your pregnancy due date using LMP, conception date, IVF transfer, or ultrasound methods. Answers to common questions about due date accuracy and pregnancy timelines.',
  keywords: ['how to calculate due date', 'pregnancy due date methods', 'lmp method', 'ivf due date calculation', 'ultrasound due date', 'pregnancy timeline', 'due date accuracy'],
  openGraph: {
    title: 'How to Calculate Your Due Date - Methods & FAQ',
    description: 'Complete guide to calculating your pregnancy due date using different methods. Includes FAQ and pregnancy timeline information.',
    url: 'https://app.heydochealth.com.au/tools/due-date-calculator/about',
    siteName: 'HeyDoc',
    type: 'article',
    images: [
      {
        url: 'https://app.heydochealth.com.au/logos/heydoc.png',
        width: 1200,
        height: 630,
        alt: 'How to Calculate Your Due Date',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Calculate Your Due Date - Methods & FAQ',
    description: 'Complete guide to calculating your pregnancy due date using different methods.',
    images: ['https://app.heydochealth.com.au/logos/heydoc.png'],
  },
  alternates: {
    canonical: 'https://app.heydochealth.com.au/tools/due-date-calculator/about',
  },
}

export default function DueDateCalculatorAbout() {
  return (
    <div className="min-h-screen bg-[#EFF4F9]">
      {/* App Header */}
      <AppHeader />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 via-purple-50/30 to-transparent py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            How to Calculate Your Due Date
          </h1>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto">
            Understanding different methods to estimate your baby's arrival
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-8">
            Your due date is an estimate of when your baby will arrive. While only about 5% of babies arrive exactly on their due date,
            knowing when to expect your baby helps you prepare for their arrival and ensures proper prenatal care throughout your pregnancy.
          </p>

          <div className="bg-gradient-to-br from-[#1C1B3A] to-[#2A2951] rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Calculate Your Due Date?</h2>
            <p className="mb-6 text-slate-200">
              Use our free due date calculator to get your estimated delivery date in seconds.
            </p>
            <Link
              href="/tools/due-date-calculator"
              className="inline-block bg-white text-[#1C1B3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Calculate Now
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Methods to Calculate Your Due Date
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                1. By Last Menstrual Period (LMP)
              </h3>
              <p className="text-slate-700">
                This is the most common method. Your due date is calculated as 280 days (40 weeks) from the first day of your last menstrual period.
                This method assumes a regular 28-day cycle. If your cycle is longer or shorter, the calculator adjusts accordingly.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                2. By Conception or Ovulation Date
              </h3>
              <p className="text-slate-700">
                If you know exactly when you conceived or ovulated, this method can be more accurate. Your due date is calculated as 266 days
                (38 weeks) from the conception/ovulation date.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                3. By IVF Transfer Date (For IVF Patients)
              </h3>
              <p className="text-slate-700">
                For pregnancies conceived through IVF, the due date is calculated based on your embryo transfer date and the age of the embryo.
                This is often the most accurate method as the exact fertilization date is known.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                4. By Ultrasound Date
              </h3>
              <p className="text-slate-700">
                Early pregnancy ultrasounds (especially between 8-13 weeks) can provide a very accurate due date based on the size of your baby.
                Your healthcare provider may adjust your due date based on ultrasound measurements.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                How accurate is a due date calculator?
              </h3>
              <p className="text-slate-700">
                Due date calculators provide an estimate, not an exact date. Only about 5% of babies arrive on their exact due date.
                Most babies are born between 37 and 42 weeks of pregnancy. Your healthcare provider may adjust your due date based on
                ultrasound scans and other factors.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Can my due date change?
              </h3>
              <p className="text-slate-700">
                Yes, your due date can be adjusted based on early ultrasound scans, especially if performed between 8-13 weeks.
                These scans can provide a more accurate estimate of your baby's gestational age.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                What if I don't know my last menstrual period?
              </h3>
              <p className="text-slate-700">
                If you don't remember your last menstrual period, you can use the conception date calculator if you know when you conceived.
                Alternatively, an early pregnancy ultrasound can help determine your due date.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                How is a due date calculated for IVF pregnancies?
              </h3>
              <p className="text-slate-700">
                IVF due dates are calculated based on your embryo transfer date and the age of the embryo at transfer. For a 3-day embryo transfer,
                263 days are added. For a 5-day (blastocyst) transfer, 261 days are added. This method is very accurate since the exact
                fertilization date is known.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Understanding Your Pregnancy Timeline
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <p className="text-slate-700 mb-4">
              Pregnancy is divided into three trimesters:
            </p>

            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-[#1C1B3A] font-bold">•</span>
                <span><strong>First Trimester:</strong> Weeks 1-13 - Major organs and structures develop</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1C1B3A] font-bold">•</span>
                <span><strong>Second Trimester:</strong> Weeks 14-27 - Baby grows rapidly, you may feel movement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1C1B3A] font-bold">•</span>
                <span><strong>Third Trimester:</strong> Weeks 28-40+ - Baby gains weight and prepares for birth</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            When Should You See a Doctor?
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <p className="text-slate-700 mb-4">
              Once you've calculated your due date, it's important to schedule your first prenatal appointment. Most healthcare providers
              recommend scheduling your first visit between 6-8 weeks of pregnancy.
            </p>

            <p className="text-slate-700 mb-4">
              If you're planning to conceive and need fertility support, HeyDoc can connect you with AHPRA-registered fertility specialists
              for online consultations.
            </p>

            <Link
              href="/tools/due-date-calculator/pregnancy-health-guide"
              className="inline-flex items-center gap-2 text-[#1C1B3A] font-medium hover:underline"
            >
              Read our complete pregnancy health guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#1C1B3A] to-[#2A2951] rounded-xl p-8 text-white mb-12">
            <h3 className="text-2xl font-bold mb-3 text-white">Need Fertility or Prenatal Support?</h3>
            <p className="mb-6 text-slate-200">
              Whether you're planning to conceive or already pregnant, our AHPRA-registered doctors can provide expert fertility
              consultations, prenatal care guidance, and IVF referrals online.
            </p>
            <Link
              href="/register"
              className="inline-block bg-white text-[#1C1B3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm text-slate-600">
            <p>
              <strong className="text-slate-900">Disclaimer:</strong> This calculator provides an estimate only. Your actual due date may vary.
              Always consult with your healthcare provider for accurate pregnancy dating and prenatal care. HeyDoc's due date
              calculator is for informational purposes and should not replace medical advice from your doctor or midwife.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
