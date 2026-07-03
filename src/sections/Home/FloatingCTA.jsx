import { Phone, MessageCircle, ArrowUp } from "lucide-react";
export default function FloatingCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
      <button
    onClick={scrollToTop}
    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-300 hover:-translate-y-0.5"
    style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(14,165,233,0.25)", boxShadow: "0 4px 16px rgba(14,165,233,0.15)" }}
    aria-label="Scroll to top"
  >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#0C1A2E" }} />
      </button>

      <a
    href="https://wa.me/918800905938"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
    aria-label="WhatsApp"
  >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </a>

      <a
    href="tel:+918800905938"
    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 text-white"
    style={{ background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)", boxShadow: "0 4px 16px rgba(14,165,233,0.35)" }}
    aria-label="Call now"
  >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </a>
    </div>;
}
