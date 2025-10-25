import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "heydoc - Expert Fertility Telehealth & Specialist Referrals",
  description: "Connect with AHPRA-registered fertility doctors across Australia. Get specialist referrals and personalized fertility consultations online.",
  keywords: "fertility specialist, IVF referral, fertility consultation, male fertility, pre-conception care, online fertility doctor, Australia fertility, fertility telehealth, telehealth fertility consultation, online fertility specialist",
  authors: [{ name: "heydoc" }],
  robots: "index, follow",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: "https://heydochealth.com.au",
  },
  openGraph: {
    title: "heydoc - Expert Fertility Telehealth & Specialist Referrals",
    description: "Connect with AHPRA-registered fertility doctors across Australia through our secure telehealth platform. Get personalized fertility consultations and specialist referrals online.",
    type: "website",
    locale: "en_US",
    url: "https://heydochealth.com.au",
    siteName: "HeyDoc",
    images: [
      {
        url: "https://heydochealth.com.au/logos/heydoc-socials2.png",
        width: 1200,
        height: 800,
        alt: "HeyDoc - Expert Fertility Care, Anytime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "heydoc - Expert Fertility Telehealth & Specialist Referrals",
    description: "Connect with AHPRA-registered fertility doctors across Australia through our secure telehealth platform. Get personalized fertility consultations and specialist referrals online.",
    images: ["https://heydochealth.com.au/logos/heydoc-socials2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "HeyDoc",
    "description": "Australia's only online doctor-led fertility telehealth and referral network. Connect with AHPRA-registered fertility doctors for specialist referrals.",
    "url": "https://heydochealth.com.au",
    "logo": "https://heydochealth.com.au/logos/heydoc.png",
    "image": "https://heydochealth.com.au/logos/heydoc-socials2.png",
    "telephone": "",
    "email": "support@heydochealth.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "medicalSpecialty": [
      "Fertility Medicine",
      "Reproductive Health",
      "Pre-Conception Care"
    ],
    "priceRange": "$$",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Fertility Consultation",
        "description": "Online telehealth consultation with AHPRA-registered fertility doctors"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Male Fertility Support",
        "description": "Specialized fertility assessment and care designed for men"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Specialist Referrals",
        "description": "Referrals to leading fertility clinics across Australia"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is HeyDoc and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HeyDoc is Australia's only doctor-led fertility telehealth and referral network. We connect you with AHPRA-registered fertility doctors through secure online consultations. You complete a health questionnaire, speak with a fertility specialist via phone call, and receive specialist referrals to leading fertility clinics across Australia."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a referral to see a fertility specialist in Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, to see a fertility specialist in Australia and access IVF treatment, you typically need a referral from a doctor. HeyDoc makes this process simple and convenient by providing online consultations with fertility-focused doctors who can provide the referrals you need."
        }
      },
      {
        "@type": "Question",
        "name": "Are your doctors AHPRA-registered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our doctors are fully registered with AHPRA (Australian Health Practitioner Regulation Agency) and specialize in fertility medicine and reproductive health. Every consultation is conducted by qualified Australian doctors with expertise in fertility care."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a consultation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're currently offering a special opening price of $10 AUD per consultation (regular price $49). This includes a secure phone consultation with an AHPRA-registered fertility doctor and your specialist referral letter delivered instantly via email."
        }
      },
      {
        "@type": "Question",
        "name": "Do you prescribe fertility medications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, HeyDoc focuses solely on providing referrals to fertility specialists. We don't prescribe fertility medications online. This ensures you receive safe, comprehensive care from specialist fertility clinics who can provide ongoing treatment and monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "What fertility services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide online fertility consultations for both women and men, specialist referrals to fertility clinics across Australia, pre-conception health assessments, and fertility-focused pathology requests. All consultations are conducted through our secure telehealth platform."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get my referral?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll receive your fertility specialist referral instantly via email and SMS after your consultation. The entire process from booking to receiving your referral typically takes less than 30 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this service if I live outside major cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! HeyDoc is available across all of Australia through our telehealth platform. Whether you're in Sydney, Melbourne, Brisbane, Perth, Adelaide, or regional areas, you can access our fertility doctors online and receive referrals to fertility clinics throughout Australia."
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1C1B3A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[#EFF4F9]`}
      >
        {children}
      </body>
    </html>
  );
}
