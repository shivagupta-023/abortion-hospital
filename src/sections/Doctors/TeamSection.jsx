import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Clock, Languages, ShieldCheck, Globe, Star, Quote, BadgeCheck, ArrowRight } from "lucide-react";
import { useTransition } from "../../context/TransitionContext";
gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    name: "Dr. Rupali",
    role: "Senior Gynecologist & MTP Specialist",
    image: "/images/dr-shashi.jpg",
    quote: "Every woman who walks through our door deserves to feel safe, heard, and free from judgment. That is the standard I hold myself to — without exception.",
    qualifications: "MBBS, MD (Obstetrics & Gynecology), DNB",
    experience: "15+ Years",
    registration: "DL/MTP/86/SED/2020",
    languages: "English, Hindi, Punjabi",
    memberships: ["Government Registered MTP Specialist", "International Patient Care Expert", "Safe Abortion Advocacy"],
    specialties: [
      "Medical & Surgical Abortion (upto 24W)",
      "Late Term MTP with Medical Board Approval",
      "International Patient Consultations",
      "Post-Abortion Care & Follow-up",
    ],
    featured: true,
    badge: "Lead Surgeon",
    countries: "25+",
    slug: "rupali",
  },
  {
    name: "Dr. Asha Arora",
    role: "Consultant Anesthesiologist",
    image: "/images/dr-asha.jpg",
    quote: "My role is to make sure you feel nothing but calm. Pain management is not just medical — it is about dignity.",
    qualifications: "MBBS, MD (Anesthesia), Fellowship in Pain Management",
    experience: "20+ Years",
    registration: "MCI – 67890",
    languages: "English, Hindi, Urdu",
    memberships: ["Indian Society of Anesthesiologists", "WFSA Member", "Fellowship in Pain Management"],
    specialties: [
      "General & Regional Anesthesia",
      "Pain-Free Surgical Procedures",
      "Sedation for MTP Procedures",
      "Post-Operative Pain Management",
    ],
    featured: false,
    badge: "Pain-Free Care",
    slug: "asha-arora",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Reproductive Health Counselor",
    image: "/images/dr-counselor.jpg",
    quote: "There is no wrong reason to be here. My job is to make sure you leave feeling informed, respected, and at peace with your decision.",
    qualifications: "MBBS, DGO, Diploma in Counseling Psychology",
    experience: "12+ Years",
    registration: "MCI – 54321",
    languages: "English, Hindi, Bengali",
    memberships: ["Indian Medical Association", "Association of Counselors & Therapists", "Certified in Trauma-Informed Care"],
    specialties: [
      "Pre & Post Abortion Counseling",
      "Reproductive Health Education",
      "Emotional Support & Mental Wellness",
      "International Patient Communication",
    ],
    featured: false,
    badge: "Pre & Post Care",
    slug: "priya-sharma",
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
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            The People Behind Your Care
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold text-teal leading-tight mb-4">
            Meet Our Specialists
          </h2>
          <p className="text-sm sm:text-base font-body text-teal/55 max-w-xl mx-auto">
            Three doctors. One shared mission — to make sure every patient leaves safer, healthier, and at peace.
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
                          style={{ background: "rgba(7,21,32,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(113,187,178,0.3)" }}
                        >
                          <Globe className="w-3 h-3 text-mint" />
                          <span className="text-[10px] font-body font-semibold text-white">{doc.countries} Countries</span>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-0.5">
                          {[1,2,3,4,5].map(n => <Star key={n} className="w-3 h-3 fill-mint text-mint" />)}
                        </div>
                      </>
                    )}

                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span
                        className="inline-block mb-2 text-[9px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                        style={{ background: doc.featured ? "rgba(113,187,178,0.85)" : "rgba(39,68,93,0.8)" }}
                      >
                        {doc.badge}
                      </span>
                      <h3 className="font-display font-semibold text-white text-2xl leading-tight">{doc.name}</h3>
                      <p className="text-xs font-body text-mint">{doc.role}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">

                  {/* Quote */}
                  <div className="mb-7 pl-4" style={{ borderLeft: "3px solid rgba(113,187,178,0.35)" }}>
                    <Quote className="w-5 h-5 mb-2" style={{ color: "rgba(113,187,178,0.4)" }} />
                    <blockquote className="font-display text-lg sm:text-xl text-teal/80 italic leading-relaxed">
                      "{doc.quote}"
                    </blockquote>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-body uppercase tracking-wider text-teal/40 mb-0.5">Qualifications</p>
                        <p className="text-xs font-body text-teal/70">{doc.qualifications}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-body uppercase tracking-wider text-teal/40 mb-0.5">Experience</p>
                        <p className="text-xs font-body text-teal/70">{doc.experience} in Practice</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-body uppercase tracking-wider text-teal/40 mb-0.5">Registration</p>
                        <p className="text-xs font-body text-teal/70">{doc.registration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Languages className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-body uppercase tracking-wider text-teal/40 mb-0.5">Languages</p>
                        <p className="text-xs font-body text-teal/70">{doc.languages}</p>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <p className="text-[10px] font-body font-bold uppercase tracking-widest text-mint mb-3">
                      Areas of Expertise
                    </p>
                    <ul className="space-y-2">
                      {doc.specialties.map((s) => (
                        <li key={s} className="flex items-start gap-2.5">
                          <BadgeCheck className="w-3.5 h-3.5 text-mint flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-body text-teal/65">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Membership tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {doc.memberships.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-body bg-cream/60 text-teal/70 px-3 py-1.5 rounded-full border border-teal/10"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <button
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
                  </button>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
