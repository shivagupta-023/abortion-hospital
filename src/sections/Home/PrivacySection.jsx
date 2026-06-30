import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock, EyeOff, MessageSquare, CalendarCheck, FileCheck, UserCheck } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
const privacyFeatures = [
  {
    icon: Lock,
    title: "100% Confidential Consultations",
    desc: "Your identity and medical records are protected with enterprise-grade encryption and strict privacy protocols."
  },
  {
    icon: EyeOff,
    title: "Secure Information Handling",
    desc: "All patient data is stored on HIPAA-compliant servers with multi-layered security and access controls."
  },
  {
    icon: MessageSquare,
    title: "Discreet Communication",
    desc: "Communicate via encrypted channels. We never share your details with third parties without consent."
  },
  {
    icon: CalendarCheck,
    title: "Private Appointment Scheduling",
    desc: "Book appointments anonymously. No referral required. Walk-ins welcome with discreet entry options."
  },
  {
    icon: FileCheck,
    title: "Strict Privacy Policy",
    desc: "Our comprehensive privacy policy ensures your information remains confidential throughout your care journey."
  },
  {
    icon: UserCheck,
    title: "No Judgment, Only Care",
    desc: "Our trained staff provides compassionate, non-judgmental support in a safe, welcoming environment."
  }
];
export default function PrivacySection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".privacy-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section ref={sectionRef} className="section-padding bg-cream/30">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {
    /* Left Content */
  }
          <div>
            <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
              Your Privacy Matters
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-teal mb-6 leading-tight">
              Confidentiality Is Our{" "}
              <span className="text-mint">Foundation</span>
            </h2>
            <p className="text-sm sm:text-base font-body text-teal/70 mb-8 leading-relaxed">
              At Aashirwad Health Centre, we understand the sensitive nature of reproductive healthcare. 
              Every aspect of our service is designed around your privacy and dignity. From the moment 
              you reach out to your final follow-up, your identity and medical information remain 
              completely protected.
            </p>
            <div className="glass rounded-2xl p-5 sm:p-6 inline-flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-mint" />
              </div>
              <div>
                <p className="font-display font-semibold text-teal text-sm">ISO 27001 Certified</p>
                <p className="text-xs font-body text-teal/60">Information Security Management</p>
              </div>
            </div>
          </div>

          {
    /* Right Grid */
  }
          <div className="grid sm:grid-cols-2 gap-4">
            {privacyFeatures.map((feature, i) => <div
    key={i}
    className="privacy-card glass rounded-xl p-5 hover:shadow-glass transition-all duration-300 hover:-translate-y-1 group"
  >
                <div className="w-9 h-9 rounded-lg bg-mint/10 flex items-center justify-center mb-3 group-hover:bg-mint/20 transition-colors">
                  <feature.icon className="w-4 h-4 text-mint" />
                </div>
                <h3 className="font-display font-semibold text-teal text-sm mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs font-body text-teal/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}
