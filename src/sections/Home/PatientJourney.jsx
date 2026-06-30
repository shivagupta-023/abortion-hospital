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
    color: "#71BBB2",
    dimColor: "rgba(113,187,178,0.08)",
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
    color: "#27445D",
    dimColor: "rgba(39,68,93,0.06)",
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
    color: "#5ba3a0",
    dimColor: "rgba(91,163,160,0.07)",
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

      // Horizontal line draws from left to right
      gsap.fromTo(".progress-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power3.inOut", transformOrigin: "left center", scrollTrigger: trig }
      );

      // Phase circles scale up
      gsap.fromTo(".phase-dot",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.3, delay: 0.2, ease: "back.out(1.7)", scrollTrigger: trig }
      );

      // Phase cards float up smoothly
      gsap.fromTo(".phase-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.4, ease: "power3.out", scrollTrigger: trig }
      );

      // Step items slide in slightly
      gsap.fromTo(".step-item",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, delay: 0.8, ease: "power2.out", scrollTrigger: trig }
      );

      // Vertical timeline lines draw down inside the cards
      gsap.fromTo(".timeline-line",
        { scaleY: 0 },
        { scaleY: 1, duration: 1, stagger: 0.2, delay: 0.6, ease: "power2.inOut", transformOrigin: "top center", scrollTrigger: trig }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="py-12 md:py-20 bg-gray-50 relative overflow-hidden">
      
      {/* Background soft dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, #9ca3af 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-teal-50 border border-teal-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#71BBB2] animate-pulse" />
            <span className="text-xs font-semibold text-[#27445D] tracking-widest uppercase">
              Complete 2-Day Treatment Plan
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#27445D] mb-4 tracking-tight">
            How We Care for You
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            From your first call to your safe return home — 10 clear steps, 2 days, and complete peace of mind.
          </p>
        </div>


        {/* ── 3-Phase Journey Cards ── */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-start">
          {phases.map((phase) => (
            <div key={phase.id} className="phase-card bg-white rounded-3xl p-6 lg:p-8 shadow-lg shadow-gray-200/50 border border-gray-100 relative">
              
              {/* Phase Header */}
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2 block" style={{ color: phase.color }}>
                  {phase.phase}
                </span>
                <h3 className="text-2xl font-bold text-[#27445D] mb-2">
                  {phase.label}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: phase.color }}>
                  {phase.tagline}
                </p>
                <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider rounded-full px-3 py-1 mb-4"
                  style={{ background: phase.dimColor, color: phase.color }}>
                  ⏱ {phase.duration}
                </span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              {/* Vertical Steps */}
              <div className="relative pl-6">
                {/* Vertical Timeline Line */}
                <div
                  className="timeline-line absolute left-[5px] top-2 bottom-0 w-[2px] rounded-full"
                  style={{ background: `linear-gradient(180deg, ${phase.color}90 0%, ${phase.color}20 100%)` }}
                />

                {phase.steps.map((s) => (
                  <div key={s.step} className="step-item group relative mb-6 last:mb-0">
                    {/* Tiny circle on the line */}
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
                        <h4 className="font-semibold text-[#27445D] text-sm leading-snug mb-1 group-hover:text-opacity-80 transition-colors">
                          {s.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Day 2 completion badge */}
                {phase.id === "day2" && (
                  <div className="mt-8 flex items-center gap-3 pl-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#5ba3a0]/10 border border-[#5ba3a0]/20">
                      <Plane className="w-4 h-4 text-[#5ba3a0]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#5ba3a0]">
                        Journey Complete
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
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