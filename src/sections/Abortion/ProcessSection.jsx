import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock, FlaskConical, ClipboardList, ShieldCheck, HeartPulse, PhoneCall } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    icon: Lock,
    tag: "Your Privacy First",
    title: "Private Consultation — No Judgment",
    desc: "Your journey begins with a one-on-one consultation with Dr. Rupali Mishra in a completely private room. No staff overhears your conversation. You are free to ask anything — no question is too sensitive, no situation is judged.",
    care: [
      "Only Dr. Rupali Mishra present — no extra staff",
      "Your name is never displayed publicly",
      "No record shared with any external agency",
      "Video consultation available for international patients",
    ],
    img: "/images/facility-consultation.jpg",
  },
  {
    num: "02",
    icon: FlaskConical,
    tag: "Medical Safety",
    title: "Pre-Procedure Tests & Health Check",
    desc: "Before any procedure, we confirm your exact pregnancy week, blood group, and health status. These tests take about 45–60 minutes and are done right at our clinic. Nothing is skipped — your safety depends on knowing exactly what we're working with.",
    care: [
      "Ultrasound to confirm gestational age",
      "Blood group, Hb & clotting time checked",
      "Blood pressure and vitals monitored",
      "All tests done in-house — no outside lab visit",
    ],
    img: "/images/clinic-interior.jpg",
  },
  {
    num: "03",
    icon: ClipboardList,
    tag: "Personalized Care",
    title: "Doctor Decides the Safest Method for You",
    desc: "Based on your test results and pregnancy week, Dr. Rupali Mishra personally reviews every case and recommends the safest, most suitable method. There is no one-size-fits-all here — your health profile guides every decision.",
    care: [
      "Medical pill method for early pregnancies",
      "Surgical MVA/D&C for 9–20 weeks",
      "Late term handled with Medical Board approval",
      "All options explained before you decide",
    ],
    img: "/images/facility-reception.jpg",
  },
  {
    num: "04",
    icon: ShieldCheck,
    tag: "Expert Hands",
    title: "The Procedure — Sterile, Gentle, Expert",
    desc: "The procedure is performed by Dr. Rupali Mishra herself in a fully sterile, private procedure room. Equipment is hospital-grade and sterilized before every use. We move at your pace — if you need a moment, we stop. Your comfort is not optional.",
    care: [
      "Conducted only by certified MTP surgeon",
      "WHO-protocol sterilization of all instruments",
      "Mild sedation available — you won't feel pain",
      "Private room — no shared wards or open areas",
    ],
    img: "/images/facility-exterior.jpg",
  },
  {
    num: "05",
    icon: HeartPulse,
    tag: "Post-Procedure",
    title: "Recovery & Close Monitoring",
    desc: "After the procedure, you rest in a private recovery room for 2–3 hours while our nursing team monitors your vitals every 30 minutes. You are not left alone. We only discharge you when Dr. Rupali Mishra personally confirms you are stable and comfortable.",
    care: [
      "Private recovery room — no shared space",
      "Vitals checked every 30 minutes",
      "Snacks and water provided during recovery",
      "Doctor reviews you before discharge",
    ],
    img: "/images/dr-counselor.jpg",
  },
  {
    num: "06",
    icon: PhoneCall,
    tag: "Long-Term Support",
    title: "Discharge, Aftercare & 30-Day Support",
    desc: "When you leave, you carry a clear written prescription and aftercare plan. Our team checks in via WhatsApp in 24 hours, and Dr. Rupali Mishra stays reachable for any question for 30 full days. Your care doesn't end at the clinic door.",
    care: [
      "Written aftercare instructions in English",
      "WhatsApp check-in within 24 hours",
      "Dr. Rupali Mishra available for 30 days post-discharge",
      "Follow-up scan arranged if needed",
    ],
    img: "/images/patient-couple.jpg",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proc-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".proc-header", start: "top 83%", toggleActions: "play none none reverse" },
        }
      );

      // Each row fades in when it enters viewport
      document.querySelectorAll(".proc-row").forEach((row) => {
        gsap.fromTo(row,
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 0.55, ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 82%", toggleActions: "play none none reverse" },
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
        <div className="proc-header text-center mb-14 md:mb-20">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Our Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold leading-tight mb-4" style={{ color: "#0C1A2E" }}>
            How We Perform Every Abortion —<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #0284C7)" }}
            >
              Step by Step, With Full Care.
            </span>
          </h2>
          <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(15,34,51,0.5)" }}>
            Every step is deliberate. Every decision is medically guided. Nothing is rushed — because your safety is the only priority.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((s, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={s.num}
                className={`proc-row flex flex-col md:flex-row gap-10 md:gap-16 items-center ${isReversed ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full md:w-5/12 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: "4/3" }}>
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,21,32,0.35), transparent)" }} />
                    {/* Step number watermark */}
                    <span
                      className="absolute bottom-3 right-4 font-display font-black leading-none select-none"
                      style={{ fontSize: "5rem", color: "rgba(14,165,233,0.2)" }}
                    >
                      {s.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Tag + step */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] font-body font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(14,165,233,0.1)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.22)" }}
                    >
                      Step {s.num}
                    </span>
                    <span className="text-[11px] font-body" style={{ color: "rgba(15,34,51,0.4)" }}>{s.tag}</span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}
                    >
                      <s.icon className="w-[18px] h-[18px]" style={{ color: "#0EA5E9" }} />
                    </div>
                    <h3 className="font-display font-semibold text-xl sm:text-2xl leading-tight" style={{ color: "#0C1A2E" }}>
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] font-body leading-relaxed mb-6" style={{ color: "rgba(15,34,51,0.6)" }}>
                    {s.desc}
                  </p>

                  {/* Care points */}
                  <p className="text-[10px] font-body font-bold uppercase tracking-widest mb-3" style={{ color: "#0EA5E9" }}>
                    How We Ensure Your Safety
                  </p>
                  <ul className="space-y-2.5">
                    {s.care.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                        <span className="text-sm font-body" style={{ color: "rgba(15,34,51,0.65)" }}>{c}</span>
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
