import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import CtaCard from "../../components/CtaCard";
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Is abortion (MTP) legal in India?",
    a: "Yes. Abortion is legal in India under Section 3 of the MTP Act, and is permitted up to 24 weeks under specific conditions.",
  },
  {
    q: "Who is eligible for an abortion in India?",
    a: "Any woman — married or unmarried, regardless of her status — can undergo the procedure at a registered centre.",
  },
  {
    q: "Can an unmarried or single woman have an abortion?",
    a: "Yes. An unmarried or single woman can terminate an unwanted pregnancy up to 24 weeks.",
  },
  {
    q: "Is the consent of a husband, partner, or parents required?",
    a: "No. Only the pregnant woman's own consent is required. (For a minor, the consent of a legal guardian is mandatory.)",
  },
  {
    q: "What documents are required?",
    a: "Only a valid ID proof and the written consent of the woman. Our staff handle all other formalities.",
  },
  {
    q: "Is an ultrasound necessary before the procedure?",
    a: "Yes. An ultrasound is essential to confirm the number of weeks and the position of the pregnancy before termination.",
  },
  {
    q: "What are the methods of abortion?",
    a: "There are two main methods — the Medical Method (pills) and the Suction Method.",
  },
  {
    q: "Which method is better?",
    a: "The Suction Method is generally preferred, as it is safe, pain-free, and reliable, with minimal chance of incomplete abortion.",
  },
  {
    q: "How long does the Suction procedure take?",
    a: "About 15 minutes, with discharge usually within around 3 hours.",
  },
  {
    q: "Will I feel pain during the procedure?",
    a: "No. The procedure is performed under anaesthesia and is pain-free, with no cuts, marks, or stitches.",
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">

        {/* ── FAQ ── */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4" style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.18)" }}>
              <HelpCircle className="w-4 h-4" style={{ color: "#0EA5E9" }} />
              <span className="text-xs font-body tracking-wide" style={{ color: "rgba(12,26,46,0.7)" }}>Abortion — Common Questions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base font-body max-w-xl mx-auto" style={{ color: "rgba(12,26,46,0.6)" }}>
              Everything patients ask us before their procedure — answered honestly.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="ab-faq-item rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.18)" }}
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
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.q ? "max-h-40" : "max-h-0"}`}>
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

        {/* ── CTA ── */}
        <CtaCard
          icon={ShieldCheck}
          badgeText="Safe · Private · Legal"
          heading={["Ready to Take", "the Next Step?"]}
          description="Contact us now — we respond within minutes. Your first consultation is free, completely confidential, and judgment-free."
        />

      </div>
    </section>
  );
}
