import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HeartHandshake, ShieldCheck, Award, ArrowRight, Star, Users } from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Care" },
  { value: "15K+", label: "Patients Treated" },
  { value: "40+", label: "Countries Served" },
  { value: "98%", label: "Patient Satisfaction" },
];

export default function AboutHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ah-left > *",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out", delay: 0.15 }
      );
      gsap.fromTo(".ah-main-img",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(".ah-side-img",
        { opacity: 0, x: 30, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.55 }
      );
      gsap.fromTo(".ah-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out", delay: 0.75 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 50%, #E0F2FE 100%)" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[550px] h-[550px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%)", transform: "translate(-50%,-50%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)" }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(14,165,233,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 90%)",
        }}
      />

      <div className="container-main w-full pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">

          {/* ── LEFT ── */}
          <div className="ah-left flex-1 flex flex-col gap-5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.28)" }}
              >
                <HeartHandshake className="w-3.5 h-3.5" style={{ color: "#0284C7" }} />
                <span className="text-[11px] font-body font-semibold uppercase tracking-widest" style={{ color: "#0284C7" }}>
                  About Aashirwad
                </span>
              </div>
            </div>

            <h1 className="font-display font-semibold leading-tight text-4xl sm:text-5xl md:text-[3.3rem]" style={{ color: "#0C1A2E" }}>
              A Hospital Built On <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #38BDF8)" }}
              >
                Trust & Compassion.
              </span>
            </h1>

            <p className="text-sm sm:text-base font-body max-w-lg mx-auto lg:mx-0 leading-relaxed" style={{ color: "rgba(12,26,46,0.55)" }}>
              Aashirwad Health Centre is a government-registered MTP facility in New Delhi, dedicated to safe and confidential reproductive healthcare. For over a decade, we have welcomed patients from across India and around the world, offering certified medical care without judgment.
            </p>

            {/* Trust row */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-0.5">
                {[1,2,3,4,5].map((n) => <Star key={n} className="w-3.5 h-3.5" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />)}
              </div>
              <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.5)" }}>
                Rated 4.9/5 by patients from 40+ countries
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 max-w-lg mx-auto lg:mx-0 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl px-4 py-4 text-center transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.18)" }}
                >
                  <p className="font-display font-bold text-xl leading-none mb-1" style={{ color: "#0EA5E9" }}>{s.value}</p>
                  <p className="text-[10px] font-body uppercase tracking-wider" style={{ color: "rgba(12,26,46,0.5)" }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/918800905938"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                  boxShadow: "0 6px 24px rgba(14,165,233,0.35)",
                }}
              >
                <ShieldCheck className="w-4 h-4" />
                Talk to Us Today
              </a>
              <a
                href="#our-story"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(14,165,233,0.08)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  color: "#0284C7",
                }}
              >
                Our Story
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── RIGHT — Image collage ── */}
          <div className="flex-1 relative w-full max-w-md mx-auto" style={{ minHeight: "480px" }}>

            {/* Glow ring */}
            <div
              className="absolute top-1/2 left-1/2 w-[110%] h-[110%] pointer-events-none"
              style={{
                transform: "translate(-50%,-50%)",
                background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 65%)",
                filter: "blur(20px)",
              }}
            />

            {/* Main image */}
            <div
              className="ah-main-img absolute top-0 left-0 w-[78%] rounded-3xl overflow-hidden z-20"
              style={{
                height: "78%",
                border: "2px solid rgba(14,165,233,0.25)",
                boxShadow: "0 24px 60px rgba(14,165,233,0.15), 0 0 0 1px rgba(14,165,233,0.08)",
              }}
            >
              <img
                src="/images/clinic-interior.jpg"
                alt="Aashirwad Health Centre interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(219,234,254,0.5) 5%, transparent 45%)" }} />
            </div>

            {/* Secondary image */}
            <div
              className="ah-side-img absolute bottom-0 right-0 w-[58%] rounded-2xl overflow-hidden z-10"
              style={{
                height: "52%",
                border: "2px solid rgba(255,255,255,0.9)",
                boxShadow: "0 20px 45px rgba(14,165,233,0.2)",
              }}
            >
              <img
                src="/images/facility-reception.jpg"
                alt="Aashirwad reception area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(219,234,254,0.45) 10%, transparent 55%)" }} />
            </div>

            {/* Floating badge — registration */}
            <div
              className="ah-badge absolute z-30 flex items-center gap-3 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3"
              style={{
                top: "8%", left: "2%",
                background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(14,165,233,0.25)", boxShadow: "0 12px 30px rgba(14,165,233,0.15)",
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,233,0.1)" }}>
                <Award className="w-5 h-5" style={{ color: "#0EA5E9" }} />
              </div>
              <div>
                <p className="font-display font-semibold text-sm leading-none mb-1" style={{ color: "#0C1A2E" }}>Govt. Registered</p>
                <p className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>MTP DL/MTP/86/SED/2020</p>
              </div>
            </div>

            {/* Floating badge — patients */}
            <div
              className="ah-badge absolute z-30 flex items-center gap-3 rounded-2xl px-4 py-3"
              style={{
                bottom: "4%", right: "8%",
                background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                boxShadow: "0 12px 30px rgba(14,165,233,0.35)",
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.2)" }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-semibold text-white text-sm leading-none mb-1">15,000+</p>
                <p className="text-[10px] font-body text-white/80">Patients Cared For</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
