import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

export default function PageLoader({ visible }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (visible) {
      setMounted(true);
    } else {
      // Keep mounted until fade-out finishes
      const t = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(t);
    }
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #071520 0%, #0f2233 55%, #0d2e28 100%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.35s ease",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(113,187,178,0.1) 0%, transparent 70%)" }}
      />

      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 relative z-10">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: "#71BBB2", boxShadow: "0 0 24px rgba(113,187,178,0.5)" }}
        >
          <Shield className="w-6 h-6 text-white" />
        </div>
        <span className="font-display font-semibold text-white text-2xl tracking-wide">
          Aashirwad
        </span>
      </div>

      {/* Animated bar */}
      <div
        className="relative z-10 w-48 h-[2px] rounded-full overflow-hidden"
        style={{ background: "rgba(113,187,178,0.15)" }}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, #71BBB2, #a8e6df)",
            animation: "pageload-bar 0.9s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pageload-bar {
          0%   { left: -60%; width: 60%; }
          50%  { left: 30%;  width: 60%; }
          100% { left: 100%; width: 60%; }
        }
      `}</style>
    </div>
  );
}
