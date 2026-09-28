import { createFileRoute } from "@tanstack/react-router";
import { IconCheckCircle } from "@/components/site/icons";
import { FeatureCard } from "@/components/site/page-hero";
import { RiskWarnings } from "@/components/site/compliance";
import { Container, CtaBanner } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/protection")({
  component: Protection,
  head: () =>
    pageHead({
      title: "Protection Advice | JP Mortgage Solutions",
      description:
        "Protection advice alongside your mortgage, including life cover, critical illness and income protection. Speak to JP Mortgage Solutions in Watford.",
      path: "/protection",
    }),
});

const products = [
  "Life Cover",
  "Critical Illness",
  "Income Protection",
  "Family income benefit",
  "Permanent Health Insurance",
  "Building and contents insurance",
];

function Protection() {
  return (
    <>
      <section className="bg-bg">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold md:text-5xl">Protection</h1>
            <p className="mt-6 text-lg text-muted">
              Protecting your mortgage from life's unexpected mishaps and
              unfortunate eventualities is of upmost importance.
            </p>
            <p className="mt-4 text-lg text-muted">
              As part of your mortgage journey, I will be advising and recommending
              products from the following range to keep you, your family and your
              home safe.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-bg pb-8">
        <Container className="pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((title) => (
              <FeatureCard
                key={title}
                shadowed
                icon={<IconCheckCircle />}
                title={title}
              />
            ))}
          </div>
        </Container>
      </section>

      <RiskWarnings protection />
      <CtaBanner />
    </>
  );
}
