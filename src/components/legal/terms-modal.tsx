'use client'

import { X } from 'lucide-react'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1C1B3A] text-white px-6 py-4 flex justify-between items-center flex-shrink-0">
          <div>
            <h2 className="text-2xl font-bold">Terms & Conditions</h2>
            <p className="text-blue-200 text-sm mt-1">HeyDoc Pty Ltd ABN 88 526 376 986</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-blue-200 transition-colors p-2 rounded-lg hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-6 py-8 space-y-8">
          {/* Header Info */}
          <div className="text-sm text-gray-600">
            <p className="font-semibold text-[#1C1B3A]">General Terms of Service</p>
            <p>Last updated: October 2025</p>
          </div>

          {/* Section 1 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">1. About HeyDoc</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                HeyDoc Health Pty Ltd ("HeyDoc", "we", "us", or "our") operates an online platform ("Platform") that facilitates access to healthcare information, administrative coordination, and referral services for patients ("Patients") and qualified healthcare providers ("Healthcare Practitioners").
              </p>
              <p>
                Our Platform enables users to obtain information, book health-related services, and receive administrative support in connection with legitimate healthcare providers. HeyDoc does not itself provide clinical consultations, diagnoses, or medical treatment. We also do not prescribe or dispense medications.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">2. Not Medical or Healthcare Advice</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                HeyDoc is not a medical or healthcare provider. The information made available through our Platform is for general informational purposes only and is not a substitute for independent professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                You should not rely on any information provided on the Platform to make decisions regarding your health. Always seek the advice of your doctor or other qualified healthcare professional with any questions you may have regarding a medical condition or treatment.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">3. No Emergency Service</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                The Platform and any services provided through HeyDoc are not suitable for medical emergencies or urgent conditions.
              </p>
              <p>
                If you believe you are experiencing a medical emergency or require immediate medical assistance, you should call 000 or attend the nearest hospital emergency department.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">4. Not a Substitute for Ongoing Care</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                HeyDoc's Platform is intended to complement—not replace—your relationship with your usual general practitioner or other medical professional. We encourage you to maintain regular consultations with your healthcare provider for ongoing management and review of your health.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">5. Accuracy of Information Provided by Users</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                To ensure the effectiveness of any referral or coordination service, users must provide accurate, complete, and up-to-date information. You acknowledge and agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide truthful and complete responses to any questions or forms requested on the Platform;</li>
                <li>Notify us promptly of any changes to your personal or contact details; and</li>
                <li>Take responsibility for ensuring that all information you supply is accurate.</li>
              </ul>
              <p>
                HeyDoc is not responsible for any errors, delays, or adverse outcomes arising from incomplete or inaccurate information supplied by you.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">6. Limitation of Liability and Indemnity</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>You acknowledge and agree that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>HeyDoc does not provide medical diagnosis, treatment, prescriptions, or any clinical service;</li>
                <li>To the maximum extent permitted by law, HeyDoc is not liable for any direct, indirect, incidental, special, consequential, or exemplary loss or damages arising out of your use of, or inability to use, the Platform;</li>
                <li>You indemnify HeyDoc and its officers, employees, contractors, and affiliates from and against all claims, losses, liabilities, damages, costs, and expenses (including legal fees on a full indemnity basis) arising from your use of the Platform, your breach of these Terms, or your violation of any law or third-party rights.</li>
              </ul>
              <p>
                Nothing in these Terms excludes or limits any statutory guarantees or rights under the Australian Consumer Law that cannot be excluded by law.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">7. Use of the Platform</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>By accessing or using the Platform, you agree that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are at least 18 years of age, or you are the lawful guardian of a minor who is using the Platform;</li>
                <li>You will use the Platform only for lawful purposes and in accordance with these Terms;</li>
                <li>You will not use the Platform for any activity that may cause harm, disruption, or interfere with the operation of the Platform or other users;</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account; and</li>
                <li>You will treat any personal information obtained through the Platform in accordance with the Privacy Act 1988 (Cth) and all relevant privacy laws.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate access to the Platform at our sole discretion if we believe misuse, unlawful activity, or breach of these Terms has occurred.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">8. Payments and Refunds</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                Payment options and fees, where applicable, will be displayed on the Platform. You agree to pay all fees or charges in accordance with the payment terms in effect at the time of booking or service request.
              </p>
              <p>
                Refunds will be provided where required under the Australian Consumer Law or if a service is cancelled by HeyDoc due to circumstances beyond your control. Refunds, when approved, will be processed to the original payment method within a reasonable timeframe.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">9. Platform Availability and Service Limitations</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                HeyDoc makes every reasonable effort to ensure continuous access to the Platform. However, we do not guarantee that the Platform will be available at all times or that access will be uninterrupted or error-free.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the Platform at any time without prior notice.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">10. Communication Tools</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                HeyDoc may communicate with users via secure messaging, email, or telephone for administrative and service-related purposes only. We do not authorise the use of these tools for clinical consultations or medical advice. By providing your contact details, you consent to receiving such communications.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">11. Reviews and User Content</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                From time to time, you may be invited to provide feedback or reviews regarding your experience with HeyDoc. By submitting content, you grant HeyDoc a non-exclusive, royalty-free, perpetual, and worldwide licence to use, reproduce, and publish that content for promotional or analytical purposes.
              </p>
              <p>
                You agree not to post or transmit any defamatory, misleading, or unlawful material, and you acknowledge that HeyDoc may remove or edit any such content at its discretion.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">12. Intellectual Property</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                All content, design, text, graphics, interfaces, and other materials available on the Platform, including the HeyDoc name and logo, are the property of HeyDoc or its licensors and are protected under Australian intellectual-property law.
              </p>
              <p>
                You may use the Platform and its materials for personal, non-commercial purposes only. You must not copy, reproduce, modify, distribute, or create derivative works without prior written consent from HeyDoc.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">13. Privacy Policy</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                HeyDoc respects your right to privacy and complies with the Privacy Act 1988 (Cth) and the Australian Privacy Principles. Our Privacy Policy outlines how we collect, use, store, and disclose your personal information.
              </p>
              <p>
                A copy of our current Privacy Policy is available at{' '}
                <a href="https://www.heydochealth.com.au" className="text-[#1C1B3A] hover:underline">
                  www.heydochealth.com.au
                </a>
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">14. Amendments</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                HeyDoc may amend these Terms from time to time. Any updates will take effect upon publication on our website. Your continued use of the Platform following such publication constitutes acceptance of the amended Terms.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">15. Governing Law</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                These Terms are governed by the laws of New South Wales, Australia. Each party submits to the non-exclusive jurisdiction of the courts of New South Wales and courts competent to hear appeals from those courts.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h3 className="text-xl font-semibold text-[#1C1B3A] mb-3">Contact Us</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>If you have any questions regarding these Terms, please contact:</p>
              <p className="font-medium">HeyDoc Pty Ltd</p>
              <p>
                Email:{' '}
                <a href="mailto:admin@heydochealth.com.au" className="text-[#1C1B3A] hover:underline">
                  admin@heydochealth.com.au
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://www.heydochealth.com.au" className="text-[#1C1B3A] hover:underline">
                  www.heydochealth.com.au
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full bg-[#1C1B3A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2A2951] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
