import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Shield, Lock, FileText, Scale, UserCheck,
  CheckCircle, ShieldCheck, ArrowRight, Video, ChevronDown, Award,
} from "lucide-react";

const pills = [
  { icon: ShieldCheck, text: "Govt. Registered · DL/MTP/86/SED/2020" },
  { icon: Lock,        text: "DPDP Act 2023 Compliant"                },
  { icon: Scale,       text: "MTP Act, 1971 — Amended 2021"           },
];

const highlights = [
  { icon: Shield,   title: "100%",          sub: "Confidential"         },
  { icon: Scale,    title: "24 Weeks",      sub: "Legal Limit in India" },
  { icon: CheckCircle, title: "No Consent", sub: "of Spouse Required"   },
];

const sections = [
  { icon: ShieldCheck, label: "Registration Certificate", anchor: "#registration" },
  { icon: Video,       label: "Legal Facts & Video",      anchor: "#video"        },
  { icon: UserCheck,   label: "Patient Rights",           anchor: "#rights"       },
  { icon: FileText,    label: "Policies & Terms",         anchor: "#legal-docs"   },
];

export default function LegalHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo(".lh-pill",
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }
      )
      .fromTo(".lh-h1",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, "-=0.15"
      )
      .fromTo(".lh-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.3"
      )
      .fromTo(".lh-cta",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.25"
      )
      .fromTo(".lh-right-card",
        { opacity: 0, x: 40, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.65, ease: "power3.out" }, "-=0.55"
      )
      .fromTo(".lh-float",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.3"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (anchor) => {
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 60%, #E0F2FE 100%)" }}
    >

      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Big faded scale */}
        <Scale
          className="absolute"
          style={{
            width: 600, height: 600,
            right: -80, top: "50%", transform: "translateY(-50%)",
            color: "#0EA5E9", opacity: 0.035, strokeWidth: 0.6,
          }}
        />
        {/* Glow top-left */}
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: 550, height: 550, background: "radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 65%)", filter: "blur(10px)" }} />
        {/* Glow bottom-right */}
        <div style={{ position: "absolute", bottom: "-5%", right: "20%", width: 400, height: 400, background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 65%)" }} />
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.14) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
          opacity: 0.6,
        }} />
      </div>

      <div className="container-main w-full pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">

            {/* Pills row */}
            <div className="flex flex-wrap gap-2">
              {pills.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.text}
                    className="lh-pill inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5"
                    style={{
                      background: "rgba(255,255,255,0.75)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(14,165,233,0.28)",
                      boxShadow: "0 2px 12px rgba(14,165,233,0.1)",
                    }}
                  >
                    <Icon className="w-3 h-3 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                    <span className="text-[10px] font-body font-semibold" style={{ color: "#0284C7" }}>{p.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Headline */}
            <h1
              className="lh-h1 font-display font-semibold leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 7vw, 4rem)", color: "#0C1A2E" }}
            >
              Your Rights.
              <br />
              Your Privacy.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9 0%, #38BDF8 100%)" }}
              >
                Fully Protected.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="lh-sub text-sm sm:text-base font-body leading-relaxed max-w-md mx-auto lg:mx-0"
              style={{ color: "rgba(12,26,46,0.58)" }}
            >
              Aashirwad Health Centre is a government-registered MTP clinic. Every patient is protected by Indian law — your identity, your decision, and your dignity are completely confidential.
            </p>

            {/* Highlight stats row */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.title}
                    className="lh-cta flex items-center gap-3 rounded-2xl px-4 py-3"
                    style={{
                      background: "rgba(255,255,255,0.72)",
                      border: "1px solid rgba(14,165,233,0.22)",
                      boxShadow: "0 2px 14px rgba(14,165,233,0.08)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(14,165,233,0.12)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm leading-none mb-0.5" style={{ color: "#0C1A2E" }}>{h.title}</p>
                      <p className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>{h.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="lh-cta flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => scrollTo("#registration")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                  boxShadow: "0 6px 22px rgba(14,165,233,0.35)",
                }}
              >
                <Shield className="w-4 h-4" />
                View Registration
              </button>
              <button
                onClick={() => scrollTo("#rights")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(14,165,233,0.3)",
                  color: "#0284C7",
                }}
              >
                Patient Rights
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* ── RIGHT — stat visual ── */}
          <div className="lh-right-card relative">

            {/* Registration number strip — top */}
            <div
              className="lh-float flex items-center justify-between gap-3 rounded-2xl px-5 py-3.5 mb-4"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                boxShadow: "0 8px 28px rgba(14,165,233,0.35)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-body font-semibold uppercase tracking-widest text-white/60">Registration No.</p>
                  <p className="font-display font-bold text-sm text-white tracking-wider">DL/MTP/86/SED/2020</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full px-3 py-1" style={{ background: "rgba(255,255,255,0.18)" }}>
                <CheckCircle className="w-3 h-3 text-white" />
                <span className="text-[10px] font-body font-bold text-white">Verified</span>
              </div>
            </div>

            {/* 2×2 stat grid */}
            <div className="grid grid-cols-2 gap-4">

              {/* Stat 1 */}
              <div
                className="lh-float rounded-3xl p-6 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(14,165,233,0.22)",
                  boxShadow: "0 8px 32px rgba(14,165,233,0.1)",
                }}
              >
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-black text-3xl leading-none mb-1" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>24W</p>
                  <p className="text-xs font-body font-semibold" style={{ color: "#0C1A2E" }}>Legal Limit</p>
                  <p className="text-[10px] font-body mt-0.5" style={{ color: "rgba(12,26,46,0.45)" }}>Under MTP Act, India</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div
                className="lh-float rounded-3xl p-6 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(14,165,233,0.22)",
                  boxShadow: "0 8px 32px rgba(14,165,233,0.1)",
                }}
              >
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-black text-3xl leading-none mb-1" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>100%</p>
                  <p className="text-xs font-body font-semibold" style={{ color: "#0C1A2E" }}>Confidential</p>
                  <p className="text-[10px] font-body mt-0.5" style={{ color: "rgba(12,26,46,0.45)" }}>Section 5, MTP Act</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div
                className="lh-float rounded-3xl p-6 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(14,165,233,0.22)",
                  boxShadow: "0 8px 32px rgba(14,165,233,0.1)",
                }}
              >
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-black text-3xl leading-none mb-1" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Zero</p>
                  <p className="text-xs font-body font-semibold" style={{ color: "#0C1A2E" }}>Spouse Consent</p>
                  <p className="text-[10px] font-body mt-0.5" style={{ color: "rgba(12,26,46,0.45)" }}>Only patient's consent</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div
                className="lh-float rounded-3xl p-6 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(14,165,233,0.22)",
                  boxShadow: "0 8px 32px rgba(14,165,233,0.1)",
                }}
              >
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-black text-3xl leading-none mb-1" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>1 ID</p>
                  <p className="text-xs font-body font-semibold" style={{ color: "#0C1A2E" }}>Only Required</p>
                  <p className="text-[10px] font-body mt-0.5" style={{ color: "rgba(12,26,46,0.45)" }}>Aadhar or Passport</p>
                </div>
              </div>

            </div>

            {/* Bottom note */}
            <div
              className="lh-float mt-4 flex items-center justify-center gap-2 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(14,165,233,0.18)" }}
            >
              <CheckCircle className="w-3.5 h-3.5" style={{ color: "#0EA5E9" }} />
              <p className="text-[10px] font-body font-semibold" style={{ color: "rgba(12,26,46,0.55)" }}>
                Fundamental right for every woman in India
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <p className="text-[9px] font-body uppercase tracking-[0.2em]" style={{ color: "rgba(12,26,46,0.3)" }}>Scroll</p>
        <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: "rgba(14,165,233,0.4)" }} />
      </div>

    </section>
  );
}
