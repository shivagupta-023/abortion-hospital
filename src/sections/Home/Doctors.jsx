import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award, Clock, Languages, ShieldCheck, Globe, Star,
  MapPin, Quote, Building2, Plane, ArrowRight,
} from "lucide-react";
import { useTransition } from "../../context/TransitionContext";
gsap.registerPlugin(ScrollTrigger);

const centerImages = [
  { src: "/images/facility-exterior.jpg",    title: "Hospital Exterior",    big: true  },
  { src: "/images/facility-reception.jpg",   title: "Reception Area",       big: false },
  { src: "/images/facility-consultation.jpg",title: "Consultation Rooms",   big: false },
  { src: "/images/facility-treatment.jpg",   title: "Treatment Facilities", big: false },
  { src: "/images/clinic-interior.jpg",      title: "Recovery Suites",      big: false },
];

const founder = {
  name: "Dr. Rupali Mishra",
  role: "Founder & Owner · Consultant Sonologist and Physician",
  img: "/doctors/dr-rupali.jpeg",
  quote:
    "Every woman deserves care with dignity — not judgment. I built this clinic so no woman ever has to travel scared and alone to find a doctor who will listen.",
  qualifications: "M.B.B.S and PGDIP (SON)",
  experience: "15+ Years",
  achievements: [
    "15,000+ patients treated",
    "Govt. Reg. MTP Specialist",
    "Supreme Court Landmark Case",
    "25+ countries served",
  ],
};

const doctors = [
  {
    name: "Dr. Rupali Mishra",
    role: "Founder & Owner · Consultant Sonologist and Physician",
    image: "/doctors/dr-rupali.jpeg",
    qualifications: "M.B.B.S and PGDIP (SON)",
    experience: "15+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Punjabi",
    memberships: ["Founder & Owner", "Govt. Reg. MTP Specialist", "Supreme Court Landmark Case"],
    featured: true,
  },
  {
    name: "Dr. Shwetta Guptta",
    role: "Senior Consultant — In-Vitro Fertilization",
    image: "/doctors/dr-swetta.webp",
    qualifications: "MBBS, DGO, MRCOG, Masters in Laparoscopy and Cosmetology",
    experience: "12+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi",
    memberships: ["MRCOG — Royal College of Obstetricians & Gynaecologists", "IVF Specialist"],
    featured: false,
  },
  {
    name: "Dr. Akanksha Chauhan",
    role: "Consultant Gynaecologist and Obstetrics",
    image: "/doctors/Dr-Akansha.jpg",
    qualifications: "M.B.B.S and M.S (Obs-Gynae)",
    experience: "10+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi",
    memberships: ["Consultant Gynaecologist", "Obstetrics & Gynaecology Specialist"],
    featured: false,
  },
  {
    name: "Dr. Aparna Muddana",
    role: "Consultant Sonologist and Obstetrics",
    image: "/doctors/Dr-Aparna.jpg",
    qualifications: "M.B.B.S and M.S (Obs-Gynae)",
    experience: "10+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Telugu",
    memberships: ["Consultant Sonologist", "Association of Obstetricians & Gynaecologists"],
    featured: false,
  },
  {
    name: "Dr. Shweta Patel",
    role: "Consultant Gynaecologist and Obstetrics",
    image: "/doctors/dr-shweta-patel.webp",
    qualifications: "M.S. (OBGY)",
    experience: "8+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Gujarati",
    memberships: ["Consultant Gynaecologist", "Society of Obstetricians & Gynaecologists"],
    featured: false,
  },
];

function SectionLabel({ eyebrow, heading, sub }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-2" style={{ color: "#0EA5E9" }}>
        {eyebrow}
      </p>
      <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2" style={{ color: "#0C1A2E" }}>
        {heading}
      </h3>
      {sub && (
        <p className="text-sm font-body max-w-xl" style={{ color: "rgba(12,26,46,0.6)" }}>{sub}</p>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="my-14 md:my-20 flex items-center gap-4">
      <div className="flex-1 h-px" style={{ background: "rgba(14,165,233,0.15)" }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(14,165,233,0.4)" }} />
      <div className="w-2 h-2 rounded-full" style={{ background: "rgba(14,165,233,0.6)" }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(14,165,233,0.4)" }} />
      <div className="flex-1 h-px" style={{ background: "rgba(14,165,233,0.15)" }} />
    </div>
  );
}

export default function Doctors() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [activeDoc, setActiveDoc] = useState(0);
  const { navigateTo } = useTransition();

  const handleSliderScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector(".doc-slide-card");
    const cardW = (card?.offsetWidth ?? 0) + 12;
    setActiveDoc(Math.round(el.scrollLeft / Math.max(cardW, 1)));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = (selector, extra = {}) =>
        gsap.fromTo(
          selector,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: "power2.out",
            scrollTrigger: { trigger: selector, start: "top 80%", toggleActions: "play none none reverse", ...extra },
          }
        );

      trigger(".center-card");
      trigger(".founder-row");
      trigger(".doctor-card");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="doctors" ref={sectionRef} className="section-padding" style={{ background: "#EFF6FF" }}>
      <div className="container-main">

        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            The People & Places Behind Your Care
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Our Team & Centres
          </h2>
          <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.6)" }}>
            From world-class facilities to experienced founders and specialist doctors — everything you need, in one place.
          </p>
        </div>

        {/* 1. CENTRE */}
        <div>
          <SectionLabel
            eyebrow="Where Care Happens"
            heading="Our Centre"
            sub="Fully equipped, government-registered hospital built for safe and private care in New Delhi."
          />

          <div className="center-card grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {centerImages.map((img) => (
              <div
                key={img.title}
                className={`relative rounded-2xl overflow-hidden group ${
                  img.big ? "col-span-2 row-span-2" : "col-span-1"
                }`}
                style={{ aspectRatio: "1/1" }}
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

          <div
            className="center-card rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
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

        <Divider />

        {/* 2. FOUNDER */}
        <div>
          <SectionLabel
            eyebrow="The Vision Behind It All"
            heading="Our Founder"
            sub="The doctor who built this mission from the ground up."
          />

          <div className="founder-row flex flex-col md:flex-row gap-8 md:gap-14 items-center">

            <div className="w-full md:w-72 flex-shrink-0">
              <div className="relative rounded-3xl overflow-hidden shadow-md" style={{ aspectRatio: "4/5" }}>
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,132,199,0.6) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="font-display font-semibold text-white text-xl leading-tight">{founder.name}</h4>
                  <p className="text-xs font-body" style={{ color: "#38BDF8" }}>{founder.role}</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-7 pl-4" style={{ borderLeft: "3px solid rgba(14,165,233,0.35)" }}>
                <Quote className="w-6 h-6 mb-2" style={{ color: "rgba(14,165,233,0.35)" }} />
                <blockquote className="font-display text-lg sm:text-xl leading-relaxed italic" style={{ color: "rgba(12,26,46,0.75)" }}>
                  "{founder.quote}"
                </blockquote>
              </div>

              <div className="space-y-2.5 mb-7">
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                  <span className="text-sm font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{founder.qualifications}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                  <span className="text-sm font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{founder.experience} in Practice</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {founder.achievements.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center gap-1.5 text-xs font-body bg-white px-3 py-1.5 rounded-full shadow-sm"
                    style={{ color: "#0C1A2E", border: "1px solid rgba(14,165,233,0.2)" }}
                  >
                    <Star className="w-3 h-3" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* 3. DOCTORS */}
        <div>
          <SectionLabel
            eyebrow="Expert Medical Team"
            heading="Our Doctors"
            sub="Internationally experienced specialists providing safe, legal, and compassionate care."
          />

          {/* Mobile: horizontal snap slider */}
          <div className="md:hidden">
            <div
              ref={sliderRef}
              onScroll={handleSliderScroll}
              className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
              style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
            >
              {doctors.map((doc) => (
                <div
                  key={doc.name}
                  className="doc-slide-card flex-shrink-0 w-[78vw] bg-white rounded-2xl overflow-hidden"
                  style={{
                    scrollSnapAlign: "start",
                    boxShadow: "0 8px 32px rgba(14,165,233,0.12), 0 1px 3px rgba(14,165,233,0.08)",
                    border: "1px solid rgba(14,165,233,0.15)",
                  }}
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,132,199,0.75) 0%, transparent 55%)" }} />

                    {doc.featured && (
                      <>
                        <div
                          className="absolute top-3 left-3 rounded-full px-2.5 py-1 flex items-center gap-1"
                          style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.25)" }}
                        >
                          <Globe className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                          <span className="text-[9px] font-body font-semibold" style={{ color: "#0C1A2E" }}>25+ Countries</span>
                        </div>
                        <div className="absolute top-3 right-3 flex gap-0.5">
                          {[1,2,3,4,5].map((n) => <Star key={n} className="w-2.5 h-2.5" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />)}
                        </div>
                      </>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
                      <h4 className="font-display font-semibold text-white text-base leading-tight">{doc.name}</h4>
                      <p className="text-[11px] font-body" style={{ color: "#38BDF8" }}>{doc.role}</p>
                    </div>
                  </div>

                  <div className="px-4 py-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                      <span className="text-xs font-body leading-snug" style={{ color: "rgba(12,26,46,0.7)" }}>{doc.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                      <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{doc.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                      <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{doc.languages}</span>
                    </div>
                  </div>

                  <div className="px-4 pb-4 flex flex-wrap gap-1.5">
                    {doc.memberships.map((m) => (
                      <span key={m} className="text-[9px] font-body px-2 py-0.5 rounded-full" style={{ background: "rgba(14,165,233,0.08)", color: "rgba(12,26,46,0.7)", border: "1px solid rgba(14,165,233,0.15)" }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-1.5 mt-4">
              {doctors.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const el = sliderRef.current;
                    const card = el?.querySelector(".doc-slide-card");
                    if (el && card) el.scrollTo({ left: i * (card.offsetWidth + 12), behavior: "smooth" });
                  }}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: activeDoc === i ? "20px" : "6px",
                    background: activeDoc === i ? "#0EA5E9" : "rgba(14,165,233,0.2)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Desktop: flex wrap — 3 in row 1, last 2 centered in row 2 */}
          <div className="hidden md:flex flex-wrap justify-center gap-5">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="doctor-card group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ boxShadow: "0 4px 16px rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)", width: "calc(33.333% - 14px)" }}
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(2,132,199,0.8) 0%, rgba(14,165,233,0.2) 50%, transparent 100%)" }}
                  />
                  {doc.featured && (
                    <>
                      <div
                        className="absolute top-4 left-4 rounded-full px-3 py-1.5 flex items-center gap-1.5"
                        style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.25)" }}
                      >
                        <Globe className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                        <span className="text-[10px] font-body font-semibold" style={{ color: "#0C1A2E" }}>25+ Countries</span>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-0.5">
                        {[1,2,3,4,5].map((n) => <Star key={n} className="w-3 h-3" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />)}
                      </div>
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div
                      className="rounded-xl p-4 space-y-2"
                      style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.2)" }}
                    >
                      <div className="flex items-start gap-2"><Award className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} /><span className="text-xs font-body leading-snug" style={{ color: "#0C1A2E" }}>{doc.qualifications}</span></div>
                      <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} /><span className="text-xs font-body" style={{ color: "#0C1A2E" }}>{doc.experience} Experience</span></div>
                      <div className="flex items-center gap-2"><Languages className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} /><span className="text-xs font-body" style={{ color: "#0C1A2E" }}>{doc.languages}</span></div>
                      <div className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} /><span className="text-xs font-body" style={{ color: "#0C1A2E" }}>Reg: {doc.registration}</span></div>
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4
                    className="font-display font-semibold text-lg mb-1 transition-colors duration-300"
                    style={{ color: "#0C1A2E" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#0C1A2E")}
                  >{doc.name}</h4>
                  <p className="text-xs font-body mb-3" style={{ color: "rgba(12,26,46,0.6)" }}>{doc.role}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.memberships.map((m) => (
                      <span key={m} className="text-[10px] font-body px-2.5 py-1 rounded-full" style={{ background: "rgba(14,165,233,0.08)", color: "rgba(12,26,46,0.7)", border: "1px solid rgba(14,165,233,0.15)" }}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 6px 24px rgba(14,165,233,0.35)" }}
            >
              Book Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
