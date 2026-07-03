// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Phone, MessageCircle, Calendar, ArrowDown } from "lucide-react";
// gsap.registerPlugin(ScrollTrigger);
// export default function Hero() {
//   const sectionRef = useRef(null);
//   const panelsRef = useRef(null);
//   const contentRef = useRef(null);
//   const video1Ref = useRef(null);
//   const video2Ref = useRef(null);
//   const video3Ref = useRef(null);
//   useEffect(() => {
//     [video1Ref, video2Ref, video3Ref].forEach((ref) => {
//       if (ref.current) {
//         ref.current.play().catch(() => {
//         });
//       }
//     });
//     const ctx = gsap.context(() => {
//       const panels = panelsRef.current;
//       if (!panels) return;
//       const panelEls = panels.querySelectorAll(".hero-panel");
//       gsap.to(panelEls[0], {
//         x: "-100%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=100vh",
//           scrub: 1,
//           pin: false
//         }
//       });
//       gsap.to(panelEls[2], {
//         x: "100%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=100vh",
//           scrub: 1,
//           pin: false
//         }
//       });
//       gsap.to(contentRef.current, {
//         opacity: 0,
//         y: -50,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=60vh",
//           scrub: 1
//         }
//       });
//       gsap.to(sectionRef.current, {
//         opacity: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=120vh",
//           scrub: 1,
//           onLeave: () => {
//             if (sectionRef.current) {
//               sectionRef.current.style.pointerEvents = "none";
//             }
//           },
//           onEnterBack: () => {
//             if (sectionRef.current) {
//               sectionRef.current.style.pointerEvents = "auto";
//               sectionRef.current.style.opacity = "1";
//             }
//           }
//         }
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);
//   return <section
//     id="hero"
//     ref={sectionRef}
//     className="relative h-screen w-full overflow-hidden"
//   >
//       {
//     /* Three Video Panels */
//   }
//       <div ref={panelsRef} className="absolute inset-0 flex">
//         {
//     /* Left Panel */
//   }
//         <div className="hero-panel absolute left-0 top-0 w-1/3 h-full overflow-hidden">
//           <video
//     ref={video1Ref}
//     src="/videos/hero-top.mp4"
//     muted
//     loop
//     playsInline
//     className="w-full h-full object-cover"
//     style={{ filter: "sepia(20%) saturate(80%) brightness(1.1)" }}
//   />
//           <div className="absolute inset-0 bg-cream/20" />
//         </div>

//         {
//     /* Center Panel */
//   }
//         <div className="hero-panel absolute left-1/3 top-0 w-1/3 h-full overflow-hidden">
//           <video
//     ref={video2Ref}
//     src="/videos/hero-mid.mp4"
//     muted
//     loop
//     playsInline
//     className="w-full h-full object-cover"
//     style={{ filter: "sepia(10%) saturate(90%) brightness(1.05)" }}
//   />
//           <div className="absolute inset-0 bg-mint/10" />
//         </div>

//         {
//     /* Right Panel */
//   }
//         <div className="hero-panel absolute right-0 top-0 w-1/3 h-full overflow-hidden">
//           <video
//     ref={video3Ref}
//     src="/videos/hero-bottom.mp4"
//     muted
//     loop
//     playsInline
//     className="w-full h-full object-cover"
//     style={{ filter: "sepia(15%) saturate(85%) brightness(1.08)" }}
//   />
//           <div className="absolute inset-0 bg-teal/10" />
//         </div>

//         {
//     /* Overall overlay gradient */
//   }
//         <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60 pointer-events-none" />
//       </div>

//       {
//     /* Hero Content */
//   }
//       <div
//     ref={contentRef}
//     className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
//   >
//         {
//     /* Glass strip behind text */
//   }
//         <div className="glass rounded-3xl px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12 max-w-4xl text-center">
//           <p className="text-xs sm:text-sm font-body font-medium tracking-[0.3em] uppercase text-mint mb-4 sm:mb-6">
//             Government Registered MTP Hospital · New Delhi, India
//           </p>
//           <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-teal leading-tight mb-4 sm:mb-6">
//             Safe & Legal Abortion Care
//             <br />
//             in India for
//             <br />
//             <span className="text-mint md:text-[40px]">International Patients</span>
//           </h1>
//           <p className="text-sm sm:text-base md:text-[16px] font-body text-teal/70 max-w-2xl mx-auto mb-6 sm:mb-8">
//             Government Registered MTP Hospital in New Delhi providing safe, legal abortion care up to 24 weeks, with complete travel assistance including visa support, airport transfers, accommodation, meals, and post-treatment care.
//           </p>

//           {
//     /* CTA Buttons */
//   }
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
//             <a
//     href="#contact"
//     className="glass-btn-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-body font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
//   >
//               <Calendar className="w-4 h-4" />
//               Book Online Consultation
//             </a>
//             <a
//     href="https://wa.me/918800905938"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="glass-btn-mint text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-body font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
//   >
//               <MessageCircle className="w-4 h-4" />
//               Talk to International Patient Coordinator
//             </a>
//           </div>
//         </div>

//         {
//     /* Scroll indicator */
//   }
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
//           <span className="text-xs font-body text-teal/50 tracking-widest uppercase">Scroll</span>
//           <ArrowDown className="w-4 h-4 text-teal/50" />
//         </div>
//       </div>
//     </section>;
// }





import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Calendar, ArrowDown, ShieldCheck, Globe, Star } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "500+", label: "Int'l Patients" },
  { value: "25+",  label: "Countries"      },
  { value: "24W",  label: "Max Care"       },
  { value: "15+",  label: "Yrs Experience" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── ENTRANCE timeline ── */
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(".hero-badge",
        { opacity: 0, y: -18 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
      .fromTo(".hero-line",
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.12, ease: "power2.out" },
        "-=0.15"
      )
      .fromTo(".hero-stat",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
        "-=0.1"
      );

      /* ── IMAGE entrance ── */
      gsap.fromTo(".hero-img",
        { opacity: 0, x: 55, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power2.out", delay: 0.35 }
      );

      /* ── FLOATING cards entrance ── */
      gsap.fromTo(".hero-float",
        { opacity: 0, scale: 0.72 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.14, ease: "back.out(1.5)", delay: 0.85 }
      );

      /* ── SCROLL EXIT: content fades up ── */
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=60vh",
          scrub: 1,
        },
      });

      /* ── SCROLL EXIT: section disappears ── */
      gsap.to(sectionRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120vh",
          scrub: 1,
          onLeave: () => {
            if (sectionRef.current) sectionRef.current.style.pointerEvents = "none";
          },
          onEnterBack: () => {
            if (sectionRef.current) {
              sectionRef.current.style.pointerEvents = "auto";
              sectionRef.current.style.opacity = "1";
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 45%, #E0F2FE 100%)" }}
    >
      {/* Ambient glow blobs — desktop only */}
      <div
        className="hidden lg:block absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(14,165,233,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="hidden lg:block absolute bottom-0 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 70%)" }}
      />

      {/* ══════════════════════════════════════
          MOBILE ONLY — doctor image background
      ══════════════════════════════════════ */}
      <div className="lg:hidden absolute inset-0 z-0">
        {/* Doctor image — fills top portion */}
        <img
          src="/doctors/dr-rupali.jpeg"
          alt="Dr. Rupali Mishra — Founder and Sonologist"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient: transparent top → light blue bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(219,234,254,0.2) 0%, rgba(219,234,254,0.35) 35%, rgba(219,234,254,0.88) 58%, #DBEAFE 78%)",
          }}
        />
      </div>

      {/* Main content grid */}
      <div
        ref={contentRef}
        className="relative z-10 h-full container-main grid lg:grid-cols-12 items-center pt-16"
      >

        {/* ══════════════════════════════════════
            LEFT — Content
        ══════════════════════════════════════ */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:py-0 lg:pr-10">

          {/* Trust badge */}
          <div
            className="hero-badge inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 mb-2 sm:mb-6 w-fit"
            style={{ background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.35)" }}
          >
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: "#0284C7" }} />
            <span className="text-[10px] sm:text-[11px] font-body tracking-wide sm:tracking-widest font-semibold uppercase" style={{ color: "#0284C7" }}>
              <span className="hidden sm:inline">Government Registered MTP Hospital · New Delhi, India</span>
              <span className="sm:hidden">Govt. Registered MTP Hospital</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-semibold leading-[1.18] mb-3 sm:mb-5 text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[2.8rem]">
            <span className="hero-line block" style={{ color: "#0C1A2E" }}>Safe &amp; Legal</span>
            <span className="hero-line block" style={{ color: "#0C1A2E" }}>Abortion Care</span>
            <span
              className="hero-line block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #38BDF8)" }}
            >
              for International Patients
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="hero-sub text-sm sm:text-lg font-body font-medium mb-2 sm:mb-2"
            style={{ color: "rgba(12,26,46,0.75)" }}
          >
            Confidential. Compassionate. Complete.
          </p>

          {/* Description — hidden on mobile (saves space), visible on sm+ */}
          <p
            className="hero-sub hidden sm:block text-sm sm:text-[15px] font-body leading-relaxed mb-6 lg:mb-8 max-w-lg"
            style={{ color: "rgba(12,26,46,0.55)" }}
          >
            Government-registered hospital in New Delhi providing safe, legal abortion care up to 24 weeks — including visa support, airport transfers, accommodation, and post-treatment follow-up.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-4 sm:mb-10">
            <a
              href="#contact"
              className="hero-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                boxShadow: "0 4px 22px rgba(14,165,233,0.35)",
              }}
            >
              <Calendar className="w-4 h-4" />
              Book Online Consultation
            </a>
            <a
              href="https://wa.me/918800905938"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(14,165,233,0.1)",
                border: "1px solid rgba(14,165,233,0.35)",
                color: "#0284C7",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Coordinator
            </a>
          </div>

          {/* Stats row — 4 boxes in one row on mobile */}
          <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="hero-stat rounded-xl px-2 sm:px-4 py-2.5 text-center"
                style={{
                  background: "rgba(14,165,233,0.08)",
                  border: "1px solid rgba(14,165,233,0.2)",
                }}
              >
                <div
                  className="font-display font-bold text-base sm:text-xl leading-none mb-0.5"
                  style={{
                    background: "linear-gradient(90deg, #0EA5E9, #38BDF8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[9px] sm:text-[10px] font-body leading-tight"
                  style={{ color: "rgba(12,26,46,0.5)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            RIGHT — Doctor image
        ══════════════════════════════════════ */}
        <div className="hidden lg:flex lg:col-span-5 h-full items-center justify-center relative">

          {/* Soft glow behind doctor */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-[75%] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 85%, rgba(14,165,233,0.2) 0%, transparent 65%)",
            }}
          />

          {/* Doctor photo + floating cards */}
          <div className="hero-img relative w-[80%] h-[70%] flex items-center">

            <img
              src="/doctors/dr-rupali.jpeg"
              alt="Dr. Rupali Mishra — Founder and Sonologist"
              className="w-full h-full object-cover object-top select-none"
              style={{ borderRadius: "2rem" }}
            />

            {/* Top fade — blends into light blue bg */}
            <div
              className="absolute top-0 left-0 right-0 h-36 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #DBEAFE 0%, transparent 100%)" }}
            />

            {/* ── Floating card 1 — top left (registration) ── */}
            <div
              className="hero-float absolute top-10 -left-12 rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(14,165,233,0.25)",
                boxShadow: "0 8px 32px rgba(14,165,233,0.15)",
              }}
            >
              <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
              <div>
                <p className="text-[12px] font-body font-semibold leading-none mb-0.5" style={{ color: "#0C1A2E" }}>
                  Govt. Registered
                </p>
                <p className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>
                  Founder & Sonologist
                </p>
              </div>
            </div>

            {/* ── Floating card 2 — right side (countries) ── */}
            <div
              className="hero-float absolute top-[38%] -right-12 rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(14,165,233,0.25)",
                boxShadow: "0 8px 32px rgba(14,165,233,0.15)",
              }}
            >
              <Globe className="w-5 h-5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
              <div>
                <p className="text-[12px] font-body font-semibold leading-none mb-0.5" style={{ color: "#0C1A2E" }}>
                  25+ Countries
                </p>
                <p className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>
                  Patients Served
                </p>
              </div>
            </div>

            {/* ── Floating card 3 — bottom left (rating) ── */}
            <div
              className="hero-float absolute bottom-10 -left-10 rounded-2xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(14,165,233,0.25)",
                boxShadow: "0 8px 32px rgba(14,165,233,0.15)",
              }}
            >
              <div className="flex gap-0.5 mb-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="w-3 h-3" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />
                ))}
              </div>
              <p className="text-[12px] font-body font-semibold leading-none mb-0.5" style={{ color: "#0C1A2E" }}>
                500+ Int&apos;l Patients
              </p>
              <p className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.5)" }}>
                Trusted Globally
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float z-10">
        <span
          className="text-[10px] font-body tracking-widest uppercase"
          style={{ color: "rgba(14,165,233,0.6)" }}
        >
          Scroll
        </span>
        <ArrowDown className="w-4 h-4" style={{ color: "rgba(14,165,233,0.6)" }} />
      </div>
    </section>
  );
}
