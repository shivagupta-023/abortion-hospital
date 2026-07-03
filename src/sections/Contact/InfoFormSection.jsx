import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Phone, Mail, Send, CheckCircle, Lock, User, MessageSquare, Globe2, MapPin } from "lucide-react";
import { countries } from "../../data/countries";
gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our coordinator",
    href: "https://wa.me/918800905938",
    external: true,
    style: { background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" },
  },
  {
    icon: Phone,
    label: "Call Now",
    value: "+91-8800905938 / +91-9911775222",
    href: "tel:+918800905938",
    external: false,
    style: { background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 4px 20px rgba(14,165,233,0.3)" },
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "care@aashirwadhealth.in",
    href: "mailto:care@aashirwadhealth.in",
    external: false,
    style: { background: "rgba(14,165,233,0.1)", border: "1.5px solid rgba(14,165,233,0.3)" },
  },
];

const inputBase = "w-full rounded-xl pl-10 pr-4 py-2.5 text-sm font-body focus:outline-none transition-colors bg-white";
const fieldBorder = (e, focused) => { e.target.style.borderColor = focused ? "rgba(14,165,233,0.6)" : "rgba(14,165,233,0.25)"; };

export default function InfoFormSection() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", country: "", phone: "", message: "" });

  const selectedCountry = countries.find((c) => c.name === form.country);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cfg = { trigger: sectionRef.current, start: "top 72%", toggleActions: "play none none reverse" };
      gsap.fromTo(".cif-left > *", { opacity: 0, x: -28 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: cfg });
      gsap.fromTo(".cif-form", { opacity: 0, x: 28 }, { opacity: 1, x: 0, duration: 0.65, ease: "power2.out", scrollTrigger: cfg });
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

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">

        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>Let's Start Your Journey</h2>
          <p className="text-sm sm:text-base font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.6)" }}>
            Reach out however feels easiest — every message is read by our team and treated with complete confidentiality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── LEFT ── */}
          <div className="cif-left">
            <p className="text-[10px] font-body font-bold uppercase tracking-widest mb-3" style={{ color: "#0EA5E9" }}>Reach Us Directly</p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mb-8">
              {contactMethods.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-xl font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${item.label === "Email Us" ? "" : "text-white"}`}
                  style={item.label === "Email Us" ? { ...item.style, color: "#0284C7" } : item.style}
                >
                  <item.icon className="w-[18px] h-[18px] flex-shrink-0" style={item.label === "Email Us" ? { color: "#0EA5E9" } : {}} />
                  <div>
                    <div className="text-sm font-semibold leading-tight" style={item.label === "Email Us" ? { color: "#0C1A2E" } : {}}>{item.label}</div>
                    <div className="text-[11px] font-normal leading-tight" style={item.label === "Email Us" ? { color: "rgba(12,26,46,0.6)" } : { opacity: 0.75 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <p className="text-[10px] font-body font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5" style={{ color: "#0EA5E9" }}>
              <MapPin className="w-3 h-3" /> Find Us
            </p>
            <div className="rounded-xl overflow-hidden mb-7" style={{ border: "1px solid rgba(14,165,233,0.2)", height: "220px" }}>
              <iframe
                title="Aashirwad Health Centre location"
                src="https://www.google.com/maps?q=35A+Main+Suraj+Kund+Road+Pul+Prahladpur+New+Delhi+110044&output=embed"
                className="w-full h-full"
                style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-center gap-3 rounded-xl px-4 py-3.5" style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.18)" }}>
              <Lock className="w-4 h-4 flex-shrink-0" style={{ color: "#0EA5E9" }} />
              <p className="text-xs font-body" style={{ color: "rgba(12,26,46,0.6)" }}>Every conversation is encrypted and strictly confidential — your privacy is never compromised.</p>
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <div
            className="cif-form rounded-2xl p-6 sm:p-8"
            style={{ background: "rgba(14,165,233,0.04)", border: "1.5px solid rgba(14,165,233,0.15)", boxShadow: "0 10px 40px rgba(14,165,233,0.08)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(14,165,233,0.12)" }}>
                  <CheckCircle className="w-8 h-8" style={{ color: "#0EA5E9" }} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2" style={{ color: "#0C1A2E" }}>Message Sent!</h3>
                <p className="text-sm font-body" style={{ color: "rgba(12,26,46,0.55)" }}>Our team will reach out within a few hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-semibold text-lg mb-1" style={{ color: "#0C1A2E" }}>Send us a Message</h3>
                <p className="text-xs font-body mb-6" style={{ color: "rgba(12,26,46,0.45)" }}>Confidential · No referral needed · We reply fast — wherever you're writing from.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="cf-name" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(14,165,233,0.6)" }} />
                      <input id="cf-name" type="text" required placeholder="Your name"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputBase} style={{ border: "1px solid rgba(14,165,233,0.25)" }}
                        onFocus={(e) => fieldBorder(e, true)} onBlur={(e) => fieldBorder(e, false)} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-email" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(14,165,233,0.6)" }} />
                      <input id="cf-email" type="email" required placeholder="your@email.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputBase} style={{ border: "1px solid rgba(14,165,233,0.25)" }}
                        onFocus={(e) => fieldBorder(e, true)} onBlur={(e) => fieldBorder(e, false)} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-country" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Country</label>
                      <div className="relative">
                          <Globe2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10" style={{ color: "rgba(14,165,233,0.6)" }} />
                        <select id="cf-country" required value={form.country}
                          onChange={(e) => setForm({ ...form, country: e.target.value })}
                          className={`${inputBase} appearance-none cursor-pointer`}
                          style={{ border: "1px solid rgba(14,165,233,0.25)" }}
                          onFocus={(e) => fieldBorder(e, true)} onBlur={(e) => fieldBorder(e, false)}>
                          <option value="" disabled>Select country</option>
                          {countries.map((c) => (
                            <option key={c.name} value={c.name}>{c.flag} {c.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cf-phone" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Phone / WhatsApp</label>
                      <div className="flex rounded-xl overflow-hidden bg-white" style={{ border: "1px solid rgba(14,165,233,0.25)" }}>
                        <span className="flex items-center px-3 text-sm font-body flex-shrink-0"
                          style={{ color: "rgba(12,26,46,0.6)", background: "rgba(14,165,233,0.08)", borderRight: "1px solid rgba(14,165,233,0.2)" }}>
                          {selectedCountry?.dial || "+__"}
                        </span>
                        <input id="cf-phone" type="tel" required placeholder="Number"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^0-9\s-]/g, "") })}
                          className="flex-1 min-w-0 px-3 py-2.5 text-sm font-body focus:outline-none bg-transparent" style={{ color: "#0C1A2E" }} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="block text-xs font-body mb-1.5" style={{ color: "rgba(12,26,46,0.55)" }}>Your Message</label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 pointer-events-none" style={{ color: "rgba(14,165,233,0.6)" }} />
                      <textarea id="cf-message" rows={4} required
                        placeholder="How can we help you? This message is completely confidential."
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputBase} resize-none`} style={{ border: "1px solid rgba(14,165,233,0.25)" }}
                        onFocus={(e) => fieldBorder(e, true)} onBlur={(e) => fieldBorder(e, false)} />
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-body font-semibold text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 4px 20px rgba(14,165,233,0.3)" }}>
                    <Send className="w-4 h-4" />
                    Send Confidential Message
                  </button>
                  <p className="text-[10px] font-body text-center" style={{ color: "rgba(12,26,46,0.35)" }}>Your information is encrypted and will never be shared.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
