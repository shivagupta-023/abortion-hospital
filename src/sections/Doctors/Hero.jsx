import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShieldCheck, Globe, Star, ArrowRight, MessageCircle } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rupali Mishra",
    role: "Founder & Sonologist",
    image: "/doctors/dr-rupali.jpeg",
    tag: "Founder",
    exp: "15+ Yrs",
    featured: true,
  },
  {
    name: "Dr. Shwetta Guptta",
    role: "Senior Consultant IVF",
    image: "/doctors/dr-swetta.webp",
    tag: "IVF Specialist",
    exp: "12+ Yrs",
    featured: false,
  },
  {
    name: "Dr. Akanksha Chauhan",
    role: "Gynaecologist & Obstetrics",
    image: "/doctors/Dr-Akansha.jpg",
    tag: "Gynaecologist",
    exp: "10+ Yrs",
    featured: false,
  },
];

const stats = [
  { value: "5",    label: "Specialists"      },
  { value: "65+", label: "Yrs Combined"     },
  { value: "25+", label: "Countries Served" },
  { value: "15K+", label: "Patients Treated" },
];

export default function DoctorsHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".dh-left > *",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out", delay: 0.15 }
      );
      gsap.fromTo(".dh-main-card",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(".dh-side-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out", delay: 0.5 }
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
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 65%)", transform: "translate(-50%,-50%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)" }}
      />

      <div className="container-main w-full pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── LEFT ── */}
          <div className="dh-left flex-1 flex flex-col gap-5 text-center lg:text-left">

            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.28)" }}
              >
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#0284C7" }} />
                <span className="text-[11px] font-body font-semibold uppercase tracking-widest" style={{ color: "#0284C7" }}>
                  Our Medical Team
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display font-semibold leading-tight text-4xl sm:text-5xl md:text-[3.2rem]" style={{ color: "#0C1A2E" }}>
              The Doctors Who <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #38BDF8)" }}
              >
                Will Care for You.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base font-body max-w-lg mx-auto lg:mx-0 leading-relaxed" style={{ color: "rgba(12,26,46,0.55)" }}>
              Every member of our team is certified, experienced, and chosen for one reason — to make your experience safe, private, and completely judgment-free.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 max-w-lg mx-auto lg:mx-0 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl px-4 py-4 text-center"
                  style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.18)" }}
                >
                  <p className="font-display font-bold text-xl leading-none mb-1" style={{ color: "#0EA5E9" }}>{s.value}</p>
                  <p className="text-[10px] font-body uppercase tracking-wider" style={{ color: "rgba(12,26,46,0.5)" }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
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
                <MessageCircle className="w-4 h-4" />
                Book Free Consultation
              </a>
              <a
                href="#our-team"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(14,165,233,0.08)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  color: "#0284C7",
                }}
              >
                Meet the Team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── RIGHT — Doctor Collage ── */}
          <div className="flex-1 flex items-center justify-center relative min-h-[420px] lg:min-h-[520px]">

            {/* Glow behind main card */}
            <div
              className="absolute top-1/2 left-1/2 w-72 h-72 pointer-events-none"
              style={{
                transform: "translate(-50%,-50%)",
                background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 65%)",
                filter: "blur(24px)",
              }}
            />

            {/* Side card — Dr. Shwetta (left) — hidden on mobile */}
            <div
              className="dh-side-card absolute z-10 hidden lg:block"
              style={{ bottom: "10%", left: "2%", width: "185px", transform: "rotate(-3deg)" }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1.5px solid rgba(14,165,233,0.25)", background: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)", boxShadow: "0 8px 24px rgba(14,165,233,0.15)" }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={doctors[1].image} alt={doctors[1].name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(219,234,254,0.6) 10%, transparent 60%)" }} />
                </div>
                <div className="px-3 py-3">
                  <p className="font-display font-semibold text-xs" style={{ color: "#0C1A2E" }}>{doctors[1].name}</p>
                  <p className="text-[10px] font-body" style={{ color: "#0EA5E9" }}>{doctors[1].role}</p>
                  <span
                    className="inline-block mt-1.5 text-[9px] font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(14,165,233,0.1)", color: "#0284C7", border: "1px solid rgba(14,165,233,0.2)" }}
                  >
                    {doctors[1].exp}
                  </span>
                </div>
              </div>
            </div>

            {/* Main card — Dr. Rupali Mishra (center) */}
            <div className="dh-main-card relative z-20" style={{ width: "240px" }}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  border: "2px solid rgba(14,165,233,0.35)",
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 24px 60px rgba(14,165,233,0.2), 0 0 0 1px rgba(14,165,233,0.1)",
                }}
              >
                <div className="relative">
                  <div className="relative h-72 overflow-hidden">
                    <img src={doctors[0].image} alt={doctors[0].name} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(219,234,254,0.7) 10%, transparent 55%)" }} />
                    {/* Stars */}
                    <div className="absolute top-3 right-3 flex gap-0.5">
                      {[1,2,3,4,5].map(n => <Star key={n} className="w-3 h-3" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />)}
                    </div>
                    {/* Globe badge */}
                    <div
                      className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-2.5 py-1"
                      style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.25)" }}
                    >
                      <Globe className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                      <span className="text-[9px] font-body font-semibold" style={{ color: "#0C1A2E" }}>25+ Countries</span>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <div
                    className="inline-block mb-2 text-[9px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                    style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
                  >
                    Lead Surgeon
                  </div>
                  <p className="font-display font-semibold text-base" style={{ color: "#0C1A2E" }}>{doctors[0].name}</p>
                  <p className="text-[11px] font-body mb-2" style={{ color: "#0EA5E9" }}>{doctors[0].role}</p>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                    <span className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>Founder and Sonologist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Side card — Dr. Akanksha (right) — hidden on mobile */}
            <div
              className="dh-side-card absolute z-10 hidden lg:block"
              style={{ bottom: "10%", right: "2%", width: "185px", transform: "rotate(3deg)" }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1.5px solid rgba(14,165,233,0.25)", background: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)", boxShadow: "0 8px 24px rgba(14,165,233,0.15)" }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={doctors[2].image} alt={doctors[2].name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(219,234,254,0.6) 10%, transparent 60%)" }} />
                </div>
                <div className="px-3 py-3">
                  <p className="font-display font-semibold text-xs" style={{ color: "#0C1A2E" }}>{doctors[2].name}</p>
                  <p className="text-[10px] font-body" style={{ color: "#0EA5E9" }}>{doctors[2].role}</p>
                  <span
                    className="inline-block mt-1.5 text-[9px] font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(14,165,233,0.1)", color: "#0284C7", border: "1px solid rgba(14,165,233,0.2)" }}
                  >
                    {doctors[2].exp}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
