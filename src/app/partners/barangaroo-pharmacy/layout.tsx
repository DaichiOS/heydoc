import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HeyDoc x Barangaroo Pharmacy Partnership | Fertility Support',
  description: 'HeyDoc has partnered with Barangaroo Pharmacy to provide comprehensive fertility support. Get your fertility specialist referral online and receive 10% off selected fertility supplements at Barangaroo Pharmacy.',
  keywords: ['heydoc', 'barangaroo pharmacy', 'fertility partnership', 'fertility supplements', 'barangaroo cbd', 'fertility specialist referral', 'fertility support sydney'],
  openGraph: {
    title: 'HeyDoc x Barangaroo Pharmacy Partnership',
    description: 'Comprehensive fertility support combining HeyDoc specialist referrals with 10% off fertility supplements at Barangaroo Pharmacy.',
    url: 'https://www.heydochealth.com.au/partners/barangaroo-pharmacy',
    siteName: 'HeyDoc',
    images: [
      {
        url: 'https://www.heydochealth.com.au/images/heydocxbarangaroo.png',
        width: 1200,
        height: 630,
        alt: 'HeyDoc x Barangaroo Pharmacy Partnership',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyDoc x Barangaroo Pharmacy Partnership',
    description: 'Comprehensive fertility support combining specialist referrals with 10% off supplements.',
    images: ['https://www.heydochealth.com.au/images/heydocxbarangaroo.png'],
  },
  alternates: {
    canonical: 'https://www.heydochealth.com.au/partners/barangaroo-pharmacy',
  },
}

export default function BarangarooPharmacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
