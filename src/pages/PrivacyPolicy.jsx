export default function PrivacyPolicy() {
  return (
    <section
      id="privacy-policy"
      className="py-10 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mt-2">
          Effective Date: January 1, 2025
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-gray-600 max-h-[60vh] overflow-y-auto pr-2">

          {/* 1. Introduction */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Inferstrat (“we”, “us”, “our”) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website inferstrat.com or engage our 
              research and analytics services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Personal Information:</strong> name, email address, phone number,
                company name, and other details voluntarily provided via forms or
                communications.
              </li>
              <li>
                <strong>Automatically Collected Data:</strong> IP addresses, browser type,
                device information, and pages visited — used for analytics and improving
                our site.
              </li>
              <li>
                <strong>Research Data:</strong> anonymized data collected during market
                research, surveys, or analytics engagements.
              </li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p>We use collected data to:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries or requests</li>
              <li>Conduct market research and data analysis</li>
              <li>Send relevant updates or communications (only if you opt in)</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          {/* 4. Data Sharing & Disclosure */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Data Sharing & Disclosure</h2>
            <p>
              We do not sell your personal information. We may share limited data with:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>Service Providers:</strong> who support our operations (e.g., cloud hosting, analytics).
              </li>
              <li>
                <strong>Research Partners:</strong> under confidentiality agreements for collaborative studies.
              </li>
              <li>
                <strong>Legal Authorities:</strong> if required to comply with law or protect our rights.
              </li>
            </ul>
          </section>

          {/* 5. Data Retention */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
            <p>
              We retain information only as long as necessary to fulfill the purposes outlined in this Policy, 
              or as required by law. Aggregated and anonymized data may be retained for analytical purposes.
            </p>
          </section>

          {/* 6. Cookies & Tracking */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Cookies & Tracking</h2>
            <p>
              Our website may use cookies or similar technologies to enhance user experience, 
              track analytics, and improve performance. You can adjust cookie settings in your 
              browser to limit or disable tracking.
            </p>
          </section>

          {/* 7. Data Security */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
            <p>
              We implement commercially reasonable measures to secure data against unauthorized 
              access, disclosure, alteration, or destruction. However, no system is 100% secure, 
              and we cannot guarantee absolute protection.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, 
              or restrict processing of your personal data. To exercise these rights, contact us 
              at <a href="mailto:privacy@inferstrat.com" className="text-blue-600">privacy@inferstrat.com</a>.
            </p>
          </section>

          {/* 9. International Data Transfers */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">9. International Data Transfers</h2>
            <p>
              If we transfer your data internationally, we ensure it is protected with 
              appropriate safeguards consistent with applicable privacy laws.
            </p>
          </section>

          {/* 10. Updates to This Policy */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">10. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Updates will be posted on this page 
              with a revised “Effective Date.” Please review it regularly to stay informed.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, 
              please contact us at:{" "}
              <a href="mailto:contact@inferstrat.com" className="text-blue-600">
                contact@inferstrat.com
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-600">
            Note: This Privacy Policy is provided for informational purposes and does not constitute 
            legal advice. For specific guidance, consult a qualified attorney.
          </p>
        </div>
      </div>
    </section>
  );
}
