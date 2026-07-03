import PropTypes from "prop-types";
import { Quote, Star, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    flag: "🇦🇪",
    country: "UAE",
    quote: "The coordinator arranged everything — visa letter, airport pickup, accommodation. I just had to board my flight. The doctor was kind and the procedure was completely safe. I am very grateful.",
    theme: "Complete Assistance",
    accent: "#71BBB2"
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    quote: "Coming from London, I researched clinics across several countries. Aashirwad stood out for their transparency and government registration. My experience matched every positive review I had read.",
    theme: "Professional Excellence",
    accent: "#a8e6df"
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    quote: "The level of care and discretion was beyond anything I expected. Every staff member treated me with kindness. The guest house stay and meals were wonderful. I felt safe the entire time.",
    theme: "Compassionate Care",
    accent: "#71BBB2"
  },
  {
    flag: "🇸🇦",
    country: "Saudi Arabia",
    quote: "I was very nervous about traveling alone for this. The international coordinator called me before my flight and was available 24/7 throughout. I never felt alone. Thank you from the bottom of my heart.",
    theme: "International Support",
    accent: "#3a5f7d"
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    quote: "The teleconsultation before my trip gave me complete confidence. The visa invitation letter came within hours. The follow-up scan the next morning confirmed everything was perfect. Highly recommended.",
    theme: "Fast & Reliable",
    accent: "#8fd4cc"
  },
  {
    flag: "🇸🇬",
    country: "Singapore",
    quote: "Privacy was my biggest concern. From the discreet clinic entrance to the private room, everything was handled with the utmost confidentiality. My records are protected and I feel completely secure.",
    theme: "Privacy & Confidentiality",
    accent: "#71BBB2"
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    quote: "The doctors explained every option clearly without rushing me. The medical standard here is on par with Europe. I was back on my flight home within two days feeling well taken care of.",
    theme: "Clear Communication",
    accent: "#a8e6df"
  },
  {
    flag: "🇶🇦",
    country: "Qatar",
    quote: "Everything was arranged from arrival to departure. The driver was waiting at the airport, the guest house was clean and private, and the meals were healthy. A truly complete service.",
    theme: "End-to-End Service",
    accent: "#3a5f7d"
  }
];

const starKeys = [1, 2, 3, 4, 5];

const row1 = [
  ...testimonials.map((t) => ({ ...t, uid: `r1a-${t.country}` })),
  ...testimonials.map((t) => ({ ...t, uid: `r1b-${t.country}` }))
];
const row2 = [
  ...[...testimonials].reverse().map((t) => ({ ...t, uid: `r2a-${t.country}` })),
  ...[...testimonials].reverse().map((t) => ({ ...t, uid: `r2b-${t.country}` }))
];

function TestimonialCard({ flag, country, quote, theme, accent }) {
  return (
    <div
      className="flex-shrink-0 w-[80vw] sm:w-72 md:w-80 rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(113,187,178,0.1)",
        borderTop: `3px solid ${accent}`,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
      }}
    >
      <div className="absolute top-3 right-3 opacity-[0.06] pointer-events-none">
        <Quote className="w-14 h-14 text-white" />
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl leading-none">{flag}</span>
          <span className="text-xs font-body font-semibold" style={{ color: accent }}>
            {country}
          </span>
        </div>
        <div className="flex gap-0.5">
          {starKeys.map((n) => (
            <Star key={n} className="w-3 h-3 fill-mint text-mint" />
          ))}
        </div>
      </div>

      <blockquote
        className="text-xs sm:text-sm font-body leading-relaxed mb-4 italic"
        style={{ color: "rgba(239,233,213,0.78)" }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
        style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
      >
        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
        <span className="text-xs font-body font-medium" style={{ color: accent }}>
          {theme}
        </span>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  flag: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  accent: PropTypes.string.isRequired
};

export default function Testimonials() {
  return (
    <section
      className="py-12 md:py-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071520 0%, #0f2233 50%, #1a3a52 100%)" }}
    >
      <div className="container-main text-center mb-7 md:mb-10">
        <p className="text-xs font-body font-medium tracking-[0.25em] uppercase text-mint mb-3">
          International Patient Stories
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
          Stories From International Patients
        </h2>
        <p
          className="text-sm sm:text-base font-body max-w-2xl mx-auto"
          style={{ color: "rgba(239,233,213,0.65)" }}
        >
          Shared with consent and without identifying details — real experiences from women who traveled to India for care.
        </p>
      </div>

      <div className="overflow-hidden py-2 mb-4">
        <div className="animate-marquee flex gap-4 sm:gap-5">
          {row1.map((t) => (
            <TestimonialCard key={t.uid} flag={t.flag} country={t.country} quote={t.quote} theme={t.theme} accent={t.accent} />
          ))}
        </div>
      </div>

      <div className="overflow-hidden py-2">
        <div className="animate-marquee-reverse flex gap-4 sm:gap-5">
          {row2.map((t) => (
            <TestimonialCard key={t.uid} flag={t.flag} country={t.country} quote={t.quote} theme={t.theme} accent={t.accent} />
          ))}
        </div>
      </div>

      <div className="container-main mt-10 md:mt-14">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <ShieldCheck className="w-4 h-4 text-mint flex-shrink-0" />
          <p className="text-xs font-body" style={{ color: "rgba(239,233,213,0.45)" }}>
            All testimonials shared with full consent. Patient identities remain completely anonymous.
          </p>
        </div>
      </div>
    </section>
  );
}
