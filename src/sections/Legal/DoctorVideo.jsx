import { Play, Youtube, Clock, CreditCard, FileSignature, Stethoscope, Users, Lock, Scale } from "lucide-react";

const YOUTUBE_VIDEO_ID = "oYHC4Nlag1Y";

const legalPoints = [
  {
    icon: Clock,
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.09)",
    border: "rgba(14,165,233,0.22)",
    label: "Legal Limit",
    text: "Under Section 3 of the MTP Act, abortion is legal for all women in India up to 24 weeks of pregnancy.",
  },
  {
    icon: CreditCard,
    color: "#0284C7",
    bg: "rgba(2,132,199,0.09)",
    border: "rgba(2,132,199,0.22)",
    label: "ID Proof",
    text: "The patient is required to provide only one form of identification — Aadhar card or a passport.",
  },
  {
    icon: FileSignature,
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.09)",
    border: "rgba(14,165,233,0.22)",
    label: "Consent",
    text: "Only the written consent of the patient is required. Consent of spouse, husband, or parents is not necessary.",
  },
  {
    icon: Stethoscope,
    color: "#0284C7",
    bg: "rgba(2,132,199,0.09)",
    border: "rgba(2,132,199,0.22)",
    label: "Medical Requirements",
    text: "Before admission, the patient must undergo an ultrasound scan and all necessary blood tests.",
  },
  {
    icon: Users,
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.09)",
    border: "rgba(14,165,233,0.22)",
    label: "Minors & Disabled",
    text: "In the case of a minor or a woman with a disability, the written consent of the parents is required.",
  },
  {
    icon: Lock,
    color: "#0284C7",
    bg: "rgba(2,132,199,0.09)",
    border: "rgba(2,132,199,0.22)",
    label: "Privacy & Professionalism",
    text: "Under Section 5 of the MTP Act, a patient's privacy must be protected. Doctors are prohibited from being judgmental or asking leading questions.",
  },
  {
    icon: Scale,
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.09)",
    border: "rgba(14,165,233,0.22)",
    label: "Fundamental Right",
    text: "Access to legal abortion up to 24 weeks is a legal and fundamental right for every woman in India.",
  },
];

export default function DoctorVideo() {
  const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autohide=1`;

  return (
    <section
      id="video"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 55%, #E0F2FE 100%)" }}
    >
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Know Your Rights
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Legal Facts & Doctor's Message
          </h2>
          <p className="text-sm font-body max-w-xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            Every woman deserves to know her rights. Watch Dr. Rupali explain safe, legal abortion care — and read the key facts that protect you under Indian law.
          </p>
        </div>

        {/* Main layout — video + points */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT — YouTube Video (sticky) */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: "2px solid rgba(14,165,233,0.25)",
                boxShadow: "0 24px 60px rgba(14,165,233,0.18)",
                background: "#000",
              }}
            >
              {/* 16:9 embed */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={embedUrl}
                  title="Dr. Rupali Mishra — Aashirwad Health Centre"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 0 }}
                />
              </div>

              {/* Bottom bar */}
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ background: "rgba(255,255,255,0.96)", borderTop: "1px solid rgba(14,165,233,0.15)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
                >
                  <Play className="w-3.5 h-3.5 text-white" style={{ marginLeft: "1px" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-body font-semibold truncate" style={{ color: "#0C1A2E" }}>Dr. Rupali Mishra</p>
                  <p className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.45)" }}>Founder & Sonologist — Aashirwad Health Centre</p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <Youtube className="w-4 h-4" style={{ color: "#FF0000" }} />
                  <span className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.4)" }}>YouTube</span>
                </div>
              </div>
            </div>

            {/* Below video — MTP act badge */}
            <div
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(14,165,233,0.2)" }}
            >
              <Scale className="w-4 h-4" style={{ color: "#0EA5E9" }} />
              <p className="text-xs font-body font-semibold" style={{ color: "#0284C7" }}>
                Medical Termination of Pregnancy Act, 1971 (Amended 2021)
              </p>
            </div>
          </div>

          {/* RIGHT — Legal Points */}
          <div className="flex flex-col gap-3">
            {legalPoints.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={pt.label}
                  className="flex items-start gap-4 rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: pt.bg,
                    border: `1px solid ${pt.border}`,
                    boxShadow: "0 2px 10px rgba(14,165,233,0.06)",
                  }}
                >
                  {/* Number + Icon */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.75)", border: `1px solid ${pt.border}` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: pt.color }} />
                    </div>
                    <span
                      className="font-display font-black text-xs leading-none"
                      style={{ color: pt.color, opacity: 0.4 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-body font-bold uppercase tracking-wider mb-1" style={{ color: pt.color }}>
                      {pt.label}
                    </p>
                    <p className="text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.72)" }}>
                      {pt.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
