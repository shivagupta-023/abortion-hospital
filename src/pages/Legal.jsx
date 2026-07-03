import LegalHero from "../sections/Legal/Hero";
import RegistrationSection from "../sections/Legal/RegistrationSection";
import DoctorCertificates from "../sections/Legal/DoctorCertificates";
import DoctorVideo from "../sections/Legal/DoctorVideo";
import PatientRights from "../sections/Legal/PatientRights";
import LegalTabs from "../sections/Legal/LegalTabs";

export default function Legal() {
  return (
    <main>
      <LegalHero />
      <RegistrationSection />
      {/* <DoctorCertificates /> */}
      <DoctorVideo />
      <PatientRights />
      <LegalTabs />
    </main>
  );
}
