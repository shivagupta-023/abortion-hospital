import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTransition } from "../../context/TransitionContext";
import { setScrollTarget } from "../../utils/navigationState";
import { Phone, MessageCircle, Menu, X, Shield } from "lucide-react";
const navLinks = [
  { label: "Home",            href: "#hero"          },
  { label: "Abortion",        href: "/abortion", isRoute: true },
  { label: "Doctors",         href: "/doctors", isRoute: true },
  { label: "International",   href: "#international"  },
  { label: "Patient Journey", href: "/patient-journey", isRoute: true },
  { label: "Contact",          href: "/contact", isRoute: true },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigateTo } = useTransition();
  const location = useLocation();

  const isActive = (link) => {
    if (link.href === "#hero") return location.pathname === "/";
    if (link.isRoute) return location.pathname === link.href;
    return false;
  };

  const navLinkClass = (link) => {
    if (isActive(link)) {
      return scrolled
        ? "bg-teal/10 text-teal font-semibold"
        : "bg-white/20 text-white font-semibold";
    }
    return scrolled
      ? "font-medium text-teal/70 hover:text-teal hover:bg-teal/5"
      : "font-medium text-white/85 hover:text-white hover:bg-white/10";
  };
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (link) => {
    setMobileOpen(false);
    if (link.isRoute) {
      navigateTo(link.href);
      return;
    }
    // If already on home page, just scroll
    if (globalThis.location.pathname === "/") {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // On another page — store scroll target in module var, then navigate home
    setScrollTarget(link.href);
    navigateTo("/");
  };

  return <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
          scrolled
            ? "glass shadow-glass"
            : "bg-white/10 backdrop-blur-xl border border-white/15"
        } rounded-full px-4 sm:px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav({ href: "#hero" })} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className={`font-display font-semibold text-sm sm:text-base hidden sm:inline transition-colors duration-300 ${scrolled ? "text-teal" : "text-white"}`}>
              Aashirwad
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link)}
                className={`px-3 py-1.5 text-xs font-body rounded-full transition-all duration-300 ${navLinkClass(link)}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+911141590000"
              className="glass-btn-primary text-white px-3 py-2 rounded-full text-xs font-body font-medium hidden sm:flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/911141590000"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-mint text-white px-3 py-2 rounded-full text-xs font-body font-medium hidden sm:flex items-center gap-1.5"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden glass-btn p-2 rounded-full"
            >
              {mobileOpen
                ? <X className="w-4 h-4 text-teal" />
                : <Menu className={`w-4 h-4 transition-colors duration-300 ${scrolled ? "text-teal" : "text-white"}`} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link)}
              className={`text-2xl font-display font-medium transition-colors ${isActive(link) ? "text-mint" : "text-teal hover:text-mint"}`}
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.4s ease-out ${i * 0.1}s`
              }}
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-3 mt-6">
            <a
              href="tel:+911141590000"
              className="glass-btn-primary text-white px-5 py-3 rounded-full text-sm font-body font-medium flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/911141590000"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-mint text-white px-5 py-3 rounded-full text-sm font-body font-medium flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>;
}
