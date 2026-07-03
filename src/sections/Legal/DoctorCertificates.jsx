import { Award, ImageIcon } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rupali Mishra",
    role: "Founder and Sonologist",
    certs: [
      { label: "MBBS Certificate",          file: "cert-rupali-mbbs.jpg"   },
      { label: "PGDIP — Sonology",          file: "cert-rupali-pgdip.jpg"  },
      { label: "NMC Registration",          file: "cert-rupali-nmc.jpg"    },
      { label: "MTP Authorization Letter",  file: "cert-rupali-mtp.jpg"    },
    ],
  },
  {
    name: "Dr. Akanksha Chauhan",
    role: "Consultant Sonologist & Founder",
    certs: [
      { label: "MBBS Certificate",          file: "cert-akanksha-mbbs.jpg" },
      { label: "M.S (Obs-Gynae)",           file: "cert-akanksha-ms.jpg"   },
    ],
  },
  {
    name: "Dr. Aparna Muddana",
    role: "Consultant Sonologist and Obstetrics",
    certs: [
      { label: "MBBS Certificate",          file: "cert-aparna-mbbs.jpg"   },
      { label: "M.S (Obs-Gynae)",           file: "cert-aparna-ms.jpg"     },
    ],
  },
  {
    name: "Dr. Parija Juneja",
    role: "Consultant Sonologist and Obstetrics",
    certs: [
      { label: "MBBS Certificate",          file: "cert-parija-mbbs.jpg"   },
      { label: "M.S (Obs-Gynae)",           file: "cert-parija-ms.jpg"     },
    ],
  },
  {
    name: "Dr. Asha Arora",
    role: "Consultant Anesthesiologist",
    certs: [
      { label: "MBBS Certificate",          file: "cert-asha-mbbs.jpg"     },
      { label: "MD — Anesthesia",           file: "cert-asha-md.jpg"       },
      { label: "Fellowship — Pain Mgmt.",   file: "cert-asha-fellowship.jpg"},
    ],
  },
];

function CertCard({ cert }) {
  return (
    <div
      className="rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{ border: "1.5px dashed rgba(14,165,233,0.3)", background: "rgba(14,165,233,0.03)" }}
    >
      {/* Image area — swap div for <img> when file is ready */}
      <div
        className="relative flex flex-col items-center justify-center gap-2 py-6"
        style={{ minHeight: "140px", borderBottom: "1px solid rgba(14,165,233,0.15)" }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(14,165,233,0.1)" }}
        >
          <ImageIcon className="w-5 h-5" style={{ color: "#0EA5E9" }} />
        </div>
        <p className="text-[9px] font-body text-center px-3" style={{ color: "rgba(12,26,46,0.35)" }}>
          <code style={{ color: "#0284C7" }}>public/images/{cert.file}</code>
        </p>
      </div>
      <div className="px-3 py-2.5">
        <p className="text-xs font-body font-semibold text-center" style={{ color: "#0C1A2E" }}>{cert.label}</p>
      </div>
    </div>
  );
}

export default function DoctorCertificates() {
  return (
    <section
      id="certificates"
      className="section-padding bg-white"
    >
      <div className="container-main">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-body font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "#0EA5E9" }}>
            Verified Qualifications
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: "#0C1A2E" }}>
            Doctor Credentials & Certificates
          </h2>
          <p className="text-sm font-body max-w-2xl mx-auto" style={{ color: "rgba(12,26,46,0.55)" }}>
            All our doctors are qualified, registered medical professionals. Below are the verified credentials of our entire medical team.
          </p>
        </div>

        {/* Doctor blocks */}
        <div className="space-y-12">
          {doctors.map((doc) => (
            <div key={doc.name}>
              {/* Doctor header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
                >
                  <Award className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-base" style={{ color: "#0C1A2E" }}>{doc.name}</p>
                  <p className="text-xs font-body" style={{ color: "#0EA5E9" }}>{doc.role}</p>
                </div>
                <div
                  className="ml-auto h-px flex-1"
                  style={{ background: "rgba(14,165,233,0.18)", maxWidth: "200px" }}
                />
              </div>

              {/* Certificate cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {doc.certs.map((cert) => (
                  <CertCard key={cert.file} cert={cert} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-12 flex items-start gap-3 rounded-2xl px-5 py-4"
          style={{ background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.18)" }}
        >
          <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#0EA5E9" }} />
          <p className="text-xs font-body leading-relaxed" style={{ color: "rgba(12,26,46,0.6)" }}>
            All certificates are original and available for physical verification at our clinic. Our doctors are registered with the National Medical Commission (NMC) of India and maintain active licenses throughout their practice.
          </p>
        </div>

      </div>
    </section>
  );
}
