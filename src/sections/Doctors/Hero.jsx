import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ShieldCheck, Globe, Star, ArrowRight, MessageCircle } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rupali",
    role: "Senior Gynecologist & MTP Specialist",
    image: "/images/dr-shashi.jpg",
    tag: "Lead Surgeon",
    exp: "15+ Yrs",
    featured: true,
  },
  {
    name: "Dr. Asha Arora",
    role: "Anesthesiologist",
    image: "/images/dr-asha.jpg",
    tag: "Pain-Free Care",
    exp: "20+ Yrs",
    featured: false,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Reproductive Counselor",
    image: "/images/dr-counselor.jpg",
    tag: "Pre & Post Care",
    exp: "12+ Yrs",
    featured: false,
  },
];

const stats = [
  { value: "3", label: "Specialists" },
  { value: "50+", label: "Yrs Combined" },
  { value: "25+", label: "Countries Served" },
  { value: "15K+", label: "Patients Treated" },
];

export default function DoctorsHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content stagger
      gsap.fromTo(".dh-left > *",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out", delay: 0.15 }
      );
      // Main card
      gsap.fromTo(".dh-main-card",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out", delay: 0.3 }
      );
      // Side cards
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
      style={{ background: "linear-gradient(145deg, #050f18 0%, #071520 45%, #0a1e2e 100%)" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(113,187,178,0.07) 0%, transparent 65%)", transform: "translate(-50%,-50%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(39,68,93,0.25) 0%, transparent 65%)" }}
      />

      <div className="container-main w-full pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── LEFT ── */}
          <div className="dh-left flex-1 flex flex-col gap-5 text-center lg:text-left">

            {/* Eyebrow */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{ background: "rgba(113,187,178,0.1)", border: "1px solid rgba(113,187,178,0.25)" }}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-mint" />
                <span className="text-[11px] font-body font-semibold uppercase tracking-widest text-mint">
                  Our Medical Team
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display font-semibold text-white leading-tight text-4xl sm:text-5xl md:text-[3.2rem]">
              The Doctors Who <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #71BBB2, #a8e6df)" }}
              >
                Will Care for You.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base font-body max-w-lg mx-auto lg:mx-0 leading-relaxed" style={{ color: "rgba(239,233,213,0.55)" }}>
              Every member of our team is certified, experienced, and chosen for one reason — to make your experience safe, private, and completely judgment-free.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 max-w-lg mx-auto lg:mx-0 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl px-4 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(113,187,178,0.12)" }}
                >
                  <p className="font-display font-bold text-xl text-mint leading-none mb-1">{s.value}</p>
                  <p className="text-[10px] font-body uppercase tracking-wider" style={{ color: "rgba(239,233,213,0.4)" }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/911141590000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #71BBB2 0%, #3a7a72 100%)",
                  boxShadow: "0 6px 24px rgba(113,187,178,0.3)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Book Free Consultation
              </a>
              <a
                href="#our-team"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(113,187,178,0.08)",
                  border: "1px solid rgba(113,187,178,0.22)",
                  color: "#71BBB2",
                }}
              >
                Meet the Team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── RIGHT — Doctor Collage ── */}
          <div className="flex-1 flex items-center justify-center relative" style={{ minHeight: "520px" }}>

            {/* Glow behind main card */}
            <div
              className="absolute top-1/2 left-1/2 w-72 h-72 pointer-events-none"
              style={{
                transform: "translate(-50%,-50%)",
                background: "radial-gradient(circle, rgba(113,187,178,0.18) 0%, transparent 65%)",
                filter: "blur(24px)",
              }}
            />

            {/* Side card — Dr. Asha (left) */}
            <div
              className="dh-side-card absolute z-10"
              style={{ bottom: "10%", left: "2%", width: "185px", transform: "rotate(-3deg)" }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1.5px solid rgba(113,187,178,0.2)", background: "rgba(7,21,32,0.8)", backdropFilter: "blur(8px)" }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={doctors[1].image} alt={doctors[1].name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,21,32,0.7) 10%, transparent 60%)" }} />
                </div>
                <div className="px-3 py-3">
                  <p className="font-display font-semibold text-white text-xs">{doctors[1].name}</p>
                  <p className="text-[10px] font-body text-mint">{doctors[1].role}</p>
                  <span
                    className="inline-block mt-1.5 text-[9px] font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(113,187,178,0.12)", color: "#71BBB2", border: "1px solid rgba(113,187,178,0.2)" }}
                  >
                    {doctors[1].exp}
                  </span>
                </div>
              </div>
            </div>

            {/* Main card — Dr. Rupali (center) */}
            <div
              className="dh-main-card relative z-20"
              style={{ width: "240px" }}
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  border: "2px solid rgba(113,187,178,0.4)",
                  background: "linear-gradient(145deg, #0f2233, #071520)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(113,187,178,0.1)",
                }}
              >
                {/* Featured badge */}
                <div className="relative">
                  <div className="relative h-72 overflow-hidden">
                    <img src={doctors[0].image} alt={doctors[0].name} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #071520 10%, transparent 55%)" }} />
                    {/* Stars */}
                    <div className="absolute top-3 right-3 flex gap-0.5">
                      {[1,2,3,4,5].map(n => <Star key={n} className="w-3 h-3 fill-mint text-mint" />)}
                    </div>
                    {/* Globe badge */}
                    <div
                      className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-2.5 py-1"
                      style={{ background: "rgba(7,21,32,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(113,187,178,0.25)" }}
                    >
                      <Globe className="w-3 h-3 text-mint" />
                      <span className="text-[9px] font-body font-semibold text-white">25+ Countries</span>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <div
                    className="inline-block mb-2 text-[9px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                    style={{ background: "rgba(113,187,178,0.85)" }}
                  >
                    Lead Surgeon
                  </div>
                  <p className="font-display font-semibold text-white text-base">{doctors[0].name}</p>
                  <p className="text-[11px] font-body text-mint mb-2">{doctors[0].role}</p>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-mint" />
                    <span className="text-[10px] font-body" style={{ color: "rgba(239,233,213,0.5)" }}>Govt. Reg. MTP Specialist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Side card — Dr. Priya (right) */}
            <div
              className="dh-side-card absolute z-10"
              style={{ bottom: "10%", right: "2%", width: "185px", transform: "rotate(3deg)" }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1.5px solid rgba(113,187,178,0.2)", background: "rgba(7,21,32,0.8)", backdropFilter: "blur(8px)" }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={doctors[2].image} alt={doctors[2].name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,21,32,0.7) 10%, transparent 60%)" }} />
                </div>
                <div className="px-3 py-3">
                  <p className="font-display font-semibold text-white text-xs">{doctors[2].name}</p>
                  <p className="text-[10px] font-body text-mint">{doctors[2].role}</p>
                  <span
                    className="inline-block mt-1.5 text-[9px] font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(113,187,178,0.12)", color: "#71BBB2", border: "1px solid rgba(113,187,178,0.2)" }}
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
