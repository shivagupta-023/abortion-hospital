import { useState } from "react";
import { Lock, FileText, AlertTriangle, Database, Share2, Cookie, Mail, ShieldCheck, Info, Stethoscope, Globe } from "lucide-react";

const privacyClauses = [
  { icon: Database,   title: "Information We Collect",          body: "When you contact us, book a consultation, or submit a form, we may collect: your name, email address, phone number, country of residence, and your message. We do not collect sensitive medical information through this website — that is handled only in person or through a secure channel with your doctor." },
  { icon: Lock,       title: "How We Protect Your Data",        body: "All data submitted through our website is encrypted using industry-standard SSL/TLS protocols. Patient records are stored in a secure, access-controlled system. Only your treating physician and authorised clinic staff may access your records. We are fully compliant with the Digital Personal Data Protection (DPDP) Act, 2023 of India." },
  { icon: Share2,     title: "Data Sharing Policy",             body: "We do not sell, rent, or share your personal information with any third party for marketing or commercial purposes. Your data may be shared only if: (1) you have given explicit written consent, (2) it is required by a court of law, or (3) it is necessary to protect your life in an emergency medical situation." },
  { icon: Cookie,     title: "Cookies & Analytics",             body: "Our website uses minimal cookies to improve your browsing experience. We use anonymized analytics data (page views, visit duration). We do not use cookies to track individual users or build personal profiles. You may disable cookies in your browser settings at any time." },
  { icon: Mail,       title: "Communication & WhatsApp",        body: "When you message us via WhatsApp, phone, or email, the conversation is treated as confidential. We do not store or share WhatsApp conversations with third parties. Emails are retained for a minimum of 2 years for medical record purposes and then securely deleted." },
  { icon: ShieldCheck,title: "Your Rights Under DPDP Act 2023", body: "You have the right to: access the personal data we hold about you, correct inaccurate data, request deletion of your data (subject to medical record retention laws), and withdraw consent for processing at any time. To exercise any of these rights, contact us at care@aashirwadhealth.in." },
];

const disclaimerPoints = [
  { icon: Info,          title: "For Informational Purposes Only",  body: "The content on this website is intended for general informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified medical professional for any health condition." },
  { icon: Stethoscope,   title: "No Doctor–Patient Relationship",   body: "Browsing this website, submitting a contact form, or exchanging messages on WhatsApp does not create a formal doctor–patient relationship. A formal relationship is established only when you consult directly with one of our registered doctors at our clinic or through an authorized telemedicine session." },
  { icon: Globe,         title: "International Visitors",            body: "Medical laws vary significantly across countries. The services described on this website are provided under the laws of India (MTP Act, 1971 as amended). Patients travelling from other countries are responsible for understanding the laws of their home country." },
  { icon: AlertTriangle, title: "Emergency Situations",              body: "This website is not designed for medical emergencies. If you or someone you know is experiencing a medical emergency, please call your local emergency services immediately. Do not rely on this website for emergency medical guidance." },
];

const terms = [
  { num: "01", title: "Acceptance of Terms",    body: "By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations of India. If you do not agree with any of these terms, you must not use this website." },
  { num: "02", title: "Permitted Use",           body: "This website is intended for personal, non-commercial use. You may not copy, reproduce, republish, upload, or distribute any part of this website without our prior written permission. All content is protected under Indian copyright law." },
  { num: "03", title: "Prohibited Activities",  body: "You may not use this website to: transmit spam or unsolicited messages; impersonate any person or entity; engage in unlawful activities; attempt to gain unauthorized access to our systems; or collect personal data of other users." },
  { num: "04", title: "Intellectual Property",  body: "All content on this website — including text, graphics, logos, images, and video — is the property of Aashirwad Health Centre and is protected by Indian and international intellectual property laws." },
  { num: "05", title: "Limitation of Liability",body: "To the fullest extent permitted by law, Aashirwad Health Centre shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services." },
  { num: "06", title: "Changes to These Terms", body: "We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated effective date. Your continued use of the website after any changes constitutes acceptance of the revised terms." },
  { num: "07", title: "Governing Law",           body: "These terms are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India." },
];

const tabs = [
  { id: "privacy",    icon: Lock,          label: "Privacy Policy",    meta: "DPDP Act 2023 · Effective July 2025"      },
  { id: "disclaimer", icon: AlertTriangle, label: "Medical Disclaimer", meta: "Important — Please Read"                  },
  { id: "terms",      icon: FileText,      label: "Terms of Use",       meta: "Effective July 2025 · Governed by India"  },
];

function PrivacyContent() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {privacyClauses.map((c, i) => {
        const Icon = c.icon;
        return (
          <div key={c.title} className="rounded-2xl p-4 sm:p-6" style={{ background: "#fff", border: "1px solid rgba(14,165,233,0.15)", boxShadow: "0 2px 12px rgba(14,165,233,0.06)" }}>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,233,0.1)" }}>
                <Icon className="w-3.5 h-3.5" style={{ color: "#0EA5E9" }} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-body font-bold uppercase tracking-widest" style={{ color: "rgba(14,165,233,0.5)" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display font-semibold text-xs sm:text-sm" style={{ color: "#0C1A2E" }}>{c.title}</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-body leading-relaxed sm:pl-10" style={{ color: "rgba(12,26,46,0.65)" }}>{c.body}</p>
          </div>
        );
      })}
      <div className="flex items-start gap-3 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4" style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.18)" }}>
        <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
        <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.6)" }}>
          For privacy-related questions, contact{" "}
          <a href="mailto:care@aashirwadhealth.in" className="font-semibold hover:underline" style={{ color: "#0284C7" }}>care@aashirwadhealth.in</a>. We respond within 72 hours.
        </p>
      </div>
    </div>
  );
}

function DisclaimerContent() {
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-start gap-3 rounded-2xl px-4 py-4 sm:px-6 sm:py-5" style={{ background: "rgba(251,191,36,0.08)", border: "1.5px solid rgba(251,191,36,0.35)" }}>
        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: "#D97706" }} />
        <p className="text-xs sm:text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.75)" }}>
          <strong style={{ color: "#0C1A2E" }}>Important:</strong> The information on this website does not replace professional medical advice. Consult a qualified healthcare provider before making any health decisions.
        </p>
      </div>
      {disclaimerPoints.map((p) => {
        const Icon = p.icon;
        return (
          <div key={p.title} className="rounded-2xl p-4 sm:p-6" style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)" }}>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,233,0.1)" }}>
                <Icon className="w-3.5 h-3.5" style={{ color: "#0EA5E9" }} />
              </div>
              <h3 className="font-display font-semibold text-xs sm:text-sm" style={{ color: "#0C1A2E" }}>{p.title}</h3>
            </div>
            <p className="text-xs sm:text-sm font-body leading-relaxed sm:pl-10" style={{ color: "rgba(12,26,46,0.65)" }}>{p.body}</p>
          </div>
        );
      })}
      <div className="rounded-2xl px-4 py-4 sm:px-6 sm:py-5" style={{ background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.18)" }}>
        <p className="text-xs font-body leading-relaxed text-center" style={{ color: "rgba(12,26,46,0.5)" }}>
          While we make every effort to keep information accurate, we make no warranties about the completeness or suitability of the information on this site. Any reliance is strictly at your own risk.
        </p>
      </div>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {terms.map((t) => (
        <div key={t.num} className="rounded-2xl p-4 sm:p-6" style={{ background: "#fff", border: "1px solid rgba(14,165,233,0.18)", boxShadow: "0 2px 12px rgba(14,165,233,0.06)" }}>
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="font-display font-black text-xl sm:text-2xl leading-none flex-shrink-0 mt-0.5" style={{ color: "rgba(14,165,233,0.22)" }}>{t.num}</span>
            <div>
              <h3 className="font-display font-semibold text-xs sm:text-sm mb-1.5" style={{ color: "#0C1A2E" }}>{t.title}</h3>
              <p className="text-xs sm:text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>{t.body}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-start gap-3 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4" style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)" }}>
        <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
        <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.6)" }}>
          Questions? Contact{" "}
          <a href="mailto:care@aashirwadhealth.in" className="font-semibold hover:underline" style={{ color: "#0284C7" }}>care@aashirwadhealth.in</a>{" "}
          or visit 35A, Suraj Kund Road, Pul Prahladpur, New Delhi – 110044.
        </p>
      </div>
    </div>
  );
}

const contentMap = { privacy: <PrivacyContent />, disclaimer: <DisclaimerContent />, terms: <TermsContent /> };

export default function LegalTabs() {
  const [active, setActive] = useState("privacy");
  const activeTab = tabs.find((t) => t.id === active);

  return (
    <section id="legal-docs" className="section-padding" style={{ background: "#F8FAFF" }}>
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Legal Documents
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-3" style={{ color: "#0C1A2E" }}>
            Policies & Disclaimers
          </h2>
          <p className="text-sm font-body max-w-xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            Select a document below to read our full policies.
          </p>
        </div>

        {/* ── TAB BAR — single row, scroll on mobile ── */}
        <div
          className="flex flex-row gap-2 mb-6 sm:mb-8 sm:justify-center"
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "4px",
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-2xl transition-all duration-300"
                style={
                  isActive
                    ? { background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 6px 20px rgba(14,165,233,0.35)", color: "#fff" }
                    : { background: "rgba(255,255,255,0.88)", border: "1px solid rgba(14,165,233,0.2)", color: "#0284C7", boxShadow: "0 2px 10px rgba(14,165,233,0.08)" }
                }
              >
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.2)" : "rgba(14,165,233,0.1)",
                    border: isActive ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(14,165,233,0.18)",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: isActive ? "#fff" : "#0EA5E9" }} />
                </div>
                <span className="text-xs sm:text-sm font-body font-semibold whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active tab meta line */}
        {activeTab && (
          <div className="max-w-3xl mx-auto mb-5 sm:mb-6 flex items-center gap-2 px-1">
            <div className="h-px flex-1" style={{ background: "rgba(14,165,233,0.18)" }} />
            <span className="text-[9px] sm:text-[10px] font-body font-semibold uppercase tracking-widest px-2 text-center" style={{ color: "rgba(14,165,233,0.6)" }}>
              {activeTab.meta}
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(14,165,233,0.18)" }} />
          </div>
        )}

        {/* Content panel */}
        <div className="max-w-3xl mx-auto">
          {contentMap[active]}
        </div>

      </div>
    </section>
  );
}
