import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, Armchair, Stethoscope, HeartPulse, Headset, ChevronLeft, ChevronRight } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const facilities = [
  { image: "/images/facility-exterior.jpg", title: "Hospital Exterior", icon: Building, desc: "Modern, welcoming facade with discrete private entry" },
  { image: "/images/facility-reception.jpg", title: "Reception Area", icon: Armchair, desc: "Elegant, comfortable waiting with complete privacy" },
  { image: "/images/facility-consultation.jpg", title: "Consultation Rooms", icon: Stethoscope, desc: "Private, soundproofed rooms for confidential discussions" },
  { image: "/images/facility-treatment.jpg", title: "Treatment Facilities", icon: HeartPulse, desc: "State-of-the-art equipment in sterile, modern theaters" },
  { image: "/images/clinic-interior.jpg", title: "Recovery Suites", icon: Headset, desc: "Comfortable, serene spaces for post-procedure rest" }
];
export default function Facility() {
  const sectionRef = useRef(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".facility-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
  const next = () => setCurrent((c) => (c + 1) % facilities.length);
  const prev = () => setCurrent((c) => (c - 1 + facilities.length) % facilities.length);
  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)" }}>
      <div className="container-main">
        <div className="facility-content">
          <div className="text-center mb-7 md:mb-10">
            <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
              Our Space
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
              Step Inside Dr. Rupali's Hospital
            </h2>
            <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.6)" }}>
              Designed for comfort, privacy, and women-centric medical care. Every detail ensures a calm, dignified experience from arrival to discharge.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div
              className="relative aspect-[16/9] rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(14,165,233,0.2)", backdropFilter: "blur(8px)" }}
            >
              {facilities.map((f, i) => (
                <div
                  key={f.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                >
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,26,46,0.7)] via-transparent to-transparent" />
                </div>
              ))}

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(14,165,233,0.25)" }}>
                    {(() => {
                      const Icon = facilities[current].icon;
                      return <Icon className="w-4 h-4 text-white" />;
                    })()}
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg sm:text-xl">
                    {facilities[current].title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-body text-white/80">
                  {facilities[current].desc}
                </p>
              </div>

              <button
                onClick={prev}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.2)" }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.2)" }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>

            <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-5">
              {facilities.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setCurrent(i)}
                  className={`relative w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all duration-300 ${i === current ? "ring-2 ring-[#0EA5E9] ring-offset-2 scale-105" : "opacity-50 hover:opacity-80"}`}
                >
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
