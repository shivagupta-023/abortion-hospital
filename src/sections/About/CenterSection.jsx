import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, MapPin, Plane, ArrowRight } from "lucide-react";
import { useTransition } from "../../context/TransitionContext";
gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/images/facility-exterior.jpg", title: "Hospital Exterior", big: true },
  { src: "/images/facility-reception.jpg", title: "Reception Area" },
  { src: "/images/facility-consultation.jpg", title: "Consultation Rooms" },
  { src: "/images/facility-treatment.jpg", title: "Treatment Facilities" },
  { src: "/images/clinic-interior.jpg", title: "Recovery Suites" },
];

export default function CenterSection() {
  const sectionRef = useRef(null);
  const { navigateTo } = useTransition();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".center-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".center-header", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".center-tile",
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".center-mosaic", start: "top 78%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".center-strip",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: ".center-strip", start: "top 88%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="center-header text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Our Centre
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Step Inside Dr. Rupali's Hospital
          </h2>
          <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.6)" }}>
            Located in South Delhi, our centre blends medical-grade equipment with a calm, private atmosphere — built entirely for women's comfort, dignity, and care.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="center-mosaic grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {images.map((img) => (
            <div
              key={img.title}
              className={`center-tile relative rounded-2xl overflow-hidden group ${
                img.big ? "col-span-2 row-span-2" : "col-span-1"
              }`}
              style={{ aspectRatio: img.big ? "1/1" : "1/1" }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(7,21,32,0.75) 0%, rgba(7,21,32,0.1) 50%, transparent 70%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                  <p className={`font-body font-semibold text-white ${img.big ? "text-sm sm:text-base" : "text-[11px] sm:text-xs"}`}>
                    {img.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location strip */}
        <div
          className="center-strip rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.18)" }}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl items-center justify-center flex-shrink-0 hidden sm:flex" style={{ background: "rgba(14,165,233,0.12)" }}>
              <MapPin className="w-5 h-5" style={{ color: "#0EA5E9" }} />
            </div>
            <div>
              <p className="font-display font-semibold text-sm sm:text-base mb-1" style={{ color: "#0C1A2E" }}>
                New Delhi, India — Minutes from the International Airport
              </p>
              <p className="text-xs sm:text-sm font-body flex items-center justify-center sm:justify-start gap-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>
                <Plane className="w-3.5 h-3.5" style={{ color: "#0EA5E9" }} />
                Easy access for international patients, with full travel support on arrival.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateTo('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 6px 20px rgba(14,165,233,0.3)" }}
          >
            View Location
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
