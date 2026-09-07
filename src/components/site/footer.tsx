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
            JP Mortgage Solutions (Jodi Pyle Limited) is an Appointed Representative
            of Stonebridge Mortgage Solutions Limited, which is authorised and
            regulated by the Financial Conduct Authority under Firm Reference Number
            454811. Jodi Pyle Limited is registered with the Financial Conduct
            Authority under Firm Reference Number 1060045. Registered office: 18 St.
            James Road, Watford, Hertfordshire, WD18 0EA, United Kingdom. Stonebridge
            Mortgage Solutions Limited is registered in England. Registered office:
            Suites 7 & 9 Regency House, Miles Gray Road, Basildon, Essex, SS14
            3FR, United Kingdom.
          </p>
          <p className="mt-4 text-sm">
            Your home may be repossessed if you do not keep up your mortgage
            repayments on your mortgage.
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
              <a
                href="https://www.termsfeed.com/live/a0c52f05-3009-434b-9e94-f251e15eaa76"
                className="underline hover:text-bg"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.termsfeed.com/live/dca928e1-89c9-4c3f-aee4-4a173a6f373d"
                className="underline hover:text-bg"
                target="_blank"
                rel="noreferrer"
              >
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
