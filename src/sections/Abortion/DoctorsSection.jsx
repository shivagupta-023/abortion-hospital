import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Clock, Languages, ShieldCheck, Globe, Star } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    name: "Dr. Rupali",
    role: "Senior Gynecologist & MTP Specialist",
    image: "/images/dr-shashi.jpg",
    qualifications: "MBBS, MD (Obstetrics & Gynecology), DNB",
    experience: "15+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Punjabi",
    memberships: ["Government Registered MTP Specialist", "International Patient Care"],
    featured: true,
  },
  {
    name: "Dr. Asha Arora",
    role: "Consultant Anesthesiologist",
    image: "/images/dr-asha.jpg",
    qualifications: "MBBS, MD (Anesthesia), Fellowship in Pain Management",
    experience: "20+ Years",
    registration: "MCI – 67890",
    languages: "English, Hindi, Urdu",
    memberships: ["Indian Society of Anesthesiologists", "WFSA Member"],
    featured: false,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Reproductive Health Counselor",
    image: "/images/dr-counselor.jpg",
    qualifications: "MBBS, DGO, Diploma in Counseling Psychology",
    experience: "15+ Years",
    registration: "MCI – 54321",
    languages: "English, Hindi, Bengali",
    memberships: ["Indian Medical Association", "Association of Counselors & Therapists"],
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
    <section id="doctors" ref={sectionRef} className="section-padding bg-cream/20">
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            Expert Medical Team
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-4">
            Our Doctors
          </h2>
          <p className="text-sm sm:text-base font-body text-teal/60 max-w-2xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {doc.featured && (
                  <>
                    <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
                      <Globe className="w-3 h-3 text-mint" />
                      <span className="text-[10px] font-body font-semibold text-teal">25+ Countries</span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className="w-3 h-3 fill-mint text-mint" />
                      ))}
                    </div>
                  </>
                )}

                {/* Credentials — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="glass-dark rounded-xl p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-mint flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-body text-cream/90 leading-snug">{doc.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-mint flex-shrink-0" />
                      <span className="text-xs font-body text-cream/90">{doc.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-3.5 h-3.5 text-mint flex-shrink-0" />
                      <span className="text-xs font-body text-cream/90">{doc.languages}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-mint flex-shrink-0" />
                      <span className="text-xs font-body text-cream/90">Reg: {doc.registration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name / role */}
              <div className="p-5 sm:p-6">
                <h4 className="font-display font-semibold text-teal text-lg mb-1 group-hover:text-mint transition-colors duration-300">
                  {doc.name}
                </h4>
                <p className="text-xs font-body text-teal/60 mb-3">{doc.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {doc.memberships.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] font-body bg-cream/60 text-teal/70 px-2.5 py-1 rounded-full border border-teal/10"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile credentials */}
              <div className="sm:hidden px-5 pb-5 pt-1 space-y-2 border-t border-teal/10">
                <div className="flex items-start gap-2">
                  <Award className="w-3.5 h-3.5 text-mint flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-body text-teal/60">{doc.qualifications}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-mint flex-shrink-0" />
                  <span className="text-xs font-body text-teal/60">{doc.experience} Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="w-3.5 h-3.5 text-mint flex-shrink-0" />
                  <span className="text-xs font-body text-teal/60">{doc.languages}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-mint flex-shrink-0" />
                  <span className="text-xs font-body text-teal/60">Reg: {doc.registration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/911141590000"
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
