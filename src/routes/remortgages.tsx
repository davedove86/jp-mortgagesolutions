import { createFileRoute } from "@tanstack/react-router";
import {
  IconCheckCircle,
  IconCoins,
  IconHandshake,
  IconThumbsUp,
  IconUserSwitch,
} from "@/components/site/icons";
import { CenterHero, FeatureCard } from "@/components/site/page-hero";
import { FeeStatement, RiskWarnings } from "@/components/site/compliance";
import { BtnLink, Container, CtaBanner, Tagline } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/remortgages")({
  component: Remortgages,
  head: () =>
    pageHead({
      title: "Remortgages | JP Mortgage Solutions",
      description:
        "Remortgage advice from JP Mortgage Solutions in Watford. Compare the whole market to reduce payments, fix your rate or release equity before your deal ends.",
      path: "/remortgages",
    }),
});

function Remortgages() {
  return (
    <>
      <CenterHero
        tagline="Remortgages"
        title="A better deal could be waiting."
        imageSrc="/images/remortgages-hero.png"
        imageAlt="Smiling couple sitting on a couch reviewing a document with a laptop, notebook, and calculator on a table."
      >
        <p>
          Remortgaging could save you money, reduce your monthly payments or
          release equity to help you achieve your goals. I'll compare the whole
          market to find the right deal for you.
        </p>
      </CenterHero>

      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Tagline>Review your current mortgage</Tagline>
            <h2 className="text-3xl font-bold md:text-4xl">Why remortgage?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<IconHandshake />} title="Reduce your monthly payments">
              You could lower your monthly payments by switching to a better
              interest rate.
            </FeatureCard>
            <FeatureCard icon={<IconCoins />} title="Release equity">
              Unlock the value in your home to fund home improvements, debt
              consolidation or other life goals.
            </FeatureCard>
            <FeatureCard icon={<IconThumbsUp />} title="Fix your rate">
              Move to a fixed rate deal for security and peace of mind knowing what
              you'll pay each month.
            </FeatureCard>
            <FeatureCard icon={<IconUserSwitch />} title="Switch lender">
              If your current deal is ending, I'll compare the whole market to find
              you a better option.
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Tagline>WHY CHOOSE JP MORTGAGE SOLUTIONS?</Tagline>
              <h2 className="text-3xl font-bold md:text-4xl">
                When should I be looking to remortgage?
              </h2>
              <div className="mt-8 grid gap-6">
                <div className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 text-primary">
                    <IconCheckCircle />
                  </span>
                  <div>
                    <h3 className="font-bold">End of your current deal</h3>
                    <p className="text-muted">Typically 3-6 months before your deal ends.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 text-primary">
                    <IconCheckCircle />
                  </span>
                  <div>
                    <h3 className="font-bold">If your circumstances change</h3>
                    <p className="text-muted">
                      Such as a change in income, family or future plans.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 text-primary">
                    <IconCheckCircle />
                  </span>
                  <div>
                    <h3 className="font-bold">If you want to release equity</h3>
                    <p className="text-muted">
                      To access funds for renovations, investments or other needs.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-muted">
                I will be in contact with you 3-6 months before your mortgage ends
                ensuring that you never fall onto the lenders standard variable rate
                and will continue saving money.
              </p>
              <div className="mt-8">
                <BtnLink to="/contact" withChevron>
                  Book an Enquiry
                </BtnLink>
              </div>
            </div>
            <img
              src="/images/remortgage-section.png"
              alt="Black coffee mug with JP Mortgage Solutions text on wooden table beside beige vase with green plant."
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </Container>
      </section>

      <RiskWarnings residential remortgage />
      <FeeStatement />
      <CtaBanner />
    </>
  );
}
