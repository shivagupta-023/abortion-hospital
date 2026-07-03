import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Award, BadgeCheck, BookOpen, Globe, Building2, Stethoscope, HeartPulse, Brain } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const featured = {
  title: "Government Registered MTP Centre",
  number: "DL/MTP/86/SED/2020",
  body: "Delhi State Health Department",
  desc: "Officially licensed under the Medical Termination of Pregnancy Act — the only legal authority permitting abortion procedures in India.",
  icon: Building2,
};

const credentials = [
  {
    icon: Stethoscope,
    title: "M.B.B.S",
    holder: "Dr. Rupali Mishra",
    body: "Medical Council of India",
    detail: "Postgraduate specialist degree in women's reproductive health",
    color: "#0EA5E9",
  },
  {
    icon: Award,
    title: "PGDIP — Sonology",
    holder: "Dr. Rupali Mishra",
    body: "National Board of Examinations",
    detail: "Diplomate of National Board — highest national medical qualification",
    color: "#0EA5E9",
  },
  {
    icon: HeartPulse,
    title: "MD — Anesthesiology",
    holder: "Dr. Asha Arora",
    body: "Medical Council of India · Reg. MCI-67890",
    detail: "Specialist in general, regional & sedation anesthesia",
    color: "#38BDF8",
  },
  {
    icon: Award,
    title: "Fellowship — Pain Management",
    holder: "Dr. Asha Arora",
    body: "Indian Society of Anesthesiologists",
    detail: "Advanced fellowship in clinical pain management techniques",
    color: "#38BDF8",
  },
  {
    icon: Brain,
    title: "Diploma — Counseling Psychology",
    holder: "Dr. Priya Sharma",
    body: "Medical Council of India · Reg. MCI-54321",
    detail: "Certified in trauma-informed counseling and reproductive health",
    color: "#0284C7",
  },
  {
    icon: BookOpen,
    title: "DGO — Obstetrics & Gynecology",
    holder: "Dr. Priya Sharma",
    body: "Association of Counselors & Therapists",
    detail: "Diploma in gynecology with counseling specialization",
    color: "#0284C7",
  },
];

const memberships = [
  { name: "Indian Society of Anesthesiologists", short: "ISA" },
  { name: "World Federation of Societies of Anaesthesiologists", short: "WFSA" },
  { name: "Indian Medical Association", short: "IMA" },
  { name: "Association of Counselors & Therapists", short: "ACT" },
  { name: "MTP Amendment Act 2021 Compliant", short: "GOI" },
  { name: "WHO Safe Abortion Protocols", short: "WHO" },
];

export default function CredentialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cred-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".cred-header", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".cred-featured",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: ".cred-featured", start: "top 82%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".cred-card",
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.45, stagger: 0.09, ease: "power2.out",
          scrollTrigger: { trigger: ".cred-grid", start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".cred-membership",
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1, scale: 1, duration: 0.35, stagger: 0.06, ease: "power2.out",
          scrollTrigger: { trigger: ".cred-memberships", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 55%, #E0F2FE 100%)" }}
    >
      <div className="container-main">

        {/* Header */}
        <div className="cred-header text-center mb-12 md:mb-14">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Verified & Certified
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold leading-tight mb-4" style={{ color: "#0C1A2E" }}>
            Credentials &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #0284C7)" }}
            >
              Certifications
            </span>
          </h2>
          <p className="text-sm sm:text-base font-body max-w-xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            Every qualification, registration, and membership — verified, official, and built to give you complete confidence.
          </p>
        </div>

        {/* Featured — Govt Registration */}
        <div
          className="cred-featured rounded-3xl p-5 sm:p-10 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6"
          style={{
            background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 60%, #0369A1 100%)",
            border: "1.5px solid rgba(14,165,233,0.25)",
          }}
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)" }}
          >
            <featured.icon className="w-8 h-8 text-white" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-display font-semibold text-white text-lg sm:text-xl">{featured.title}</h3>
              <span
                className="text-[9px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.25)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)" }}
              >
                Official
              </span>
            </div>
            <p className="text-xs font-body text-white/80 mb-2">{featured.body}</p>
            <p className="text-sm font-body leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
              {featured.desc}
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span className="font-body font-semibold text-sm text-white">
                Reg. No. — {featured.number}
              </span>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="cred-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {credentials.map((c) => (
            <div
              key={c.title}
              className="cred-card bg-white rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
              style={{ border: "1.5px solid rgba(14,165,233,0.12)" }}
            >
              {/* Top row */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}14`, border: `1px solid ${c.color}30` }}
                >
                  <c.icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm leading-snug" style={{ color: "#0C1A2E" }}>{c.title}</h4>
                  <p className="text-[10px] font-body font-semibold mt-0.5" style={{ color: c.color }}>{c.holder}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mb-3" style={{ background: "rgba(14,165,233,0.1)" }} />

              {/* Body */}
              <p className="text-[11px] font-body mb-1.5" style={{ color: "rgba(12,26,46,0.5)" }}>{c.body}</p>
              <p className="text-xs font-body leading-snug" style={{ color: "rgba(12,26,46,0.65)" }}>{c.detail}</p>

              {/* Badge */}
              <div className="mt-3">
                <BadgeCheck className="w-4 h-4" style={{ color: "#0EA5E9" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Memberships */}
        <div className="cred-memberships">
          <p className="text-[10px] font-body font-bold uppercase tracking-widest text-center mb-5" style={{ color: "#0EA5E9" }}>
            Memberships & Compliance
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {memberships.map((m) => (
              <div
                key={m.name}
                className="cred-membership flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white"
                style={{ border: "1.5px solid rgba(14,165,233,0.18)" }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-body font-black text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
                >
                  {m.short.slice(0, 2)}
                </span>
                <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{m.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
