import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Award, Stethoscope, Globe, ArrowRight, Scale, HeartHandshake } from "lucide-react";
import { useTransition } from "../../context/TransitionContext";
gsap.registerPlugin(ScrollTrigger);

const credentials = [
  { icon: Stethoscope, label: "M.B.B.S and PGDIP (SON)" },
  { icon: Award,       label: "15+ Years in Practice" },
  { icon: Globe,       label: "25+ Countries Served" },
  { icon: Scale,       label: "Supreme Court Landmark Case" },
  { icon: HeartHandshake, label: "Feminist & Reproductive Rights Advocate" },
];

export default function FoundersSection() {
  const sectionRef = useRef(null);
  const { navigateTo } = useTransition();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".founder-image",
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" },
        }
      );
      gsap.fromTo(".founder-content > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "#EFF6FF" }}>
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Meet the Founder
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold leading-tight mb-4" style={{ color: "#0C1A2E" }}>
            A Doctor. A Feminist. <br className="hidden sm:block" />
            A Law-Changer for Women.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          {/* Image */}
          <div className="founder-image w-full md:w-[380px] flex-shrink-0 relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="/doctors/dr-rupali.jpeg"
                alt="Dr. Rupali Mishra — Founder, Aashirwad Health Centre"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(2,132,199,0.6) 0%, transparent 45%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-semibold text-white text-xl leading-tight">Dr. Rupali Mishra</h3>
                <p className="text-xs font-body" style={{ color: "#0EA5E9" }}>Founder & Owner · Consultant Sonologist and Physician</p>
              </div>
            </div>

            {/* Decorative quote badge */}
            <div
              className="absolute -top-5 -right-5 w-16 h-16 rounded-2xl hidden sm:flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", boxShadow: "0 12px 30px rgba(14,165,233,0.35)" }}
            >
              <Quote className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="founder-content flex-1">
            <blockquote className="font-display text-xl sm:text-2xl italic leading-relaxed mb-6" style={{ color: "rgba(12,26,46,0.85)" }}>
              "I built this clinic because I watched too many women travel for hours — scared, alone, and ashamed — just to find a doctor who wouldn't judge them. Every woman deserves care with dignity. That is not a privilege. That is a right."
            </blockquote>

            <div className="space-y-4 mb-8">
              <p className="text-sm sm:text-base font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                Dr. Rupali Mishra is the Founder & Owner of Dr. Rupali's Abortion Hospital and a Consultant Sonologist and Physician with over 15 years of dedicated practice in women's reproductive healthcare. Holding M.B.B.S and PGDIP (SON), she has built her clinic around one principle — that safe, legal abortion care must be available to every woman, with complete confidentiality and zero judgment.
              </p>
              <p className="text-sm sm:text-base font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                A committed feminist and tireless advocate for women's liberty, choice, and privacy, Dr. Rupali Mishra went beyond the clinic to change the law. Along with her legal team led by Dr. Amit Mishra (Advocate), she filed a Special Leave Petition in the landmark case <span className="font-semibold" style={{ color: "#0C1A2E" }}>X v. The Principal Secretary, Health & Family Welfare, Dept. of NCT Delhi</span> — which resulted in the Supreme Court of India ruling that unmarried women are entitled to safe abortion services up to 24 weeks under the MTP Act. A law-changer in every sense.
              </p>
              <p className="text-sm sm:text-base font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.65)" }}>
                Her vision extends beyond individual patients. She is working to make India a trusted, globally recognised destination for abortion services — where women from across the world can access care with dignity and safety. She believes that reducing India's maternal mortality rate begins with ensuring no woman is ever forced into an unsafe procedure because she lacked access, information, or a doctor who would simply listen.
              </p>
            </div>

            {/* Credentials row */}
            <div className="flex flex-wrap gap-3 mb-8">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.18)" }}
                >
                  <c.icon className="w-3.5 h-3.5" style={{ color: "#0EA5E9" }} />
                  <span className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{c.label}</span>
                </div>
              ))}
            </div>

            {/* <button
              onClick={() => navigateTo('/doctors/rupali')}
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
      </div>
    </section>
  );
}
