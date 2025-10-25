import type { Metadata } from 'next'
import Link from 'next/link'
import { AppHeader } from '@/components/ui/app-header'

export const metadata: Metadata = {
  title: 'Pregnancy Health Guide - Essential Pregnancy Information | HeyDoc Australia',
  description: 'Comprehensive pregnancy health guide covering prenatal vitamins, nutrition, medications to avoid, lifestyle advice, and when to seek medical care. Evidence-based information from Australian fertility specialists.',
  keywords: ['pregnancy health guide', 'pregnancy tips', 'prenatal care australia', 'pregnancy nutrition', 'pregnancy vitamins', 'folic acid pregnancy', 'what to avoid during pregnancy', 'pregnancy advice australia'],
  openGraph: {
    title: 'Pregnancy Health Guide - Essential Pregnancy Information',
    description: 'Evidence-based pregnancy health guide covering nutrition, vitamins, medications, and prenatal care from Australian fertility specialists.',
    url: 'https://app.heydochealth.com.au/tools/due-date-calculator/pregnancy-health-guide',
    siteName: 'HeyDoc',
    type: 'article',
    images: [
      {
        url: 'https://app.heydochealth.com.au/logos/heydoc.png',
        width: 1200,
        height: 630,
        alt: 'HeyDoc Pregnancy Health Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pregnancy Health Guide - Essential Pregnancy Information',
    description: 'Evidence-based pregnancy health guide from Australian fertility specialists.',
    images: ['https://app.heydochealth.com.au/logos/heydoc.png'],
  },
  alternates: {
    canonical: 'https://app.heydochealth.com.au/tools/due-date-calculator/pregnancy-health-guide',
  },
}

export default function PregnancyHealthGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Pregnancy Health Guide',
    description: 'Comprehensive pregnancy health information covering prenatal vitamins, nutrition, medications to avoid, and lifestyle guidance',
    url: 'https://app.heydochealth.com.au/tools/due-date-calculator/pregnancy-health-guide',
    mainEntity: {
      '@type': 'MedicalGuidelineSet',
      name: 'Pregnancy Health Guidelines',
      guideline: [
        {
          '@type': 'MedicalGuideline',
          name: 'Prenatal Vitamins',
          guidelineSubject: {
            '@type': 'MedicalCondition',
            name: 'Pregnancy',
          },
        },
        {
          '@type': 'MedicalGuideline',
          name: 'Pregnancy Nutrition',
          guidelineSubject: {
            '@type': 'MedicalCondition',
            name: 'Pregnancy',
          },
        },
      ],
    },
    provider: {
      '@type': 'MedicalOrganization',
      name: 'HeyDoc',
      url: 'https://app.heydochealth.com.au',
    },
    audience: {
      '@type': 'PatientsAudience',
      suggestedMinAge: 18,
      healthCondition: {
        '@type': 'MedicalCondition',
        name: 'Pregnancy',
      },
    },
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

      {/* Hero Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#475c21] text-center mb-4">
            Pregnancy Health Guide
          </h1>
          <p className="text-center text-[#475c21]/80 text-lg max-w-2xl mx-auto">
            Evidence-based guidance from Australian fertility specialists
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 pt-20 sm:pt-24 md:pt-28 pb-20">
        {/* Introduction */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 mb-12 shadow-sm">
          <p className="text-lg text-[#475c21] mb-0 leading-relaxed">
            This guide provides essential health information for pregnancy. All recommendations are based on current
            Australian medical guidelines (RANZCOG) and international best practices. Consult your healthcare provider
            for personalised medical advice.
          </p>
        </div>

        {/* Medications */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#475c21] mb-6">
            Medications During Pregnancy
          </h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6 mb-6">
            <p className="font-semibold text-amber-900 mb-2">Important</p>
            <p className="text-amber-800 text-sm mb-0">
              Always consult your doctor or pharmacist before taking any medication during pregnancy,
              including over-the-counter drugs and herbal supplements.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Medications to Avoid
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">×</span>
                  <div>
                    <strong>Ibuprofen and NSAIDs</strong> (Nurofen, Advil) can affect fetal heart and kidney development,
                    particularly after 20 weeks. Paracetamol is the preferred option for pain relief during pregnancy.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">×</span>
                  <div>
                    <strong>Isotretinoin</strong> (Roaccutane) for severe acne causes serious birth defects.
                    Must be discontinued well before pregnancy.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">×</span>
                  <div>
                    <strong>Certain antibiotics</strong> including tetracyclines. Your doctor will prescribe
                    pregnancy-safe alternatives when needed.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">×</span>
                  <div>
                    <strong>Some antidepressants.</strong> Do not stop antidepressants without medical supervision.
                    Your doctor will assess the risks and benefits for your specific situation.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">×</span>
                  <div>
                    <strong>Warfarin</strong> can cause birth defects. Patients on warfarin will be switched to
                    safer alternatives such as low molecular weight heparin.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Generally Safe Medications
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div><strong>Paracetamol</strong> for pain and fever at recommended doses</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div><strong>Most antacids</strong> for heartburn relief</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <div><strong>Pregnancy-specific multivitamins</strong></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alcohol */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#475c21] mb-6">
            Alcohol and Pregnancy
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <p className="text-slate-700 mb-4">
              Alcohol crosses the placenta and reaches your baby at similar concentrations to your bloodstream.
              Fetal organs, particularly the liver, cannot process alcohol effectively.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Fetal Alcohol Spectrum Disorder (FASD)</strong> can result from alcohol exposure and may cause:
            </p>
            <ul className="space-y-2 text-slate-700 mb-4 ml-4">
              <li>• Physical abnormalities including facial features and organ development</li>
              <li>• Growth restriction before and after birth</li>
              <li>• Learning difficulties and developmental delays</li>
              <li>• Behavioral challenges that persist into adulthood</li>
            </ul>
            <p className="text-slate-700 mb-0">
              <strong>Medical recommendation:</strong> No safe alcohol threshold has been established during pregnancy.
              Complete abstinence is recommended. If you consumed alcohol before confirming pregnancy, discuss this
              with your doctor at your first prenatal visit.
            </p>
          </div>
        </div>

        {/* Smoking */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#475c21] mb-6">
            Smoking During Pregnancy
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <p className="text-slate-700 mb-4">
              Cigarette smoke contains over 4,000 chemicals, including nicotine and carbon monoxide, which cross
              the placenta and reduce oxygen and nutrient supply to your baby.
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Health risks include:</strong>
            </p>
            <ul className="space-y-2 text-slate-700 mb-4 ml-4">
              <li>• Increased risk of miscarriage and stillbirth</li>
              <li>• Premature birth with underdeveloped organs</li>
              <li>• Low birth weight and associated complications</li>
              <li>• Placental abruption (medical emergency)</li>
              <li>• Birth defects including cleft lip and palate</li>
              <li>• Increased SIDS (Sudden Infant Death Syndrome) risk</li>
            </ul>
            <p className="text-slate-700 mb-0">
              <strong>Cessation support:</strong> Quitting at any stage of pregnancy provides health benefits.
              Reducing cigarette consumption also helps. Speak with your doctor about quit-smoking programs,
              nicotine replacement therapy, and other pregnancy-safe support options.
            </p>
          </div>
        </div>

        {/* Prenatal Vitamins */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#475c21] mb-6">
            Prenatal Vitamins
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Folic Acid (Folate)</h4>
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Dose:</strong> 400-800 micrograms daily
                </p>
                <p className="text-slate-700 text-sm">
                  Essential for preventing neural tube defects such as spina bifida. Should be commenced before
                  conception when possible. Higher doses (5mg daily) are recommended for women with diabetes,
                  family history of neural tube defects, or taking certain medications.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Iodine</h4>
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Dose:</strong> 150 micrograms daily
                </p>
                <p className="text-slate-700 text-sm">
                  Required for fetal brain development. Australian soils are iodine-deficient.
                  Most pregnancy multivitamins contain adequate iodine.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Vitamin D</h4>
                <p className="text-slate-700 text-sm">
                  Important for those with limited sun exposure, darker skin, or cultural/religious clothing practices.
                  Blood testing can determine if supplementation is necessary.
                </p>
              </div>

              <div className="border-l-4 border-slate-300 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Iron</h4>
                <p className="text-slate-700 text-sm">
                  Supplementation based on blood test results. Iron levels are monitored throughout pregnancy.
                  Unnecessary iron supplementation can cause constipation and other side effects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Foods to Avoid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#475c21] mb-6">
            Food Safety
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Listeria Risk Foods</h4>
                <p className="text-slate-700 text-sm mb-2">Listeria bacteria can cause miscarriage or stillbirth. Avoid:</p>
                <ul className="space-y-1 text-slate-700 text-sm ml-4">
                  <li>• Soft cheeses (brie, camembert, feta, blue cheese) unless cooked until steaming</li>
                  <li>• Pre-prepared salads and pre-cut fruit from shops</li>
                  <li>• Cold deli meats, pâté, and meat spreads</li>
                  <li>• Smoked salmon and ready-to-eat seafood</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Mercury in Fish</h4>
                <p className="text-slate-700 text-sm mb-2">High mercury levels affect fetal brain development:</p>
                <ul className="space-y-1 text-slate-700 text-sm ml-4">
                  <li>• <strong>Avoid:</strong> Shark (flake), marlin, swordfish, king mackerel</li>
                  <li>• <strong>Limit to once fortnightly:</strong> Tuna steaks, catfish, orange roughy</li>
                  <li>• <strong>Safe (2-3 times weekly):</strong> Salmon, prawns, canned tuna, snapper, flathead</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Food-borne Infection Risks</h4>
                <ul className="space-y-1 text-slate-700 text-sm ml-4">
                  <li>• Raw or undercooked eggs (runny yolks) carry salmonella risk</li>
                  <li>• Raw or rare meat must be cooked until well done</li>
                  <li>• Unpasteurised milk and juice</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Caffeine</h4>
                <p className="text-slate-700 text-sm">
                  Limit to 200mg daily (approximately 2 cups instant coffee or 1 cup espresso-based coffee).
                  Consider caffeine in tea, chocolate, and soft drinks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#475c21] mb-6">
            When to Seek Immediate Medical Attention
          </h2>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
            <p className="font-semibold text-red-900 mb-3">Contact your doctor or hospital immediately if you experience:</p>
            <ul className="space-y-2 text-red-800 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>Vaginal bleeding or fluid leaking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>Severe abdominal pain or cramping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>Severe headache, vision changes, or sudden facial/hand swelling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>Fever above 38°C</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>Decreased fetal movement (after 28 weeks)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>Persistent vomiting or inability to keep fluids down</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span>Pain or burning during urination</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border-2 border-slate-200 mb-12 shadow-md">
          <h3 className="text-2xl font-bold mb-3 text-[#475c21]">Need Pregnancy or Fertility Support?</h3>
          <p className="mb-6 text-[#475c21]/80">
            Our AHPRA-registered fertility doctors provide expert consultations, prenatal guidance,
            and specialist referrals through secure online appointments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/register"
              className="inline-block bg-[#9ad134] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7ab82b] transition-all text-center shadow-lg hover:shadow-xl"
            >
              Book Consultation
            </Link>
            <Link
              href="/tools/due-date-calculator"
              className="inline-block bg-white border-2 border-[#9ad134] text-[#475c21] px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-center"
            >
              Calculate Due Date
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm text-slate-600">
          <p className="mb-3">
            <strong className="text-slate-900">Medical Disclaimer:</strong> This information is for educational purposes
            and should not replace advice from your healthcare provider. Consult your doctor or midwife for
            personalised medical guidance.
          </p>
          <p className="mb-0">
            <strong className="text-slate-900">Sources:</strong> Royal Australian and New Zealand College of Obstetricians
            and Gynaecologists (RANZCOG), Australian dietary guidelines, international pregnancy health standards.
          </p>
        </div>
      </main>
    </div>
  )
}
