import { ShieldCheck, Lock, UserCheck, Scale, Heart, AlertCircle } from "lucide-react";

const rights = [
  {
    icon: Lock,
    title: "Right to Confidentiality",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
    border: "rgba(14,165,233,0.2)",
    points: [
      "Your name, identity, and medical details are protected by law under Section 7A of the MTP Act.",
      "No information will be disclosed to any third party, family member, or authority without your written consent.",
      "All records are stored in an encrypted, secure system and access is restricted to your treating doctor only.",
    ],
  },
  {
    icon: UserCheck,
    title: "Right to Safe & Legal Care",
    color: "#0284C7",
    bg: "rgba(2,132,199,0.08)",
    border: "rgba(2,132,199,0.2)",
    points: [
      "Every patient has the right to undergo a safe, legal medical termination of pregnancy as per the MTP Act, 1971 (Amended 2021).",
      "You do not need permission from a spouse, partner, or family member. The decision is entirely yours.",
      "Procedures are performed only by registered medical practitioners in a government-approved facility.",
    ],
  },
  {
    icon: Heart,
    title: "Right to Non-Judgmental Care",
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
    points: [
      "You will not be questioned about your reasons for choosing a termination.",
      "Our staff are trained to provide compassionate, respectful, and judgment-free care at every step.",
      "Emotional support and counseling are available before, during, and after your procedure.",
    ],
  },
  {
    icon: Scale,
    title: "Right to Informed Consent",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
    border: "rgba(14,165,233,0.2)",
    points: [
      "You will receive complete information about the procedure, risks, and alternatives before consenting.",
      "You have the right to ask questions and receive clear answers from your doctor.",
      "No procedure will be performed without your voluntary, written informed consent.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Right to Refuse or Withdraw",
    color: "#0284C7",
    bg: "rgba(2,132,199,0.08)",
    border: "rgba(2,132,199,0.2)",
    points: [
      "You may withdraw your consent at any point before the procedure begins.",
      "You have the right to a second opinion from any other registered medical practitioner.",
      "Refusing a procedure will never affect the quality of care or support you receive from our team.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Right to Police-Free Process",
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
    points: [
      "A legal termination of pregnancy does NOT require police reporting or any criminal investigation.",
      "Medical staff are not obligated to report a consenting adult's termination to law enforcement.",
      "You are protected under Indian law throughout the entire process.",
    ],
  },
];

export default function PatientRights() {
  return (
    <section
      id="rights"
      className="section-padding bg-white"
    >
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Under the MTP Act, India
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Your Rights as a Patient
          </h2>
          <p className="text-sm font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            You are protected by law. Every patient who walks into Aashirwad Health Centre has these rights — and we uphold them without exception.
          </p>
        </div>

        {/* Rights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {rights.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-2xl p-6"
                style={{ background: r.bg, border: `1px solid ${r.border}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${r.border}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-xs sm:text-sm leading-snug" style={{ color: "#0C1A2E" }}>
                    {r.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {r.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: r.color }} />
                      <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>{pt}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* MTP Act reference */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-start gap-4 rounded-2xl px-6 py-5"
          style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.07) 0%, rgba(56,189,248,0.05) 100%)", border: "1px solid rgba(14,165,233,0.2)" }}
        >
          <ShieldCheck className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
          <div>
            <p className="text-xs font-body font-bold uppercase tracking-widest mb-1.5" style={{ color: "#0284C7" }}>
              Legal Reference
            </p>
            <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
              The Medical Termination of Pregnancy Act, 1971 (as amended in 2021) permits termination of pregnancy by a registered medical practitioner up to 20 weeks, and up to 24 weeks for special categories of women as defined in MTP Rules. Aashirwad Health Centre is authorized under this Act, Registration No. <strong style={{ color: "#0C1A2E" }}>DL/MTP/86/SED/2020</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
