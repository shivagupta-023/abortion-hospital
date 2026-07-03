import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, FileText, Car, Home, UtensilsCrossed, Headphones, PlaneTakeoff, HeartHandshake } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: FileText, num: "01",
    tag: "Before You Travel",
    title: "Visa Invitation Letter",
    desc: "The first thing you need to travel to India for medical care is a visa invitation letter from a registered hospital. We issue it the same day you contact us.",
    handles: [
      "Official letter issued same day",
      "Accepted by all Indian embassies",
      "Includes treatment details for visa office",
      "Sent by email — ready to print",
    ],
    img: "/images/facility-consultation.jpg",
  },
  {
    icon: Car, num: "02",
    tag: "Day of Arrival",
    title: "Airport Pickup",
    desc: "A dedicated driver will be waiting at the arrivals gate with your name on a board. No taxi apps, no language stress — just a direct, comfortable ride to the clinic or guest house.",
    handles: [
      "Private air-conditioned vehicle",
      "Driver available at any arrival time",
      "Meets you at the arrivals gate",
      "Direct to clinic or guest house",
    ],
    img: "/images/facility-exterior.jpg",
  },
  {
    icon: Home, num: "03",
    tag: "Your Home in Delhi",
    title: "Guest House Stay",
    desc: "You'll stay in a clean, private guest house just minutes from the hospital. Family members are welcome and meals are included throughout your stay.",
    handles: [
      "Private rooms, hygienically maintained",
      "Minutes from the clinic",
      "Family members can stay with you",
      "24 / 7 access, fully secure",
    ],
    img: "/images/clinic-interior.jpg",
  },
  {
    icon: UtensilsCrossed, num: "04",
    tag: "During Your Stay",
    title: "Fresh Meals",
    desc: "Home-cooked vegetarian meals are delivered to your room every day, prepared with your recovery and dietary preferences in mind.",
    handles: [
      "Three fresh meals per day",
      "Vegetarian and recovery-friendly",
      "Cultural preferences accommodated",
      "Delivered to your room",
    ],
    img: "/images/facility-reception.jpg",
  },
  {
    icon: Headphones, num: "05",
    tag: "Your Personal Point of Contact",
    title: "Dedicated Coordinator",
    desc: "You'll have one coordinator assigned to you from booking to departure. They handle appointments, translations, billing, and anything that comes up — available 24 / 7.",
    handles: [
      "Available 24 / 7 on WhatsApp & phone",
      "Manages all appointments & paperwork",
      "Translation assistance included",
      "Accompanies you to appointments",
    ],
    img: "/images/dr-counselor.jpg",
  },
  {
    icon: PlaneTakeoff, num: "06",
    tag: "After Your Procedure",
    title: "Airport Drop",
    desc: "Once the doctor clears you for travel, we arrange a private vehicle to take you back to the airport — on time, stress-free, and comfortable.",
    handles: [
      "Private vehicle arranged in advance",
      "Timed to your flight departure",
      "Coordinator confirms clearance with doctor",
      "Luggage assistance included",
    ],
    img: "/images/facility-exterior.jpg",
  },
  {
    icon: HeartHandshake, num: "07",
    tag: "After You Return Home",
    title: "Post-Treatment Follow-up",
    desc: "Our care doesn't end at the airport. Our team checks in via WhatsApp once you're home, and the treating doctor remains available for any questions.",
    handles: [
      "WhatsApp check-ins after discharge",
      "Doctor available for questions",
      "Prescriptions & reports sent digitally",
      "Support available for 30 days",
    ],
    img: "/images/patient-couple.jpg",
  },
];

export default function StepsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Header */
      gsap.fromTo(".steps-header > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".steps-header", start: "top 80%", toggleActions: "play none none reverse" },
        }
      );

      /* Each step row animates in when it enters viewport */
      document.querySelectorAll(".step-row").forEach((row) => {
        const isReversed = row.classList.contains("step-row-reverse");

        gsap.fromTo(row.querySelector(".step-img-wrap"),
          { opacity: 0, x: isReversed ? 40 : -40 },
          {
            opacity: 1, x: 0, duration: 0.65, ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 78%", toggleActions: "play none none reverse" },
          }
        );
        gsap.fromTo(row.querySelector(".step-content"),
          { opacity: 0, x: isReversed ? -40 : 40 },
          {
            opacity: 1, x: 0, duration: 0.65, ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 78%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "#EFF6FF" }}>
      <div className="container-main">

        {/* Header */}
        <div className="steps-header text-center mb-14 md:mb-20">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Step by Step
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            The Complete Journey
          </h2>
          <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.6)" }}>
            Here's exactly what happens from your first message to your safe return home — no surprises, no stress.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((s, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={s.num}
                className={`step-row flex flex-col md:flex-row gap-10 md:gap-16 items-center ${isReversed ? "step-row-reverse md:flex-row-reverse" : ""}`}
              >

                {/* ── Image side ── */}
                <div className="step-img-wrap w-full md:w-5/12 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal/30 to-transparent" />
                    {/* Step number watermark */}
                    <span
                      className="absolute bottom-3 right-4 font-display font-black leading-none select-none"
                      style={{ fontSize: "5rem", color: "rgba(14,165,233,0.18)" }}
                    >
                      {s.num}
                    </span>
                  </div>
                </div>

                {/* ── Content side ── */}
                <div className="step-content flex-1">

                  {/* Tag + step pill */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] font-body font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(14,165,233,0.12)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.25)" }}
                    >
                      Step {s.num}
                    </span>
                    <span className="text-[11px] font-body" style={{ color: "rgba(12,26,46,0.4)" }}>{s.tag}</span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}
                    >
                      <s.icon className="w-[18px] h-[18px]" style={{ color: "#0EA5E9" }} />
                    </div>
                    <h3 className="font-display font-semibold text-xl sm:text-2xl" style={{ color: "#0C1A2E" }}>
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] font-body leading-relaxed mb-6" style={{ color: "rgba(12,26,46,0.65)" }}>
                    {s.desc}
                  </p>

                  {/* What we handle */}
                  <p className="text-[11px] font-body font-semibold uppercase tracking-widest mb-3" style={{ color: "#0EA5E9" }}>
                    What We Handle
                  </p>
                  <ul className="space-y-2">
                    {s.handles.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                        <span className="text-sm font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
