import { createFileRoute } from "@tanstack/react-router";
import {
  IconBuildings,
  IconHammer,
  IconKey,
  IconRepeat,
} from "@/components/site/icons";
import { FeatureCard } from "@/components/site/page-hero";
import { TrustBar } from "@/components/site/trust-bar";
import { BtnLink, CheckItem, Container, CtaBanner, Tagline } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Home | JP Mortgage Solutions | Personal Mortgage Advice" }],
  }),
});

function Home() {
  return (
    <>
      <header className="relative min-h-[80svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home-hero.png"
            alt="Couple standing on lawn at sunset looking at a modern house with large glass windows."
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="page-pad relative z-10">
          <div className="container-site">
            <div className="flex min-h-[80svh] max-w-3xl items-center py-16 md:py-24">
              <div>
                <div className="mb-4 font-bold tracking-wide text-primary uppercase">
                  JP Mortgage Solutions
                </div>
                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Mortgage Advice That Starts With You
                </h1>
                <p className="mt-5 text-lg text-muted">
                  Whether you’re buying your first home, moving house, remortgaging
                  or investing in property, finding the right mortgage can feel
                  overwhelming. At JP Mortgage Solutions, I’ll take the time to
                  understand your circumstances, goals and plans, then search the
                  whole of the market to help find a mortgage that’s right for you.
                </p>
                <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-start">
                  <BtnLink to="/contact" className="w-full sm:w-auto">
                    Start Your Enquiry
                  </BtnLink>
                  <BtnLink
                    href="#Mortgage-options"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Explore Mortgage Options
                  </BtnLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <TrustBar />

      <section id="Mortgage-options" className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Tagline>Our Mortgage Services</Tagline>
            <h2 className="text-3xl font-bold md:text-4xl">
              Mortgage advice for every stage of your journey
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<IconKey />} title="First Time Buyers" href="/first-time-buyers">
              Let me guide you through the steps to owning your first home.
            </FeatureCard>
            <FeatureCard icon={<IconRepeat />} title="Remortgages" href="/remortgages">
              Review your current deal and explore better options for your needs.
            </FeatureCard>
            <FeatureCard icon={<IconBuildings />} title="Buy to Let" href="/buy-to-let-mortgages">
              Mortgage advice for landlords and property investors.
            </FeatureCard>
            <FeatureCard icon={<IconHammer />} title="New Build" href="/new-build-mortgages">
              Expert advice to help you secure the right mortgage on your new home
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Tagline>WHY CHOOSE JP MORTGAGE SOLUTIONS?</Tagline>
              <h2 className="text-3xl font-bold md:text-4xl">Experience you can trust</h2>
              <ul className="mt-6 flex flex-col gap-4">
                <CheckItem>30+ years of experience in the mortgage industry</CheckItem>
                <CheckItem>Whole of market access to find you the right deal</CheckItem>
                <CheckItem>A personal approach to advice</CheckItem>
                <CheckItem>Support from start to finish</CheckItem>
              </ul>
              <div className="mt-8">
                <BtnLink to="/contact" withChevron>
                  Book an Enquiry
                </BtnLink>
              </div>
            </div>
            <div>
              <img
                src="/images/about-home.png"
                alt="House-shaped keychain and keys on a wooden table next to a potted green plant and blurred frame."
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
