import { FileText, Ban, Copyright, RefreshCw, Mail } from "lucide-react";

const terms = [
  {
    icon: FileText,
    num: "01",
    title: "Acceptance of Terms",
    body: "By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations of India. If you do not agree with any of these terms, you must not use this website. These terms apply to all visitors, users, and patients who access or use the services of Aashirwad Health Centre.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Permitted Use",
    body: "This website is intended for personal, non-commercial use. You may use the content on this site for personal health information purposes. You may not copy, reproduce, republish, upload, or distribute any part of this website without our prior written permission. All content on this website is protected under Indian copyright law.",
  },
  {
    icon: Ban,
    num: "03",
    title: "Prohibited Activities",
    body: "You may not use this website to: transmit spam, junk mail, or unsolicited messages; impersonate any person or entity; engage in any activity that is unlawful or harmful; attempt to gain unauthorized access to any part of our systems; or collect, store, or use personal data of other users.",
  },
  {
    icon: Copyright,
    num: "04",
    title: "Intellectual Property",
    body: "All content on this website — including but not limited to text, graphics, logos, images, and video — is the property of Aashirwad Health Centre and is protected by Indian and international intellectual property laws. Unauthorized use of our content may result in legal action.",
  },
  {
    icon: FileText,
    num: "05",
    title: "Third-Party Links",
    body: "This website may contain links to third-party websites for your convenience. These links do not signify endorsement of the linked sites. We have no control over the content of those sites and accept no liability for any loss or damage that may arise from your use of them.",
  },
  {
    icon: FileText,
    num: "06",
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Aashirwad Health Centre shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services, including any inaccuracies in the information provided, or any interruption or unavailability of the website.",
  },
  {
    icon: RefreshCw,
    num: "07",
    title: "Changes to These Terms",
    body: "We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated effective date. Your continued use of the website after any changes constitutes acceptance of the revised terms. We recommend reviewing these terms periodically.",
  },
  {
    icon: FileText,
    num: "08",
    title: "Governing Law",
    body: "These terms are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.",
  },
];

export default function TermsOfUse() {
  return (
    <section
      id="terms"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 55%, #E0F2FE 100%)" }}
    >
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Please Read Carefully
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Terms of Use
          </h2>
          <p className="text-sm font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            These terms govern your use of the Aashirwad Health Centre website and services. By using this site, you agree to the following.
          </p>
          <p className="text-[11px] font-body mt-3" style={{ color: "rgba(12,26,46,0.35)" }}>
            Effective Date: July 2025 &nbsp;·&nbsp; Last Updated: July 2025
          </p>
        </div>

        {/* Terms list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {terms.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.num}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.88)", border: "1px solid rgba(14,165,233,0.18)", boxShadow: "0 2px 12px rgba(14,165,233,0.06)" }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="font-display font-black text-2xl leading-none flex-shrink-0 mt-0.5"
                    style={{ color: "rgba(14,165,233,0.25)" }}
                  >
                    {t.num}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-sm mb-2" style={{ color: "#0C1A2E" }}>{t.title}</h3>
                    <p className="text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>{t.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div
          className="mt-10 max-w-3xl mx-auto flex items-start gap-3 rounded-2xl px-5 py-4"
          style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(14,165,233,0.2)" }}
        >
          <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
          <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.6)" }}>
            For questions about these Terms of Use, contact us at{" "}
            <a href="mailto:care@aashirwadhealth.in" className="font-semibold hover:underline" style={{ color: "#0284C7" }}>
              care@aashirwadhealth.in
            </a>{" "}
            or visit us at 35A, Main Suraj Kund Road, Pul Prahladpur, New Delhi – 110044.
          </p>
        </div>

      </div>
    </section>
  );
}
