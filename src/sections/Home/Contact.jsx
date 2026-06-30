import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
export default function Contact() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3e3);
  };
  return <section id="contact" ref={sectionRef} className="section-padding bg-teal">
      <div className="container-main">
        <div className="contact-content">
          {
    /* Section Header */
  }
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Take the First Step
            </h2>
            <p className="text-sm sm:text-base font-body text-cream/70 max-w-2xl mx-auto">
              Reach out confidentially. Our team is here to answer your questions and guide you through your options with compassion and discretion.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {
    /* Contact Info */
  }
            <div className="lg:col-span-2 space-y-5">
              {[
    { icon: Phone, label: "Phone", value: "+91 11 4159 0000", href: "tel:+911141590000" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 11 4159 0001", href: "https://wa.me/911141590001" },
    { icon: Mail, label: "Email", value: "care@aashirwadhealth.in", href: "mailto:care@aashirwadhealth.in" },
    { icon: MapPin, label: "Address", value: "12, Ring Road, Lajpat Nagar, New Delhi - 110024", href: "#" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 8AM - 8PM | 24/7 Emergency", href: "#" }
  ].map((item, i) => <a
    key={i}
    href={item.href}
    target={item.href.startsWith("http") ? "_blank" : void 0}
    rel={item.href.startsWith("http") ? "noopener noreferrer" : void 0}
    className="glass-dark rounded-xl p-4 flex items-start gap-3 group hover:bg-white/10 transition-colors"
  >
                  <div className="w-9 h-9 rounded-lg bg-mint/20 flex items-center justify-center flex-shrink-0 group-hover:bg-mint/30 transition-colors">
                    <item.icon className="w-4 h-4 text-mint" />
                  </div>
                  <div>
                    <p className="text-xs font-body text-cream/50 mb-0.5">{item.label}</p>
                    <p className="text-sm font-body text-cream/90">{item.value}</p>
                  </div>
                </a>)}
            </div>

            {
    /* Contact Form */
  }
            <div className="lg:col-span-3">
              <form
    onSubmit={handleSubmit}
    className="glass-dark rounded-2xl p-6 sm:p-8"
  >
                {submitted ? <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-mint/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-mint" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-xl mb-2">
                      Message Sent
                    </h3>
                    <p className="text-sm font-body text-cream/70">
                      Our team will reach out to you within 24 hours.
                    </p>
                  </div> : <>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-body text-cream/60 mb-1.5">
                          Full Name
                        </label>
                        <input
    type="text"
    required
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm font-body text-cream placeholder-cream/30 focus:outline-none focus:border-mint/50 transition-colors"
    placeholder="Your name"
  />
                      </div>
                      <div>
                        <label className="block text-xs font-body text-cream/60 mb-1.5">
                          Email Address
                        </label>
                        <input
    type="email"
    required
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm font-body text-cream placeholder-cream/30 focus:outline-none focus:border-mint/50 transition-colors"
    placeholder="your@email.com"
  />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-body text-cream/60 mb-1.5">
                        Phone Number
                      </label>
                      <input
    type="tel"
    value={form.phone}
    onChange={(e) => setForm({ ...form, phone: e.target.value })}
    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm font-body text-cream placeholder-cream/30 focus:outline-none focus:border-mint/50 transition-colors"
    placeholder="+Country Code & Number"
  />
                    </div>
                    <div className="mb-6">
                      <label className="block text-xs font-body text-cream/60 mb-1.5">
                        Secure Message
                      </label>
                      <textarea
    rows={4}
    required
    value={form.message}
    onChange={(e) => setForm({ ...form, message: e.target.value })}
    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm font-body text-cream placeholder-cream/30 focus:outline-none focus:border-mint/50 transition-colors resize-none"
    placeholder="How can we help you? This message is completely confidential."
  />
                    </div>
                    <button
    type="submit"
    className="w-full glass-btn-mint text-white py-3 rounded-full text-sm font-body font-semibold flex items-center justify-center gap-2"
  >
                      <Send className="w-4 h-4" />
                      Send Confidential Message
                    </button>
                    <p className="text-[10px] font-body text-cream/40 mt-3 text-center">
                      Your information is encrypted and will never be shared. We typically respond within 2-4 hours.
                    </p>
                  </>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
