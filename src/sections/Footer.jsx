import { Shield, Heart } from "lucide-react";
const footerLinks = {
  services: [
    { label: "Pregnancy Consultation", href: "#services" },
    { label: "Medication Abortion", href: "#services" },
    { label: "Procedural Abortion", href: "#services" },
    { label: "Family Planning", href: "#services" },
    { label: "Teleconsultation", href: "#services" }
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Patient Journey", href: "#journey" },
    { label: "International Patients", href: "#international" },
    { label: "Facility", href: "#" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Patient Rights", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Medical Disclaimer", href: "#" }
  ],
  support: [
    { label: "FAQs", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Emergency Care", href: "tel:+911141590000" },
    { label: "Book Appointment", href: "#contact" }
  ]
};
export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <footer className="border-t border-white/10" style={{ background: "#0a1e2e" }}>
      <div className="container-main py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8">
          {
    /* Brand */
  }
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-mint/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-mint" />
              </div>
              <span className="font-display font-semibold text-white text-lg">
                Aashirwad
              </span>
            </div>
            <p className="text-sm font-body text-cream/60 mb-5 max-w-sm leading-relaxed">
              Aashirwad Health Centre is a premier women's healthcare facility in New Delhi, 
              providing confidential, compassionate, and legal reproductive healthcare to patients 
              from across the world.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-body text-cream/40">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-mint fill-mint" />
              <span>for women's health</span>
            </div>
          </div>

          {
    /* Services */
  }
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link, i) => <li key={i}>
                  <button
    onClick={() => scrollTo(link.href)}
    className="text-xs sm:text-sm font-body text-cream/50 hover:text-mint transition-colors"
  >
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>

          {
    /* Company */
  }
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, i) => <li key={i}>
                  <button
    onClick={() => scrollTo(link.href)}
    className="text-xs sm:text-sm font-body text-cream/50 hover:text-mint transition-colors"
  >
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link, i) => <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollTo(link.href);
                      }
                    }}
                    className="text-xs sm:text-sm font-body text-cream/50 hover:text-mint transition-colors"
                  >
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, i) => <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs sm:text-sm font-body text-cream/50 hover:text-mint transition-colors"
                  >
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>
        </div>

        {
    /* Bottom bar */
  }
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-cream/40 text-center sm:text-left">
            &copy; {(/* @__PURE__ */ new Date()).getFullYear()} Aashirwad Health Centre. All rights reserved. 
            This website complies with the Medical Termination of Pregnancy Act, India.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-body text-cream/30">
              ISO 27001 Certified
            </span>
            <span className="text-cream/20">|</span>
            <span className="text-[10px] font-body text-cream/30">
              NABH Accredited
            </span>
          </div>
        </div>
      </div>
    </footer>;
}
