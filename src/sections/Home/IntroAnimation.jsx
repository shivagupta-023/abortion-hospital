import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function IntroAnimation({ onComplete }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const words = ["Your", "Privacy.", "Your", "Choice.", "Your", "Care."];
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = "none";
            }
            onComplete();
          }
        });
      }
    });
    tl.fromTo(
      lineRef.current,
      { scaleX: 0.3, opacity: 0.5 },
      { scaleX: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );
    const wordElements = textRef.current?.querySelectorAll(".intro-word");
    if (wordElements) {
      tl.fromTo(
        wordElements,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        },
        "-=0.3"
      );
    }
    tl.to(lineRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    }, "+=1");
    tl.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
    tl.to(circleRef.current, {
      scale: 15,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, "+=0.3");
    return () => {
      tl.kill();
    };
  }, [onComplete]);
  return <div
    ref={containerRef}
    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
  >
      {
    /* Pulsing line */
  }
      <div
    ref={lineRef}
    className="w-32 h-[3px] bg-teal mb-12 origin-center"
    style={{ transform: "scaleX(0.3)" }}
  />

      {
    /* Animated text */
  }
      <div ref={textRef} className="text-center px-4">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-teal leading-tight tracking-tight">
          {words.map((word, i) => <span
    key={i}
    className="intro-word inline-block mx-1 sm:mx-2"
    style={{ opacity: 0 }}
  >
              {word}
            </span>)}
        </h1>
        <p
    className="intro-word mt-6 text-sm sm:text-base md:text-lg text-teal/60 font-body tracking-widest uppercase"
    style={{ opacity: 0 }}
  >
          Aashirwad Health Centre
        </p>
      </div>

      {
    /* Expanding circle for iris wipe */
  }
      <div
    ref={circleRef}
    className="absolute w-20 h-20 rounded-full border-4 border-teal/30"
    style={{ opacity: 0, transform: "scale(0)" }}
  />
    </div>;
}
