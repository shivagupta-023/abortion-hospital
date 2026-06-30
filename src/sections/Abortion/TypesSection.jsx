import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Calendar, Pill, Scissors, HeartPulse } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const types = [
  {
    weeks: "Upto 9 Weeks",
    weekNum: "≤ 9W",
    label: "Medical Abortion",
    method: "Abortion Pill (MTP Kit)",
    icon: Pill,
    accent: "#71BBB2",
    accentDim: "rgba(113,187,178,0.1)",
    accentBorder: "rgba(113,187,178,0.25)",
    points: [
      "Non-surgical — no operation needed",
      "Taken as pills under doctor supervision",
      "Same-day prescription available",
      "No anesthesia or hospital stay",
      "95–98% effective success rate",
      "Private & discreet procedure",
    ],
  },
  {
    weeks: "9 to 20 Weeks",
    weekNum: "9–20W",
    label: "Surgical Abortion",
    method: "MVA / D&C / D&E",
    icon: Scissors,
    accent: "#27445D",
    accentDim: "rgba(39,68,93,0.08)",
    accentBorder: "rgba(39,68,93,0.2)",
    points: [
      "Safe in-clinic procedure (15–30 mins)",
      "Performed under mild sedation or local",
      "No overnight hospital stay required",
      "Same-day discharge in most cases",
      "Conducted by certified MTP surgeon",
      "Full privacy — no external records",
    ],
    featured: true,
  },
  {
    weeks: "20 to 24 Weeks",
    weekNum: "20–24W",
    label: "Late Term Abortion",
    method: "Medical Board Approved",
    icon: HeartPulse,
    accent: "#5ba3a0",
    accentDim: "rgba(91,163,160,0.08)",
    accentBorder: "rgba(91,163,160,0.22)",
    points: [
      "Legal under MTP (Amendment) Act 2021",
      "We handle the Medical Board process",
      "For fetal anomaly or health risk cases",
      "Senior specialist team involved",
      "Inpatient procedure with full care",
      "Emotional & legal support provided",
    ],
  },
];

export default function TypesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Single simple entrance — no heavy animation
      gsap.fromTo(".type-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.55, stagger: 0.12, ease: "power2.out",
          scrollTrigger: {
            trigger: ".types-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(".types-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: {
            trigger: ".types-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-main">

        {/* Header */}
        <div className="types-header text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            Our Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold text-teal leading-tight mb-4">
            Which Option Is Right for You?
          </h2>
          <p className="text-sm sm:text-base font-body max-w-xl mx-auto" style={{ color: "rgba(15,34,51,0.5)" }}>
            The right method depends on how many weeks pregnant you are. All procedures are legal, safe, and completely confidential.
          </p>
        </div>

        {/* Cards */}
        <div className="types-grid grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {types.map((t) => (
            <div
              key={t.label}
              className="type-card relative rounded-3xl p-7 flex flex-col transition-shadow duration-300 hover:shadow-xl"
              style={{
                border: `1.5px solid ${t.accentBorder}`,
                background: t.featured
                  ? `linear-gradient(145deg, ${t.accentDim}, rgba(255,255,255,0))`
                  : "white",
              }}
            >
              {t.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-body font-bold uppercase tracking-widest text-white"
                  style={{ background: t.accent }}
                >
                  Most Common
                </div>
              )}

              {/* Week badge */}
              <div
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 mb-5 self-start"
                style={{ background: t.accentDim, border: `1px solid ${t.accentBorder}` }}
              >
                <t.icon className="w-4 h-4 flex-shrink-0" style={{ color: t.accent }} />
                <span className="font-display font-bold text-sm" style={{ color: t.accent }}>
                  {t.weekNum}
                </span>
                <span className="text-xs font-body" style={{ color: `${t.accent}99` }}>
                  {t.weeks}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-teal text-xl mb-1">
                {t.label}
              </h3>
              <p
                className="text-[11px] font-body font-semibold uppercase tracking-widest mb-5 pb-5"
                style={{
                  color: t.accent,
                  borderBottom: `1px solid ${t.accentBorder}`,
                }}
              >
                {t.method}
              </p>

              {/* Points */}
              <ul className="space-y-3 flex-1 mb-7">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                      style={{ color: t.accent }}
                    />
                    <span className="text-[13px] font-body leading-snug" style={{ color: "rgba(15,34,51,0.65)" }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/911141590000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-body font-semibold transition-all duration-200 hover:opacity-90"
                style={{
                  background: t.featured ? t.accent : `${t.accent}90`,
                  color: "white",
                  border: `1px solid ${t.accentBorder}`,
                }}
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Consultation
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs font-body mt-8" style={{ color: "rgba(15,34,51,0.35)" }}>
          Not sure how many weeks you are?{" "}
          <a
            href="https://wa.me/911141590000"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-70 transition-opacity"
            style={{ color: "#71BBB2" }}
          >
            WhatsApp us — we'll guide you.
          </a>
        </p>

      </div>
    </section>
  );
}
