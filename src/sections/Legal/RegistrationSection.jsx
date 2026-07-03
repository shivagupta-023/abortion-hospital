import { useState } from "react";
import { Shield, CheckCircle, FileText, Building2, Calendar, Hash, ChevronLeft, ChevronRight } from "lucide-react";

const details = [
  { icon: Hash,      label: "Registration No.",  value: "DL/MTP/86/SED/2020"           },
  { icon: Building2, label: "Registered Under",  value: "MTP Act, 1971 (Amended 2021)" },
  { icon: Calendar,  label: "Valid Since",        value: "2020 – Ongoing (Renewable)"   },
  { icon: FileText,  label: "Authority",          value: "Govt. of NCT of Delhi"         },
];

const compliances = [
  "Medical Termination of Pregnancy Act, 1971",
  "MTP (Amendment) Act, 2021 — upto 24 weeks",
  "Pre-Conception & Pre-Natal Diagnostic Techniques Act",
  "Indian Medical Council Act, 1956",
  "Digital Personal Data Protection Act, 2023",
];

const slideLabels = ["Certificate", "Details", "Compliance"];

export default function RegistrationSection() {
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide((s) => Math.max(0, s - 1));
  const next = () => setSlide((s) => Math.min(2, s + 1));

  return (
    <section id="registration" className="section-padding" style={{ background: "#F8FAFF" }}>
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Government Registration
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-3" style={{ color: "#0C1A2E" }}>
            Clinic Registration Certificate
          </h2>
          <p className="text-sm font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            Aashirwad Health Centre is a government-registered MTP centre verified by the Govt. of NCT of Delhi.
          </p>
        </div>

        {/* ── MOBILE SLIDER (hidden on lg+) ── */}
        <div className="lg:hidden">

          {/* Slide tab pills */}
          <div className="flex gap-2 justify-center mb-5">
            {slideLabels.map((label, i) => (
              <button
                key={label}
                onClick={() => setSlide(i)}
                className="px-4 py-1.5 rounded-full text-xs font-body font-semibold transition-all duration-250"
                style={
                  slide === i
                    ? { background: "linear-gradient(135deg, #0EA5E9, #0284C7)", color: "#fff", boxShadow: "0 4px 14px rgba(14,165,233,0.35)" }
                    : { background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.25)", color: "#0284C7" }
                }
              >
                {label}
              </button>
            ))}
          </div>

          {/* Slider viewport */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-400 ease-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >

              {/* Slide 0 — Certificate image */}
              <div className="flex-shrink-0 w-full px-1">
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ border: "2px solid rgba(14,165,233,0.25)", boxShadow: "0 12px 36px rgba(14,165,233,0.14)" }}
                >
                  <img
                    src="/legal/certificate-of-registration.jpeg"
                    alt="MTP Registration Certificate"
                    className="w-full h-auto object-contain"
                  />
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-2.5 py-1"
                    style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.25)" }}
                  >
                    <Shield className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                    <span className="text-[9px] font-body font-bold uppercase tracking-wider" style={{ color: "#0284C7" }}>Govt. Verified</span>
                  </div>
                </div>
                <p className="text-[10px] font-body text-center mt-2" style={{ color: "rgba(12,26,46,0.35)" }}>
                  * Original available at clinic premises
                </p>
              </div>

              {/* Slide 1 — Registration details */}
              <div className="flex-shrink-0 w-full px-1">
                <div className="grid grid-cols-2 gap-3">
                  {details.map((d) => {
                    const Icon = d.icon;
                    return (
                      <div
                        key={d.label}
                        className="rounded-2xl px-4 py-4"
                        style={{ background: "#fff", border: "1px solid rgba(14,165,233,0.18)", boxShadow: "0 2px 12px rgba(14,165,233,0.07)" }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(14,165,233,0.1)" }}>
                            <Icon className="w-3.5 h-3.5" style={{ color: "#0EA5E9" }} />
                          </div>
                        </div>
                        <p className="text-[9px] font-body uppercase tracking-wider font-semibold mb-1" style={{ color: "rgba(12,26,46,0.4)" }}>{d.label}</p>
                        <p className="text-xs font-body font-semibold leading-snug" style={{ color: "#0C1A2E" }}>{d.value}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Confidentiality note */}
                <div
                  className="mt-4 flex items-start gap-3 rounded-2xl px-4 py-4"
                  style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(56,189,248,0.06))", border: "1px solid rgba(14,165,233,0.2)" }}
                >
                  <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                  <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                    Under Section 7A of the MTP Act, patient identity is strictly confidential.
                  </p>
                </div>
              </div>

              {/* Slide 2 — Compliance laws */}
              <div className="flex-shrink-0 w-full px-1">
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "#fff", border: "1px solid rgba(14,165,233,0.18)", boxShadow: "0 4px 20px rgba(14,165,233,0.08)" }}
                >
                  <p className="text-[10px] font-body font-bold uppercase tracking-widest mb-4" style={{ color: "#0EA5E9" }}>
                    Applicable Laws & Regulations
                  </p>
                  <ul className="space-y-3">
                    {compliances.map((item, i) => (
                      <li key={item} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}
                        >
                          <span className="text-[8px] font-display font-bold" style={{ color: "#0EA5E9" }}>{i + 1}</span>
                        </div>
                        <span className="text-sm font-body leading-snug" style={{ color: "rgba(12,26,46,0.7)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={prev}
              disabled={slide === 0}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: slide === 0 ? "rgba(14,165,233,0.06)" : "rgba(14,165,233,0.12)",
                border: "1px solid rgba(14,165,233,0.2)",
                opacity: slide === 0 ? 0.4 : 1,
              }}
            >
              <ChevronLeft className="w-4 h-4" style={{ color: "#0EA5E9" }} />
            </button>

            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: slide === i ? "24px" : "8px",
                    background: slide === i ? "#0EA5E9" : "rgba(14,165,233,0.25)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={slide === 2}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: slide === 2 ? "rgba(14,165,233,0.06)" : "rgba(14,165,233,0.12)",
                border: "1px solid rgba(14,165,233,0.2)",
                opacity: slide === 2 ? 0.4 : 1,
              }}
            >
              <ChevronRight className="w-4 h-4" style={{ color: "#0EA5E9" }} />
            </button>
          </div>
        </div>

        {/* ── DESKTOP GRID (hidden below lg) ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">

          {/* Certificate image */}
          <div className="flex flex-col gap-2.5 items-center">
            <div
              className="relative rounded-2xl overflow-hidden w-[400px]"
              style={{ border: "2px solid rgba(14,165,233,0.25)", boxShadow: "0 12px 40px rgba(14,165,233,0.14)" }}
            >
              <img
                src="/legal/certificate-of-registration.jpeg"
                alt="MTP Registration Certificate — DL/MTP/86/SED/2020"
                className="w-[400px] h-auto object-contain"
              />
              <div
                className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full px-2.5 py-1"
                style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.25)", boxShadow: "0 2px 10px rgba(14,165,233,0.15)" }}
              >
                <Shield className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                <span className="text-[9px] font-body font-bold uppercase tracking-wider" style={{ color: "#0284C7" }}>Govt. Verified</span>
              </div>
            </div>
            <p className="text-[10px] font-body text-center mt-1" style={{ color: "rgba(12,26,46,0.35)" }}>
              * Original certificate available for inspection at our clinic premises.
            </p>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {details.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.label}
                    className="rounded-2xl px-5 py-4"
                    style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.18)", boxShadow: "0 2px 12px rgba(14,165,233,0.07)" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                      <p className="text-[10px] font-body uppercase tracking-wider font-semibold" style={{ color: "rgba(12,26,46,0.4)" }}>{d.label}</p>
                    </div>
                    <p className="text-sm font-body font-semibold" style={{ color: "#0C1A2E" }}>{d.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl p-6" style={{ background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.15)" }}>
              <p className="text-xs font-body font-bold uppercase tracking-widest mb-4" style={{ color: "#0EA5E9" }}>
                Applicable Laws & Regulations
              </p>
              <ul className="space-y-2.5">
                {compliances.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                    <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="flex items-start gap-3 rounded-2xl px-5 py-4"
              style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(56,189,248,0.06) 100%)", border: "1px solid rgba(14,165,233,0.2)" }}
            >
              <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
              <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                Under Section 7A of the MTP Act, the name and identity of any woman who undergoes medical termination is strictly confidential. No information shall be revealed to any person except as provided under the Act.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
