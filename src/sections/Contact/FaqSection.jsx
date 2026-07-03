import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, MessageCircle, HeartPulse, Users, Plane, HelpCircle } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: "general",
    label: "General",
    icon: MessageCircle,
    faqs: [
      {
        q: "How quickly will you respond?",
        a: "We reply on WhatsApp within a few hours, wherever you are writing from.",
      },
      {
        q: "What are your timings?",
        a: "Mon–Sat, 8 AM to 8 PM, with 24/7 emergency support.",
      },
      {
        q: "Do I need a referral to book?",
        a: "No referral is needed — you can contact us directly.",
      },
      {
        q: "Which languages can I communicate in?",
        a: "Our team assists in multiple languages, including English and Hindi.",
      },
      {
        q: "Is my enquiry confidential?",
        a: "Yes, every message is private and your details are never shared.",
      },
      {
        q: "Where is the hospital located?",
        a: "35A, Main Suraj Kund Road, Pul Prahladpur, New Delhi – 110044.",
      },
    ],
  },
  {
    id: "abortion",
    label: "Abortion",
    icon: HeartPulse,
    faqs: [
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
    ],
  },
  {
    id: "doctors",
    label: "Our Doctors",
    icon: Users,
    faqs: [
      {
        q: "Who performs the abortion procedure?",
        a: "All procedures are performed by experienced, fully qualified female gynaecologists led by Dr. Rupali Mishra — our Founder and Consultant Sonologist and Physician with 15+ years of practice.",
      },
      {
        q: "Is the staff all-female?",
        a: "Yes. Our team is entirely female — from the doctors and anaesthesiologist to the nursing and support staff — ensuring complete comfort and privacy for every patient.",
      },
      {
        q: "Are the doctors registered with the Medical Council?",
        a: "Yes. All our doctors are registered with the Medical Council of India, and our centre holds the government registration DL/MTP/86/SED/2020 under the MTP Act.",
      },
      {
        q: "Who is Dr. Rupali Mishra?",
        a: "Dr. Rupali Mishra is the Founder & Owner of the clinic. Holding M.B.B.S and PGDIP (SON), she is a Consultant Sonologist and Physician, a feminist, and a reproductive rights advocate who filed the landmark Supreme Court case allowing unmarried women to access abortion up to 24 weeks.",
      },
      {
        q: "Is a video consultation available?",
        a: "Yes. We offer confidential video consultations for patients who cannot visit in person, including international patients. Contact us on WhatsApp to schedule one.",
      },
    ],
  },
  {
    id: "journey",
    label: "Patient Journey",
    icon: Plane,
    faqs: [
      {
        q: "Will I receive a visa invitation letter?",
        a: "Yes. We issue a Medical Invitation Letter the same day as your online consultation, which you can use to apply for an India medical visa.",
      },
      {
        q: "Is airport pickup arranged?",
        a: "Yes. A private driver will be waiting for you at the airport on arrival — at no extra charge.",
      },
      {
        q: "Is guest house accommodation provided?",
        a: "Yes. We arrange a comfortable, private guest house stay near the clinic for the duration of your visit.",
      },
      {
        q: "Are meals included during my stay?",
        a: "Yes. Fresh, home-cooked meals are arranged for you throughout your stay.",
      },
      {
        q: "Will I have a dedicated coordinator?",
        a: "Yes. A personal coordinator is assigned to you from the moment you contact us — guiding you through every step, including visa, travel, appointments, and follow-up.",
      },
      {
        q: "What documents do I need as an international patient?",
        a: "A valid passport and any relevant ID proof. Our coordinator handles all clinic paperwork and formalities on your behalf.",
      },
      {
        q: "Can someone accompany me?",
        a: "Absolutely. You are welcome to bring a partner, friend, or family member. We can arrange accommodation and transportation for them as well.",
      },
      {
        q: "Is there a follow-up scan before I leave?",
        a: "Yes. A follow-up ultrasound scan is conducted before your departure to confirm safe and complete recovery.",
      },
    ],
  },
];

export default function ContactFaqSection() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("general");
  const [openFaq, setOpenFaq] = useState(null);

  const currentTab = tabs.find((t) => t.id === activeTab);

  useEffect(() => {
    setOpenFaq(null);
  }, [activeTab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".cfaq-item",
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: "power2.out" }
    );
  }, [activeTab]);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "#EFF6FF" }}>
      <div className="container-main max-w-4xl">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4"
            style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.22)" }}
          >
            <HelpCircle className="w-4 h-4" style={{ color: "#0EA5E9" }} />
            <span className="text-xs font-body tracking-wide font-semibold uppercase" style={{ color: "#0284C7" }}>
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-3" style={{ color: "#0C1A2E" }}>
            Questions? We Have Answers.
          </h2>
          <p className="text-sm sm:text-base font-body max-w-xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            Browse by topic — every answer is honest, clear, and judgment-free.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-body font-semibold transition-all duration-300"
                style={
                  isActive
                    ? {
                        background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                        color: "#fff",
                        boxShadow: "0 4px 16px rgba(14,165,233,0.35)",
                      }
                    : {
                        background: "rgba(255,255,255,0.85)",
                        color: "rgba(12,26,46,0.65)",
                        border: "1px solid rgba(14,165,233,0.2)",
                      }
                }
              >
                <tab.icon className="w-3.5 h-3.5 flex-shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* FAQ list */}
        <div className="space-y-2.5">
          {currentTab.faqs.map((faq) => (
            <div
              key={faq.q}
              className="cfaq-item rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-md"
              style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(14,165,233,0.16)" }}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
              >
                <span className="font-display font-medium text-sm sm:text-[15px] pr-4 leading-snug" style={{ color: "#0C1A2E" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === faq.q ? "rotate-180" : ""}`}
                  style={{ color: "#0EA5E9" }}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.q ? "max-h-48" : "max-h-0"}`}>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <div className="h-px mb-3" style={{ background: "rgba(14,165,233,0.18)" }} />
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
