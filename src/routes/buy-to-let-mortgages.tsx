import { createFileRoute } from "@tanstack/react-router";
import {
  IconBank,
  IconBuildings,
  IconCoins,
  IconPercent,
  IconTrendUp,
  IconUsers,
} from "@/components/site/icons";
import { FeatureCard, SplitHero } from "@/components/site/page-hero";
import { BtnLink, Container, CtaBanner, Tagline } from "@/components/site/ui";

export const Route = createFileRoute("/buy-to-let-mortgages")({
  component: BuyToLet,
  head: () => ({
    meta: [
      {
        title: "Buy To Let Mortgages | JP Mortgage Solutions | Experienced Mortgage Advice",
      },
    ],
  }),
});

function BuyToLet() {
  return (
    <>
      <SplitHero
        tagline="Buy to let mortgages"
        title="Smart investments. Stronger future."
        imageSrc="/images/new-build-section.png"
        imageAlt="Couple smiling and talking with a mortgage advisor in a modern living room with a branded mug and notebook."
      >
        <p>
          A buy to let mortgage can help you generate rental income, build
          long-term wealth and secure your financial future.
        </p>
      </SplitHero>

      <section className="bg-sand">
        <Container className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Tagline>Buy To Let Mortgages</Tagline>
            <h2 className="text-3xl font-bold md:text-4xl">Why Buy To Let?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard shadowed icon={<IconCoins />} title="Generate rental income">
              Earn a steady income from tenants to help achieve your goals.
            </FeatureCard>
            <FeatureCard shadowed icon={<IconTrendUp />} title="Build long-term wealth">
              Property investment can increase in value over time and grow your
              assets.
            </FeatureCard>
            <FeatureCard
              shadowed
              icon={<IconPercent />}
              title="Tax efficient opportunities"
            >
              Benefit from potential tax advantages and allow expenses.
            </FeatureCard>
            <FeatureCard
              shadowed
              icon={<IconBank />}
              title="Diversify your portfolio"
            >
              Spread risk and create a balanced, resilient property portfolio.
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src="/images/remortgage-section.png"
              alt="Black coffee mug with JP Mortgage Solutions text on wooden table beside beige vase with green plant."
              className="h-auto w-full rounded-lg object-cover"
            />
            <div>
              <Tagline>Buy To Let Mortgages</Tagline>
              <h2 className="text-3xl font-bold md:text-4xl">
                Who is Buy To Let Mortgages for?
              </h2>
              <div className="mt-8 grid gap-6">
                <div>
                  <div className="mb-1 inline-flex size-10 text-primary">
                    <IconUsers />
                  </div>
                  <h3 className="font-bold">First-time landlords</h3>
                  <p className="text-muted">
                    Taking your first step into property investment? I'll guide you
                    through the process.
                  </p>
                </div>
                <div>
                  <div className="mb-1 inline-flex size-10 text-primary">
                    <IconBuildings />
                  </div>
                  <h3 className="font-bold">Experienced investors</h3>
                  <p className="text-muted">
                    Looking to expand your portfolio? I'll help you find competitive
                    rates and suitable options.
                  </p>
                </div>
                <div>
                  <div className="mb-1 inline-flex size-10 text-primary">
                    <IconBank />
                  </div>
                  <h3 className="font-bold">Limited companies</h3>
                  <p className="text-muted">
                    Buying through a limited company? I can source specialist
                    mortgage solutions.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-muted">
                Buy to let mortgages are available for a wide range of landlords
                and investors.
              </p>
              <div className="mt-8">
                <BtnLink to="/contact" withChevron>
                  Book an Enquiry
                </BtnLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
