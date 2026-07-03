import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTransition } from "../../context/TransitionContext";
import { setScrollTarget } from "../../utils/navigationState";
import {
  Phone, MessageCircle, Shield, X,
  Home, Building2, HeartPulse, Stethoscope, Plane, PhoneCall,
  AlignJustify, CalendarDays, Scale,
} from "lucide-react";

const navLinks = [
  { label: "Home",            short: "Home",     href: "#hero",             icon: Home        },
  { label: "About Us",        short: "About",    href: "/about-us",         icon: Building2,   isRoute: true },
  { label: "Abortion",        short: "Abortion", href: "/abortion",         icon: HeartPulse,  isRoute: true },
  { label: "Doctors",         short: "Doctors",  href: "/doctors",          icon: Stethoscope, isRoute: true },
  { label: "Patient Journey", short: "Journey",  href: "/patient-journey",  icon: Plane,       isRoute: true },
  { label: "Legal",           short: "Legal",    href: "/legal",            icon: Scale,       isRoute: true },
  { label: "Contact Us",      short: "Contact",  href: "/contact-us",       icon: PhoneCall,   isRoute: true },
];

// Bottom nav excludes Contact Us (accessible via menu sheet)
const mobileBottomLinks = navLinks.filter((l) => l.short !== "Contact");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateTo } = useTransition();
  const location = useLocation();

  const isActive = (link) => {
    if (link.href === "#hero") return location.pathname === "/";
    if (link.isRoute) return location.pathname === link.href;
    return false;
  };

  const navLinkClass = (link) => {
    if (isActive(link)) {
      return "font-semibold";
    }
    return "font-medium";
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (link) => {
    setMenuOpen(false);
    if (link.isRoute) {
      navigateTo(link.href);
      return;
    }
    if (globalThis.location.pathname === "/") {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setScrollTarget(link.href);
    navigateTo("/");
  };

  return (
    <>
      {/* ─────────────────────────────────────────
          DESKTOP NAV — floating pill (lg+)
      ───────────────────────────────────────── */}
      <nav
        className="hidden lg:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 items-center justify-between rounded-full px-6 py-3"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.88)"
            : "rgba(255,255,255,0.65)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(14,165,233,0.22)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(14,165,233,0.15), 0 1px 0 rgba(255,255,255,0.9) inset"
            : "0 4px 24px rgba(14,165,233,0.1), 0 1px 0 rgba(255,255,255,0.8) inset",
        }}
      >
        <button onClick={() => handleNav({ href: "#hero" })} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-semibold text-base" style={{ color: "#0C1A2E" }}>
            Aashirwad
          </span>
        </button>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link)}
              className={`px-3 py-1.5 text-xs font-body rounded-full transition-all duration-300 ${navLinkClass(link)}`}
              style={isActive(link)
                ? { background: "rgba(14,165,233,0.12)", color: "#0284C7" }
                : { color: "rgba(12,26,46,0.65)" }
              }
              onMouseEnter={(e) => { if (!isActive(link)) e.currentTarget.style.background = "rgba(14,165,233,0.07)"; }}
              onMouseLeave={(e) => { if (!isActive(link)) e.currentTarget.style.background = "transparent"; }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+918800905938"
            className="text-white px-3 py-2 rounded-full text-xs font-body font-medium flex items-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", boxShadow: "0 3px 14px rgba(14,165,233,0.35)" }}
          >
            <Phone className="w-3 h-3" /> Call Now
          </a>
          <a
            href="https://wa.me/918800905938"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-3 py-2 rounded-full text-xs font-body font-medium flex items-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 3px 14px rgba(37,211,102,0.3)" }}
          >
            <MessageCircle className="w-3 h-3" /> WhatsApp
          </a>
        </div>
      </nav>

      {/* ─────────────────────────────────────────
          MOBILE TOP — logo left · menu right
      ───────────────────────────────────────── */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 pt-3 pb-2 pointer-events-none">

        {/* Logo */}
        <button
          onClick={() => handleNav({ href: "#hero" })}
          className="pointer-events-auto flex items-center gap-2 rounded-full px-3 py-2"
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(14,165,233,0.25)",
            boxShadow: "0 4px 16px rgba(14,165,233,0.15)",
          }}
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}>
            <Shield className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-display font-semibold text-sm" style={{ color: "#0C1A2E" }}>Aashirwad</span>
        </button>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(14,165,233,0.25)",
            boxShadow: "0 4px 16px rgba(14,165,233,0.15)",
          }}
        >
          <AlignJustify className="w-4 h-4" style={{ color: "#0284C7" }} />
        </button>
      </div>

      {/* ─────────────────────────────────────────
          MOBILE BOTTOM NAV — dark floating pill
      ───────────────────────────────────────── */}
      <nav
        className="lg:hidden fixed z-50"
        style={{
          bottom: "calc(1rem + env(safe-area-inset-bottom))",
          left: "12px",
          right: "12px",
          borderRadius: "22px",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: "1px solid rgba(14,165,233,0.25)",
          boxShadow: "0 8px 32px rgba(14,165,233,0.18), 0 1px 0 rgba(255,255,255,0.95) inset",
        }}
      >
        <div className="flex items-center justify-around px-1 py-1.5">
          {mobileBottomLinks.map((link) => {
            const active = isActive(link);
            const Icon = link.icon;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link)}
                className="flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 transition-all duration-200"
              >
                <div
                  className="w-10 h-8 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={active ? { background: "rgba(14,165,233,0.15)" } : {}}
                >
                  <Icon
                    className="w-[18px] h-[18px] transition-all duration-200"
                    style={{ color: active ? "#0EA5E9" : "rgba(12,26,46,0.35)", strokeWidth: active ? 2.2 : 1.8 }}
                  />
                </div>
                <span
                  className="text-[9px] leading-none"
                  style={{
                    color: active ? "#0EA5E9" : "rgba(12,26,46,0.4)",
                    fontWeight: active ? 700 : 400,
                    letterSpacing: "0.02em",
                  }}
                >
                  {link.short}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ─────────────────────────────────────────
          MENU SHEET — slide up (mobile only)
      ───────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        className="lg:hidden fixed inset-0 z-[60] transition-all duration-300"
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sheet */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 z-[70] transition-transform duration-350 ease-out"
        style={{
          transform: menuOpen ? "translateY(0)" : "translateY(110%)",
          background: "rgba(240,249,255,0.97)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          borderTop: "1px solid rgba(14,165,233,0.25)",
          borderRadius: "24px 24px 0 0",
          boxShadow: "0 -8px 40px rgba(14,165,233,0.15)",
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full" style={{ background: "rgba(14,165,233,0.25)" }} />
        </div>

        <div className="px-5 pb-10 pt-2" style={{ paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom))" }}>

          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <p className="font-display font-semibold text-lg" style={{ color: "#0C1A2E" }}>Menu</p>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}
            >
              <X className="w-4 h-4" style={{ color: "#0284C7" }} />
            </button>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a
              href="https://wa.me/918800905938"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-body font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              WhatsApp Us
            </a>
            <a
              href="tel:+918800905938"
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-body font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", boxShadow: "0 4px 20px rgba(14,165,233,0.35)" }}
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              Call Now
            </a>
          </div>

          {/* Divider */}
          <div className="h-px mb-5" style={{ background: "rgba(14,165,233,0.15)" }} />

          {/* Menu items */}
          <div className="space-y-1">
            {[
              { icon: PhoneCall,    label: "Contact Us",        href: "/contact-us",       isRoute: true  },
              { icon: CalendarDays, label: "Book Appointment",  href: "https://wa.me/918800905938?text=I%20want%20to%20book%20an%20appointment", external: true },
              { icon: Scale,        label: "Legal & Privacy",   href: "/legal",             isRoute: true  },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    setMenuOpen(false);
                    if (item.external) { window.open(item.href, "_blank"); return; }
                    if (item.isRoute) navigateTo(item.href);
                  }}
                  className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-200"
                  style={{ background: "rgba(14,165,233,0.05)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(14,165,233,0.12)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(14,165,233,0.05)"; }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#0EA5E9" }} />
                  </div>
                  <span className="font-body font-medium text-sm" style={{ color: "rgba(12,26,46,0.8)" }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
