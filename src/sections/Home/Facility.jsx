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
  return <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">
        <div className="facility-content">
          {
    /* Section Header */
  }
          <div className="text-center mb-7 md:mb-10">
            <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
              Our Space
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-4">
              Facility Showcase
            </h2>
            <p className="text-sm sm:text-base font-body text-teal/60 max-w-2xl mx-auto">
              Designed for comfort, privacy, and world-class medical care. Every detail ensures a serene, dignified experience.
            </p>
          </div>

          {
    /* Carousel */
  }
          <div className="relative max-w-5xl mx-auto">
            {
    /* Main Image */
  }
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass">
              {facilities.map((f, i) => <div
    key={f.title}
    className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
  >
                  <img
    src={f.image}
    alt={f.title}
    className="w-full h-full object-cover"
  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal/70 via-transparent to-transparent" />
                </div>)}

              {
    /* Info overlay */
  }
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-mint/30 flex items-center justify-center">
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

              {
    /* Navigation arrows */
  }
              <button
    onClick={prev}
    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-white/40 transition-colors"
  >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
              <button
    onClick={next}
    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-white/40 transition-colors"
  >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>

            {
    /* Thumbnails */
  }
            <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-5">
              {facilities.map((f, i) => <button
    key={f.title}
    onClick={() => setCurrent(i)}
    className={`relative w-14 h-10 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-300 ${i === current ? "ring-2 ring-mint ring-offset-2 scale-105" : "opacity-50 hover:opacity-80"}`}
  >
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                </button>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
