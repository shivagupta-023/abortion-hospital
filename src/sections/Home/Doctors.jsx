import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award, Clock, Languages, ShieldCheck, Globe, Star,
  MapPin, Phone, Timer, CheckCircle2, Quote,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

/* ─── DATA ──────────────────────────────────────────────────── */

const centers = [
  {
    name: "Abosion Clinic — South Delhi",
    tagline: "Our Flagship Women's Health Centre",
    address: "Block C, Malviya Nagar, New Delhi – 110017",
    phone: "+91 11 4159 0000",
    timing: "Mon – Sat, 9 AM – 6 PM",
    img: "/images/facility-exterior.jpg",
    badge: "Primary Centre",
    features: [
      "Government Registered MTP Centre",
      "Private OT & Recovery Rooms",
      "CCTV & 24 / 7 Security",
      "Wheelchair Accessible",
    ],
  },
  {
    name: "Abosion Consultation Hub",
    tagline: "Pre & Post Procedure Care",
    address: "Tower B, Saket, New Delhi – 110017",
    phone: "+91 11 4159 0001",
    timing: "Mon – Fri, 10 AM – 5 PM",
    img: "/images/facility-consultation.jpg",
    badge: "Consultation Centre",
    features: [
      "Counseling & Pre-Op Assessment",
      "Video Consultation Available",
      "International Patient Desk",
      "Report Collection",
    ],
  },
];

const founders = [
  {
    name: "Dr. R. K. Sharma",
    role: "Founder & Medical Director",
    img: "/images/dr-shashi.jpg",
    quote:
      "We built this clinic on one principle — every patient deserves compassionate, safe, and judgment-free care. In over two decades, that has never changed.",
    qualifications: "MBBS, MS (Obs & Gynae), FRCOG (London)",
    experience: "28+ Years",
    achievements: [
      "Treated 50,000+ patients",
      "Pioneer of MTP services in Delhi",
      "Trained 200+ gynecologists",
    ],
  },
  {
    name: "Ms. Kavita Nair",
    role: "Co-Founder & Patient Experience Director",
    img: "/images/dr-asha.jpg",
    quote:
      "International patients taught us that compassion has no borders. We designed every process — from visa letters to WhatsApp follow-ups — around their peace of mind.",
    qualifications: "MBA (Healthcare Management), Certified Counselor",
    experience: "18+ Years",
    achievements: [
      "Built international patient programme",
      "500+ overseas patients served",
      "25 countries reached",
    ],
  },
];

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

/* ─── REUSABLE: SECTION LABEL ────────────────────────────────── */

function SectionLabel({ eyebrow, heading, sub }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-2">
        {eyebrow}
      </p>
      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-teal mb-2">
        {heading}
      </h3>
      {sub && (
        <p className="text-sm font-body text-teal/60 max-w-xl">{sub}</p>
      )}
    </div>
  );
}

/* ─── DIVIDER ────────────────────────────────────────────────── */

function Divider() {
  return (
    <div className="my-14 md:my-20 flex items-center gap-4">
      <div className="flex-1 h-px bg-teal/10" />
      <div className="w-1.5 h-1.5 rounded-full bg-mint/40" />
      <div className="w-2 h-2 rounded-full bg-mint/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-mint/40" />
      <div className="flex-1 h-px bg-teal/10" />
    </div>
  );
}

/* ─── MAIN SECTION ───────────────────────────────────────────── */

export default function Doctors() {
  const sectionRef = useRef(null);

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
    <section id="doctors" ref={sectionRef} className="section-padding bg-cream/20">
      <div className="container-main">

        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
            The People & Places Behind Your Care
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-4">
            Our Team & Centres
          </h2>
          <p className="text-sm sm:text-base font-body text-teal/60 max-w-2xl mx-auto">
            From world-class facilities to experienced founders and specialist doctors — everything you need, in one place.
          </p>
        </div>

        {/* ════════════════════════════════════════
            1. CENTRES
        ════════════════════════════════════════ */}
        <div>
          <SectionLabel
            eyebrow="Where Care Happens"
            heading="Our Centres"
            sub="Fully equipped, government-registered clinics built for safe and private care."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {centers.map((c) => (
              <div
                key={c.name}
                className="center-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-glass transition-all duration-400 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal/60 to-transparent" />
                  <span
                    className="absolute top-4 left-4 text-[10px] font-body font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: "linear-gradient(135deg,#71BBB2,#3a5f7d)" }}
                  >
                    {c.badge}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6">
                  <h4 className="font-display font-semibold text-teal text-lg mb-0.5">{c.name}</h4>
                  <p className="text-xs font-body font-semibold text-mint mb-4">{c.tagline}</p>

                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-teal/40 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-body text-teal/70">{c.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-teal/40 flex-shrink-0" />
                      <span className="text-xs font-body text-teal/70">{c.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer className="w-3.5 h-3.5 text-teal/40 flex-shrink-0" />
                      <span className="text-xs font-body text-teal/70">{c.timing}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {c.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1 text-[10px] font-body bg-cream/60 text-teal/70 px-2.5 py-1 rounded-full border border-teal/10"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-mint" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ════════════════════════════════════════
            2. FOUNDERS
        ════════════════════════════════════════ */}
        <div>
          <SectionLabel
            eyebrow="The Vision Behind It All"
            heading="Our Founders"
            sub="The people who built this mission from the ground up."
          />

          <div className="space-y-14">
            {founders.map((f, i) => (
              <div
                key={f.name}
                className={`founder-row flex flex-col md:flex-row gap-8 md:gap-14 items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-56 flex-shrink-0">
                  <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal/30 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <Quote className="w-8 h-8 mb-3" style={{ color: "rgba(113,187,178,0.3)" }} />
                    <blockquote className="font-display text-lg sm:text-xl text-teal/80 leading-relaxed italic">
                      "{f.quote}"
                    </blockquote>
                  </div>

                  <h4 className="font-display font-semibold text-teal text-2xl mb-1">{f.name}</h4>
                  <p className="text-sm font-body font-semibold text-mint mb-5">{f.role}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-mint flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-body text-teal/70">{f.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-mint flex-shrink-0" />
                      <span className="text-xs font-body text-teal/70">{f.experience} in Healthcare</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {f.achievements.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center gap-1.5 text-[11px] font-body bg-white text-teal px-3 py-1.5 rounded-full shadow-sm border border-teal/10"
                      >
                        <Star className="w-3 h-3 text-mint fill-mint" />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ════════════════════════════════════════
            3. DOCTORS
        ════════════════════════════════════════ */}
        <div>
          <SectionLabel
            eyebrow="Expert Medical Team"
            heading="Our Doctors"
            sub="Internationally experienced specialists providing safe, legal, and compassionate care."
          />

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

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass-btn-primary text-white px-8 py-3.5 rounded-full text-sm font-body font-semibold"
            >
              Book Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
