import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, MessageCircle, Phone, HeartHandshake } from "lucide-react";
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
    a: "Our team checks in via WhatsApp once you are home. Dr. Rupali remains available for any questions for 30 days post-discharge. All prescriptions and reports are sent to you digitally so your local doctor can review them.",
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
      style={{ borderColor: "rgba(113,187,178,0.15)" }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display font-semibold text-teal text-sm sm:text-base leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300 text-mint"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
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
      gsap.fromTo(".cta-card",
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".cta-card", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: "linear-gradient(160deg, #f0faf9 0%, #e4f4f1 55%, #edf8f6 100%)" }}
    >
      <div className="container-main">

        {/* ── FAQ ── */}
        <div className="faq-header text-center mb-12">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal leading-tight mb-4">
            You Have Questions <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #71BBB2, #3a7a72)" }}
            >
             — We Have Answers —
            </span>
          </h2>
          <p className="text-sm font-body max-w-xl mx-auto" style={{ color: "rgba(15,34,51,0.5)" }}>
            Everything international patients ask us before booking — answered honestly.
          </p>
        </div>

        <div className="faq-list max-w-3xl mx-auto mb-16 md:mb-20">
          <div style={{ borderTop: "1px solid rgba(113,187,178,0.15)" }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="cta-card rounded-3xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #071520 0%, #0f2233 55%, #0d2e28 100%)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(113,187,178,0.1) 0%, transparent 65%)" }}
          />

          <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left text */}
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
                style={{ background: "rgba(113,187,178,0.12)", border: "1px solid rgba(113,187,178,0.28)" }}
              >
                <HeartHandshake className="w-3.5 h-3.5 text-mint" />
                <span className="text-[11px] font-body text-mint tracking-widest font-semibold uppercase">
                  We're Ready When You Are
                </span>
              </div>
              <h3 className="font-display font-semibold text-white text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
                Ready to Begin<br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #71BBB2, #a8e6df)" }}
                >
                  Your Journey?
                </span>
              </h3>
              <p className="text-sm font-body max-w-md" style={{ color: "rgba(239,233,213,0.5)" }}>
                Reach out today — our team responds within minutes. Your first consultation is free and completely confidential.
              </p>
            </div>

            {/* Right buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <a
                href="https://wa.me/911141590000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #71BBB2 0%, #3a7a72 100%)",
                  boxShadow: "0 6px 24px rgba(113,187,178,0.35)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
              <a
                href="tel:+911141590000"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(113,187,178,0.1)",
                  border: "1px solid rgba(113,187,178,0.3)",
                  color: "#71BBB2",
                }}
              >
                <Phone className="w-4 h-4" />
                Call Us Directly
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
