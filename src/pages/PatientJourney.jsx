import Hero from '../sections/PatientJourney/Hero';
import StepsSection from '../sections/PatientJourney/StepsSection';
import JourneyPhases from '../sections/Home/PatientJourney';
import LocationSection from '../sections/PatientJourney/LocationSection';
import FaqCtaSection from '../sections/PatientJourney/FaqCtaSection';

export default function PatientJourney() {
  return (
    <main>
      <Hero />
      <StepsSection />
      <LocationSection />
      <JourneyPhases />
      <FaqCtaSection />
    </main>
  );
}
