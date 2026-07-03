import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Car, Home, UtensilsCrossed, FileText, Headphones, PlaneTakeoff, HeartHandshake, ArrowRight, ChevronDown } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FileText, num: "01",
    title: "Visa Invitation Letter",
    subheading: "Fast-track your Indian medical visa",
    desc: "Issued same day — needed for your India medical visa application.",
    detail: "We generate your official hospital invitation letter the same day you request it. Accepted by Indian embassies worldwide, it fast-tracks your medical visa so you can travel without delay.",
    img: "/images/facility-consultation.jpg",
  },
  {
    icon: Car, num: "02",
    title: "Airport Pickup",
    subheading: "Your driver, waiting at arrivals",
    desc: "Private driver waiting at arrivals — zero waiting, zero stress.",
    detail: "A dedicated driver greets you by name at the arrivals exit. No cab hunting, no language barriers — just a comfortable, air-conditioned ride straight to the hospital or guest house.",
    img: "/images/facility-exterior.jpg",
  },
  {
    icon: Home, num: "03",
    title: "Guest House Stay",
    subheading: "A comfortable home near the hospital",
    desc: "Private, clean accommodation minutes from the hospital.",
    detail: "Our partner guest houses are steps from the hospital — fully furnished, hygienically maintained, and available for family members accompanying the patient.",
    img: "/images/clinic-interior.jpg",
  },
  {
    icon: UtensilsCrossed, num: "04",
    title: "Fresh Meals",
    subheading: "Nutritious meals tailored for recovery",
    desc: "Healthy vegetarian meals provided throughout your stay.",
    detail: "Freshly prepared vegetarian meals delivered to your room — cooked with recovery in mind and adjusted to your dietary preferences and cultural background.",
    img: "/images/facility-reception.jpg",
  },
  {
    icon: Headphones, num: "05",
    title: "Dedicated Coordinator",
    subheading: "One call away, around the clock",
    desc: "Your personal liaison available 24/7 from booking to departure.",
    detail: "Your coordinator handles appointments, translations, billing queries, and any urgent need — reachable on WhatsApp and phone 24 hours a day throughout your entire stay.",
    img: "/images/dr-counselor.jpg",
  },
  {
    icon: PlaneTakeoff, num: "06",
    title: "Airport Drop",
    subheading: "A safe, comfortable send-off",
    desc: "Private transfer back to the airport after your follow-up.",
    detail: "Once your post-procedure follow-up is complete and the doctor clears you to travel, we arrange a comfortable private vehicle to take you back to the airport on time.",
    img: "/images/facility-exterior.jpg",
  },
  {
    icon: HeartHandshake, num: "07",
    title: "Post-Treatment Support",
    subheading: "We stay with you after discharge",
    desc: "WhatsApp follow-up care after you return home.",
    detail: "Our care team checks in with you via WhatsApp after you return home — monitoring recovery, answering questions, and connecting you with the treating doctor if needed.",
    img: "/images/patient-couple.jpg",
  },
];

const highlights = [
  { value: "500+", label: "International Patients" },
  { value: "25+",  label: "Countries Served"       },
  { value: "2",    label: "Days, Complete Care"    },
];

export default function ConciergeSection() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(null);
  const [openMobile, setOpenMobile] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cfg = { trigger: sectionRef.current, start: "top 72%", toggleActions: "play none none reverse" };
      gsap.fromTo(".conc-default > *",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: cfg }
      );
      gsap.fromTo(".conc-row",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: "power2.out", scrollTrigger: cfg }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const active = activeIdx !== null ? services[activeIdx] : null;

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 w-full"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 55%, #E0F2FE 100%)" }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-5 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="conc-left lg:col-span-2 lg:sticky lg:top-24">
            <div className="relative lg:min-h-[500px]">

              {/* DEFAULT CONTENT */}
              <div
                className="conc-default lg:absolute lg:inset-0 transition-opacity duration-500"
                style={{ opacity: active ? 0 : 1, pointerEvents: active ? "none" : "auto" }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                  style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.28)" }}
                >
                  <HeartHandshake className="w-3.5 h-3.5" style={{ color: "#0284C7" }} />
                  <span className="text-[11px] font-body tracking-widest font-semibold uppercase" style={{ color: "#0284C7" }}>
                    Premium Concierge
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] font-semibold mb-4 leading-tight" style={{ color: "#0C1A2E" }}>
                  We Take Care
                  <br />
                  of{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #38BDF8)" }}
                  >
                    Everything
                  </span>
                </h2>

                <p className="text-sm font-body leading-relaxed mb-8" style={{ color: "rgba(12,26,46,0.6)" }}>
                  From your first WhatsApp message to your safe flight home — every arrangement is handled by our international patient team. You just focus on your health.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-8">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-xl py-3 px-2 text-center"
                      style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(14,165,233,0.18)" }}
                    >
                      <div
                        className="font-display font-bold text-xl mb-0.5"
                        style={{ background: "linear-gradient(90deg, #0EA5E9, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                      >
                        {h.value}
                      </div>
                      <p className="text-[10px] font-body leading-tight" style={{ color: "rgba(12,26,46,0.5)" }}>
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/918800905938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 4px 20px rgba(14,165,233,0.3)" }}
                >
                  <Headphones className="w-4 h-4" />
                  Talk to Our Coordinator
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* SERVICE PREVIEW (desktop hover only) */}
              <div
                className="hidden lg:block lg:absolute lg:inset-0 transition-opacity duration-500"
                style={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }}
              >
                {services.map((s, idx) => (
                  <div
                    key={s.num}
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ opacity: activeIdx === idx ? 1 : 0 }}
                  >
                    <div className="relative rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: "16/10" }}>
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(2,132,199,0.7) 0%, rgba(2,132,199,0.1) 60%, transparent 100%)" }}
                      />
                      <span
                        className="absolute bottom-3 right-4 font-display font-black text-5xl leading-none select-none"
                        style={{ color: "rgba(14,165,233,0.4)" }}
                      >
                        {s.num}
                      </span>
                    </div>

                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3"
                      style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)" }}
                    >
                      <s.icon className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                      <span className="text-[10px] font-body font-semibold uppercase tracking-widest" style={{ color: "#0284C7" }}>
                        Step {s.num}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl mb-1.5 leading-tight" style={{ color: "#0C1A2E" }}>
                      {s.title}
                    </h3>

                    <p className="font-body text-sm font-semibold mb-3" style={{ color: "#0EA5E9" }}>
                      {s.subheading}
                    </p>

                    <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN — service list */}
          <div className="lg:col-span-3">
            {services.map((s, idx) => (
              <div key={s.num}>

                <div
                  className={`conc-row group flex items-start gap-4 py-5 transition-all duration-200 -mx-3 px-3 rounded-xl cursor-pointer ${activeIdx === idx ? "bg-[rgba(14,165,233,0.06)]" : "hover:bg-[rgba(14,165,233,0.03)]"}`}
                  style={{
                    borderBottom:
                      idx < services.length - 1 && openMobile !== idx
                        ? "1px solid rgba(14,165,233,0.15)"
                        : "none",
                  }}
                  onMouseEnter={() => { if (window.innerWidth >= 1024) setActiveIdx(idx); }}
                  onMouseLeave={() => { if (window.innerWidth >= 1024) setActiveIdx(null); }}
                  onClick={() => setOpenMobile(openMobile === idx ? null : idx)}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: activeIdx === idx ? "rgba(14,165,233,0.18)" : "rgba(14,165,233,0.1)",
                      border: "1px solid rgba(14,165,233,0.2)",
                    }}
                  >
                    <s.icon className="w-[18px] h-[18px]" style={{ color: "#0EA5E9" }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-display font-semibold text-sm sm:text-base mb-1 transition-colors duration-200"
                      style={{ color: activeIdx === idx ? "#0EA5E9" : "#0C1A2E" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.5)" }}>
                      {s.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0 mt-1">
                    <span
                      className="font-display font-black text-3xl leading-none select-none transition-opacity duration-300"
                      style={{ color: "#0EA5E9", opacity: activeIdx === idx ? 0.7 : 0.25 }}
                    >
                      {s.num}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 lg:hidden transition-transform duration-300 ${openMobile === idx ? "rotate-180" : ""}`}
                      style={{ color: "#0EA5E9" }}
                    />
                  </div>
                </div>

                {/* Mobile accordion */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${openMobile === idx ? "max-h-[440px] opacity-100" : "max-h-0 opacity-0"}`}
                  style={{ borderBottom: idx < services.length - 1 ? "1px solid rgba(14,165,233,0.15)" : "none" }}
                >
                  <div className="pb-4 pt-1">
                    <div className="relative rounded-2xl overflow-hidden mb-3" style={{ aspectRatio: "16/9" }}>
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(2,132,199,0.8) 0%, rgba(2,132,199,0.15) 55%, transparent 100%)" }}
                      />
                      <span
                        className="absolute top-3 right-4 font-display font-black text-6xl leading-none select-none"
                        style={{ color: "rgba(14,165,233,0.2)" }}
                      >
                        {s.num}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div
                          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-2"
                          style={{ background: "rgba(14,165,233,0.18)", border: "1px solid rgba(14,165,233,0.3)" }}
                        >
                          <s.icon className="w-3 h-3" style={{ color: "#38BDF8" }} />
                          <span className="text-[9px] font-body font-semibold uppercase tracking-widest" style={{ color: "#38BDF8" }}>
                            Step {s.num}
                          </span>
                        </div>
                        <p className="font-body text-sm font-semibold leading-snug" style={{ color: "#38BDF8" }}>
                          {s.subheading}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-body leading-relaxed px-1" style={{ color: "rgba(12,26,46,0.65)" }}>
                      {s.detail}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
