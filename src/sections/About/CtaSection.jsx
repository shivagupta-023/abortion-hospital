import { ShieldCheck } from "lucide-react";
import CtaCard from "../../components/CtaCard";

export default function CtaSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <CtaCard
          icon={ShieldCheck}
          badgeText="Safe · Private · Trusted"
          heading={["Experience the Care", "We've Built for You."]}
          description="Whatever brings you to Aashirwad, our team is ready to listen. Reach out — your first conversation is free and completely confidential."
        />
      </div>
    </section>
  );
}
