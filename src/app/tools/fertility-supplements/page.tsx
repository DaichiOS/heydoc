import type { Metadata } from 'next'
import Link from 'next/link'
import { AppHeader } from '@/components/ui/app-header'

export const metadata: Metadata = {
  title: 'Fertility Supplements Guide - Male & Female | HeyDoc Australia',
  description: 'Evidence-based guide to fertility supplements for men and women. Learn about folic acid, CoQ10, zinc, selenium, and other key vitamins to support conception and reproductive health.',
  keywords: ['fertility supplements', 'male fertility vitamins', 'female fertility vitamins', 'folic acid', 'coq10 fertility', 'zinc fertility', 'preconception vitamins', 'fertility support australia'],
  openGraph: {
    title: 'Fertility Supplements Guide - Male & Female',
    description: 'Evidence-based guide to fertility supplements for men and women trying to conceive.',
    url: 'https://www.heydochealth.com.au/tools/fertility-supplements',
    siteName: 'HeyDoc',
    type: 'article',
    images: [
      {
        url: 'https://www.heydochealth.com.au/logos/heydoc.png',
        width: 1200,
        height: 630,
        alt: 'HeyDoc Fertility Supplements Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fertility Supplements Guide - Male & Female',
    description: 'Evidence-based guide to fertility supplements for conception.',
    images: ['https://www.heydochealth.com.au/logos/heydoc.png'],
  },
  alternates: {
    canonical: 'https://www.heydochealth.com.au/tools/fertility-supplements',
  },
}

export default function FertilitySupplementsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Fertility Supplements Guide',
    description: 'Comprehensive guide to fertility supplements for men and women trying to conceive',
    url: 'https://www.heydochealth.com.au/tools/fertility-supplements',
    mainEntity: {
      '@type': 'MedicalGuidelineSet',
      name: 'Fertility Supplement Guidelines',
      guideline: [
        {
          '@type': 'MedicalGuideline',
          name: 'Female Fertility Supplements',
          guidelineSubject: {
            '@type': 'MedicalCondition',
            name: 'Female Fertility',
          },
        },
        {
          '@type': 'MedicalGuideline',
          name: 'Male Fertility Supplements',
          guidelineSubject: {
            '@type': 'MedicalCondition',
            name: 'Male Fertility',
          },
        },
      ],
    },
    provider: {
      '@type': 'MedicalOrganization',
      name: 'HeyDoc',
      url: 'https://www.heydochealth.com.au',
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
      <div className="pt-24 md:pt-28 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1B3A] text-center mb-4">
            Fertility Supplements Guide
          </h1>
          <p className="text-center text-blue-600 text-lg max-w-2xl mx-auto">
            Evidence-based supplements to support male and female fertility
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-[#1C1B3A] mb-0 leading-relaxed">
            While supplements cannot replace a healthy diet and lifestyle, certain vitamins and minerals can support reproductive health and improve fertility outcomes. This guide covers evidence-based supplements recommended for couples trying to conceive.
          </p>
        </div>

        {/* Female Fertility Supplements */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1B3A] mb-6">
            Female Fertility Supplements
          </h2>

          <div className="space-y-8">
            {/* Folic Acid */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Folic Acid (Folate)</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 400-800 micrograms daily (higher doses of 5mg for certain conditions)
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> Folic acid is essential for preventing neural tube defects like spina bifida. It should be started at least one month before conception and continued through the first trimester. Women with diabetes, epilepsy, or a family history of neural tube defects may require higher doses (5mg daily).
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Leafy greens, fortified cereals, legumes, citrus fruits
              </p>
            </div>

            {/* CoQ10 */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Coenzyme Q10 (CoQ10)</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 100-300mg daily
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> CoQ10 acts as a powerful antioxidant that supports egg quality and mitochondrial function in eggs. Studies suggest it may improve ovarian response and embryo quality, particularly beneficial for women over 35 or those undergoing IVF.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Fatty fish, organ meats, whole grains
              </p>
            </div>

            {/* Vitamin D */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Vitamin D</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 1000-2000 IU daily (based on blood test results)
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> Vitamin D plays a crucial role in hormonal balance, ovulation, and implantation. Deficiency has been linked to PCOS, endometriosis, and reduced IVF success rates. Particularly important for those with limited sun exposure or darker skin tones.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Fatty fish, egg yolks, fortified dairy, sunlight exposure
              </p>
            </div>

            {/* Omega-3 */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Omega-3 Fatty Acids (DHA & EPA)</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 500-1000mg combined DHA/EPA daily
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> Omega-3s reduce inflammation, support hormonal balance, and improve egg quality. DHA is particularly important for fetal brain and eye development during pregnancy.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Salmon, sardines, mackerel, walnuts, flaxseeds
              </p>
            </div>

            {/* Iron */}
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Iron</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> Based on blood test results (typically 18-27mg daily)
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> Iron deficiency can affect ovulation and egg quality. However, excessive iron can cause constipation and other side effects. It's best to have iron levels tested before supplementing.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Red meat, spinach, lentils, fortified cereals
              </p>
            </div>
          </div>
        </div>

        {/* Male Fertility Supplements */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1B3A] mb-6">
            Male Fertility Supplements
          </h2>

          <div className="space-y-8">
            {/* Zinc */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Zinc</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 15-30mg daily
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> Zinc is essential for testosterone production, sperm formation, and sperm motility. Deficiency has been linked to low sperm count and poor sperm quality. It also plays a role in DNA synthesis and cell division during spermatogenesis.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Oysters, beef, pumpkin seeds, chickpeas
              </p>
            </div>

            {/* Selenium */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Selenium</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 50-200 micrograms daily
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> Selenium acts as an antioxidant that protects sperm from oxidative damage and improves sperm motility. It's a key component of proteins that help form the structure of sperm tails, which is crucial for movement.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Brazil nuts, fish, eggs, brown rice
              </p>
            </div>

            {/* Vitamin C & E */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Vitamin C & E</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> Vitamin C: 500-1000mg daily | Vitamin E: 200-400 IU daily
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> Both vitamins are powerful antioxidants that protect sperm DNA from oxidative stress and free radical damage. Studies show they can improve sperm count, motility, and morphology. Vitamin C also helps regenerate vitamin E.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Vitamin C: Citrus fruits, berries, bell peppers | Vitamin E: Nuts, seeds, vegetable oils
              </p>
            </div>

            {/* CoQ10 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Coenzyme Q10 (CoQ10)</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 200-300mg daily
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> CoQ10 improves sperm concentration, motility, and morphology by providing energy to sperm cells and protecting them from oxidative damage. Particularly beneficial for men with unexplained infertility or poor semen parameters.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Fatty fish, organ meats, whole grains
              </p>
            </div>

            {/* L-Carnitine */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">L-Carnitine</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 1000-3000mg daily
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> L-Carnitine plays a crucial role in sperm energy metabolism and maturation. Studies show it can improve sperm concentration, motility, and morphology. It's particularly effective when combined with other antioxidants.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Red meat, dairy products, fish
              </p>
            </div>

            {/* Folic Acid */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-[#1C1B3A] mb-2">Folic Acid</h3>
              <p className="text-[#1C1B3A] text-sm mb-2">
                <strong>Recommended Dose:</strong> 400-800 micrograms daily
              </p>
              <p className="text-[#1C1B3A] text-sm mb-3">
                <strong>Why it's important:</strong> Folic acid isn't just for women - it's important for sperm DNA synthesis and can reduce the risk of chromosomal abnormalities in sperm. Studies show men with higher folate intake have better sperm quality.
              </p>
              <p className="text-[#1C1B3A] text-sm">
                <strong>Food sources:</strong> Leafy greens, fortified cereals, legumes
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1B3A] mb-6">
            Important Considerations
          </h2>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#1C1B3A] mb-2">Timing Matters</h4>
              <p className="text-[#1C1B3A] text-sm">
                Sperm take approximately 74 days to mature, so men should start taking fertility supplements at least 2-3 months before trying to conceive for optimal results. For women, starting supplements 1-3 months before conception is recommended.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C1B3A] mb-2">Quality Over Quantity</h4>
              <p className="text-[#1C1B3A] text-sm">
                Choose high-quality supplements from reputable brands. Look for products that have been third-party tested and contain bioavailable forms of nutrients. More expensive doesn't always mean better, but very cheap supplements may have poor absorption.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C1B3A] mb-2">Consult Your Doctor</h4>
              <p className="text-[#1C1B3A] text-sm">
                Always consult with your doctor or fertility specialist before starting any supplement regimen, especially if you have existing medical conditions or are taking medications. Some supplements can interact with medications or may not be suitable for certain conditions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#1C1B3A] mb-2">Lifestyle Matters Too</h4>
              <p className="text-[#1C1B3A] text-sm">
                Supplements work best when combined with a healthy lifestyle: balanced diet, regular exercise, stress management, adequate sleep, avoiding smoking and excessive alcohol, and maintaining a healthy weight all contribute to fertility.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-3 text-[#1C1B3A]">Need Personalized Fertility Advice?</h3>
          <p className="mb-6 text-[#1C1B3A]/80">
            Our AHPRA-registered fertility doctors can provide personalized supplement recommendations based on your specific needs and health history.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://app.heydochealth.com.au/register?type=patient"
              className="inline-block bg-[#1C1B3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2A2951] transition-all text-center shadow-lg hover:shadow-xl"
            >
              Book Consultation
            </Link>
            <Link
              href="/partners/barangaroo-pharmacy"
              className="inline-block bg-white border-2 border-[#1C1B3A] text-[#1C1B3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-center"
            >
              Visit Barangaroo Partnership
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-slate-600">
          <p className="mb-3">
            <strong className="text-[#1C1B3A]">Medical Disclaimer:</strong> This information is for educational purposes and should not replace professional medical advice. Always consult your healthcare provider before starting any supplement regimen, especially if you have existing medical conditions or are taking medications.
          </p>
          <p className="mb-0">
            <strong className="text-[#1C1B3A]">Sources:</strong> Evidence-based recommendations from fertility research, RANZCOG guidelines, and international reproductive health standards.
          </p>
        </div>
      </main>
    </div>
  )
}
