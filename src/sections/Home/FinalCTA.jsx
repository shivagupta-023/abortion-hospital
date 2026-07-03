import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Mail, Phone, ShieldCheck, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Globe2 } from "lucide-react";
import { countries } from "../../data/countries";
gsap.registerPlugin(ScrollTrigger);

const ctaItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sublabel: "Chat with our coordinator",
    href: "https://wa.me/918800905938",
    external: true,
    style: { background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }
  },
  {
    icon: Phone,
    label: "Call Now",
    sublabel: "+91-8800905938 / +91-9911775222",
    href: "tel:+918800905938",
    external: false,
    style: { background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 4px 20px rgba(14,165,233,0.3)" }
  },
  {
    icon: Mail,
    label: "Email Us",
    sublabel: "care@aashirwadhealth.in",
    href: "mailto:care@aashirwadhealth.in",
    external: false,
    style: { background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.25)", color: "#0284C7" }
  }
];

const contactInfo = [
  { icon: MapPin, label: "Location", value: "35A, Main Suraj Kund Road, Pul Prahladpur, New Delhi - 110044" },
  { icon: Clock,  label: "Hours",    value: "Mon–Sat: 8AM–8PM  ·  24/7 Emergency" },
];

const fieldBorder = (e, focused) => {
  e.target.style.borderColor = focused ? "rgba(14,165,233,0.55)" : "rgba(14,165,233,0.2)";
};

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", country: "", phone: "", message: "" });

  const selectedCountry = countries.find((c) => c.name === form.country);

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
      setForm({ name: "", email: "", country: "", phone: "", message: "" });
    }, 3000);
  };

  const lightInput = "w-full rounded-xl pl-10 pr-4 py-2.5 text-sm font-body focus:outline-none transition-colors";
  const lightInputStyle = { background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.2)", color: "#0C1A2E" };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 45%, #E0F2FE 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{ left: "30%", top: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 65%)" }} />
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">

          {/* LEFT */}
          <div className="fcta-left">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.28)" }}
            >
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#0284C7" }} />
              <span className="text-[11px] font-body tracking-widest font-semibold uppercase" style={{ color: "#0284C7" }}>
                Government Registered · DL/MTP/86/SED/2020
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] font-semibold mb-4 leading-tight" style={{ color: "#0C1A2E" }}>
              Need Safe & Legal<br />
              Care{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #0EA5E9, #38BDF8)" }}>
                in India?
              </span>
            </h2>

            <p className="text-sm font-body leading-relaxed mb-8" style={{ color: "rgba(12,26,46,0.6)" }}>
              Our international patient team guides you from first consultation until you safely return home. Reach out now — we respond within a few hours.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mb-7">
              {ctaItems.map((item) => (
                <a key={item.label} href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                  style={{ ...item.style, color: item.style.color || "white" }}
                >
                  <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold leading-tight">{item.label}</div>
                    <div className="text-[11px] font-normal leading-tight opacity-70">{item.sublabel}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px" style={{ background: "rgba(14,165,233,0.2)" }} />
              <span className="text-[10px] font-body uppercase tracking-widest" style={{ color: "rgba(12,26,46,0.4)" }}>Contact Details</span>
              <div className="flex-1 h-px" style={{ background: "rgba(14,165,233,0.2)" }} />
            </div>

            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,233,0.1)" }}>
                    <item.icon className="w-3.5 h-3.5" style={{ color: "#0EA5E9" }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-body uppercase tracking-wider" style={{ color: "rgba(12,26,46,0.4)" }}>{item.label}</p>
                    <p className="text-xs font-body" style={{ color: "rgba(12,26,46,0.7)" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            className="fcta-form rounded-2xl p-4 sm:p-6 md:p-8"
            style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(14,165,233,0.2)", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(14,165,233,0.1)" }}
          >

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(14,165,233,0.12)" }}>
                  <CheckCircle className="w-8 h-8" style={{ color: "#0EA5E9" }} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2" style={{ color: "#0C1A2E" }}>Message Sent!</h3>
                <p className="text-sm font-body" style={{ color: "rgba(12,26,46,0.6)" }}>Our team will reach out within a few hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-semibold text-lg mb-1" style={{ color: "#0C1A2E" }}>Send us a Message</h3>
                <p className="text-xs font-body mb-6" style={{ color: "rgba(12,26,46,0.5)" }}>
                  Confidential · No referral needed · We reply fast — wherever you're writing from.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name */}
                  <div>
                    <label htmlFor="fct-name" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(14,165,233,0.5)" }} />
                      <input id="fct-name" type="text" required placeholder="Your name"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={lightInput} style={lightInputStyle}
                        onFocus={(e) => fieldBorder(e, true)} onBlur={(e) => fieldBorder(e, false)} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="fct-email" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(14,165,233,0.5)" }} />
                      <input id="fct-email" type="email" required placeholder="your@email.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={lightInput} style={lightInputStyle}
                        onFocus={(e) => fieldBorder(e, true)} onBlur={(e) => fieldBorder(e, false)} />
                    </div>
                  </div>

                  {/* Country + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fct-country" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Country</label>
                      <div className="relative">
                        <Globe2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10" style={{ color: "rgba(14,165,233,0.5)" }} />
                        <select id="fct-country" required value={form.country}
                          onChange={(e) => setForm({ ...form, country: e.target.value })}
                          className={`${lightInput} appearance-none cursor-pointer`}
                          style={lightInputStyle}
                          onFocus={(e) => fieldBorder(e, true)} onBlur={(e) => fieldBorder(e, false)}>
                          <option value="" disabled>Select country</option>
                          {countries.map((c) => (
                            <option key={c.name} value={c.name}>{c.flag} {c.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="fct-phone" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Phone / WhatsApp</label>
                      <div className="flex rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(14,165,233,0.2)" }}>
                        <span className="flex items-center px-3 text-sm font-body flex-shrink-0" style={{ color: "#0284C7", background: "rgba(14,165,233,0.08)", borderRight: "1px solid rgba(14,165,233,0.2)" }}>
                          {selectedCountry?.dial || "+__"}
                        </span>
                        <input id="fct-phone" type="tel" required placeholder="Number"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^0-9\s-]/g, "") })}
                          className="flex-1 min-w-0 px-3 py-2.5 text-sm font-body focus:outline-none bg-transparent" style={{ color: "#0C1A2E" }} />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="fct-message" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Your Message</label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 pointer-events-none" style={{ color: "rgba(14,165,233,0.5)" }} />
                      <textarea id="fct-message" rows={4} required
                        placeholder="How can we help you? This message is completely confidential."
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${lightInput} resize-none`} style={lightInputStyle}
                        onFocus={(e) => fieldBorder(e, true)} onBlur={(e) => fieldBorder(e, false)} />
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-body font-semibold text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 4px 20px rgba(14,165,233,0.3)" }}>
                    <Send className="w-4 h-4" />
                    Send Confidential Message
                  </button>

                  <p className="text-[10px] font-body text-center" style={{ color: "rgba(12,26,46,0.35)" }}>
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
