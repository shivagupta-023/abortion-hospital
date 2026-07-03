import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Globe, Lock, HeartHandshake, PhoneCall, BadgeCheck } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Certified by the Government. Accountable to You.",
    desc: "Our clinic is officially registered under the MTP Act (Reg. DL/MTP/86/SED/2020). Every procedure is performed by a licensed MTP specialist — not a general practitioner. You are always in certified hands.",
    color: "#0EA5E9",
  },
  {
    icon: HeartHandshake,
    num: "02",
    title: "Zero Judgment. Zero Lectures.",
    desc: "We do not ask why. We do not offer opinions on your decision. Our only job is to make sure you are safe, informed, and comfortable. Every member of our team — from reception to recovery — follows this principle.",
    color: "#0EA5E9",
  },
  {
    icon: Globe,
    num: "03",
    title: "Built for International Patients.",
    desc: "We have served patients from 25+ countries. Our team speaks multiple languages, handles visa invitation letters, arranges airport pickup, and guides you through every step — from your first WhatsApp message to your flight home.",
    color: "#38BDF8",
  },
  {
    icon: Lock,
    num: "04",
    title: "Privacy That Goes Beyond Discretion.",
    desc: "Your name never appears on any public board. Your records are never shared without your written consent. Our clinic entrance is private, consultation rooms are soundproofed, and our staff are bound by strict confidentiality protocols.",
    color: "#38BDF8",
  },
  {
    icon: BadgeCheck,
    num: "05",
    title: "One Specialist Does It All.",
    desc: "Dr. Rupali Mishra personally handles your consultation, procedure, and post-operative review. You are not passed between doctors. The same expert who meets you on Day 1 sees you through to full recovery.",
    color: "#0284C7",
  },
  {
    icon: PhoneCall,
    num: "06",
    title: "30 Days of Support After You Leave.",
    desc: "Your care does not end at discharge. Dr. Rupali Mishra stays reachable via WhatsApp for 30 full days. Our team checks in within 24 hours of your procedure and arranges a follow-up scan if needed — wherever you are in the world.",
    color: "#0284C7",
  },
];

export default function ApproachSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".approach-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".approach-header", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".approach-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".approach-grid", start: "top 78%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="approach-header mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold leading-tight" style={{ color: "#0C1A2E" }}>
              What Makes Our Doctors <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #0284C7)" }}
              >
                Different.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base font-body max-w-sm lg:text-right" style={{ color: "rgba(12,26,46,0.55)" }}>
            Six principles our team follows for every single patient — no exceptions, no compromises.
          </p>
        </div>

        {/* Grid */}
        <div className="approach-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p) => (
            <div
              key={p.num}
              className="approach-card group relative rounded-3xl p-6 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              style={{
                background: "#F8FBFF",
                border: "1.5px solid rgba(14,165,233,0.13)",
              }}
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 font-display font-black select-none leading-none"
                style={{ fontSize: "4rem", color: `${p.color}0d` }}
              >
                {p.num}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${p.color}14`, border: `1px solid ${p.color}28` }}
              >
                <p.icon className="w-5 h-5" style={{ color: p.color }} />
              </div>

              {/* Text */}
              <h3 className="font-display font-semibold text-base sm:text-lg leading-snug mb-3" style={{ color: "#0C1A2E" }}>
                {p.title}
              </h3>
              <p className="text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.6)" }}>
                {p.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
