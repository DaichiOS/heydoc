import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "heydoc - Expert Fertility Care & Specialist Referrals",
  description: "Connect with AHPRA-registered fertility doctors across Australia. Get personalized fertility consultations and specialist referrals online. Start your fertility journey today.",
  keywords: "fertility specialist, IVF referral, fertility consultation, male fertility, pre-conception care, online fertility doctor, Australia fertility",
  authors: [{ name: "heydoc" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "heydoc - Expert Fertility Care & Specialist Referrals",
    description: "Connect with AHPRA-registered fertility doctors across Australia. Get personalized fertility consultations and specialist referrals online.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logos/heydoc-socials2.png",
        width: 1200,
        height: 800,
        alt: "HeyDoc - Expert Fertility Care, Anytime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "heydoc - Expert Fertility Care & Specialist Referrals",
    description: "Connect with AHPRA-registered fertility doctors across Australia. Get personalized fertility consultations and specialist referrals online.",
    images: ["/logos/heydoc-socials2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[#EFF4F9]`}
      >
        {children}
      </body>
    </html>
  );
}
