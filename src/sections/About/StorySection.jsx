import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Building2, ShieldCheck, Globe2, Users } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    label: "Founded",
    title: "Established",
    desc: "Founded in South Delhi with one mission: safe, legal reproductive healthcare for every woman, with dignity.",
    icon: Building2,
  },
  {
    label: "Registered",
    title: "Govt. MTP Registration",
    desc: "Officially registered as an approved MTP facility (Reg. No. DL/MTP/86/SED/2020), permitted for terminations up to 24 weeks.",
    icon: ShieldCheck,
  },
  {
    label: "Women-Centric",
    title: "All-Female Team",
    desc: "Grew into an exclusive women-centric hospital with an all-female medical team, ensuring 100% privacy and non-judgmental care.",
    icon: Users,
  },
  {
    label: "Global",
    title: "International Patients",
    desc: "Began welcoming patients from many countries, with complete travel, stay, and coordination support arranged end-to-end.",
    icon: Globe2,
  },
  {
    label: "Today",
    title: "Trusted Destination",
    desc: "A trusted destination for women across India and abroad, seeking safe, painless, and confidential abortion care under one roof.",
    icon: Building2,
  },
];

export default function StorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".story-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".story-header", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".story-image",
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: ".story-image", start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".story-content > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".story-content", start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".milestone-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".milestone-strip", start: "top 82%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="our-story" ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="story-header text-center mb-14 md:mb-20">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Our Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold leading-tight mb-4" style={{ color: "#0C1A2E" }}>
            The Story Behind Dr. Rupali's Abortion Hospital
          </h2>
          <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            From a single consultation room to a trusted name for women across India and beyond — built on safety, dignity, and the right to choose.
          </p>
        </div>

        {/* Image + Story */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-16 md:mb-24">

          {/* Image */}
          <div className="story-image w-full md:w-[420px] flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="/images/facility-exterior.jpg"
                alt="Aashirwad Health Centre"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(2,132,199,0.55) 0%, transparent 50%)" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="story-content flex-1">
            <div className="mb-6 pl-4" style={{ borderLeft: "3px solid rgba(14,165,233,0.35)" }}>
              <Quote className="w-5 h-5 mb-2" style={{ color: "rgba(14,165,233,0.4)" }} />
              <blockquote className="font-display text-lg sm:text-xl italic leading-relaxed" style={{ color: "rgba(12,26,46,0.8)" }}>
                "Our mission is simple: every woman who comes to us leaves safer, healthier, and treated with the dignity she deserves."
              </blockquote>
              <p className="text-xs font-body mt-2" style={{ color: "rgba(12,26,46,0.45)" }}>— Dr. Rupali Mishra, Founder</p>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                Dr. Rupali's Abortion Hospital was founded with a single, clear purpose — to give every woman access to safe, legal, and dignified reproductive healthcare, free from fear or judgment. As a government-registered MTP facility in South Delhi, it was built around the belief that a woman's decision to end a pregnancy is her own, and deserves to be respected without question.
              </p>
              <p className="text-sm sm:text-base font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                From the beginning, the hospital took a different approach: an exclusive, women-centric model where every part of a patient's care — consultation, ultrasound, tests, the procedure, and follow-up — is handled entirely by female doctors and staff. This ensures complete privacy, comfort, and confidentiality at every step, and allows women to seek care without hesitation or embarrassment.
              </p>
              <p className="text-sm sm:text-base font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                Over time, word of this safe and compassionate care spread well beyond Delhi. Patients began arriving from across India, and then from many countries around the world — often travelling alone, seeking care that was both medically sound and emotionally safe. In response, the hospital built dedicated support for international patients, handling everything from arrival to a safe return home.
              </p>
              <p className="text-sm sm:text-base font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                Today, Dr. Rupali's Abortion Hospital stands for more than medical treatment. It is a place where decisions are respected, privacy is absolute, and care is never rushed — guided always by transparency, fairness, and the highest ethics of medical practice.
              </p>
            </div>
          </div>
        </div>

        {/* Milestone strip */}
        <div className="milestone-strip relative">
          <div
            className="hidden md:block absolute top-7 left-0 right-0 h-px"
            style={{ background: "rgba(14,165,233,0.25)" }}
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
            {milestones.map((m) => (
              <div key={m.title} className="milestone-card relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative z-10 bg-white"
                  style={{ border: "2px solid rgba(14,165,233,0.3)" }}
                >
                  <m.icon className="w-6 h-6" style={{ color: "#0EA5E9" }} />
                </div>
                <p className="font-display font-bold text-xs tracking-widest uppercase mb-1" style={{ color: "#0EA5E9" }}>{m.label}</p>
                <h4 className="font-display font-semibold text-sm sm:text-base mb-2" style={{ color: "#0C1A2E" }}>{m.title}</h4>
                <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.55)" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
