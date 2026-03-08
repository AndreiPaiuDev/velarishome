import { useEffect } from "react";
import styles from "./LegalModal.module.css";

const LAST_UPDATED = "1 March 2026";
const COMPANY = "Velaris Home Ltd";
const EMAIL = "legal@velarishome.com";
const ADDRESS = "88 Design District, London, EC1A 1BB, United Kingdom";

const PrivacyContent = () => (
  <div className={styles.legalBody}>
    <p className={styles.legalIntro}>
      This Privacy Policy explains how {COMPANY} ("we", "us", "our") collects, uses, stores, and protects your personal data when you visit our website or engage our services. We are committed to protecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the EU General Data Protection Regulation (EU GDPR 2016/679) where applicable.
    </p>

    <h3>1. Who We Are</h3>
    <p>{COMPANY} is the data controller for personal data collected through this website. Registered in England and Wales.</p>
    <ul>
      <li><strong>Address:</strong> {ADDRESS}</li>
      <li><strong>Email:</strong> {EMAIL}</li>
    </ul>

    <h3>2. What Personal Data We Collect</h3>
    <p>We may collect and process the following categories of personal data:</p>
    <ul>
      <li><strong>Identity data:</strong> first name, last name</li>
      <li><strong>Contact data:</strong> email address, phone number, postal address</li>
      <li><strong>Enquiry data:</strong> project type, budget range, message content</li>
      <li><strong>Technical data:</strong> IP address, browser type and version, time zone, operating system, device type</li>
      <li><strong>Usage data:</strong> pages visited, time spent, referring URLs, click behaviour</li>
      <li><strong>Cookie data:</strong> preferences stored via cookies (see Section 8)</li>
    </ul>

    <h3>3. How We Collect Your Data</h3>
    <ul>
      <li><strong>Directly from you</strong> — when you complete our contact or enquiry form</li>
      <li><strong>Automatically</strong> — through cookies and analytics tools when you browse our website</li>
      <li><strong>Third parties</strong> — from analytics providers (e.g. Google Analytics) and advertising platforms, where you have consented</li>
    </ul>

    <h3>4. Legal Basis for Processing</h3>
    <p>We process your personal data under the following legal bases (Article 6, UK/EU GDPR):</p>
    <ul>
      <li><strong>Consent (Art. 6(1)(a)):</strong> for marketing communications and non-essential cookies</li>
      <li><strong>Contract (Art. 6(1)(b)):</strong> to respond to enquiries and fulfil service agreements</li>
      <li><strong>Legitimate interests (Art. 6(1)(f)):</strong> for website security, fraud prevention, and improving our services</li>
      <li><strong>Legal obligation (Art. 6(1)(c)):</strong> to comply with applicable laws</li>
    </ul>

    <h3>5. How We Use Your Data</h3>
    <ul>
      <li>To respond to your enquiries and project requests</li>
      <li>To deliver and manage our interior design services</li>
      <li>To send you trend reports and studio news (only with your consent)</li>
      <li>To analyse website usage and improve user experience</li>
      <li>To comply with legal and regulatory obligations</li>
      <li>To prevent fraud and ensure website security</li>
    </ul>

    <h3>6. Data Retention</h3>
    <p>We retain personal data only for as long as necessary:</p>
    <ul>
      <li><strong>Enquiry data:</strong> 3 years from last contact</li>
      <li><strong>Client project data:</strong> 7 years (legal/financial compliance)</li>
      <li><strong>Marketing consent records:</strong> until consent is withdrawn</li>
      <li><strong>Technical/analytics data:</strong> 26 months (anonymised thereafter)</li>
    </ul>

    <h3>7. Data Sharing</h3>
    <p>We do not sell your personal data. We may share it with:</p>
    <ul>
      <li><strong>Service providers:</strong> email platforms, CRM systems, web hosting providers — all bound by Data Processing Agreements</li>
      <li><strong>Professional advisers:</strong> lawyers, accountants — under confidentiality obligations</li>
      <li><strong>Regulatory authorities:</strong> where required by law (e.g. HMRC, ICO)</li>
    </ul>
    <p>Where data is transferred outside the UK/EEA, we ensure adequate safeguards via Standard Contractual Clauses (SCCs) or equivalent mechanisms.</p>

    <h3>8. Cookies</h3>
    <p>We use cookies to operate and improve our website. These fall into four categories:</p>
    <ul>
      <li><strong>Strictly necessary:</strong> essential for the website to function (no consent required)</li>
      <li><strong>Functional:</strong> remember your preferences (e.g. language, cookie settings)</li>
      <li><strong>Analytics:</strong> understand how visitors use our site (e.g. Google Analytics — only with consent)</li>
      <li><strong>Marketing:</strong> deliver relevant advertising (only with consent)</li>
    </ul>
    <p>You can manage cookie preferences at any time via our Cookie Settings banner.</p>

    <h3>9. Your Rights</h3>
    <p>Under UK/EU GDPR, you have the following rights:</p>
    <ul>
      <li><strong>Right of access (SAR):</strong> request a copy of your personal data</li>
      <li><strong>Right to rectification:</strong> correct inaccurate or incomplete data</li>
      <li><strong>Right to erasure ("right to be forgotten"):</strong> request deletion of your data</li>
      <li><strong>Right to restrict processing:</strong> limit how we use your data</li>
      <li><strong>Right to data portability:</strong> receive your data in a portable format</li>
      <li><strong>Right to object:</strong> object to processing based on legitimate interests or for direct marketing</li>
      <li><strong>Rights related to automated decision-making:</strong> not to be subject to solely automated decisions</li>
      <li><strong>Right to withdraw consent:</strong> at any time, without affecting prior processing</li>
    </ul>
    <p>To exercise any right, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within <strong>one calendar month</strong>.</p>

    <h3>10. Complaints</h3>
    <p>If you believe we have not handled your data correctly, you have the right to lodge a complaint with the <strong>Information Commissioner's Office (ICO)</strong> — the UK supervisory authority — at <a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a> or call 0303 123 1113. EU residents may also contact their local Data Protection Authority.</p>

    <h3>11. Changes to This Policy</h3>
    <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top will reflect any changes. We encourage you to review this policy periodically.</p>

    <h3>12. Contact Us</h3>
    <p>For any privacy-related queries: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />{ADDRESS}</p>
  </div>
);

const TermsContent = () => (
  <div className={styles.legalBody}>
    <p className={styles.legalIntro}>
      Please read these Terms of Service carefully before engaging {COMPANY} ("we", "us", "our") for any interior design services or using this website. By submitting an enquiry or entering into a service agreement with us, you agree to be bound by these terms. These Terms are governed by the laws of England and Wales.
    </p>

    <h3>1. About Us</h3>
    <p>{COMPANY} is a professional interior design studio registered in England and Wales.</p>
    <ul>
      <li><strong>Registered address:</strong> {ADDRESS}</li>
      <li><strong>Contact:</strong> {EMAIL}</li>
    </ul>

    <h3>2. Services</h3>
    <p>We provide bespoke interior design services including, but not limited to: residential and commercial interior design, spatial planning, material and furniture sourcing, colour and trend consultancy, and project management. The precise scope of services for each engagement will be agreed in a written Project Proposal and Letter of Appointment.</p>

    <h3>3. Enquiries and Proposals</h3>
    <p>Submitting an enquiry via our website does not constitute a contract. A binding agreement is only formed when:</p>
    <ul>
      <li>We issue a written Project Proposal specifying scope, fees, and programme; and</li>
      <li>You confirm acceptance in writing (including email)</li>
    </ul>
    <p>We reserve the right to decline any enquiry at our sole discretion.</p>

    <h3>4. Fees and Payment</h3>
    <ul>
      <li>Fees are set out in the Project Proposal and may be charged on a fixed-fee, retainer, or time-and-materials basis</li>
      <li>Invoices are payable within <strong>14 days</strong> of issue unless otherwise agreed</li>
      <li>A non-refundable deposit (typically 25–50% of the agreed fee) is required to commence work</li>
      <li>Late payments accrue interest at 8% per annum above the Bank of England base rate under the Late Payment of Commercial Debts (Interest) Act 1998</li>
      <li>All fees are exclusive of VAT (where applicable) and third-party costs (procurement, contractors, survey fees)</li>
    </ul>

    <h3>5. Intellectual Property</h3>
    <ul>
      <li>All design concepts, drawings, specifications, mood boards, and creative work produced by us remain our intellectual property until full payment is received</li>
      <li>Upon receipt of full payment, we grant you a non-exclusive, non-transferable licence to use the deliverables for the agreed project only</li>
      <li>We retain the right to photograph completed projects for our portfolio and marketing purposes, unless otherwise agreed in writing</li>
    </ul>

    <h3>6. Client Responsibilities</h3>
    <p>You agree to:</p>
    <ul>
      <li>Provide accurate information, timely decisions, and access to the property as required</li>
      <li>Obtain all necessary planning consents, building regulations approvals, and landlord permissions</li>
      <li>Inform us of any structural, legal, or environmental constraints affecting the property</li>
      <li>Not engage other interior designers for the same project scope without prior written agreement</li>
    </ul>

    <h3>7. Cancellation and Termination</h3>
    <ul>
      <li>Either party may terminate the agreement with <strong>30 days' written notice</strong></li>
      <li>On termination, you remain liable for all fees for work completed to the termination date, plus any committed third-party costs</li>
      <li>If you cancel before work commences, the deposit is non-refundable</li>
      <li>We may terminate immediately if you breach these Terms or fail to make payment within 30 days of a due date</li>
    </ul>

    <h3>8. Liability</h3>
    <ul>
      <li>We carry Professional Indemnity Insurance and Public Liability Insurance</li>
      <li>Our aggregate liability for any claim arising from our services is limited to the total fees paid by you for the relevant project in the preceding 12 months</li>
      <li>We are not liable for: loss of profit, loss of business, indirect or consequential loss; delays caused by third-party contractors, supply chain disruption, or force majeure events; or decisions made by you contrary to our professional advice</li>
      <li>Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any matter that cannot be lawfully excluded</li>
    </ul>

    <h3>9. Confidentiality</h3>
    <p>Both parties agree to keep confidential any proprietary information disclosed during the engagement and not to disclose it to third parties without prior written consent, except as required by law.</p>

    <h3>10. Website Use</h3>
    <ul>
      <li>This website is provided for informational purposes only</li>
      <li>You must not misuse this website or attempt to gain unauthorised access to our systems</li>
      <li>We make no warranty that the website will be uninterrupted, error-free, or free of viruses</li>
      <li>Links to third-party websites are provided for convenience; we are not responsible for their content</li>
    </ul>

    <h3>11. Governing Law and Disputes</h3>
    <p>These Terms are governed by the laws of <strong>England and Wales</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales. We will always attempt to resolve disputes amicably before pursuing formal legal proceedings.</p>

    <h3>12. Changes to These Terms</h3>
    <p>We may update these Terms from time to time. Updated Terms will be posted on this website with a revised "Last updated" date. Continued use of our services after changes constitutes acceptance.</p>

    <h3>13. Contact</h3>
    <p>For any queries regarding these Terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
  </div>
);

const LegalModal = ({ type, onClose }) => {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={title}>
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.modalEyebrow}>{COMPANY}</span>
            <h2 className={styles.modalTitle}>{title}</h2>
            <p className={styles.modalUpdated}>Last updated: {LAST_UPDATED}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className={styles.modalBody}>
          {isPrivacy ? <PrivacyContent /> : <TermsContent />}
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.footerBtn} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
