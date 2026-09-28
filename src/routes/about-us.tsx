import { createFileRoute } from "@tanstack/react-router";
import {
  IconBank,
  IconCertificate,
  IconClock,
  IconMapPin,
  IconShieldCheck,
} from "@/components/site/icons";
import { FeatureCard, SplitHero } from "@/components/site/page-hero";
import { FeeStatement } from "@/components/site/compliance";
import { TrustBar } from "@/components/site/trust-bar";
import { BtnLink, CheckItem, Container, CtaBanner, Tagline } from "@/components/site/ui";

export const Route = createFileRoute("/about-us")({
  component: AboutUs,
  head: () => ({
    meta: [
      { title: "About Us | JP Mortgage Solutions | Experienced Mortgage Advice" },
    ],
  }),
});

function AboutUs() {
  return (
    <>
      <SplitHero
        tagline="About JP Mortgage Solutions"
        title="Experience. Knowledge. Advice you can trust"
        imageSrc="/images/about-hero.png"
        imageAlt="Desk with a plant, black mug, framed JP Mortgage Solutions logo, two black notebooks, and a black desk lamp."
      >
        <p>
          With over 30 years of experience in the mortgage industry, I offer
          personal, whole-of-market mortgage and protection advice designed around
          your individual circumstances, goals and plans.
        </p>
      </SplitHero>

      <TrustBar />

      <section className="bg-sand">
        <Container className="py-16 md:py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Tagline>About Us</Tagline>
            <h2 className="text-3xl font-bold md:text-4xl">My Background</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard shadowed icon={<IconClock />} title="30+ Years of Experience">
              Starting my career in 1992, I have seen and moved with the ever
              changing landscape of the mortgage industry.
            </FeatureCard>
            <FeatureCard shadowed icon={<IconMapPin />} title="Local Expertise">
              I have lived in Watford for the last 27 years and have a strong
              understanding of the local community.
            </FeatureCard>
            <FeatureCard shadowed icon={<IconCertificate />} title="Fully Qualified">
              I am CeMAP and ceRER qualified, giving you professional and
              up-to-date advice you can rely on.
            </FeatureCard>
            <FeatureCard shadowed icon={<IconShieldCheck />} title="FCA Registered">
              I am FCA registered, so you can have complete confidence in the
              advice and service I provide.
            </FeatureCard>
            <FeatureCard shadowed icon={<IconBank />} title="Whole of Market Advisor">
              I have access to a wide range of lenders to find the right solution
              for your needs.
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src="/images/about-section.png"
              alt="Man in navy sweater smiles while discussing documents with couple at JP Mortgage Solutions office."
              className="h-auto w-full rounded-lg object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">My Approach</h2>
              <p className="mt-4 text-muted">
                Every client's situation is unique, which is why I take the time to
                understand your goals and circumstances.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                <CheckItem>Clear and honest advice</CheckItem>
                <CheckItem>Simple explanations, no jargon</CheckItem>
                <CheckItem>Solutions tailored to your needs</CheckItem>
                <CheckItem>Support from start to finish</CheckItem>
              </ul>
              <div className="mt-8">
                <BtnLink to="/contact" withChevron>
                  Book an Enquiry
                </BtnLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FeeStatement />
      <CtaBanner />
    </>
  );
}
