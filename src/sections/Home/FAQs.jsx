import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Is abortion legal in India?",
    a: "Yes. Abortion is legal in India under the Medical Termination of Pregnancy (MTP) Act, which permits the procedure up to 24 weeks under specific conditions. Our facility is government-registered and operates fully within Indian law."
  },
  {
    q: "Can an unmarried or single woman have an abortion?",
    a: "Yes. An unmarried or single woman can safely and legally terminate an unwanted pregnancy up to 24 weeks. No partner or spouse consent is required — only the woman's own consent."
  },
  {
    q: "What documents do I need?",
    a: "Only a valid ID proof and the written consent of the woman are required. Our trained staff handle all other formalities for you."
  },
  {
    q: "Is the procedure painful?",
    a: "No. The procedure is performed under anaesthesia and is completely pain-free. It takes only about 15 minutes, with no cuts, marks, or stitches."
  },
  {
    q: "Will an abortion affect my future fertility?",
    a: "No. When performed by an experienced gynaecologist at a registered centre, the procedure does not affect your future fertility."
  },
  {
    q: "Is everything kept confidential?",
    a: "Yes. Your privacy is protected at every stage — from your first call to your follow-up. Your records are never shared without your consent."
  },
  {
    q: "Are international patients welcome?",
    a: "Yes. We proudly care for patients from many countries. We also arrange visa support, airport pickup, guest-house stay, meals, and a follow-up scan before you travel home."
  },
  {
    q: "Is it safe to buy abortion pills from a chemist?",
    a: "No. Abortion pills should only be taken under the supervision of a qualified gynaecologist after an ultrasound. Self-medication can cause serious, life-threatening complications."
  },
];

export default function FAQs() {
  const sectionRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(faqs[0].q);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main max-w-4xl">
        <div className="text-center mb-8 md:mb-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4"
            style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.2)", backdropFilter: "blur(8px)" }}
          >
            <HelpCircle className="w-4 h-4" style={{ color: "#0EA5E9" }} />
            <span className="text-xs font-body tracking-wide" style={{ color: "rgba(12,26,46,0.7)" }}>Common Questions — Answered Honestly</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base font-body max-w-xl mx-auto" style={{ color: "rgba(12,26,46,0.6)" }}>
            Clear, honest answers to the questions most women ask before reaching out to us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="faq-item rounded-xl overflow-hidden transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.18)", backdropFilter: "blur(8px)" }}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
              >
                <span className="font-display font-medium text-sm sm:text-base pr-4" style={{ color: "#0C1A2E" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === faq.q ? "rotate-180" : ""}`}
                  style={{ color: "#0EA5E9" }}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openFaq === faq.q ? "max-h-96 sm:max-h-64" : "max-h-0"}`}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <div className="h-px mb-3" style={{ background: "rgba(14,165,233,0.2)" }} />
                  <p className="text-xs sm:text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.6)" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
