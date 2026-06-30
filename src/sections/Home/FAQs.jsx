import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Is abortion legal in India?",
    a: "Yes. Abortion is legal in India under the Medical Termination of Pregnancy (MTP) Act, which permits procedures up to 24 weeks under specific conditions. Our clinic is government-registered (DL/MTP/86/SED/2020) and operates fully within Indian law."
  },
  {
    q: "How long should I stay in India?",
    a: "Most international patients stay for 2 days. Day 1 covers your consultation, tests, ultrasound, and procedure. Day 2 is for your follow-up scan to confirm safe recovery. After clearance from the doctor, you are free to fly home."
  },
  {
    q: "How quickly can I get a medical visa?",
    a: "We issue a Medical Invitation Letter the same day as your online consultation. With this letter you can apply for an India medical visa, which is typically processed within 3–5 business days. Our coordinator guides you through the entire visa process."
  },
  {
    q: "Is airport pickup included?",
    a: "Yes. A private driver will be waiting for you at the airport on your arrival. We arrange all ground transportation — airport pickup, hospital transfers, guest house drop, and airport drop on departure — at no extra charge."
  },
  {
    q: "Can someone accompany me?",
    a: "Absolutely. You are welcome to bring a partner, friend, or family member. We can arrange accommodation for your companion at the guest house and include them in all transportation. Just inform our coordinator when booking."
  },
  {
    q: "Is my treatment completely confidential?",
    a: "Yes. Patient privacy is protected at every stage. Your records are not shared with anyone without your explicit consent. We have a discreet clinic entrance, private consultation rooms, and strict data security protocols."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept international bank transfers, credit/debit cards (Visa, Mastercard), and cash in INR or USD. Payment details are shared securely by your coordinator after consultation. No advance payment is required to book."
  },
  {
    q: "How soon can I fly back after the procedure?",
    a: "Most patients are cleared to fly home on Day 2, after their follow-up scan. The doctor will confirm fitness to travel based on your individual recovery. Short-haul and long-haul flights are both typically permitted within 24–48 hours."
  }
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
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 text-mint" />
            <span className="text-xs font-body text-teal/70 tracking-wide">International Patients — Common Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base font-body text-teal/60 max-w-xl mx-auto">
            Everything you need to know before traveling to India for care.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="faq-item glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glass"
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
              <div
                className={`overflow-hidden transition-all duration-300 ${openFaq === faq.q ? "max-h-64" : "max-h-0"}`}
              >
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
    </section>
  );
}
