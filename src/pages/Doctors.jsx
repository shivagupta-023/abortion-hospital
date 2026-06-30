import Hero from '../sections/Doctors/Hero';
import TeamSection from '../sections/Doctors/TeamSection';
import CredentialsSection from '../sections/Doctors/CredentialsSection';
import ApproachSection from '../sections/Doctors/ApproachSection';
import TestimonialsSection from '../sections/Doctors/TestimonialsSection';

export default function Doctors() {
  return (
    <main>
      <Hero />
      <TeamSection />
      <CredentialsSection />
      <ApproachSection />
      <TestimonialsSection />
    </main>
  );
}
