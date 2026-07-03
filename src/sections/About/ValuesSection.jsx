import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock, ShieldCheck, HeartHandshake, UserCheck, Globe2, Stethoscope } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Lock,
    num: "01",
    title: "Confidentiality First",
    desc: "Your records are strictly private — no public registers, no shared information, ever. Our staff are bound by strict confidentiality protocols at every stage of your care.",
    color: "#0EA5E9",
  },
  {
    icon: ShieldCheck,
    num: "02",
    title: "Legal & Certified",
    desc: "Government-registered MTP centre, fully compliant with WHO and ICMR guidelines. Every procedure is performed by a licensed MTP specialist — you are always in certified hands.",
    color: "#0EA5E9",
  },
  {
    icon: HeartHandshake,
    num: "03",
    title: "Compassionate Care",
    desc: "Every patient is treated with empathy and zero judgment, at every step of the journey. From reception to recovery, our entire team follows this principle — no exceptions.",
    color: "#38BDF8",
  },
  {
    icon: UserCheck,
    num: "04",
    title: "Patient Dignity",
    desc: "We respect every woman's decision and protect her right to choose, without question. We do not ask why. We do not offer opinions. Our only job is to keep you safe and comfortable.",
    color: "#38BDF8",
  },
  {
    icon: Globe2,
    num: "05",
    title: "International Trust",
    desc: "Patients from 40+ countries welcomed with equal care, regardless of where they come from. We handle visa letters, travel guidance, and language support for every international patient.",
    color: "#0284C7",
  },
  {
    icon: Stethoscope,
    num: "06",
    title: "Medical Excellence",
    desc: "Experienced specialists and a modern facility, delivering safe outcomes every time. Our team stays current with the latest protocols to ensure the highest standard of care.",
    color: "#0284C7",
  },
];

export default function ValuesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".values-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".values-header", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".value-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".values-grid", start: "top 78%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "#EFF6FF" }}>
      <div className="container-main">

        {/* Header */}
        <div className="values-header mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
              What We Stand For
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold leading-tight" style={{ color: "#0C1A2E" }}>
              Our Core Values —<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #0284C7)" }}
              >
                No Exceptions.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base font-body max-w-sm lg:text-right" style={{ color: "rgba(12,26,46,0.55)" }}>
            Six principles that guide every consultation, every procedure, and every patient we care for.
          </p>
        </div>

        {/* Grid */}
        <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div
              key={v.num}
              className="value-card group relative rounded-3xl p-6 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              style={{
                background: "#F8FBFF",
                border: "1.5px solid rgba(14,165,233,0.13)",
              }}
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 font-display font-black select-none leading-none"
                style={{ fontSize: "4rem", color: `${v.color}0d` }}
              >
                {v.num}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${v.color}14`, border: `1px solid ${v.color}28` }}
              >
                <v.icon className="w-5 h-5" style={{ color: v.color }} />
              </div>

              {/* Text */}
              <h3 className="font-display font-semibold text-base sm:text-lg leading-snug mb-3" style={{ color: "#0C1A2E" }}>
                {v.title}
              </h3>
              <p className="text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.6)" }}>
                {v.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                style={{ background: `linear-gradient(90deg, ${v.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
