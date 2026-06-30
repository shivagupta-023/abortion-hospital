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
  { icon: ShieldCheck, title: "Government Registered",           desc: "Reg. No. DL/MTP/86/SED/2020 — fully licensed MTP facility.",        accent: "#71BBB2" },
  { icon: Scale,       title: "Legal Procedures up to 24 Weeks", desc: "Performed under the Indian MTP Act — safe and fully compliant.",     accent: "#27445D" },
  { icon: Globe,       title: "International Patient Support",    desc: "Dedicated coordinator from first call to safe return home.",          accent: "#71BBB2" },
  { icon: Users,       title: "Experienced Medical Team",         desc: "Specialist doctors serving international patients since 2020.",       accent: "#27445D" },
  { icon: Lock,        title: "Complete Privacy",                 desc: "Discreet consultations — your records are never shared.",            accent: "#71BBB2" },
  { icon: Plane,       title: "End-to-End Travel Assistance",     desc: "Visa letter, airport pickup, stay, meals, drop — all arranged.",     accent: "#27445D" },
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">

        {/* ── Stats strip ──────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-10">
          {stats.map((s) => (
            <div key={s.label} className="ti-stat text-center rounded-2xl py-6 px-4"
              style={{ background: "linear-gradient(135deg,rgba(113,187,178,0.08),rgba(39,68,93,0.05))", border: "1px solid rgba(113,187,178,0.2)" }}>
              <div className="font-display font-bold text-3xl sm:text-4xl text-teal mb-1">
                {s.value}
                <span className="text-mint text-2xl">+</span>
              </div>
              <p className="text-xs font-body text-teal/50 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Heading ───────────────────────────────────── */}
        <div className="text-center mb-7 md:mb-8">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            Trusted Worldwide
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-4">
            Why International Patients Choose Us
          </h2>
          <p className="text-sm sm:text-base font-body text-teal/55 max-w-2xl mx-auto">
            A government-registered facility providing safe, legal, and compassionate care to women from every corner of the globe.
          </p>
        </div>

        {/* ── Feature cards ─────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustFeatures.map((f) => (
            <div key={f.title}
              className="ti-card group rounded-2xl p-6 bg-white border border-teal/8 hover:border-mint/30 hover:shadow-glass transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon + title row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${f.accent}14` }}>
                  <f.icon className="w-5 h-5" style={{ color: f.accent }} />
                </div>
                <h3 className="font-display font-semibold text-teal text-sm sm:text-[15px] leading-snug group-hover:text-mint transition-colors duration-300">
                  {f.title}
                </h3>
              </div>

              {/* Desc */}
              <p className="text-xs sm:text-sm font-body text-teal/55 leading-relaxed pl-14">
                {f.desc}
              </p>

              {/* Bottom accent line */}
              <div className="mt-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg,${f.accent},transparent)` }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
