import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "./icons";

const mortgageLinks = [
  { to: "/first-time-buyers", label: "First Time Buyers" },
  { to: "/remortgages", label: "Remortgages" },
  { to: "/buy-to-let-mortgages", label: "Buy To Let Mortgages" },
  { to: "/new-build-mortgages", label: "New Build Mortgages" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [mortgagesOpen, setMortgagesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMortgagesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls = (active: boolean) =>
    cn(
      "px-4 py-2 font-medium transition-colors hover:text-primary",
      active ? "text-primary" : "text-fg",
    );

  return (
    <header className="relative z-50 bg-bg shadow-[0_2px_5px_var(--color-nav-shadow)]">
      <div className="page-pad flex min-h-16 items-center justify-between gap-4 py-3">
        <Link to="/" className="shrink-0" aria-label="JP Mortgage Solutions home">
          <img
            src="/images/logo.png"
            alt="Logo with large gold letters JP and black text Mortgage Solutions on a white background."
            className="h-12 w-auto max-w-[200px] object-contain md:h-14"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          <Link to="/" className={linkCls(pathname === "/")}>
            Home
          </Link>
          <Link to="/about-us" className={linkCls(pathname === "/about-us")}>
            About Us
          </Link>
          <div className="group relative">
            <button
              type="button"
              className={cn(
                "flex items-center gap-2 px-4 py-2 font-medium",
                mortgageLinks.some((l) => pathname === l.to)
                  ? "text-primary"
                  : "text-fg",
              )}
              aria-haspopup="true"
            >
              Mortgages
              <span className="inline-flex size-4 transition-transform group-hover:rotate-180">
                <IconChevronDown />
              </span>
            </button>
            <div className="invisible absolute top-full left-0 min-w-56 rounded-lg border border-border bg-bg py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {mortgageLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium hover:text-primary",
                    pathname === item.to ? "text-primary" : "text-fg",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/faqs" className={linkCls(pathname === "/faqs")}>
            FAQs
          </Link>
          <Link to="/contact" className={linkCls(pathname === "/contact")}>
            Contact
          </Link>
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-lg border-2 border-primary bg-primary px-6 py-3 font-semibold text-primary-fg transition-colors hover:border-fg hover:bg-dark"
          >
            Book an Enquiry
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 flex size-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-fg transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span className={cn("block h-0.5 w-6 bg-fg", open && "opacity-0")} />
          <span
            className={cn(
              "block h-0.5 w-6 bg-fg transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-bg pt-24 lg:hidden">
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-[5%] pb-10" aria-label="Mobile">
            <Link to="/" className={cn(linkCls(pathname === "/"), "text-lg")}>
              Home
            </Link>
            <Link
              to="/about-us"
              className={cn(linkCls(pathname === "/about-us"), "text-lg")}
            >
              About Us
            </Link>
            <button
              type="button"
              className="flex items-center justify-between px-4 py-2 text-left text-lg font-medium"
              onClick={() => setMortgagesOpen((v) => !v)}
              aria-expanded={mortgagesOpen}
            >
              Mortgages
              <span
                className={cn(
                  "inline-flex size-4 transition-transform",
                  mortgagesOpen && "rotate-180",
                )}
              >
                <IconChevronDown />
              </span>
            </button>
            {mortgagesOpen
              ? mortgageLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "px-8 py-2 font-medium",
                      pathname === item.to ? "text-primary" : "text-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                ))
              : null}
            <Link to="/faqs" className={cn(linkCls(pathname === "/faqs"), "text-lg")}>
              FAQs
            </Link>
            <Link
              to="/contact"
              className={cn(linkCls(pathname === "/contact"), "text-lg")}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg border-2 border-primary bg-primary px-6 py-3 font-semibold text-primary-fg"
            >
              Book an Enquiry
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
