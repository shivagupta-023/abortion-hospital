import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, BookOpen, Globe2, Building2, Heart, Clock, Sparkles, Zap } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const reasons = [
  { icon: Users, title: "Experienced Medical Team", desc: "Board-certified specialists with decades of combined experience in reproductive healthcare." },
  { icon: BookOpen, title: "Evidence-Based Care", desc: "All treatments follow WHO and ICMR guidelines, backed by the latest medical research." },
  { icon: Globe2, title: "International Experience", desc: "Trusted by patients from 40+ countries. We understand diverse cultural and medical needs." },
  { icon: Building2, title: "Modern Facilities", desc: "State-of-the-art equipment, sterile operation theaters, and comfortable recovery suites." },
  { icon: Heart, title: "Compassionate Support", desc: "Emotional support counselors available throughout your journey with complete empathy." },
  { icon: Clock, title: "Fast Appointments", desc: "Same-day or next-day appointment availability. Minimal waiting times guaranteed." },
  { icon: Sparkles, title: "Personalized Plans", desc: "Every patient receives a customized treatment plan tailored to their unique needs." },
  { icon: Zap, title: "24/7 Emergency Care", desc: "Round-the-clock medical support and emergency services always available." }
];
export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reason-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
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
  return <section ref={sectionRef} className="section-padding bg-cream/20">
      <div className="container-main">
        {
    /* Section Header */
  }
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            Our Advantage
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-4">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base font-body text-teal/60 max-w-2xl mx-auto">
            We combine medical excellence with compassionate care to provide an experience that prioritizes your health, privacy, and dignity.
          </p>
        </div>

        {
    /* Grid */
  }
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reasons.map((r, i) => <div
    key={i}
    className="reason-card glass rounded-xl p-5 sm:p-6 group hover:shadow-glass transition-all duration-300 hover:-translate-y-1"
  >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-mint/10 flex items-center justify-center mb-3 group-hover:bg-mint group-hover:scale-110 transition-all duration-300">
                <r.icon className="w-5 h-5 text-mint group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-teal text-sm sm:text-base mb-2">
                {r.title}
              </h3>
              <p className="text-xs sm:text-sm font-body text-teal/60 leading-relaxed">
                {r.desc}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}
