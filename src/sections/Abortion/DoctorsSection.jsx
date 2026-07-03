import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Clock, Languages, ShieldCheck, Globe, Star } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    name: "Dr. Rupali Mishra",
    role: "Founder & Sonologist",
    image: "/doctors/dr-rupali.jpeg",
    qualifications: "M.B.B.S and PGDIP (SON)",
    experience: "15+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Punjabi",
    memberships: ["Founder & Sonologist", "Government Registered MTP Specialist", "International Patient Care"],
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

export default function DoctorsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".doctor-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".doctor-card", start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="doctors" ref={sectionRef} className="section-padding" style={{ background: "#EFF6FF" }}>
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Expert Medical Team
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Our Doctors
          </h2>
          <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.6)" }}>
            Internationally experienced specialists providing safe, legal, and compassionate care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="doctor-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-glass transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-700/80 via-sky-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {doc.featured && (
                  <>
                    <div className="absolute top-4 left-4 rounded-full px-3 py-1.5 flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.18)" }}>
                      <Globe className="w-3 h-3" style={{ color: "#0EA5E9" }} />
                      <span className="text-[10px] font-body font-semibold" style={{ color: "#0C1A2E" }}>25+ Countries</span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className="w-3 h-3" style={{ fill: "#0EA5E9", color: "#0EA5E9" }} />
                      ))}
                    </div>
                  </>
                )}

                {/* Credentials — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="rounded-xl p-4 space-y-2" style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.2)" }}>
                    <div className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                      <span className="text-xs font-body leading-snug" style={{ color: "rgba(12,26,46,0.85)" }}>{doc.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                      <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.85)" }}>{doc.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                      <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.85)" }}>{doc.languages}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                      <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.85)" }}>Reg: {doc.registration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name / role */}
              <div className="p-5 sm:p-6">
                <h4 className="font-display font-semibold text-lg mb-1 transition-colors duration-300 group-hover:text-[#0EA5E9]" style={{ color: "#0C1A2E" }}>
                  {doc.name}
                </h4>
                <p className="text-xs font-body mb-3" style={{ color: "rgba(12,26,46,0.6)" }}>{doc.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {doc.memberships.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] font-body px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(14,165,233,0.08)", color: "rgba(12,26,46,0.7)", border: "1px solid rgba(14,165,233,0.15)" }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile credentials */}
              <div className="sm:hidden px-5 pb-5 pt-1 space-y-2" style={{ borderTop: "1px solid rgba(14,165,233,0.15)" }}>
                <div className="flex items-start gap-2">
                  <Award className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
                  <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.6)" }}>{doc.qualifications}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                  <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.6)" }}>{doc.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                  <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.6)" }}>{doc.languages}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#0EA5E9" }} />
                  <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.6)" }}>Reg: {doc.registration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/918800905938"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-btn-primary text-white px-8 py-3.5 rounded-full text-sm font-body font-semibold"
          >
            Book Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
