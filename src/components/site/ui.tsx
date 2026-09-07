import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IconArrowRight, IconChevronRight } from "./icons";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("page-pad", className)}>
      <div className="container-site">{children}</div>
    </div>
  );
}

export function Tagline({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-3 text-sm font-semibold tracking-wide text-primary uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}

type BtnVariant = "primary" | "secondary" | "link";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg text-center text-base font-semibold no-underline transition-colors duration-200";

const btnVariants: Record<BtnVariant, string> = {
  primary:
    "border-2 border-primary bg-primary px-6 py-3 text-primary-fg hover:border-fg hover:bg-dark hover:text-primary-fg",
  secondary:
    "border-2 border-fg bg-transparent px-6 py-3 text-fg hover:bg-fg hover:text-bg",
  link: "border-0 bg-transparent px-0 py-1 text-primary hover:text-dark",
};

export function BtnLink({
  to,
  href,
  children,
  variant = "primary",
  className,
  withArrow = false,
  withChevron = false,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: BtnVariant;
  className?: string;
  withArrow?: boolean;
  withChevron?: boolean;
}) {
  const cls = cn(btnBase, btnVariants[variant], className);
  const content = (
    <>
      {children}
      {withArrow ? (
        <span className="inline-flex size-6 text-primary">
          <IconArrowRight />
        </span>
      ) : null}
      {withChevron ? (
        <span className="inline-flex size-4">
          <IconChevronRight />
        </span>
      ) : null}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {content}
    </Link>
  );
}

export function CtaBanner() {
  return (
    <section className="bg-sand">
      <Container className="py-8 md:py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              Ready to take the next step?
            </h2>
            <p className="mt-2 text-lg text-muted">
              Let's find the right mortgage for you.
            </p>
          </div>
          <BtnLink to="/contact" withChevron>
            Book an Enquiry
          </BtnLink>
        </div>
      </Container>
    </section>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex size-6 shrink-0 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="100%" fill="none" aria-hidden="true">
          <polyline points="88 136 112 160 168 104" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
          <circle cx="128" cy="128" r="96" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
        </svg>
      </span>
      <p className="text-base">{children}</p>
    </li>
  );
}
