import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle, MessageCircle, Phone, ShieldCheck } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Is abortion legal in India for foreign nationals?",
    a: "Yes. Under the Medical Termination of Pregnancy (Amendment) Act 2021, abortion is completely legal in India up to 24 weeks for any woman — including foreign nationals — under specific conditions. Our clinic is a government-registered MTP centre and Dr. Rupali is a certified MTP specialist. Everything we do is fully within the law.",
  },
  {
    q: "How many weeks pregnant can I be for the procedure?",
    a: "We provide safe abortion services up to 24 weeks of pregnancy. Medical abortion (pills) is suitable up to 9 weeks. Surgical abortion (MVA/D&C/D&E) covers 9 to 20 weeks. For pregnancies between 20 to 24 weeks, we handle the Medical Board approval process on your behalf.",
  },
  {
    q: "Will it be painful? What about anesthesia?",
    a: "We prioritize your comfort completely. For surgical procedures, Dr. Asha Arora — our consultant anesthesiologist with 20+ years of experience — administers mild sedation so you feel no pain during the procedure. For medical abortion (pills), there may be cramping similar to a heavy period, which is managed with prescribed medication.",
  },
  {
    q: "How private is my information? Will anyone find out?",
    a: "Your privacy is our highest priority. All records are strictly confidential. Your name does not appear on any public board or register. We do not share your information with any third party, government agency, or embassy. Our staff are trained to maintain complete discretion at all times.",
  },
  {
    q: "How long do I need to stay in Delhi?",
    a: "For medical abortion (pills), you may only need 1–2 days. For surgical procedures, we recommend staying 3–5 days total — including pre-procedure tests, the procedure itself, and 2–3 hours of post-procedure recovery. We can arrange guest house accommodation nearby if needed.",
  },
  {
    q: "What tests are done before the procedure?",
    a: "Before any procedure, we perform an ultrasound to confirm gestational age, blood group and Hb test, blood pressure and vitals check, and a clotting time test. All tests are done in-house at our clinic — no outside lab visit is required. Results are ready within 45–60 minutes.",
  },
  {
    q: "Is there follow-up support after the procedure?",
    a: "Yes, absolutely. Our team checks in via WhatsApp within 24 hours of discharge. Dr. Priya Sharma, our reproductive health counselor, is available for emotional support before and after the procedure. Dr. Rupali remains reachable for any medical questions for 30 full days post-discharge. All reports and prescriptions are sent to you digitally.",
  },
];

export default function FaqCtaSection() {
  const sectionRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(faqs[0].q);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ab-faq-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".ab-cta-card",
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".ab-cta-card", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">

        {/* ── FAQ ── */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4 text-mint" />
              <span className="text-xs font-body text-teal/70 tracking-wide">Abortion — Common Questions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base font-body text-teal/60 max-w-xl mx-auto">
              Everything patients ask us before their procedure — answered honestly.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="ab-faq-item glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glass"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                >
                  <span className="font-display font-medium text-teal text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-mint flex-shrink-0 transition-transform duration-300 ${openFaq === faq.q ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.q ? "max-h-64" : "max-h-0"}`}>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <div className="h-px bg-mint/20 mb-3" />
                    <p className="text-xs sm:text-sm font-body text-teal/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="ab-cta-card rounded-3xl overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #071520 0%, #0f2233 55%, #0d2e28 100%)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(113,187,178,0.1) 0%, transparent 65%)" }}
          />

          <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
                style={{ background: "rgba(113,187,178,0.12)", border: "1px solid rgba(113,187,178,0.28)" }}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-mint" />
                <span className="text-[11px] font-body text-mint tracking-widest font-semibold uppercase">
                  Safe · Private · Legal
                </span>
              </div>
              <h3 className="font-display font-semibold text-white text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
                Ready to Take<br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #71BBB2, #a8e6df)" }}
                >
                  the Next Step?
                </span>
              </h3>
              <p className="text-sm font-body max-w-md" style={{ color: "rgba(239,233,213,0.5)" }}>
                Contact us now — we respond within minutes. Your first consultation is free, completely confidential, and judgment-free.
              </p>
            </div>

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
