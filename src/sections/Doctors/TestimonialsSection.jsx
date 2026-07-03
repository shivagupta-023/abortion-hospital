import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I flew from the UK not knowing what to expect. Dr. Rupali Mishra made me feel like I was talking to a close friend — no judgment, no rush, just complete care. I cannot thank her enough for how safe she made me feel.",
    name: "Sarah M.",
    country: "United Kingdom",
    flag: "🇬🇧",
    doctor: "Dr. Rupali Mishra",
    weeks: "12 weeks",
    rating: 5,
    color: "#0EA5E9",
  },
  {
    quote: "The anesthesia was so smooth, I felt absolutely nothing. Dr. Asha explained every step before starting and checked on me the entire time. I was terrified of pain — she took that fear completely away.",
    name: "Fatima A.",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    doctor: "Dr. Asha Arora",
    weeks: "9 weeks",
    rating: 5,
    color: "#38BDF8",
  },
  {
    quote: "Dr. Priya spoke with me for over an hour before the procedure. She never once made me feel judged. By the time I went in, I felt completely at peace with my decision.",
    name: "Anika B.",
    country: "Bangladesh",
    flag: "🇧🇩",
    doctor: "Dr. Priya Sharma",
    weeks: "7 weeks",
    rating: 5,
    color: "#0284C7",
  },
  {
    quote: "I was 18 weeks and had been turned away from two other clinics. Dr. Rupali Mishra handled everything — the medical board, the paperwork, everything. I never had to worry about anything except recovering.",
    name: "Nadia K.",
    country: "Kazakhstan",
    flag: "🇰🇿",
    doctor: "Dr. Rupali Mishra",
    weeks: "18 weeks",
    rating: 5,
    color: "#0EA5E9",
  },
  {
    quote: "Coming alone from Nigeria, I was scared. But from airport pickup to discharge, everything was perfectly organized. The WhatsApp check-ins even after I flew home — that level of care is rare anywhere in the world.",
    name: "Chioma O.",
    country: "Nigeria",
    flag: "🇳🇬",
    doctor: "Dr. Rupali Mishra",
    weeks: "11 weeks",
    rating: 5,
    color: "#0EA5E9",
  },
  {
    quote: "My husband and I both felt completely at ease from the very first call. The team is professional, warm, and discreet. Highly recommend to anyone who needs this care and doesn't know where to turn.",
    name: "Lena V.",
    country: "Germany",
    flag: "🇩🇪",
    doctor: "Dr. Rupali Mishra",
    weeks: "8 weeks",
    rating: 5,
    color: "#0EA5E9",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className="w-3 h-3" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />
      ))}
    </div>
  );
}

function TestiCard({ t, large }) {
  const initials = t.name.split(" ").map(w => w[0]).join("");

  return (
    <div
      className="testi-card group bg-white rounded-3xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300"
      style={{
        border: "1.5px solid rgba(14,165,233,0.13)",
        boxShadow: "0 2px 20px rgba(2,132,199,0.06)",
      }}
    >
      {/* Top row: stars + quote mark */}
      <div className="flex items-start justify-between">
        <StarRating />
        {/* Decorative large quote */}
        <span
          className="font-display font-black leading-none select-none -mt-1"
          style={{ fontSize: "3.5rem", color: `${t.color}20`, lineHeight: 1 }}
        >
          "
        </span>
      </div>

      {/* Quote */}
      <p
        className={`font-body leading-relaxed flex-1 ${large ? "text-base sm:text-lg" : "text-sm"}`}
        style={{ color: "rgba(12,26,46,0.7)" }}
      >
        {t.quote}
      </p>

      {/* Divider */}
      <div className="h-px" style={{ background: "rgba(14,165,233,0.1)" }} />

      {/* Bottom: avatar + info + tags */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        {/* Avatar + name */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-display font-bold text-white flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
          >
            {initials}
          </div>
          <div>
            <p className="font-display font-semibold text-sm leading-none mb-0.5" style={{ color: "#0C1A2E" }}>{t.name}</p>
            <p className="text-[10px] font-body flex items-center gap-1" style={{ color: "rgba(12,26,46,0.45)" }}>
              <span>{t.flag}</span> {t.country}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className="text-[9px] font-body font-semibold px-2.5 py-1 rounded-full"
            style={{ background: `${t.color}18`, color: t.color, border: `1px solid ${t.color}30` }}
          >
            {t.doctor}
          </span>
          <span
            className="text-[9px] font-body px-2.5 py-1 rounded-full"
            style={{ background: "rgba(2,132,199,0.05)", color: "rgba(2,132,199,0.6)", border: "1px solid rgba(2,132,199,0.12)" }}
          >
            {t.weeks}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testi-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".testi-header", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".testi-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".testi-grid", start: "top 78%", toggleActions: "play none none reverse" },
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
        <div className="testi-header text-center mb-12 md:mb-14">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Patient Stories
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold leading-tight mb-4" style={{ color: "#0C1A2E" }}>
            Real Words from{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #0284C7)" }}
            >
              Real Patients.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-body max-w-xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            Shared with full consent, from patients across 25+ countries who trusted us with their care.
          </p>
        </div>

        {/* Grid — masonry-style 3 col */}
        <div className="testi-grid columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <div key={t.name} className="break-inside-avoid">
              <TestiCard t={t} large={i === 0} />
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div
          className="mt-10 rounded-2xl px-6 py-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          style={{ background: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(14,165,233,0.15)", backdropFilter: "blur(8px)" }}
        >
          {[
            { value: "25+", label: "Countries" },
            { value: "15,000+", label: "Patients Treated" },
            { value: "4.9 ★", label: "Average Rating" },
            { value: "100%", label: "Confidential" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-xl sm:text-2xl leading-none mb-1" style={{ color: "#0C1A2E" }}>{s.value}</p>
              <p className="text-[10px] font-body uppercase tracking-wider" style={{ color: "rgba(12,26,46,0.45)" }}>{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] font-body mt-5" style={{ color: "rgba(15,34,51,0.3)" }}>
          All testimonials shared with patient consent. Names changed for privacy.
        </p>

      </div>
    </section>
  );
}
