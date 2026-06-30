import { useState, useCallback, useEffect } from 'react';
import { getAndClearScrollTarget } from '../utils/navigationState';
import IntroAnimation from '../sections/Home/IntroAnimation';
import Hero from '../sections/Home/Hero';
import TrustIndicators from '../sections/Home/TrustIndicators';
import PatientJourney from '../sections/Home/PatientJourney';
import ConciergeSection from '../sections/Home/ConciergeSection';
import GlobeSection from '../sections/Home/GlobeSection';
import Doctors from '../sections/Home/Doctors';
import SafetySection from '../sections/Home/SafetySection';
import Testimonials from '../sections/Home/Testimonials';
import Facility from '../sections/Home/Facility';
import FAQs from '../sections/Home/FAQs';
import FinalCTA from '../sections/Home/FinalCTA';

export default function Home() {
  const [scrollTarget] = useState(() => getAndClearScrollTarget());
  const [introComplete, setIntroComplete] = useState(() => scrollTarget !== null);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  useEffect(() => {
    if (scrollTarget) {
      const timer = setTimeout(() => {
        const el = document.querySelector(scrollTarget);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [scrollTarget]);

  return (
    <div className="relative">
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <main>
        <Hero />
        <TrustIndicators />
        <GlobeSection />
        <ConciergeSection />
        <PatientJourney />
        <Doctors />
        <SafetySection />
        <Testimonials />
        <Facility />
        <FAQs />
        <FinalCTA />
      </main>
    </div>
  );
}
