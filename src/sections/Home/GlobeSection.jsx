import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane, MapPin, Globe, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const newDelhi = { lat: 28.6139, lng: 77.209 };
const originCities = [
  { lat: 25.2048, lng: 55.2708, name: "UAE", color: "#EFE9D5", size: 0.4 },
  { lat: 24.6877, lng: 46.7219, name: "Saudi Arabia", color: "#EFE9D5", size: 0.4 },
  { lat: 25.2854, lng: 51.531, name: "Qatar", color: "#EFE9D5", size: 0.4 },
  { lat: 29.3759, lng: 47.9774, name: "Kuwait", color: "#EFE9D5", size: 0.4 },
  { lat: 23.6139, lng: 58.5922, name: "Oman", color: "#EFE9D5", size: 0.4 },
  { lat: 26.0667, lng: 50.5577, name: "Bahrain", color: "#EFE9D5", size: 0.4 },
  { lat: 51.5074, lng: -0.1278, name: "United Kingdom", color: "#EFE9D5", size: 0.4 },
  { lat: 43.6532, lng: -79.3832, name: "Canada", color: "#EFE9D5", size: 0.4 },
  { lat: -33.8688, lng: 151.2093, name: "Australia", color: "#EFE9D5", size: 0.4 },
  { lat: 52.52, lng: 13.405, name: "Germany", color: "#EFE9D5", size: 0.4 },
  { lat: 1.3521, lng: 103.8198, name: "Singapore", color: "#EFE9D5", size: 0.4 },
  { lat: 35.6762, lng: 139.6503, name: "Japan", color: "#EFE9D5", size: 0.4 },
  { lat: 37.5665, lng: 126.978, name: "South Korea", color: "#EFE9D5", size: 0.4 },
  { lat: 3.139, lng: 101.6869, name: "Malaysia", color: "#EFE9D5", size: 0.4 },
  { lat: -36.8485, lng: 174.7633, name: "New Zealand", color: "#EFE9D5", size: 0.4 },
  { lat: -25.7479, lng: 28.2293, name: "South Africa", color: "#EFE9D5", size: 0.4 },
  { lat: 27.7172, lng: 85.324, name: "Nepal", color: "#EFE9D5", size: 0.4 },
  { lat: 13.7563, lng: 100.5018, name: "Thailand", color: "#EFE9D5", size: 0.4 }
];

const delhiDot = { ...newDelhi, name: "New Delhi", color: "#71BBB2", size: 0.7 };
const allDots = [...originCities, delhiDot];

const arcsData = originCities.map((city) => ({
  startLat: city.lat,
  startLng: city.lng,
  endLat: newDelhi.lat,
  endLng: newDelhi.lng,
  color: ["rgba(113,187,178,0.9)", "rgba(239,233,213,0.95)"]
}));

const ringData = [{ lat: newDelhi.lat, lng: newDelhi.lng }];

export default function GlobeSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const dragging = useRef(false);
  const prevMouse = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      1,
      2e3
    );
    camera.position.set(0, 30, 250);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0, 0);
    
    const el = renderer.domElement;
    el.style.cssText = "width:100%;height:100%;display:block;cursor:grab;";
    container.appendChild(el);

    scene.add(new THREE.AmbientLight(16777215, 1));
    const sun = new THREE.DirectionalLight(16777215, 0.8);
    sun.position.set(200, 100, 100);
    scene.add(sun);
    
    const fill = new THREE.DirectionalLight(7453618, 0.25);
    fill.position.set(-150, -80, -100);
    scene.add(fill);

    const globe = new ThreeGlobe()
      .globeImageUrl("https://cdn.jsdelivr.net/npm/three-globe@2.31.1/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("https://cdn.jsdelivr.net/npm/three-globe@2.31.1/example/img/earth-topology.png")
      .showAtmosphere(true)
      .atmosphereColor("#71BBB2")
      .atmosphereAltitude(0.13)
      .arcsData(arcsData)
      .arcColor((d) => d.color)
      .arcDashLength(0.5)
      .arcDashGap(0.15)
      .arcDashInitialGap(0)
      .arcDashAnimateTime(2600)
      .arcStroke(0.7)
      .arcAltitude(0.22)
      .pointsData(allDots)
      .pointAltitude(0.01)
      .pointRadius((d) => d.size)
      .pointColor((d) => d.color)
      .pointResolution(32)
      .ringsData(ringData)
      .ringColor(() => "rgba(113,187,178,0.8)")
      .ringMaxRadius(4)
      .ringPropagationSpeed(2)
      .ringRepeatPeriod(700)
      .labelsData(allDots)
      .labelLat((d) => d.lat)
      .labelLng((d) => d.lng)
      .labelText((d) => d.name)
      .labelSize(1.2)
      .labelDotRadius(0)
      .labelColor((d) => d.name === "New Delhi" ? "rgba(113,187,178,1)" : "rgba(255,255,255,1)")
      .labelResolution(6);

    scene.add(globe);

    // --- NEW: Set default rotation to face India directly ---
    const DEFAULT_ROT_Y = -1.35; 
    const DEFAULT_ROT_X = 0.2; 
    globe.rotation.y = DEFAULT_ROT_Y;
    globe.rotation.x = DEFAULT_ROT_X;

    const onDown = (e) => {
      dragging.current = true;
      prevMouse.current = { x: e.clientX, y: e.clientY };
      el.style.cursor = "grabbing";
    };
    const onUp = () => {
      dragging.current = false;
      el.style.cursor = "grab";
    };
    const onMove = (e) => {
      if (!dragging.current) return;
      const dx = e.clientX - prevMouse.current.x;
      const dy = e.clientY - prevMouse.current.y;
      globe.rotation.y += dx * 5e-3;
      globe.rotation.x = Math.max(
        -Math.PI / 4,
        Math.min(Math.PI / 4, globe.rotation.x + dy * 5e-3)
      );
      prevMouse.current = { x: e.clientX, y: e.clientY };
    };

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);

    const onTDown = (e) => {
      dragging.current = true;
      prevMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTUp = () => {
      dragging.current = false;
    };
    const onTMove = (e) => {
      if (!dragging.current) return;
      const dx = e.touches[0].clientX - prevMouse.current.x;
      const dy = e.touches[0].clientY - prevMouse.current.y;
      globe.rotation.y += dx * 5e-3;
      globe.rotation.x = Math.max(
        -Math.PI / 4,
        Math.min(Math.PI / 4, globe.rotation.x + dy * 5e-3)
      );
      prevMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    el.addEventListener("touchstart", onTDown, { passive: false });
    el.addEventListener("touchend", onTUp);
    el.addEventListener("touchmove", onTMove, { passive: false });

    // --- NEW: Snap-back Animation Logic ---
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      // If the user isn't dragging, smoothly lerp back to India
      if (!dragging.current) {
        // 0.04 controls the speed of the snap-back (lower is slower)
        globe.rotation.y += (DEFAULT_ROT_Y - globe.rotation.y) * 0.04;
        globe.rotation.x += (DEFAULT_ROT_X - globe.rotation.x) * 0.04;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("touchstart", onTDown);
      el.removeEventListener("touchend", onTUp);
      el.removeEventListener("touchmove", onTMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(el)) container.removeChild(el);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const ctx = gsap.context(() => {
      const cfg = {
        trigger: sectionRef.current,
        start: "top 78%",
        toggleActions: "play none none none"
      };
      gsap.from(".globe-badge", { opacity: 0, y: 20, duration: 0.6, scrollTrigger: cfg });
      gsap.from(".globe-title", { opacity: 0, y: 40, duration: 0.8, delay: 0.12, scrollTrigger: cfg });
      gsap.from(".globe-desc", { opacity: 0, y: 30, duration: 0.7, delay: 0.22, scrollTrigger: cfg });
      gsap.from(".globe-feature-card", { opacity: 0, y: 24, duration: 0.5, stagger: 0.1, delay: 0.32, scrollTrigger: cfg });
      gsap.from(".globe-cta", { opacity: 0, y: 18, duration: 0.6, delay: 0.55, scrollTrigger: cfg });
    }, sectionRef);
    return () => ctx.revert();
  }, [isVisible]);

  const features = [
    { icon: Plane, title: "Travel Assistance", desc: "Complete support for travel planning and logistics" },
    { icon: Headphones, title: "Dedicated Coordinator", desc: "Personal international patient liaison" },
    { icon: MapPin, title: "Accommodation Help", desc: "Nearby hotel recommendations and booking" },
    { icon: Globe, title: "Virtual Consultation", desc: "Pre-visit teleconsultation with our doctors" }
  ];

  return (
    <section
      id="international"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071520 0%, #0f2233 55%, #1a3a52 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{
          right: "-8%", top: "5%", width: 580, height: 580,
          background: "radial-gradient(circle, rgba(113,187,178,0.14) 0%, transparent 68%)"
        }} />
        <div className="absolute" style={{
          left: "-6%", bottom: "8%", width: 380, height: 380,
          background: "radial-gradient(circle, rgba(239,233,213,0.07) 0%, transparent 70%)"
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(113,187,178,0.18) 1px, transparent 1px)",
          backgroundSize: "38px 38px", opacity: 0.35
        }} />
      </div>

      <div className="section-padding relative z-10 py-16 md:py-24">
        <div className="container-main max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            
            {/* LEFT — Content */}
            <div>
              <div className="globe-badge inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{ background: "rgba(113,187,178,0.12)", border: "1px solid rgba(113,187,178,0.28)" }}>
                <Globe className="w-3.5 h-3.5 text-[#71BBB2]" />
                <span className="text-xs font-body text-[#71BBB2] tracking-wider font-semibold uppercase">
                  International Patient Care
                </span>
              </div>
              
              <h2 className="globe-title font-display text-3xl sm:text-4xl md:text-[2.8rem] xl:text-5xl font-semibold mb-5 leading-tight text-white">
                International Care,<br />
                <span className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg, #71BBB2 0%, #a8e6df 100%)" }}>
                  Rooted in Delhi
                </span>
              </h2>

              <p className="globe-desc text-sm sm:text-base font-body leading-relaxed mb-8 max-w-md"
                style={{ color: "rgba(239,233,213,0.72)" }}>
                Connecting you to safe, legal, and compassionate healthcare from anywhere in the world. 
                Patients from over 40 countries trust Aashirwad Health Centre for their reproductive health needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((item, i) => (
                  <div key={i} className="globe-feature-card rounded-xl p-4 flex items-start gap-3 transition-transform duration-300 hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.045)", border: "1px solid rgba(113,187,178,0.18)", backdropFilter: "blur(12px)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(113,187,178,0.18)" }}>
                      <item.icon className="w-4 h-4 text-[#71BBB2]" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white text-sm mb-0.5">{item.title}</h4>
                      <p className="text-xs font-body" style={{ color: "rgba(239,233,213,0.52)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="globe-cta inline-flex items-center gap-2 px-6 py-3 mt-5 rounded-full text-sm font-body font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, #71BBB2 0%, #3a5f7d 100%)", boxShadow: "0 4px 24px rgba(113,187,178,0.35)" }}>
                <Plane className="w-4 h-4" />
                Plan Your Visit
              </a>
            </div>

            {/* RIGHT — Real Earth Globe */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at center, rgba(113,187,178,0.1) 0%, transparent 70%)" }} />
              <div ref={canvasRef} className="w-full select-none h-[300px] sm:h-[420px] lg:h-[580px]" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}