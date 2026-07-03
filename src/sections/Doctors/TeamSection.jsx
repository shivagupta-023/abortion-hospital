import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Clock, Languages, ShieldCheck, Globe, Star, Quote, BadgeCheck, ArrowRight } from "lucide-react";
import { useTransition } from "../../context/TransitionContext";
gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    name: "Dr. Rupali Mishra",
    role: "Founder & Sonologist",
    image: "/doctors/dr-rupali.jpeg",
    quote: "Every woman who walks through our door deserves to feel safe, heard, and free from judgment. That is the standard I hold myself to — without exception.",
    qualifications: "M.B.B.S and PGDIP (SON)",
    experience: "15+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Punjabi",
    memberships: ["Founder & Sonologist", "X v. Principal Secretary — Supreme Court 24-Week Rights", "International Patient Care Expert"],
    specialties: [
      "Medical & Surgical Abortion (upto 24W)",
      "Late Term MTP with Medical Board Approval",
      "International Patient Consultations",
      "Post-Abortion Care & Follow-up",
    ],
    featured: true,
    badge: "Founder",
    countries: "25+",
    slug: "rupali",
  },
  {
    name: "Dr. Shwetta Guptta",
    role: "Senior Consultant — In-Vitro Fertilization",
    image: "/doctors/dr-swetta.webp",
    quote: "Helping families grow is not just a profession — it is a purpose. Every patient deserves hope, guidance, and the very best care.",
    qualifications: "MBBS, DGO, MRCOG, Masters in Laparoscopy and Cosmetology",
    experience: "12+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi",
    memberships: ["MRCOG — Royal College of Obstetricians & Gynaecologists", "Masters in Laparoscopy and Cosmetology", "IVF Specialist"],
    specialties: [
      "In-Vitro Fertilization (IVF)",
      "Laparoscopic Gynaecological Surgery",
      "Infertility Management",
      "Cosmetic Gynaecology",
    ],
    featured: false,
    badge: "IVF Specialist",
    slug: "shwetta-guptta",
  },
  {
    name: "Dr. Akanksha Chauhan",
    role: "Consultant Gynaecologist and Obstetrics",
    image: "/doctors/Dr-Akansha.jpg",
    quote: "A safe space for women's health begins with listening. Every patient deserves personalised care and compassion without judgment.",
    qualifications: "M.B.B.S and M.S (Obs-Gynae)",
    experience: "10+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi",
    memberships: ["Consultant Gynaecologist", "Obstetrics & Gynaecology Specialist", "Women's Health Advocate"],
    specialties: [
      "Gynaecological Procedures",
      "Obstetric Care",
      "Antenatal & Postnatal Care",
      "Women's Reproductive Health",
    ],
    featured: false,
    badge: "Gynaecologist",
    slug: "akanksha-chauhan",
  },
  {
    name: "Dr. Aparna Muddana",
    role: "Consultant Sonologist and Obstetrics",
    image: "/doctors/Dr-Aparna.jpg",
    quote: "Women's health is my calling. I believe in providing evidence-based care with empathy and precision at every step.",
    qualifications: "M.B.B.S and M.S (Obs-Gynae)",
    experience: "10+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Telugu",
    memberships: ["Consultant Sonologist", "Association of Obstetricians & Gynaecologists", "Sonology Society of India"],
    specialties: [
      "Obstetric Sonography",
      "Gynaecological Ultrasound",
      "High-Risk Pregnancy Management",
      "MTP Consultation & Care",
    ],
    featured: false,
    badge: "Sonologist",
    slug: "aparna-muddana",
  },
  {
    name: "Dr. Shweta Patel",
    role: "Consultant Gynaecologist and Obstetrics",
    image: "/doctors/dr-shweta-patel.webp",
    quote: "My commitment is to provide compassionate, precise, and safe gynaecological care to every woman who trusts me with her health.",
    qualifications: "M.S. (OBGY)",
    experience: "8+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Gujarati",
    memberships: ["Consultant Gynaecologist", "Indian Medical Association", "Society of Obstetricians & Gynaecologists"],
    specialties: [
      "Obstetric Care & Delivery",
      "Gynaecological Surgery",
      "Women's Reproductive Health",
      "Antenatal Care",
    ],
    featured: false,
    badge: "Gynaecologist",
    slug: "shweta-patel",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const { navigateTo } = useTransition();

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll(".team-row").forEach((row) => {
        gsap.fromTo(row,
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
            scrollTrigger: { trigger: row, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      });
      gsap.fromTo(".team-header > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".team-header", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="our-team" ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">

        {/* Header */}
        <div className="team-header text-center mb-14 md:mb-20">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            The People Behind Your Care
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold leading-tight mb-4" style={{ color: "#0C1A2E" }}>
            Meet Our Specialists
          </h2>
          <p className="text-sm sm:text-base font-body max-w-xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            Five dedicated specialists. One shared mission — to make sure every patient leaves safer, healthier, and at peace.
          </p>
        </div>

        {/* Doctor Rows */}
        <div className="space-y-20 md:space-y-28">
          {doctors.map((doc, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={doc.name}
                className={`team-row flex flex-col md:flex-row gap-10 md:gap-16 items-center ${isReversed ? "md:flex-row-reverse" : ""}`}
              >

                {/* Image */}
                <div className="w-full md:w-[400px] flex-shrink-0">
                  <div className="relative rounded-3xl overflow-hidden group" style={{ aspectRatio: "4/5" }}>
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Bottom gradient */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(7,21,32,0.75) 0%, transparent 50%)" }}
                    />

                    {/* Featured badges */}
                    {doc.featured && (
                      <>
                        <div
                          className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5"
                          style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.3)" }}
                        >
                          <Globe className="w-3 h-3 text-white" />
                          <span className="text-[10px] font-body font-semibold text-white">{doc.countries} Countries</span>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-0.5">
                          {[1,2,3,4,5].map(n => <Star key={n} className="w-3 h-3" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />)}
                        </div>
                      </>
                    )}

                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span
                        className="inline-block mb-2 text-[9px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                        style={{ background: doc.featured ? "rgba(14,165,233,0.85)" : "rgba(2,132,199,0.8)" }}
                      >
                        {doc.badge}
                      </span>
                      <h3 className="font-display font-semibold text-white text-2xl leading-tight">{doc.name}</h3>
                      <p className="text-xs font-body" style={{ color: "#38BDF8" }}>{doc.role}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">

                  {/* Quote */}
                  <div className="mb-7 pl-4" style={{ borderLeft: "3px solid rgba(14,165,233,0.35)" }}>
                    <Quote className="w-5 h-5 mb-2" style={{ color: "rgba(14,165,233,0.4)" }} />
                    <blockquote className="font-display text-lg sm:text-xl italic leading-relaxed" style={{ color: "rgba(12,26,46,0.8)" }}>
                      "{doc.quote}"
                    </blockquote>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                      <div>
                        <p className="text-[10px] font-body uppercase tracking-wider mb-0.5" style={{ color: "rgba(12,26,46,0.4)" }}>Qualifications</p>
                        <p className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{doc.qualifications}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                      <div>
                        <p className="text-[10px] font-body uppercase tracking-wider mb-0.5" style={{ color: "rgba(12,26,46,0.4)" }}>Experience</p>
                        <p className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{doc.experience} in Practice</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                      <div>
                        <p className="text-[10px] font-body uppercase tracking-wider mb-0.5" style={{ color: "rgba(12,26,46,0.4)" }}>Registration</p>
                        <p className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{doc.registration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Languages className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                      <div>
                        <p className="text-[10px] font-body uppercase tracking-wider mb-0.5" style={{ color: "rgba(12,26,46,0.4)" }}>Languages</p>
                        <p className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{doc.languages}</p>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <p className="text-[10px] font-body font-bold uppercase tracking-widest mb-3" style={{ color: "#0EA5E9" }}>
                      Areas of Expertise
                    </p>
                    <ul className="space-y-2">
                      {doc.specialties.map((s) => (
                        <li key={s} className="flex items-start gap-2.5">
                          <BadgeCheck className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                          <span className="text-sm font-body" style={{ color: "rgba(12,26,46,0.65)" }}>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Membership tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {doc.memberships.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-body px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(14,165,233,0.08)", color: "rgba(12,26,46,0.7)", border: "1px solid rgba(14,165,233,0.15)" }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  {/* <button
                    onClick={() => navigateTo(`/doctors/${doc.slug}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      background: "linear-gradient(135deg, #27445D, #1a3048)",
                      color: "white",
                      boxShadow: "0 4px 16px rgba(39,68,93,0.2)",
                    }}
                  >
                    View Full Profile
                    <ArrowRight className="w-4 h-4" />
                  </button> */}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
