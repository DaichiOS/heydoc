import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at HeyDoc - Join Australia's Leading Fertility Telehealth Team",
  description: "Join HeyDoc's mission to make fertility care accessible across Australia. Remote positions available. Work with AHPRA-registered fertility doctors.",
  openGraph: {
    title: "Careers at HeyDoc - Make an Impact in Fertility Healthcare",
    description: "Join our doctor-led fertility telehealth startup. Remote work, flexible hours, meaningful impact.",
    url: "https://heydochealth.com.au/careers",
  },
}

export default function CareersPage() {
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Administrative Assistant",
    "description": "We're looking for a detail-oriented and organized Administrative Assistant to join our growing team. You'll play a crucial role in ensuring smooth day-to-day operations and providing excellent support to both our medical team and patients.",
    "datePosted": "2025-01-17",
    "employmentType": ["PART_TIME", "FULL_TIME"],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "HeyDoc",
      "sameAs": "https://heydochealth.com.au",
      "logo": "https://heydochealth.com.au/logos/heydoc.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Australia"
    },
    "jobLocationType": "TELECOMMUTE",
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "AUD",
      "value": {
        "@type": "QuantitativeValue",
        "unitText": "HOUR"
      }
    },
    "responsibilities": "Respond to patient emails, check and upload lab results, manage appointments, process documentation, maintain records, coordinate communication",
    "skills": "Communication, attention to detail, technology proficiency, discretion, self-motivation, empathy"
  }

  return (
    <div className="min-h-screen bg-[#EFF4F9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      {/* Header with Logo */}
      <header className="px-6 sm:px-8 lg:px-12 pt-8 sm:pt-8 pb-6 sm:pb-4">
        <div className="flex justify-start">
          <Link
            href="/"
            className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg active:scale-95"
          >
            <Image
              src="/logos/heydoc.png"
              alt="heydoc"
              width={600}
              height={300}
              className="h-36 sm:h-40 lg:h-48 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Join Our Team
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Help us make fertility care accessible to Australians everywhere
            </p>
          </div>

          {/* Company Values */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Why Work at HeyDoc?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Meaningful Impact</h3>
                <p className="text-slate-700">Help families start their fertility journey and make a real difference in people's lives.</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Fast-Growing Startup</h3>
                <p className="text-slate-700">Be part of a pioneering healthcare startup that's disrupting the fertility space in Australia.</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Doctor-Led Team</h3>
                <p className="text-slate-700">Work alongside experienced fertility doctors who are passionate about patient care.</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 text-lg">Flexible Work</h3>
                <p className="text-slate-700">Remote-friendly work environment with flexible hours to suit your lifestyle.</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Open Positions</h2>

            {/* Admin Position */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30 hover:shadow-2xl transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Administrative Assistant</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">Part-time / Full-time</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">Remote</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">Entry Level</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* About the Role */}
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg mb-3">About the Role</h4>
                  <p className="text-slate-700 leading-relaxed">
                    We're looking for a detail-oriented and organized Administrative Assistant to join our growing team. You'll play a crucial role in ensuring smooth day-to-day operations and providing excellent support to both our medical team and patients. This is a great opportunity for someone looking to gain experience in the healthcare/startup space.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#1C1B3A] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Respond to patient emails and inquiries in a timely and professional manner</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#1C1B3A] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Check, verify, and upload laboratory results and pathology reports to patient files</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#1C1B3A] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Manage appointment bookings and consultation scheduling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#1C1B3A] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Process and organize patient documentation and referral letters</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#1C1B3A] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Maintain accurate and confidential patient records</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#1C1B3A] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Assist with general administrative tasks and data entry</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#1C1B3A] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Coordinate communication between patients, doctors, and fertility clinics</span>
                    </li>
                  </ul>
                </div>

                {/* What We're Looking For */}
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg mb-3">What We're Looking For</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Excellent written and verbal communication skills</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Strong attention to detail and accuracy</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Comfortable using technology and learning new software platforms</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Ability to handle sensitive information with discretion and professionalism</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Self-motivated and able to work independently</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Empathetic and patient-focused mindset</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Previous admin or healthcare experience is a plus but not required</span>
                    </li>
                  </ul>
                </div>

                {/* What We Offer */}
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg mb-3">What We Offer</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Competitive salary based on experience</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Flexible working hours (part-time or full-time available)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Fully remote work - work from anywhere in Australia</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Opportunity to grow with a fast-expanding healthcare startup</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Supportive team environment with direct access to founders</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">Make a meaningful impact in people's fertility journeys</span>
                    </li>
                  </ul>
                </div>

                {/* Apply Button */}
                <div className="pt-6 border-t border-slate-200">
                  <a
                    href="mailto:admin@heydochealth.com.au?subject=Application: Administrative Assistant Position"
                    className="inline-block bg-[#1C1B3A] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#252347] hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
                  >
                    Apply for this Position
                  </a>
                  <p className="text-sm text-slate-600 mt-4">
                    Send your resume and a brief cover letter to{" "}
                    <a href="mailto:admin@heydochealth.com.au" className="text-[#1C1B3A] font-medium hover:underline">
                      admin@heydochealth.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-white/30">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Don't See the Right Role?</h2>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              We're always looking for talented people to join our team. If you're passionate about making fertility care accessible, we'd love to hear from you.
            </p>
            <a
              href="mailto:admin@heydochealth.com.au?subject=General Inquiry: Careers at HeyDoc"
              className="text-[#1C1B3A] font-semibold text-lg hover:underline"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#EFF4F9] border-t border-slate-200/50 mt-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="text-center text-slate-500 text-sm">
            © 2025 HeyDoc. All rights reserved. | ABN 88 526 376 986
          </div>
        </div>
      </footer>
    </div>
  )
}
