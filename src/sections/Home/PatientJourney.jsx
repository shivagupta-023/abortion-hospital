import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PhoneCall, FileText, CreditCard, Car, Stethoscope,
  CheckCircle, Home, UtensilsCrossed, Search, Plane
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    id: "before",
    phase: "Phase 01",
    label: "Before Arrival",
    tagline: "From Your Home Country",
    duration: "1–3 Days Prior",
    desc: "Everything is arranged before you board your flight. Our team guides you through every step remotely.",
    color: "#0EA5E9",
    dimColor: "rgba(14,165,233,0.08)",
    steps: [
      { icon: PhoneCall,  step: "01", title: "Online Consultation",  desc: "Confidential video call with our specialist doctor." },
      { icon: FileText,   step: "02", title: "Invitation Letter",    desc: "Official medical letter issued same day for visa." },
      { icon: CreditCard, step: "03", title: "Medical Visa Support", desc: "Step-by-step guidance for India medical visa process." },
    ],
  },
  {
    id: "day1",
    phase: "Phase 02",
    label: "Day 1",
    tagline: "Arrival & Treatment",
    duration: "Full Day",
    desc: "You arrive and receive complete care. We handle every detail — no stress, no surprises.",
    color: "#0284C7",
    dimColor: "rgba(2,132,199,0.06)",
    steps: [
      { icon: Car,             step: "04", title: "Private Airport Pickup", desc: "Driver waits at arrivals with your name sign."     },
      { icon: Stethoscope,     step: "05", title: "Hospital Visit",         desc: "Consultation, tests, ultrasound — all on Day 1."   },
      { icon: CheckCircle,     step: "06", title: "Safe Procedure",         desc: "Procedure by certified specialist, same day."       },
      { icon: Home,            step: "07", title: "Private Guest House",    desc: "Clean, private accommodation near hospital."       },
      { icon: UtensilsCrossed, step: "08", title: "Meals Provided",         desc: "Healthy vegetarian meals throughout your stay."    },
    ],
  },
  {
    id: "day2",
    phase: "Phase 03",
    label: "Day 2",
    tagline: "Recovery & Departure",
    duration: "Morning",
    desc: "Follow-up confirms you are well. Then we drop you safely to the airport and you're on your way home.",
    color: "#38BDF8",
    dimColor: "rgba(56,189,248,0.07)",
    steps: [
      { icon: Search, step: "09", title: "Follow-up Scan",  desc: "Morning check-up & official medical clearance."   },
      { icon: Plane,  step: "10", title: "Airport Drop",    desc: "Private car to airport — safe, comfortable return." },
    ],
  },
];

export default function PatientJourney() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" };

      gsap.fromTo(".progress-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power3.inOut", transformOrigin: "left center", scrollTrigger: trig }
      );

      gsap.fromTo(".phase-dot",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.3, delay: 0.2, ease: "back.out(1.7)", scrollTrigger: trig }
      );

      gsap.fromTo(".phase-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.4, ease: "power3.out", scrollTrigger: trig }
      );

      gsap.fromTo(".step-item",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, delay: 0.8, ease: "power2.out", scrollTrigger: trig }
      );

      gsap.fromTo(".timeline-line",
        { scaleY: 0 },
        { scaleY: 1, duration: 1, stagger: 0.2, delay: 0.6, ease: "power2.inOut", transformOrigin: "top center", scrollTrigger: trig }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-12 md:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 55%, #E0F2FE 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

      <div className="container-main relative z-10">

        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 shadow-sm"
            style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#0284C7" }}>
              Complete 2-Day Treatment Plan
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "#0C1A2E" }}>
            How We Care for You
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            From your first call to your safe return home — 10 clear steps, 2 days, and complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-10 items-start">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="phase-card bg-white rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 relative"
              style={{ boxShadow: "0 8px 32px rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.18)" }}
            >
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2 block" style={{ color: phase.color }}>
                  {phase.phase}
                </span>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#0C1A2E" }}>
                  {phase.label}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: phase.color }}>
                  {phase.tagline}
                </p>
                <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 mb-4"
                  style={{ background: phase.dimColor, color: phase.color }}>
                  ⏱ {phase.duration}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(12,26,46,0.55)" }}>
                  {phase.desc}
                </p>
              </div>

              <div className="relative pl-6">
                <div
                  className="timeline-line absolute left-[5px] top-2 bottom-0 w-[2px] rounded-full"
                  style={{ background: `linear-gradient(180deg, ${phase.color}90 0%, ${phase.color}20 100%)` }}
                />

                {phase.steps.map((s) => (
                  <div key={s.step} className="step-item group relative mb-6 last:mb-0">
                    <div
                      className="absolute -left-[24px] top-[3px] w-3 h-3 rounded-full bg-white border-2 transition-transform duration-300 group-hover:scale-125 shadow-sm"
                      style={{ borderColor: phase.color }}
                    />
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg transition-colors duration-300" style={{ backgroundColor: phase.dimColor }}>
                        <s.icon className="w-4 h-4 flex-shrink-0" style={{ color: phase.color }} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: `${phase.color}90` }}>
                          Step {s.step}
                        </span>
                        <h4 className="font-semibold text-sm leading-snug mb-1" style={{ color: "#0C1A2E" }}>
                          {s.title}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: "rgba(12,26,46,0.5)" }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {phase.id === "day2" && (
                  <div className="mt-8 flex items-center gap-3 pl-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}
                    >
                      <Plane className="w-4 h-4" style={{ color: "#38BDF8" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#38BDF8" }}>
                        Journey Complete
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(12,26,46,0.4)" }}>
                        You are safely back home.
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
