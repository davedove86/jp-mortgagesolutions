import { createFileRoute } from "@tanstack/react-router";
import {
  IconCar,
  IconSealPercent,
  IconTrendUp,
  IconUsersThree,
} from "@/components/site/icons";
import { FeatureCard, SplitHero } from "@/components/site/page-hero";
import { FeeStatement, RiskWarnings } from "@/components/site/compliance";
import { TrustBar } from "@/components/site/trust-bar";
import { Container, CtaBanner } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/first-time-buyers")({
  component: FirstTimeBuyers,
  head: () =>
    pageHead({
      title: "First Time Buyer Mortgages | JP Mortgage Solutions",
      description:
        "First-time buyer mortgage advice in Watford. JP Mortgage Solutions searches the whole market and guides you from your first conversation through to completion.",
      path: "/first-time-buyers",
    }),
});

const steps = [
  {
    n: "1",
    title: "Let's talk",
    body: "We'll discuss your goals, budget and circumstances.",
  },
  {
    n: "2",
    title: "Explore your options",
    body: "I'll search the whole of the market to find the right mortgage for you.",
  },
  {
    n: "3",
    title: "Move in with confidence",
    body: "I'll guide you through the process from offer to completion.",
  },
];

function FirstTimeBuyers() {
  return (
    <>
      <SplitHero
        tagline="Let us help you buy your first home"
        title="First Time Buyers"
        imageSrc="/images/first-time-buyers-hero.png"
        imageAlt="Smiling couple sitting on the floor with coffee mugs surrounded by moving boxes"
      >
        <p>
          Getting on the property ladder can feel daunting, but you don't have to
          do it alone. I'll guide you through every step.
        </p>
      </SplitHero>

      <TrustBar />

      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              The journey to your first home
            </h2>
            <p className="mt-3 text-muted">I make the process simple and stress-free.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="mb-4 text-5xl font-bold text-primary">{step.n}</div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand">
        <Container className="py-16 md:py-24">
          <div className="mx-auto mb-4 max-w-3xl text-center">
            <p className="mb-6 text-muted">
              There are more options available than you might think.
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Ways I can help first time buyers
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              shadowed
              icon={<IconTrendUp />}
              title="Increasing your borrowing capacity"
            >
              Some lenders can stretch your income to help you borrow more than you
              thought possible.
            </FeatureCard>
            <FeatureCard
              shadowed
              icon={<IconCar />}
              title="Lower Deposit Possibilities"
            >
              There are mortgages available with smaller deposits, making your first
              home more achievable.
            </FeatureCard>
            <FeatureCard
              shadowed
              icon={<IconUsersThree />}
              title="Joint Borrow Sole Proprietor"
            >
              Add a family member or friend to boost your borrowing without them
              going on the deeds.
            </FeatureCard>
            <FeatureCard
              shadowed
              icon={<IconSealPercent />}
              title="Shared Ownership & New Build Initiatives"
            >
              Popular schemes can help you get on the ladder with a smaller deposit
              and extra benefits.
            </FeatureCard>
          </div>
        </Container>
      </section>

      <RiskWarnings residential />
      <FeeStatement />
      <CtaBanner />
    </>
  );
}
