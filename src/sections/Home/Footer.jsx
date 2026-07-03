import { Shield, Heart } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Pregnancy Consultation", href: "#services" },
    { label: "Medication Abortion",    href: "#services" },
    { label: "Procedural Abortion",    href: "#services" },
    { label: "Family Planning",        href: "#services" },
    { label: "Teleconsultation",       href: "#services" },
  ],
  company: [
    { label: "About Us",              href: "#" },
    { label: "Our Doctors",           href: "#doctors" },
    { label: "Patient Journey",       href: "#journey" },
    { label: "International Patients", href: "#international" },
    { label: "Facility",              href: "#" },
  ],
  legal: [
    { label: "Privacy Policy",     href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Patient Rights",     href: "#" },
    { label: "Cookie Policy",      href: "#" },
    { label: "Medical Disclaimer", href: "#" },
  ],
  support: [
    { label: "FAQs",              href: "#" },
    { label: "Contact Us",        href: "#contact" },
    { label: "Emergency Care",    href: "tel:+918800905938" },
    { label: "Book Appointment",  href: "#contact" },
  ],
};

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
        borderTop: "1px solid rgba(14,165,233,0.2)",
      }}
    >
      <div className="container-main py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(14,165,233,0.12)" }}
              >
                <Shield className="w-5 h-5" style={{ color: "#0EA5E9" }} />
              </div>
              <span className="font-display font-semibold text-lg" style={{ color: "#0C1A2E" }}>
                Aashirwad
              </span>
            </div>
            <p
              className="text-sm font-body mb-5 max-w-sm leading-relaxed"
              style={{ color: "rgba(12,26,46,0.58)" }}
            >
              Aashirwad Health Centre is a premier women's healthcare facility in New Delhi,
              providing confidential, compassionate, and legal reproductive healthcare to patients
              from across the world.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-body" style={{ color: "rgba(12,26,46,0.42)" }}>
              <span>Made with</span>
              <Heart className="w-3 h-3" style={{ color: "#0EA5E9", fill: "#0EA5E9" }} />
              <span>for women's health</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4" style={{ color: "#0C1A2E" }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs sm:text-sm font-body transition-colors duration-200"
                    style={{ color: "rgba(12,26,46,0.52)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(12,26,46,0.52)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4" style={{ color: "#0C1A2E" }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs sm:text-sm font-body transition-colors duration-200"
                    style={{ color: "rgba(12,26,46,0.52)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(12,26,46,0.52)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4" style={{ color: "#0C1A2E" }}>
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollTo(link.href);
                      }
                    }}
                    className="text-xs sm:text-sm font-body transition-colors duration-200"
                    style={{ color: "rgba(12,26,46,0.52)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(12,26,46,0.52)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4" style={{ color: "#0C1A2E" }}>
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs sm:text-sm font-body transition-colors duration-200"
                    style={{ color: "rgba(12,26,46,0.52)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(12,26,46,0.52)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 sm:mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(14,165,233,0.18)" }}
        >
          <p
            className="text-xs font-body text-center sm:text-left"
            style={{ color: "rgba(12,26,46,0.42)" }}
          >
            &copy; {new Date().getFullYear()} Aashirwad Health Centre. All rights reserved.
            This website complies with the Medical Termination of Pregnancy Act, India.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.38)" }}>
              ISO 27001 Certified
            </span>
            <span style={{ color: "rgba(14,165,233,0.35)" }}>|</span>
            <span className="text-[10px] font-body" style={{ color: "rgba(12,26,46,0.38)" }}>
              NABH Accredited
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
