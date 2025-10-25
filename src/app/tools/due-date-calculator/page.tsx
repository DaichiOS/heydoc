import type { Metadata } from 'next'
import { DueDateCalculator } from '@/components/tools/due-date-calculator'
import Link from 'next/link'
import { AppHeader } from '@/components/ui/app-header'

export const metadata: Metadata = {
  title: 'Due Date Calculator - Free Pregnancy Calculator | HeyDoc Australia',
  description: 'Calculate your pregnancy due date with our free calculator. Supports LMP, conception date, IVF transfer, and ultrasound methods. Get accurate pregnancy timeline and trimester information.',
  keywords: ['due date calculator', 'pregnancy calculator', 'due date calculator australia', 'ivf due date calculator', 'pregnancy calculator free', 'conception calculator', 'ultrasound due date', 'lmp calculator'],
  openGraph: {
    title: 'Due Date Calculator - Free Pregnancy Calculator | HeyDoc',
    description: 'Calculate your pregnancy due date with our free calculator. Supports LMP, IVF, conception, and ultrasound methods.',
    url: 'https://app.heydochealth.com.au/tools/due-date-calculator',
    siteName: 'HeyDoc',
    type: 'website',
    images: [
      {
        url: 'https://app.heydochealth.com.au/logos/heydoc.png',
        width: 1200,
        height: 630,
        alt: 'HeyDoc Due Date Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Due Date Calculator - Free Pregnancy Calculator',
    description: 'Calculate your pregnancy due date with our free calculator. Supports LMP, IVF, conception, and ultrasound methods.',
    images: ['https://app.heydochealth.com.au/logos/heydoc.png'],
  },
  alternates: {
    canonical: 'https://app.heydochealth.com.au/tools/due-date-calculator',
  },
}

export default function DueDateCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Due Date Calculator',
    description: 'Free pregnancy due date calculator supporting LMP, conception date, IVF transfer, and ultrasound methods',
    url: 'https://app.heydochealth.com.au/tools/due-date-calculator',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
    },
    provider: {
      '@type': 'MedicalOrganization',
      name: 'HeyDoc',
      url: 'https://app.heydochealth.com.au',
    },
    featureList: [
      'Calculate due date by last menstrual period (LMP)',
      'Calculate due date by conception/ovulation date',
      'Calculate due date for IVF pregnancies',
      'Calculate due date by ultrasound measurements',
      'View current pregnancy week and trimester',
      'Add due date to calendar',
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* App Header */}
      <AppHeader />

      {/* Centered Calculator */}
      <main className="px-4 pt-20 sm:pt-24 md:pt-28 pb-4 md:pb-6 flex items-center min-h-screen">
        <div className="w-full max-w-2xl mx-auto">
          {/* Calculator Component */}
          <DueDateCalculator />
        </div>
      </main>

      {/* SEO Content - Hidden but crawlable */}
      <div className="sr-only">
        <div className="mt-16 prose prose-slate max-w-none">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            How to Calculate Your Due Date
          </h2>

          <p className="text-lg text-slate-700 mb-6">
            Your due date is an estimate of when your baby will arrive. While only about 5% of babies arrive exactly on their due date,
            knowing when to expect your baby helps you prepare for their arrival and ensures proper prenatal care throughout your pregnancy.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
            Methods to Calculate Your Due Date
          </h3>

          <h4 className="text-lg font-semibold text-slate-900 mb-3">
            1. By Last Menstrual Period (LMP)
          </h4>
          <p className="text-slate-700 mb-4">
            This is the most common method. Your due date is calculated as 280 days (40 weeks) from the first day of your last menstrual period.
            This method assumes a regular 28-day cycle. If your cycle is longer or shorter, the calculator adjusts accordingly.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mb-3">
            2. By Conception or Ovulation Date
          </h4>
          <p className="text-slate-700 mb-4">
            If you know exactly when you conceived or ovulated, this method can be more accurate. Your due date is calculated as 266 days
            (38 weeks) from the conception/ovulation date.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mb-3">
            3. By IVF Transfer Date (For IVF Patients)
          </h4>
          <p className="text-slate-700 mb-4">
            For pregnancies conceived through IVF, the due date is calculated based on your embryo transfer date and the age of the embryo.
            This is often the most accurate method as the exact fertilization date is known.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mb-3">
            4. By Ultrasound Date
          </h4>
          <p className="text-slate-700 mb-4">
            Early pregnancy ultrasounds (especially between 8-13 weeks) can provide a very accurate due date based on the size of your baby.
            Your healthcare provider may adjust your due date based on ultrasound measurements.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            How accurate is a due date calculator?
          </h3>
          <p className="text-slate-700 mb-6">
            Due date calculators provide an estimate, not an exact date. Only about 5% of babies arrive on their exact due date.
            Most babies are born between 37 and 42 weeks of pregnancy. Your healthcare provider may adjust your due date based on
            ultrasound scans and other factors.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Can my due date change?
          </h3>
          <p className="text-slate-700 mb-6">
            Yes, your due date can be adjusted based on early ultrasound scans, especially if performed between 8-13 weeks.
            These scans can provide a more accurate estimate of your baby's gestational age.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            What if I don't know my last menstrual period?
          </h3>
          <p className="text-slate-700 mb-6">
            If you don't remember your last menstrual period, you can use the conception date calculator if you know when you conceived.
            Alternatively, an early pregnancy ultrasound can help determine your due date.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            How is a due date calculated for IVF pregnancies?
          </h3>
          <p className="text-slate-700 mb-6">
            IVF due dates are calculated based on your embryo transfer date and the age of the embryo at transfer. For a 3-day embryo transfer,
            263 days are added. For a 5-day (blastocyst) transfer, 261 days are added. This method is very accurate since the exact
            fertilization date is known.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            Understanding Your Pregnancy Timeline
          </h2>

          <p className="text-slate-700 mb-4">
            Pregnancy is divided into three trimesters:
          </p>

          <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-2">
            <li><strong>First Trimester:</strong> Weeks 1-13 - Major organs and structures develop</li>
            <li><strong>Second Trimester:</strong> Weeks 14-27 - Baby grows rapidly, you may feel movement</li>
            <li><strong>Third Trimester:</strong> Weeks 28-40+ - Baby gains weight and prepares for birth</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-12 mb-6">
            When Should You See a Doctor?
          </h2>

          <p className="text-slate-700 mb-4">
            Once you've calculated your due date, it's important to schedule your first prenatal appointment. Most healthcare providers
            recommend scheduling your first visit between 6-8 weeks of pregnancy.
          </p>

          <p className="text-slate-700 mb-6">
            If you're planning to conceive and need fertility support, HeyDoc can connect you with AHPRA-registered fertility specialists
            for online consultations.
          </p>

          {/* CTA Section */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 sm:p-8 mt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              Need Fertility Support?
            </h3>
            <p className="text-slate-700 mb-6">
              Whether you're planning to conceive or already pregnant, our AHPRA-registered doctors can provide expert fertility
              consultations and IVF referrals online.
            </p>
            <Link
              href="/register"
              className="inline-block bg-[#1C1B3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2A2951] transition-colors"
            >
              Book Fertility Consultation
            </Link>
          </div>

          <div className="mt-12 text-sm text-slate-500 border-t pt-6">
            <p>
              <strong>Disclaimer:</strong> This calculator provides an estimate only. Your actual due date may vary.
              Always consult with your healthcare provider for accurate pregnancy dating and prenatal care. HeyDoc's due date
              calculator is for informational purposes and should not replace medical advice from your doctor or midwife.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
