import { Phone, MessageCircle, ArrowUp } from "lucide-react";
export default function FloatingCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {
    /* Scroll to top */
  }
      <button
    onClick={scrollToTop}
    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass flex items-center justify-center shadow-glass hover:bg-white/60 transition-all duration-300 hover:-translate-y-0.5"
    aria-label="Scroll to top"
  >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
      </button>

      {
    /* WhatsApp */
  }
      <a
    href="https://wa.me/911141590000"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
    aria-label="WhatsApp"
  >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </a>

      {
    /* Call */
  }
      <a
    href="tel:+911141590000"
    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass-btn-primary flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
    aria-label="Call now"
  >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </a>
    </div>;
}
