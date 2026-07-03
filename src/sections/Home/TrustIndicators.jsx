import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Scale, Globe, Users, Lock, Plane } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "500+", label: "International Patients" },
  { value: "25+",  label: "Countries Served"       },
  { value: "24",   label: "Weeks Legal Care"        },
  { value: "2020", label: "Registered Since"        },
];

const trustFeatures = [
  { icon: ShieldCheck, title: "Government Registered",           desc: "Reg. No. DL/MTP/86/SED/2020 — fully licensed MTP facility.",        accent: "#0EA5E9" },
  { icon: Scale,       title: "Legal Procedures up to 24 Weeks", desc: "Performed under the Indian MTP Act — safe and fully compliant.",     accent: "#0284C7" },
  { icon: Globe,       title: "International Patient Support",    desc: "Dedicated coordinator from first call to safe return home.",          accent: "#0EA5E9" },
  { icon: Users,       title: "Experienced Medical Team",         desc: "Specialist doctors serving international patients since 2020.",       accent: "#0284C7" },
  { icon: Lock,        title: "Complete Privacy",                 desc: "Discreet consultations — your records are never shared.",            accent: "#0EA5E9" },
  { icon: Plane,       title: "End-to-End Travel Assistance",     desc: "Visa letter, airport pickup, stay, meals, drop — all arranged.",     accent: "#0284C7" },
];

export default function TrustIndicators() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cfg = { trigger: sectionRef.current, start: "top 74%", toggleActions: "play none none reverse" };
      gsap.fromTo(".ti-stat",    { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", scrollTrigger: cfg });
      gsap.fromTo(".ti-card",    { opacity: 0, y: 32, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.09, ease: "power2.out", scrollTrigger: cfg });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white w-full">
      <div className="container-main">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10">
          {stats.map((s) => (
            <div key={s.label} className="ti-stat text-center rounded-2xl py-6 px-4"
              style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(2,132,199,0.05))", border: "1px solid rgba(14,165,233,0.2)" }}>
              <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-1" style={{ color: "#0C1A2E" }}>
                {s.value}
                <span className="text-2xl" style={{ color: "#0EA5E9" }}>+</span>
              </div>
              <p className="text-xs font-body uppercase tracking-wider" style={{ color: "rgba(12,26,46,0.5)" }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-7 md:mb-8">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Trusted Worldwide
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Why International Patients Choose Us
          </h2>
          <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            A government-registered facility providing safe, legal, and compassionate care to women from every corner of the globe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {trustFeatures.map((f) => (
            <div key={f.title}
              className="ti-card group rounded-2xl p-6 bg-white transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid rgba(14,165,233,0.12)" }}
              onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid rgba(14,165,233,0.3)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(14,165,233,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid rgba(14,165,233,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${f.accent}14` }}>
                  <f.icon className="w-5 h-5" style={{ color: f.accent }} />
                </div>
                <h3 className="font-display font-semibold text-sm sm:text-[15px] leading-snug transition-colors duration-300" style={{ color: "#0C1A2E" }}>
                  {f.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm font-body leading-relaxed pl-14" style={{ color: "rgba(12,26,46,0.55)" }}>
                {f.desc}
              </p>

              <div className="mt-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg,${f.accent},transparent)` }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
