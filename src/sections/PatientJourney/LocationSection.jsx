import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

/* ── Small location card (Airport / Guest House / Hotel) ── */
function LocationCard({ img, name, distance }) {
  return (
    <div className="loc-card flex flex-col items-center gap-2 text-center" style={{ width: "250px" }}>
      <img
        src={img}
        alt={name}
        style={{ width: "250px", height: "auto", objectFit: "contain", filter: "drop-shadow(0px 14px 18px rgba(0,0,0,0.28))" }}
      />
      <p className="font-display font-semibold text-teal text-sm leading-tight">{name}</p>
      {distance && (
        <span
          className="text-[10px] font-body font-semibold px-3 py-1 rounded-full"
          style={{ background: "rgba(113,187,178,0.15)", color: "#3a7a72" }}
        >
          {distance}
        </span>
      )}
    </div>
  );
}

/* ── Center hospital card ── */
function HospitalCard() {
  return (
    <div className="loc-card flex flex-col items-center gap-2 text-center" style={{ width: "250px" }}>
      {/* "You Are Here" badge */}
      <div
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-1"
        style={{ background: "#71BBB2", boxShadow: "0 4px 14px rgba(113,187,178,0.45)" }}
      >
        <MapPin className="w-3 h-3 text-white" />
        <span className="text-[10px] font-body font-bold text-white tracking-wide">You Are Here</span>
      </div>

      {/* Hospital image */}
      <img
        src="/journey/hospital.png"
        alt="Dr. Rupali's Abortion Hospital"
        style={{ width: "250px", height: "auto", objectFit: "contain", filter: "drop-shadow(0px 14px 18px rgba(0,0,0,0.28))" }}
      />

      <div>
        <p className="font-display font-bold text-teal text-base leading-tight">
          Dr. Rupali's
        </p>
        <p className="font-display font-bold text-teal text-base leading-tight">
          Abortion Hospital
        </p>
        <p className="text-[11px] font-body text-mint font-semibold mt-1">
          — Your Care Destination —
        </p>
      </div>
    </div>
  );
}

/* ── SVG dashed connecting lines ── */
function ConnectorLines() {
  return (
    <svg
      className="loc-line absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 480"
      preserveAspectRatio="none"
    >
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,1 L0,9 L9,5 z" fill="rgba(113,187,178,0.65)" />
        </marker>
      </defs>

      {/* Airport → Hospital */}
      <line
        x1="00" y1="220"
        x2="370" y2="155"
        stroke="rgba(113,187,178,0.5)"
        strokeWidth="2"
        strokeDasharray="5 5"
        markerEnd="url(#arrow)"
      />

      {/* Hospital → Guest House */}
      <line
        x1="590" y1="145"
        x2="750" y2="190"
        stroke="rgba(113,187,178,0.5)"
        strokeWidth="2"
        strokeDasharray="5 5"
        markerEnd="url(#arrow)"
      />

      {/* Hospital → Hotel (vertical) */}
      <line
        x1="500" y1="180"
        x2="500" y2="290"
        stroke="rgba(113,187,178,0.5)"
        strokeWidth="2"
        strokeDasharray="5 5"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
}

/* ── MAIN SECTION ── */
export default function LocationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".loc-header > *",
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".loc-header", start: "top 82%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(".loc-card",
        { opacity: 0, scale: 0.82, y: 18 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".loc-map", start: "top 78%", toggleActions: "play none none reverse" },
        }
      );

      gsap.fromTo(".loc-line",
        { opacity: 0 },
        {
          opacity: 1, duration: 0.6, delay: 0.5,
          scrollTrigger: { trigger: ".loc-map", start: "top 78%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: "linear-gradient(160deg, #e8f6f5 0%, #d4ede9 55%, #e0f4f0 100%)" }}
    >
      <div className="container-main">

        {/* Header */}
        <div className="loc-header text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.8rem] font-semibold text-teal leading-tight mb-3">
            Your Stay in New Delhi <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #71BBB2, #3a7a72)" }}
            >
              — Everything Within Reach —
            </span>
          </h2>
          <p className="text-sm font-body text-teal/55 max-w-md mx-auto">
            Conveniently located near key destinations for a smooth, comfortable &amp; worry-free experience.
          </p>
        </div>

        {/* ── DESKTOP MAP ── */}
        <div className="loc-map hidden md:block">
          <div
            className="relative mx-auto"
            style={{ maxWidth: "1100px", height: "700px" }}
          >
            <ConnectorLines />

            {/* Airport — left */}
            <div className="absolute" style={{ left: "1%", top: "44%", transform: "translateY(-50%)" }}>
              <LocationCard
                img="/journey/airport.png"
                name="New Delhi International Airport"
                distance="25 km from the Hospital"
              />
            </div>

            {/* Hospital — center */}
            <div className="absolute" style={{ left: "50%", top: "32%", transform: "translate(-50%, -50%)" }}>
              <HospitalCard />
            </div>

            {/* Guest House — right */}
            <div className="absolute" style={{ right: "1%", top: "44%", transform: "translateY(-50%)" }}>
              <LocationCard
                img="/journey/hotel.png"
                name="Hospital Guest House"
                distance="1 km from the Hospital"
              />
            </div>

            {/* Hotel — bottom center */}
            <div className="absolute" style={{ left: "50%", bottom: "5%", transform: "translateX(-50%)" }}>
              <LocationCard
                img="/journey/taj.png"
                name="Hotel Taj Suraj Kund"
                distance="2 km from the Hospital"
              />
            </div>
          </div>
        </div>

        {/* ── MOBILE LIST ── */}
        <div className="md:hidden space-y-4">

          {/* Hospital — featured */}
          <div
            className="loc-card rounded-2xl p-4 flex items-center gap-4 bg-white shadow-sm"
            style={{ border: "2px solid rgba(113,187,178,0.3)" }}
          >
            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0" style={{ border: "1.5px solid rgba(113,187,178,0.3)" }}>
              <img src="/images/facility-exterior.jpg" alt="Hospital" className="w-full h-full object-cover" />
            </div>
            <div>
              <div
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 mb-1"
                style={{ background: "#71BBB2" }}
              >
                <MapPin className="w-2.5 h-2.5 text-white" />
                <span className="text-[9px] font-body font-bold text-white">You Are Here</span>
              </div>
              <p className="font-display font-bold text-teal text-sm">Dr. Rupali's Abortion Hospital</p>
              <p className="text-[11px] font-body text-mint font-semibold">— Your Care Destination —</p>
            </div>
          </div>

          {[
            { img: "/images/facility-exterior.jpg",  name: "New Delhi International Airport", distance: "25 km from the Hospital" },
            { img: "/images/clinic-interior.jpg",    name: "Hospital Guest House",             distance: "1 km from the Hospital"  },
            { img: "/images/facility-reception.jpg", name: "Hotel Taj Suraj Kund",             distance: "2 km from the Hospital"  },
          ].map((loc) => (
            <div
              key={loc.name}
              className="loc-card rounded-2xl p-4 flex items-center gap-4 bg-white shadow-sm"
              style={{ border: "1px solid rgba(113,187,178,0.18)" }}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0" style={{ border: "1px solid rgba(113,187,178,0.2)" }}>
                <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-display font-semibold text-teal text-sm mb-1">{loc.name}</p>
                <span
                  className="text-[10px] font-body font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ background: "rgba(113,187,178,0.15)", color: "#3a7a72" }}
                >
                  {loc.distance}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
