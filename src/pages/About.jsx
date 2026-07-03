import Hero from '../sections/About/Hero';
import StorySection from '../sections/About/StorySection';
import FoundersSection from '../sections/About/FoundersSection';
import CenterSection from '../sections/About/CenterSection';
import ValuesSection from '../sections/About/ValuesSection';
import CtaSection from '../sections/About/CtaSection';

export default function About() {
  return (
    <main>
      <Hero />
      <StorySection />
      <FoundersSection />
      <CenterSection />
      <ValuesSection />
      <CtaSection />
    </main>
  );
}
