import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Phone } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function CtaCard({
  icon: Icon,
  badgeText,
  heading,
  description,
  whatsappHref = "https://wa.me/918800905938",
  whatsappLabel = "Message on WhatsApp",
  callHref = "tel:+918800905938",
  callLabel = "Call Us Directly",
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.4)",
          scrollTrigger: { trigger: cardRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="rounded-3xl overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 55%, #0369A1 100%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

        <div className="text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)" }}
          >
            <Icon className="w-3.5 h-3.5 text-white" />
            <span className="text-[11px] font-body text-white tracking-widest font-semibold uppercase">
              {badgeText}
            </span>
          </div>
          <h3 className="font-display font-semibold text-white text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
            {heading[0]}<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #E0F2FE, #FFFFFF)" }}
            >
              {heading[1]}
            </span>
          </h3>
          <p className="text-sm font-body max-w-md" style={{ color: "rgba(255,255,255,0.75)" }}>
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.22)",
              boxShadow: "0 6px 24px rgba(255,255,255,0.15)",
              border: "1.5px solid rgba(255,255,255,0.5)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            {whatsappLabel}
          </a>
          <a
            href={callHref}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#FFFFFF",
            }}
          >
            <Phone className="w-4 h-4" />
            {callLabel}
          </a>
        </div>

      </div>
    </div>
  );
}
