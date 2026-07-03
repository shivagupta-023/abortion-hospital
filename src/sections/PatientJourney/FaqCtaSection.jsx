import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HeartHandshake } from "lucide-react";
import CtaCard from "../../components/CtaCard";
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How do I get a medical visa to come to India?",
    a: "We issue an official invitation letter the same day you contact us. This letter is accepted by all Indian embassies worldwide and includes your treatment details. We also provide step-by-step guidance on applying for an Indian Medical Visa (e-MV).",
  },
  {
    q: "Is my consultation and treatment completely confidential?",
    a: "Absolutely. All consultations, records, and communications are strictly private. We do not share your information with anyone. Your name and details will not appear on any public record.",
  },
  {
    q: "How quickly can I get an appointment?",
    a: "Most patients are seen within 1–3 days of first contact. In urgent cases, we can often accommodate same-day or next-day appointments. Reach us on WhatsApp for the fastest response.",
  },
  {
    q: "Can I bring a family member or companion with me?",
    a: "Yes, absolutely. Family members and companions are welcome to stay with you at the guest house. There is no extra charge for one accompanying person, and meals are included for them as well.",
  },
  {
    q: "What documents should I bring?",
    a: "You will need your passport, medical visa, any previous ultrasound or medical reports if available, and your flight details. Our coordinator will send you a complete checklist after booking.",
  },
  {
    q: "How do I pay? Is payment accepted in my currency?",
    a: "We accept payment in cash (INR, USD, GBP, EUR, AED) or via bank transfer. Full payment details are provided after your consultation. There are no hidden charges — the price you are quoted is final.",
  },
  {
    q: "What if I need medical support after returning home?",
    a: "Our team checks in via WhatsApp once you are home. Dr. Rupali Mishra remains available for any questions for 30 days post-discharge. All prescriptions and reports are sent to you digitally so your local doctor can review them.",
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      gsap.to(bodyRef.current, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  }, [open]);

  return (
    <div
      className="faq-item border-b"
      style={{ borderColor: "rgba(14,165,233,0.15)" }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display font-semibold text-sm sm:text-base leading-snug" style={{ color: "#0C1A2E" }}>
          {faq.q}
        </span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{ color: "#0EA5E9", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div ref={bodyRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <p className="text-sm font-body leading-relaxed pb-5" style={{ color: "rgba(15,34,51,0.6)" }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FaqCtaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-header > *",
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".faq-header", start: "top 82%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".faq-item",
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: "power2.out",
          scrollTrigger: { trigger: ".faq-list", start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 55%, #E0F2FE 100%)" }}
    >
      <div className="container-main">

        {/* ── FAQ ── */}
        <div className="faq-header text-center mb-12">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Common Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4" style={{ color: "#0C1A2E" }}>
            You Have Questions <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #0284C7)" }}
            >
             — We Have Answers —
            </span>
          </h2>
          <p className="text-sm font-body max-w-xl mx-auto" style={{ color: "rgba(15,34,51,0.5)" }}>
            Everything international patients ask us before booking — answered honestly.
          </p>
        </div>

        <div className="faq-list max-w-3xl mx-auto mb-16 md:mb-20">
          <div style={{ borderTop: "1px solid rgba(14,165,233,0.15)" }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <CtaCard
          icon={HeartHandshake}
          badgeText="We're Ready When You Are"
          heading={["Ready to Begin", "Your Journey?"]}
          description="Reach out today — our team responds within minutes. Your first consultation is free and completely confidential."
        />

      </div>
    </section>
  );
}
