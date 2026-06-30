import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const DELHI = [77.1, 28.6];

const countries = [
  { name: "UAE",            coords: [54.37,  24.47], delay: 0.2, anchor: "start", lx: 9,  ly: -11 },
  { name: "Qatar",          coords: [51.18,  25.29], delay: 0.5, anchor: "end",   lx: -9, ly: -11 },
  { name: "United Kingdom", coords: [-0.12,  51.51], delay: 0.8, anchor: "end",   lx: -9, ly: -11 },
  { name: "Canada",         coords: [-79.38, 43.65], delay: 1.1, anchor: "start", lx: 9,  ly: -11 },
  { name: "Australia",      coords: [151.2, -33.87], delay: 1.4, anchor: "end",   lx: -9, ly: -11 },
  { name: "Singapore",      coords: [103.82,  1.35], delay: 1.7, anchor: "start", lx: 9,  ly: -11 },
  { name: "Japan",          coords: [139.69, 35.69], delay: 2.0, anchor: "end",   lx: -9, ly: -11 },
  { name: "New Zealand",    coords: [174.76,-36.85], delay: 2.3, anchor: "end",   lx: -9, ly: -11 },
  { name: "Thailand",       coords: [100.52, 13.75], delay: 2.6, anchor: "end",   lx: -9, ly: -11 },
  { name: "South Africa",   coords: [18.42, -33.93], delay: 2.9, anchor: "start", lx: 9,  ly: -11 },
];

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg,#050f18 0%,#071520 60%,#0a1e2e 100%)",
      }}
    >
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 3000; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes flowLine {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -80; }
        }
        @keyframes delhiRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(3.8); opacity: 0; }
        }
        .delhi-ring-a {
          transform-box: fill-box;
          transform-origin: center;
          animation: delhiRing 2.2s ease-out infinite;
        }
        .delhi-ring-b {
          transform-box: fill-box;
          transform-origin: center;
          animation: delhiRing 2.2s ease-out 1.1s infinite;
        }
      `}</style>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(113,187,178,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow near Delhi */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "52%", right: "18%",
          width: "380px", height: "380px",
          transform: "translate(50%, -50%)",
          background: "radial-gradient(circle,rgba(113,187,178,0.18) 0%,transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* World Map — full screen */}
        <div className="flex-1 w-full flex items-center justify-center">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 145, center: [0, 25] }}
            width={900}
            height={400}
            style={{ width: "100%", height: "100vh" }}
          >
            {/* Countries fill */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#0d2236"
                    stroke="#1b3d56"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover:   { outline: "none", fill: "#122c44" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Connection lines — country → Delhi */}
            {countries.map((c) => (
              <g key={`lines-${c.name}`}>
                {/* Animated draw-in */}
                <Line
                  from={c.coords}
                  to={DELHI}
                  stroke="rgba(113,187,178,0.35)"
                  strokeWidth={1.3}
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 3000,
                    strokeDashoffset: 3000,
                    animation: `drawLine 1.6s ease-out ${c.delay}s forwards`,
                  }}
                />
                {/* Flowing glow dots */}
                <Line
                  from={c.coords}
                  to={DELHI}
                  stroke="rgba(113,187,178,0.75)"
                  strokeWidth={1.3}
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: "6 20",
                    strokeDashoffset: 0,
                    animation: `flowLine 2.5s linear ${c.delay + 1.9}s infinite`,
                  }}
                />
              </g>
            ))}

            {/* Country markers */}
            {countries.map((c) => (
              <Marker key={c.name} coordinates={c.coords}>
                {/* Outer ring */}
                <circle
                  r={7}
                  fill="rgba(113,187,178,0.12)"
                  stroke="rgba(113,187,178,0.45)"
                  strokeWidth={1.2}
                />
                {/* Centre dot */}
                <circle r={3} fill="#71BBB2" />
                {/* Label */}
                <text
                  x={c.lx}
                  y={c.ly}
                  textAnchor={c.anchor}
                  style={{
                    fontSize: "7px",
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 600,
                    fill: "rgba(239,233,213,0.88)",
                  }}
                >
                  {c.name}
                </text>
              </Marker>
            ))}

            {/* New Delhi — destination marker */}
            <Marker coordinates={DELHI}>
              {/* Pulse rings */}
              <circle
                r={14}
                fill="none"
                stroke="rgba(113,187,178,0.55)"
                strokeWidth={1.5}
                className="delhi-ring-a"
              />
              <circle
                r={14}
                fill="none"
                stroke="rgba(113,187,178,0.55)"
                strokeWidth={1.5}
                className="delhi-ring-b"
              />
              {/* Soft glow */}
              <circle r={20} fill="rgba(113,187,178,0.12)" />
              {/* Main dot */}
              <circle r={9} fill="#71BBB2" />
              <circle r={4} fill="white" />
              {/* Label chip */}
              <rect
                x={14} y={-16}
                width={80} height={32}
                rx={7}
                fill="rgba(113,187,178,0.94)"
              />
              <text
                x={21} y={-2}
                style={{
                  fontSize: "9.5px",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fill: "white",
                }}
              >
                New Delhi
              </text>
              <text
                x={21} y={10}
                style={{
                  fontSize: "8px",
                  fontFamily: "system-ui, sans-serif",
                  fill: "rgba(255,255,255,0.72)",
                }}
              >
                Our Clinic ✦
              </text>
            </Marker>
          </ComposableMap>
        </div>

      </div>
    </section>
  );
}
