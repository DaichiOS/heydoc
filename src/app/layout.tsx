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
  title: "heydoc - Access quality healthcare from the comfort of your home",
  description: "Access quality healthcare from the comfort of your home. Connect with licensed doctors through our secure telehealth platform for consultations, medical certificates, and mental health support.",
  keywords: "telehealth, online doctor, medical consultation, healthcare, telemedicine",
  authors: [{ name: "heydoc" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "heydoc - Access quality healthcare from the comfort of your home",
    description: "Access quality healthcare from the comfort of your home. Connect with licensed doctors through our secure telehealth platform.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logos/heydoc-social-image.png",
        width: 1200,
        height: 630,
        alt: "HeyDoc - Quality Healthcare, Anywhere in Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "heydoc - Access quality healthcare from the comfort of your home",
    description: "Access quality healthcare from the comfort of your home. Connect with licensed doctors through our secure telehealth platform.",
    images: ["/logos/heydoc-social-image.png"],
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
