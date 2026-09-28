import { Link } from "@tanstack/react-router";

const quick = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
  { to: "/protection", label: "Protection" },
] as const;

const mortgages = [
  { to: "/first-time-buyers", label: "First Time Buyers" },
  { to: "/remortgages", label: "Remortgages" },
  { to: "/buy-to-let-mortgages", label: "Buy To Let Mortgages" },
  { to: "/new-build-mortgages", label: "New Build Mortgages" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-dark text-footer-fg">
      <div className="page-pad">
        <div className="container-site py-16 md:py-20">
          <div className="grid gap-10 pb-16 md:grid-cols-2 lg:grid-cols-4">
            <Link to="/" className="block max-w-[170px]">
              <img
                src="/images/jp-white-text.svg"
                alt="JP Mortgage Solutions Logo"
                className="h-auto w-full"
              />
            </Link>
            <div>
              <div className="mb-3 font-semibold text-primary">Quick Links</div>
              <ul className="flex flex-col">
                {quick.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block py-2 text-sm text-footer-fg no-underline hover:text-bg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold text-primary">Mortgages</div>
              <ul className="flex flex-col">
                {mortgages.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block py-2 text-sm text-footer-fg no-underline hover:text-bg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 font-semibold text-primary">Get In Touch</div>
              <ul className="flex flex-col">
                <li>
                  <a
                    href="tel:07763686547"
                    className="block py-2 text-sm text-footer-fg no-underline hover:text-bg"
                  >
                    Phone: 07763 686547
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@jp-mortgagesolutions.co.uk?subject=Website%20Enquiry"
                    className="block py-2 text-sm text-footer-fg no-underline hover:text-bg"
                  >
                    Email: info@jp-mortgagesolutions.co.uk
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-muted" />

          <p className="mt-4 text-sm leading-relaxed">
            JP Mortgage Solutions is a trading style of Jodi Pyle Limited, which is
            an Appointed Representative of Stonebridge Mortgage Solutions Ltd,
            which is authorised and regulated by the Financial Conduct Authority.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Registered Office: Jodi Pyle Limited, 18 St. James Road, Watford,
            England, WD18 0EA.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Registered in England and Wales. Company number 11048520.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Email:{" "}
            <a
              href="mailto:info@jp-mortgagesolutions.co.uk"
              className="underline hover:text-bg"
            >
              info@jp-mortgagesolutions.co.uk
            </a>{" "}
            | Tel:{" "}
            <a href="tel:07763686547" className="underline hover:text-bg">
              07763 686547
            </a>
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
            <a
              href="https://www.dovedesign.io/"
              className="underline hover:text-bg"
              target="_blank"
              rel="noreferrer"
            >
              Website by Dove Design Ltd
            </a>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy-policy" className="text-bg underline hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-bg underline hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
