import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Mail, Phone, ShieldCheck, MapPin, Clock, Send, CheckCircle } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const ctaItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sublabel: "Chat with our coordinator",
    href: "https://wa.me/911141590000",
    external: true,
    style: { background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }
  },
  {
    icon: Phone,
    label: "Call Now",
    sublabel: "+91 11 4159 0000",
    href: "tel:+911141590000",
    external: false,
    style: { background: "linear-gradient(135deg, #71BBB2 0%, #3a5f7d 100%)", boxShadow: "0 4px 20px rgba(113,187,178,0.3)" }
  },
  {
    icon: Mail,
    label: "Email Us",
    sublabel: "care@aashirwadhealth.in",
    href: "mailto:care@aashirwadhealth.in",
    external: false,
    style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(113,187,178,0.3)" }
  }
];

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Lajpat Nagar, New Delhi – 110024", href: "#" },
  { icon: Clock,  label: "Hours",    value: "Mon–Sat: 8AM–8PM  ·  24/7 Emergency", href: "#" },
];

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cfg = { trigger: sectionRef.current, start: "top 72%", toggleActions: "play none none reverse" };
      gsap.fromTo(".fcta-left > *",  { opacity: 0, x: -28 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1,  ease: "power2.out", scrollTrigger: cfg });
      gsap.fromTo(".fcta-form",      { opacity: 0, x:  28 }, { opacity: 1, x: 0, duration: 0.65,              ease: "power2.out", scrollTrigger: cfg });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071520 0%, #0f2233 45%, #1a3a52 100%)" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{
          left: "30%", top: "50%", transform: "translate(-50%,-50%)",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(113,187,178,0.08) 0%, transparent 65%)"
        }} />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── LEFT ───────────────────────────────────── */}
          <div className="fcta-left">

            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(113,187,178,0.12)", border: "1px solid rgba(113,187,178,0.28)" }}>
              <ShieldCheck className="w-3.5 h-3.5 text-mint" />
              <span className="text-[11px] font-body text-mint tracking-widest font-semibold uppercase">
                Government Registered · DL/MTP/86/SED/2020
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-white mb-4 leading-tight">
              Need Safe & Legal
              <br />
              Care{" "}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#71BBB2,#a8e6df)" }}>
                in India?
              </span>
            </h2>

            <p className="text-sm font-body leading-relaxed mb-8"
              style={{ color: "rgba(239,233,213,0.60)" }}>
              Our international patient team guides you from first consultation until you safely return home. Reach out now — we respond within a few hours.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mb-7">
              {ctaItems.map((item) => (
                <a key={item.label} href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-white font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                  style={item.style}
                >
                  <item.icon className="w-4.5 h-4.5 flex-shrink-0 w-[18px] h-[18px]" />
                  <div>
                    <div className="text-sm font-semibold leading-tight">{item.label}</div>
                    <div className="text-[11px] font-normal leading-tight" style={{ opacity: 0.7 }}>{item.sublabel}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px" style={{ background: "rgba(113,187,178,0.15)" }} />
              <span className="text-[10px] font-body uppercase tracking-widest" style={{ color: "rgba(239,233,213,0.3)" }}>
                Contact Details
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(113,187,178,0.15)" }} />
            </div>

            {/* Contact info — vertical list */}
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-mint/20"
                    style={{ background: "rgba(113,187,178,0.1)" }}>
                    <item.icon className="w-3.5 h-3.5 text-mint" />
                  </div>
                  <div>
                    <p className="text-[10px] font-body uppercase tracking-wider" style={{ color: "rgba(239,233,213,0.32)" }}>{item.label}</p>
                    <p className="text-xs font-body group-hover:text-mint transition-colors duration-200" style={{ color: "rgba(239,233,213,0.72)" }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Contact Form ────────────────────── */}
          <div className="fcta-form rounded-2xl p-6 sm:p-8"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(113,187,178,0.15)", backdropFilter: "blur(16px)" }}>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(113,187,178,0.15)" }}>
                  <CheckCircle className="w-8 h-8 text-mint" />
                </div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">Message Sent!</h3>
                <p className="text-sm font-body" style={{ color: "rgba(239,233,213,0.6)" }}>
                  Our team will reach out within a few hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-semibold text-white text-lg mb-1">Send us a Message</h3>
                <p className="text-xs font-body mb-6" style={{ color: "rgba(239,233,213,0.45)" }}>
                  Confidential · No referral needed · We reply fast
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body mb-1.5" style={{ color: "rgba(239,233,213,0.5)" }}>Full Name</label>
                      <input type="text" required placeholder="Your name"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-xl px-4 py-2.5 text-sm font-body text-white placeholder-white/20 focus:outline-none transition-colors"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(113,187,178,0.18)" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(113,187,178,0.5)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(113,187,178,0.18)"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body mb-1.5" style={{ color: "rgba(239,233,213,0.5)" }}>Email Address</label>
                      <input type="email" required placeholder="your@email.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl px-4 py-2.5 text-sm font-body text-white placeholder-white/20 focus:outline-none transition-colors"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(113,187,178,0.18)" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(113,187,178,0.5)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(113,187,178,0.18)"; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body mb-1.5" style={{ color: "rgba(239,233,213,0.5)" }}>Phone / WhatsApp Number</label>
                    <input type="tel" placeholder="+Country Code & Number"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl px-4 py-2.5 text-sm font-body text-white placeholder-white/20 focus:outline-none transition-colors"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(113,187,178,0.18)" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(113,187,178,0.5)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(113,187,178,0.18)"; }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body mb-1.5" style={{ color: "rgba(239,233,213,0.5)" }}>Your Message</label>
                    <textarea rows={4} required placeholder="How can we help you? This message is completely confidential."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl px-4 py-2.5 text-sm font-body text-white placeholder-white/20 focus:outline-none transition-colors resize-none"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(113,187,178,0.18)" }}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(113,187,178,0.5)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(113,187,178,0.18)"; }}
                    />
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-body font-semibold text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #71BBB2 0%, #3a5f7d 100%)", boxShadow: "0 4px 20px rgba(113,187,178,0.3)" }}
                  >
                    <Send className="w-4 h-4" />
                    Send Confidential Message
                  </button>

                  <p className="text-[10px] font-body text-center" style={{ color: "rgba(239,233,213,0.28)" }}>
                    Your information is encrypted and will never be shared.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
