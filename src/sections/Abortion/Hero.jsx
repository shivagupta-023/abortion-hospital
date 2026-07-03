import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageCircle, Calendar, ShieldCheck, Scale, Lock, Stethoscope } from "lucide-react";

const trustBadges = [
  { icon: Scale,        label: "MTP Act Legal"      },
  { icon: ShieldCheck,  label: "100% Safe"          },
  { icon: Lock,         label: "Fully Private"      },
  { icon: Stethoscope,  label: "15+ Yrs Expert"     },
];

const stats = [
  { value: "2000+",    label: "Procedures Done"  },
  { value: "24 Wks",  label: "Maximum Care"      },
  { value: "100%",    label: "Confidential"       },
  { value: "Same Day", label: "Consultation"     },
];

export default function AbortionHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(".ab-badge",
        { opacity: 0, y: -16, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08, ease: "back.out(1.5)" }
      )
      .fromTo(".ab-line",
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
        "-=0.1"
      )
      .fromTo(".ab-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(".ab-cta",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "power2.out" },
        "-=0.15"
      )
      .fromTo(".ab-stat",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
        "-=0.1"
      );

      tl.fromTo(".ab-shield-wrap",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        0.3
      );

      gsap.fromTo(".ab-float",
        { opacity: 0, scale: 0.8, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "back.out(1.6)", delay: 0.9 }
      );

      gsap.to(".ab-ring-outer", {
        scale: 1.06, opacity: 0.5, duration: 2.5,
        repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(".ab-ring-inner", {
        scale: 1.04, opacity: 0.7, duration: 2,
        repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 55%, #E0F2FE 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(14,165,233,0.08) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(56,189,248,0.08) 0%, transparent 60%)" }}
      />

      <div className="container-main w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Trust badge pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="ab-badge inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
                  style={{
                    background: "rgba(14,165,233,0.08)",
                    border: "1px solid rgba(14,165,233,0.25)",
                  }}
                >
                  <b.icon className="w-3 h-3" style={{ color: "#0284C7" }} />
                  <span className="text-[10px] font-body font-semibold tracking-wider uppercase" style={{ color: "#0284C7" }}>
                    {b.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Heading */}
            <h1 className="font-display font-semibold leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", color: "#0C1A2E" }}
            >
              <span className="ab-line block">Your Privacy</span>
              <span className="ab-line block">Is</span>
              <span
                className="ab-line block bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9 0%, #38BDF8 60%, #0EA5E9 100%)" }}
              >
                Sacred.
              </span>
            </h1>

            {/* Subline */}
            <p
              className="ab-desc text-base sm:text-lg font-display font-medium mb-3 leading-snug"
              style={{ color: "rgba(12,26,46,0.75)" }}
            >
              Safe & Legal Abortion Care — for Every Woman,{" "}
              <span style={{ color: "#0EA5E9" }}>Every Situation.</span>
            </p>
            <p
              className="ab-desc text-sm font-body leading-relaxed mb-8 max-w-lg"
              style={{ color: "rgba(12,26,46,0.5)" }}
            >
              At Dr. Rupali Mishra's clinic, your information never leaves our walls. We provide
              certified, compassionate abortion care under the Medical Termination of
              Pregnancy Act — from the first trimester through 24 weeks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#contact"
                className="ab-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                  boxShadow: "0 6px 26px rgba(14,165,233,0.35)",
                }}
              >
                <Calendar className="w-4 h-4" />
                Book Private Consultation
              </a>
              <a
                href="https://wa.me/918800905938"
                target="_blank"
                rel="noopener noreferrer"
                className="ab-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(14,165,233,0.08)",
                  border: "1px solid rgba(14,165,233,0.3)",
                  color: "#0284C7",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us Now
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ background: "rgba(14,165,233,0.18)" }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="ab-stat flex flex-col items-center py-4 px-3 text-center"
                  style={{ background: "rgba(255,255,255,0.8)" }}
                >
                  <span className="font-display font-bold text-lg sm:text-xl leading-none mb-1" style={{ color: "#0EA5E9" }}>
                    {s.value}
                  </span>
                  <span className="text-[10px] font-body uppercase tracking-widest" style={{ color: "rgba(12,26,46,0.5)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — SHIELD + DOCTOR ── */}
          <div className="lg:col-span-5 flex items-center justify-center">

            {/* Mobile-only: premium doctor card */}
            <div className="lg:hidden w-full max-w-[300px] sm:max-w-xs mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "3/4", border: "2px solid rgba(14,165,233,0.25)" }}>
                <img src="/doctors/dr-rupali.jpeg" alt="Dr. Rupali Mishra" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(7,21,32,0.88) 100%)" }} />
                <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5">
                  {trustBadges.map((b) => (
                    <div key={b.label} className="inline-flex items-center gap-1 rounded-full px-2 py-1" style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.2)" }}>
                      <b.icon className="w-2.5 h-2.5" style={{ color: "#0284C7" }} />
                      <span className="text-[9px] font-body font-bold" style={{ color: "#0284C7" }}>{b.label}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display font-bold text-white text-lg leading-tight">Dr. Rupali Mishra</p>
                  <p className="text-xs font-body mb-3" style={{ color: "#38BDF8" }}>Founder & Sonologist · 15+ Years</p>
                  <div className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "rgba(14,165,233,0.25)", border: "1px solid rgba(14,165,233,0.4)", backdropFilter: "blur(8px)" }}>
                    <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#38BDF8" }} />
                    <span className="text-[10px] font-body font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>Reg. DL/MTP/86/SED/2020</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop-only: shield visual */}
            <div className="ab-shield-wrap hidden lg:flex relative items-center justify-center" style={{ width: "380px", height: "480px" }}>

              {/* Glow rings */}
              <div
                className="ab-ring-outer absolute rounded-full pointer-events-none"
                style={{
                  width: "360px", height: "360px",
                  border: "1px solid rgba(14,165,233,0.18)",
                  boxShadow: "0 0 60px rgba(14,165,233,0.08)",
                }}
              />
              <div
                className="ab-ring-inner absolute rounded-full pointer-events-none"
                style={{
                  width: "290px", height: "290px",
                  border: "1px solid rgba(14,165,233,0.28)",
                }}
              />

              {/* Shield SVG outline */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 480" fill="none">
                <path
                  d="M190 18 L368 85 L368 280 Q190 462 190 462 Q190 462 12 280 L12 85 Z"
                  stroke="rgba(14,165,233,0.22)"
                  strokeWidth="1.5"
                />
                <path
                  d="M190 36 L350 98 L350 276 Q190 444 190 444 Q190 444 30 276 L30 98 Z"
                  stroke="rgba(14,165,233,0.1)"
                  strokeWidth="1"
                />
              </svg>

              {/* Doctor image */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "220px",
                  height: "300px",
                  clipPath: "polygon(50% 0%, 100% 16%, 100% 70%, 50% 100%, 0% 70%, 0% 16%)",
                }}
              >
                <img
                  src="/doctors/dr-rupali.jpeg"
                  alt="Dr. Rupali Mishra"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 45%, rgba(219,234,254,0.55) 100%)" }}
                />
              </div>

              {/* Floating card — top right */}
              <div
                className="ab-float absolute top-6 right-0 rounded-xl px-4 py-2.5 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.88)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 24px rgba(14,165,233,0.15)",
                }}
              >
                <ShieldCheck className="w-4 h-4 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                <div>
                  <p className="text-[10px] font-body font-bold uppercase tracking-wider" style={{ color: "#0284C7" }}>MTP Act</p>
                  <p className="text-[9px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>Govt. Certified</p>
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div
                className="ab-float absolute bottom-16 left-0 rounded-xl px-4 py-2.5 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.88)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 24px rgba(14,165,233,0.15)",
                }}
              >
                <Lock className="w-4 h-4 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                <div>
                  <p className="text-[10px] font-body font-bold uppercase tracking-wider" style={{ color: "#0284C7" }}>Zero Records</p>
                  <p className="text-[9px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>Shared Outside</p>
                </div>
              </div>

              {/* Floating card — bottom right */}
              <div
                className="ab-float absolute bottom-6 right-2 rounded-xl px-4 py-2.5 flex items-center gap-2"
                style={{
                  background: "rgba(14,165,233,0.1)",
                  border: "1px solid rgba(14,165,233,0.3)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Stethoscope className="w-4 h-4 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                <div>
                  <p className="text-[10px] font-body font-bold uppercase tracking-wider" style={{ color: "#0284C7" }}>Up to 24 Weeks</p>
                  <p className="text-[9px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>Safe Procedure</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
