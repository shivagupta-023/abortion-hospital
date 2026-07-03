import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  MessageCircle, Calendar, ArrowRight,
  FileText, Car, Home, UtensilsCrossed,
  Headphones, PlaneTakeoff, HeartHandshake,
} from "lucide-react";

const journeySteps = [
  { icon: FileText,        num: "01", label: "Visa Letter"    },
  { icon: Car,             num: "02", label: "Airport Pickup" },
  { icon: Home,            num: "03", label: "Guest House"    },
  { icon: UtensilsCrossed, num: "04", label: "Fresh Meals"    },
  { icon: Headphones,      num: "05", label: "Coordinator"    },
  { icon: PlaneTakeoff,    num: "06", label: "Airport Drop"   },
  { icon: HeartHandshake,  num: "07", label: "Follow-up"      },
];

export default function PatientJourneyHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(".pj-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
      .fromTo(".pj-line",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(".pj-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.15"
      )
      .fromTo(".pj-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "power2.out" },
        "-=0.15"
      );

      gsap.fromTo(".pj-step",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power2.out", delay: 0.8 }
      );

      gsap.fromTo(".pj-connector",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.4, stagger: 0.08, ease: "power2.out", delay: 1.0 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #EFF6FF 0%, #DBEAFE 55%, #E0F2FE 100%)" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(14,165,233,0.1) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%)" }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-28 pb-12">

        {/* Badge */}
        <div
          className="pj-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7"
          style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.28)" }}
        >
          <HeartHandshake className="w-3.5 h-3.5" style={{ color: "#0284C7" }} />
          <span className="text-[11px] font-body tracking-widest font-semibold uppercase" style={{ color: "#0284C7" }}>
            International Patient Programme
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display font-semibold leading-[1.1] mb-5 text-4xl sm:text-5xl lg:text-[3.6rem] max-w-3xl" style={{ color: "#0C1A2E" }}>
          <span className="pj-line block">Your Journey</span>
          <span className="pj-line block">to Care —</span>
          <span
            className="pj-line block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #38BDF8)" }}
          >
            Every Step Covered.
          </span>
        </h1>

        {/* Description */}
        <p
          className="pj-desc text-sm sm:text-base font-body leading-relaxed mb-8 max-w-xl"
          style={{ color: "rgba(12,26,46,0.55)" }}
        >
          From the moment you message us to the day you fly home safe — we handle every detail so you only focus on your health.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="pj-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
              boxShadow: "0 4px 22px rgba(14,165,233,0.35)",
            }}
          >
            <Calendar className="w-4 h-4" />
            Start Your Journey
          </a>
          <a
            href="https://wa.me/918800905938"
            target="_blank"
            rel="noopener noreferrer"
            className="pj-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(14,165,233,0.08)",
              border: "1px solid rgba(14,165,233,0.32)",
              color: "#0284C7",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </a>
        </div>
      </div>

      {/* ── JOURNEY STEPS BAR ── */}
      <div
        className="relative z-10 w-full"
        style={{
          borderTop: "1px solid rgba(14,165,233,0.18)",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container-main py-6 sm:py-7">

          {/* Desktop: horizontal row */}
          <div className="hidden md:flex items-center justify-between w-full max-w-6xl mx-auto px-4">
            {journeySteps.map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1 last:flex-none">

                <div className="pj-step flex flex-col items-center gap-2 flex-shrink-0 min-w-[70px]">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)" }}
                  >
                    <s.icon className="w-[18px] h-[18px]" style={{ color: "#0EA5E9" }} />
                  </div>
                  <span
                    className="font-display font-black text-xs leading-none"
                    style={{ color: "rgba(14,165,233,0.55)" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[10px] font-body text-center leading-tight whitespace-nowrap"
                    style={{ color: "rgba(12,26,46,0.6)" }}
                  >
                    {s.label}
                  </span>
                </div>

                {idx < journeySteps.length - 1 && (
                  <div className="pj-connector flex-1 flex items-center px-1 md:px-3" style={{ marginBottom: "18px" }}>
                    <div
                      className="flex-1"
                      style={{ height: "1.5px", background: "linear-gradient(90deg, rgba(14,165,233,0.5), rgba(14,165,233,0.15))" }}
                    />
                    <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(14,165,233,0.5)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: flex-wrap centered (last row auto-centers) */}
          <div className="md:hidden flex flex-wrap justify-center gap-3 px-2">
            {journeySteps.map((s) => (
              <div key={s.num} className="pj-step flex flex-col items-center gap-1.5" style={{ width: "calc(25% - 9px)", minWidth: "62px" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.22)" }}
                >
                  <s.icon className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                </div>
                <span
                  className="font-display font-black text-[10px] leading-none"
                  style={{ color: "rgba(14,165,233,0.55)" }}
                >
                  {s.num}
                </span>
                <span
                  className="text-[9px] font-body text-center leading-tight"
                  style={{ color: "rgba(12,26,46,0.6)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
