import { createFileRoute } from "@tanstack/react-router";
import {
  IconCertificateBold,
  IconCheckCircle,
  IconHouseBold,
  IconMapPin,
  IconShieldCheckBold,
} from "@/components/site/icons";
import { FeatureCard, SplitHero } from "@/components/site/page-hero";
import { FeeStatement, RiskWarnings } from "@/components/site/compliance";
import { BtnLink, Container, CtaBanner, Tagline } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/new-build-mortgages")({
  component: NewBuild,
  head: () =>
    pageHead({
      title: "New Build Mortgages | JP Mortgage Solutions",
      description:
        "New build mortgage advice in Watford. JP Mortgage Solutions helps you find the right mortgage for a new home, from reservation through to completion.",
      path: "/new-build-mortgages",
    }),
});

function NewBuild() {
  return (
    <>
      <SplitHero
        tagline="New Build Mortgages"
        title="Built for today. Ready for tomorrow."
        imageSrc="/images/new-build-hero.png"
        imageAlt="Row of modern new-build houses with white walls under a blue sky."
      >
        <p>
          New build homes offer modern living, energy efficiency and peace of
          mind. I'll help you find the right mortgage to make your move simple and
          stress-free.
        </p>
      </SplitHero>

      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Why Choose a new build?</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<IconHouseBold />} title="Start Your Journey">
              Built to the latest standards with modern design and quality you can
              rely on.
            </FeatureCard>
            <FeatureCard icon={<IconMapPin />} title="Incentives available">
              Take advantage of schemes like Help to Buy and developer incentives.
            </FeatureCard>
            <FeatureCard icon={<IconCertificateBold />} title="Energy efficient">
              New builds are designed to be energy efficient, helping to lower
              bills.
            </FeatureCard>
            <FeatureCard icon={<IconShieldCheckBold />} title="Added value">
              High specification homes in great locations can support strong
              long-term value.
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Tagline>WHY CHOOSE JP MORTGAGE SOLUTIONS?</Tagline>
              <h2 className="text-3xl font-bold md:text-4xl">How I Can Help You</h2>
              <div className="mt-8 grid gap-6">
                <div className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 text-primary">
                    <IconCheckCircle />
                  </span>
                  <div>
                    <h3 className="font-bold">Whole of market search</h3>
                    <p className="text-muted">
                      I'll search thousands of deals to find the right mortgage for
                      your new build.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 text-primary">
                    <IconCheckCircle />
                  </span>
                  <div>
                    <h3 className="font-bold">Expert guidance</h3>
                    <p className="text-muted">
                      I'll guide you through the process from reservation to
                      completion.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 text-primary">
                    <IconCheckCircle />
                  </span>
                  <div>
                    <h3 className="font-bold">Ongoing support</h3>
                    <p className="text-muted">
                      I'm here to help, even after you've got the keys to your new
                      home.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-muted">
                Expert advice at every step, from reservation to move in day and
                beyond.
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

      <RiskWarnings residential />
      <FeeStatement />
      <CtaBanner />
    </>
  );
}
