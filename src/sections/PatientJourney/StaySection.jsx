import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Car, Home, Stethoscope, FlaskConical, Moon,
  Sun, HeartPulse, ShieldCheck, ClipboardCheck, PlaneTakeoff,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const days = [
  {
    num: "01",
    label: "Arrival Day",
    tag: "Day of Arrival",
    color: "#71BBB2",
    glow: "rgba(113,187,178,0.12)",
    border: "rgba(113,187,178,0.25)",
    events: [
      { icon: Car,           time: "On Arrival",  title: "Airport Pickup",         desc: "Private driver meets you at arrivals gate — directly to the guest house."   },
      { icon: Home,          time: "Afternoon",   title: "Guest House Check-in",    desc: "Settle into your private room. Fresh meal provided. Rest as needed."        },
      { icon: Stethoscope,   time: "Evening",     title: "Doctor Consultation",     desc: "Dr. Rupali reviews your case, answers questions, and confirms the plan."    },
      { icon: FlaskConical,  time: "Same Day",    title: "Pre-Procedure Tests",     desc: "Blood work and ultrasound completed at the clinic — takes about 1 hour."   },
      { icon: Moon,          time: "Night",       title: "Rest & Prepare",          desc: "Dinner provided. Our coordinator is available if you need anything at all." },
    ],
  },
  {
    num: "02",
    label: "Procedure Day",
    tag: "Day of Procedure",
    color: "#3a7a72",
    glow: "rgba(58,122,114,0.12)",
    border: "rgba(58,122,114,0.28)",
    events: [
      { icon: Sun,           time: "Morning",     title: "Pre-Procedure Prep",      desc: "Coordinator accompanies you to the clinic. Paperwork completed."           },
      { icon: HeartPulse,    time: "Late Morning", title: "The Procedure",          desc: "Safe, comfortable procedure under the care of Dr. Rupali's team."          },
      { icon: ShieldCheck,   time: "Afternoon",   title: "Recovery Room",           desc: "2–3 hours of monitored rest in a private room. Refreshments provided."     },
      { icon: ClipboardCheck,time: "Before Discharge", title: "Doctor Sign-off",   desc: "Dr. Rupali reviews your recovery and confirms you are fit to travel."       },
      { icon: PlaneTakeoff,  time: "Evening",     title: "Airport Drop",            desc: "Private vehicle takes you to the airport — on time, with luggage help."    },
    ],
  },
];

function DayCard({ day, idx }) {
  return (
    <div
      className={`stay-card flex-1 rounded-3xl p-6 sm:p-8 flex flex-col`}
      style={{
        background: `linear-gradient(145deg, ${day.glow} 0%, rgba(255,255,255,0.02) 100%)`,
        border: `1.5px solid ${day.border}`,
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Day badge */}
      <div className="flex items-center gap-3 mb-7">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: day.color, boxShadow: `0 6px 20px ${day.glow}` }}
        >
          <span className="font-display font-black text-white text-base">{day.num}</span>
        </div>
        <div>
          <p className="text-[10px] font-body font-semibold uppercase tracking-[0.22em]" style={{ color: day.color }}>
            {day.tag}
          </p>
          <h3 className="font-display font-semibold text-teal text-lg leading-tight">
            {day.label}
          </h3>
        </div>
      </div>

      {/* Timeline events */}
      <div className="flex flex-col gap-0 flex-1">
        {day.events.map((ev, i) => (
          <div key={i} className="stay-event flex gap-4">
            {/* Left: dot + line */}
            <div className="flex flex-col items-center flex-shrink-0" style={{ width: "32px" }}>
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: day.glow, border: `1px solid ${day.border}` }}
              >
                <ev.icon style={{ width: "15px", height: "15px", color: day.color }} />
              </div>
              {i < day.events.length - 1 && (
                <div
                  className="flex-1 w-px my-2"
                  style={{ background: `linear-gradient(180deg, ${day.border}, transparent)`, minHeight: "24px" }}
                />
              )}
            </div>

            {/* Right: content */}
            <div className={`pb-5 ${i === day.events.length - 1 ? "pb-0" : ""}`}>
              <span
                className="inline-block text-[9px] font-body font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1"
                style={{ background: day.glow, color: day.color }}
              >
                {ev.time}
              </span>
              <p className="font-display font-semibold text-teal text-sm mb-0.5">{ev.title}</p>
              <p className="text-[12px] font-body leading-relaxed" style={{ color: "rgba(15,34,51,0.55)" }}>
                {ev.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StaySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".stay-header > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".stay-header", start: "top 82%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(".stay-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.18, ease: "power2.out",
          scrollTrigger: { trigger: ".stay-cards", start: "top 78%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(".stay-event",
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0, duration: 0.4, stagger: 0.07, ease: "power2.out",
          scrollTrigger: { trigger: ".stay-cards", start: "top 65%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: "linear-gradient(160deg, #071520 0%, #0c2030 55%, #091c15 100%)" }}
    >
      <div className="container-main">

        {/* Header */}
        <div className="stay-header text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            What to Expect
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #71BBB2, #a8e6df)" }}
            >
              2 Days
            </span>{" "}
            With Us
          </h2>
          <p className="text-sm sm:text-base font-body max-w-xl mx-auto" style={{ color: "rgba(239,233,213,0.5)" }}>
            Most patients complete their full treatment and return home within 48 hours — comfortably, safely, and with full support throughout.
          </p>
        </div>

        {/* Day cards */}
        <div className="stay-cards grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
          {days.map((day, idx) => (
            <DayCard key={day.num} day={day} idx={idx} />
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-8 md:mt-10 text-center py-4 px-6 rounded-2xl"
          style={{ background: "rgba(113,187,178,0.07)", border: "1px solid rgba(113,187,178,0.15)" }}
        >
          <p className="text-xs font-body" style={{ color: "rgba(239,233,213,0.45)" }}>
            Every patient's timeline is guided by their doctor. Some procedures may require an extra day of rest — your coordinator will keep you informed at every step.
          </p>
        </div>

      </div>
    </section>
  );
}
