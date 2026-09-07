import type { ReactNode } from "react";
import { BtnLink, Container, Tagline } from "./ui";

export function SplitHero({
  tagline,
  title,
  children,
  imageSrc,
  imageAlt,
  imageFirst = false,
  compact = false,
}: {
  tagline?: string;
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
  compact?: boolean;
}) {
  return (
    <section className="bg-bg">
      <Container className={compact ? "py-10 md:py-16" : "py-16 md:py-24"}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={imageFirst ? "lg:order-2" : undefined}>
            {tagline ? <Tagline>{tagline}</Tagline> : null}
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
            <div className="mt-5 space-y-4 text-lg text-muted">{children}</div>
            <div className="mt-8">
              <BtnLink to="/contact">Book an Enquiry</BtnLink>
            </div>
          </div>
          <div className={imageFirst ? "lg:order-1" : undefined}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CenterHero({
  tagline,
  title,
  children,
  imageSrc,
  imageAlt,
}: {
  tagline?: string;
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="bg-bg">
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {tagline ? <Tagline>{tagline}</Tagline> : null}
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          <div className="mt-5 space-y-4 text-lg text-muted">{children}</div>
          <div className="mt-8 flex justify-center">
            <BtnLink to="/contact">Book an Enquiry</BtnLink>
          </div>
        </div>
        <div className="mx-auto mt-12 w-full max-w-5xl overflow-hidden rounded-lg">
          <img src={imageSrc} alt={imageAlt} className="h-auto w-full object-cover" />
        </div>
      </Container>
    </section>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
  href,
  shadowed = false,
}: {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  href?: string;
  shadowed?: boolean;
}) {
  return (
    <div
      className={
        shadowed
          ? "flex h-full flex-col rounded-lg bg-bg p-6 text-center shadow-md"
          : "flex h-full flex-col rounded-lg border-2 border-border bg-bg p-6 text-center"
      }
    >
      <div className="mx-auto mb-3 inline-flex size-12 text-primary">{icon}</div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      {children ? <p className="mb-4 flex-1 text-muted">{children}</p> : null}
      {href ? (
        <BtnLink to={href} variant="link" withArrow className="mx-auto">
          Find out more
        </BtnLink>
      ) : null}
    </div>
  );
}
