import { AlertTriangle, Info, Stethoscope, Globe } from "lucide-react";

const points = [
  {
    icon: Info,
    title: "For Informational Purposes Only",
    body: "The content on this website — including text, images, videos, and other materials — is intended for general informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified medical professional for any health condition.",
  },
  {
    icon: Stethoscope,
    title: "No Doctor–Patient Relationship",
    body: "Browsing this website, submitting a contact form, or exchanging messages on WhatsApp does not create a formal doctor–patient relationship. A formal relationship is established only when you consult directly with one of our registered doctors at our clinic or through an authorized telemedicine session.",
  },
  {
    icon: Globe,
    title: "International Visitors",
    body: "Medical laws, regulations, and practices vary significantly across countries. The services described on this website are provided under the laws of India (specifically the MTP Act, 1971 as amended). Patients travelling from other countries are responsible for understanding the laws of their home country. Aashirwad Health Centre provides legal care within India only.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Situations",
    body: "This website is not designed for medical emergencies. If you or someone you know is experiencing a medical emergency, please call your local emergency services immediately. Do not rely on this website or any online service for emergency medical guidance.",
  },
];

export default function MedicalDisclaimer() {
  return (
    <section
      id="disclaimer"
      className="section-padding bg-white"
    >
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Important Notice
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Medical Disclaimer
          </h2>
          <p className="text-sm font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            Please read this disclaimer carefully before using any information or services provided through this website.
          </p>
        </div>

        {/* Alert banner */}
        <div
          className="max-w-3xl mx-auto flex items-start gap-4 rounded-2xl px-6 py-5 mb-8"
          style={{ background: "rgba(251,191,36,0.08)", border: "1.5px solid rgba(251,191,36,0.35)" }}
        >
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#D97706" }} />
          <p className="text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.75)" }}>
            <strong style={{ color: "#0C1A2E" }}>Important:</strong> The information on this website does not replace professional medical advice. If you have a medical concern, please consult a qualified healthcare provider before making any decisions about your health.
          </p>
        </div>

        {/* Disclaimer points */}
        <div className="max-w-3xl mx-auto space-y-4">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl p-6"
                style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(14,165,233,0.1)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                  </div>
                  <h3 className="font-display font-semibold text-sm" style={{ color: "#0C1A2E" }}>{p.title}</h3>
                </div>
                <p className="text-sm font-body leading-relaxed pl-11" style={{ color: "rgba(12,26,46,0.65)" }}>{p.body}</p>
              </div>
            );
          })}
        </div>

        {/* Accuracy note */}
        <div
          className="mt-8 max-w-3xl mx-auto rounded-2xl px-6 py-5"
          style={{ background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.18)" }}
        >
          <p className="text-xs font-body leading-relaxed text-center" style={{ color: "rgba(12,26,46,0.5)" }}>
            While we make every effort to keep the information on this website accurate and up to date, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, or suitability of the information. Any reliance you place on such information is strictly at your own risk.
          </p>
        </div>

      </div>
    </section>
  );
}
