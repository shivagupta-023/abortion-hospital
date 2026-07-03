import { Lock, Database, Share2, Cookie, Mail, ShieldCheck } from "lucide-react";

const clauses = [
  {
    icon: Database,
    title: "Information We Collect",
    body: `When you contact us, book a consultation, or submit a form on our website, we may collect the following information: your name, email address, phone number, country of residence, and the message you send us. We do not collect sensitive medical information through this website — that is handled only in person or over a secure channel with your doctor.`,
  },
  {
    icon: Lock,
    title: "How We Protect Your Data",
    body: `All data submitted through our website is encrypted using industry-standard SSL/TLS protocols. Patient medical records are stored in a secure, access-controlled system. Only your treating physician and authorised clinic staff may access your records. We are fully compliant with the Digital Personal Data Protection (DPDP) Act, 2023 of India.`,
  },
  {
    icon: Share2,
    title: "Data Sharing Policy",
    body: `We do not sell, rent, or share your personal information with any third party for marketing or commercial purposes. Your data may be shared only if: (1) you have given explicit written consent, (2) it is required by a court of law under a valid legal order, or (3) it is necessary to protect your life in an emergency medical situation.`,
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    body: `Our website uses minimal cookies to improve your browsing experience and understand how visitors use our site. We use anonymized analytics data (such as page views and visit duration). We do not use cookies to track individual users or build personal profiles. You may disable cookies in your browser settings at any time without affecting your ability to use this website.`,
  },
  {
    icon: Mail,
    title: "Communication & WhatsApp",
    body: `When you message us via WhatsApp, phone, or email, the conversation is treated as confidential. We do not store or share WhatsApp conversations with third parties. Emails sent to our clinic are retained for a minimum of 2 years for medical record purposes and then securely deleted. You may request deletion of your data at any time by writing to us.`,
  },
  {
    icon: ShieldCheck,
    title: "Your Rights Under DPDP Act 2023",
    body: `Under the Digital Personal Data Protection Act, 2023, you have the right to: access the personal data we hold about you, correct inaccurate or incomplete data, request deletion of your data (subject to medical record retention laws), and withdraw consent for processing at any time. To exercise any of these rights, contact us at care@aashirwadhealth.in.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <section
      id="privacy"
      className="section-padding"
      style={{ background: "#F8FAFF" }}
    >
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            DPDP Act 2023 Compliant
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Privacy Policy
          </h2>
          <p className="text-sm font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            We are deeply committed to protecting your privacy. This policy explains exactly what we collect, why we collect it, and how it is protected.
          </p>
          <p className="text-[11px] font-body mt-3" style={{ color: "rgba(12,26,46,0.35)" }}>
            Effective Date: July 2025 &nbsp;·&nbsp; Last Updated: July 2025
          </p>
        </div>

        {/* Clauses */}
        <div className="max-w-3xl mx-auto space-y-5">
          {clauses.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid rgba(14,165,233,0.15)", boxShadow: "0 2px 12px rgba(14,165,233,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(14,165,233,0.1)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-body font-bold uppercase tracking-widest" style={{ color: "rgba(14,165,233,0.5)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display font-semibold text-sm" style={{ color: "#0C1A2E" }}>{c.title}</h3>
                  </div>
                </div>
                <p className="text-sm font-body leading-relaxed pl-11" style={{ color: "rgba(12,26,46,0.65)" }}>{c.body}</p>
              </div>
            );
          })}
        </div>

        {/* Contact for privacy */}
        <div
          className="mt-10 max-w-3xl mx-auto flex items-start gap-3 rounded-2xl px-5 py-4"
          style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.18)" }}
        >
          <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
          <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.6)" }}>
            For any privacy-related questions, data requests, or concerns, contact our Privacy Officer at{" "}
            <a href="mailto:care@aashirwadhealth.in" className="font-semibold hover:underline" style={{ color: "#0284C7" }}>
              care@aashirwadhealth.in
            </a>. We will respond within 72 hours.
          </p>
        </div>

      </div>
    </section>
  );
}
