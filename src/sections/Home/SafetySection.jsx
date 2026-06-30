import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, ShieldCheck, Lock } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: ShieldCheck,
    title: "Safe",
    subtitle: "Modern Medical Standards",
    desc: "Our procedures follow WHO guidelines and modern medical protocols. Sterile operation theater, experienced team, and full post-procedure monitoring ensure your safety.",
    accent: "#27445D",
    badge: "WHO Guidelines"
  },
  {
    icon: Scale,
    title: "Legal",
    subtitle: "Fully Compliant with Indian Law",
    desc: "All procedures are performed strictly according to the Medical Termination of Pregnancy (MTP) Act of India. We operate as a government-registered MTP facility.",
    accent: "#71BBB2",
    badge: "MTP Act Compliant"
  },
  {
    icon: Lock,
    title: "Confidential",
    subtitle: "Your Privacy, Always Protected",
    desc: "Patient privacy is protected at every stage — from first contact to follow-up. No records are shared without explicit consent. Discreet entry, private rooms.",
    accent: "#71BBB2",
    badge: "100% Private"
  }
];

export default function SafetySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".safety-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-cream/30">
      <div className="container-main">

        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            Our Commitment
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-4">
            Safe, Legal & Assured Care
          </h2>
          <p className="text-sm sm:text-base font-body text-teal/60 max-w-2xl mx-auto">
            Every patient deserves care that is medically sound, legally protected, and completely confidential.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="safety-card group glass rounded-2xl p-5 sm:p-6 text-center hover:shadow-glass transition-all duration-300 hover:-translate-y-1.5"
              style={{ borderBottom: `4px solid ${card.accent}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${card.accent}18` }}
              >
                <card.icon className="w-6 h-6" style={{ color: card.accent }} />
              </div>

              <span
                className="inline-block text-[10px] font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ background: `${card.accent}15`, color: card.accent }}
              >
                {card.badge}
              </span>

              <h3 className="font-display text-2xl font-bold text-teal mb-1">
                {card.title}
              </h3>
              <p className="text-xs font-body font-semibold text-mint mb-2 tracking-wide">
                {card.subtitle}
              </p>
              <p className="text-xs sm:text-sm font-body text-teal/60 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
