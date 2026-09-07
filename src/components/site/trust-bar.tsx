import {
  IconCertificate,
  IconHouse,
  IconShieldCheck,
  IconUserCheck,
} from "./icons";

const items = [
  { label: "30+ Years Experience", Icon: IconUserCheck },
  { label: "Whole of Market Advice", Icon: IconHouse },
  { label: "CeMAP & ceRER Qualified", Icon: IconCertificate },
  { label: "FCA Registered", Icon: IconShieldCheck },
];

export function TrustBar() {
  return (
    <section className="bg-dark text-bg">
      <div className="page-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {items.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="inline-flex size-12 shrink-0 text-primary">
                  <Icon />
                </span>
                <div className="font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
