import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { SplitHero } from "@/components/site/page-hero";
import { RiskWarnings } from "@/components/site/compliance";
import { IconPlus } from "@/components/site/icons";
import { BtnLink, Container } from "@/components/site/ui";

export const Route = createFileRoute("/faqs")({
  component: Faqs,
  head: () => ({
    meta: [{ title: "FAQ | JP Mortgage Solutions | Experienced Mortgage Advice" }],
  }),
});

const faqs = [
  {
    q: "What is the difference between a fixed rate and a tracker rate?",
    a: (
      <>
        <p className="mb-3 font-semibold">Fixed Rate</p>
        <p className="mb-3">
          A fixed rate mortgage means you lock in your mortgage to a rate of
          interest over a certain term. This helps you to budget and gives you
          reassurance that whatever is happening to rates during that period your
          mortgage payments will not change.
        </p>
        <p className="mb-3">
          Fixed rates are determined by what is happening in the money markets.
          Often referred to as swap rates. This simply means the rate of interest
          that money is invested and then lent back out. Economy, politics and wars
          often affect these rates. Some things that can be totally out of our
          control!
        </p>
        <p className="mb-3">
          Fixed rates will quite often come with a product fee and will have early
          repayment fees if you leave or repay early. Most lenders have an
          overpayment facility between 10-20% per year without any fees and these
          rates are always portable. Meaning if you move home I can simply lift
          that rate up and take it over to your new home without penalty. It is
          important that your mortgage illustration is discussed fully and early
          repayment fees explained.
        </p>
        <p className="mb-3 font-semibold">Tracker rates</p>
        <p className="mb-3">
          Tracker rates do what they say on the tin. They track the Bank of
          England’s bank rate, and add on a bit.
        </p>
        <p>
          These rates are far more flexible and usually have no early repayment
          fees to leave. Also good for people who like to take a bit of a chance in
          case it drops and don’t want to be tied to a higher fixed rate of
          interest. The monetary policy committee meet 8 times a year and their
          decisions are influenced by inflation, economic growth, unemployment,
          exchange rates, global economic decisions, and financial market
          stability.
        </p>
      </>
    ),
  },
  {
    q: "My credit rating is quite poor will this mean I can’t get a mortgage?",
    a: (
      <>
        <p className="mb-3">
          You may have a low credit rating. This will factor in many things. If you
          are not on the electoral roll, or have no credit cards or loans, it’s
          difficult for lenders to see if you are a ‘good payer’.
        </p>
        <p className="mb-3">
          I work with lenders that will credit check, and not credit score.
        </p>
        <p>
          Maybe you have some blips and missed payments on your report. This is not
          a problem. I work with adverse credit lenders who want to help. The
          interest rate may be slightly higher, but this does not mean you can’t
          get a mortgage.
        </p>
      </>
    ),
  },
  {
    q: "Will my age affect my mortgage term?",
    a: (
      <>
        <p className="mb-3">
          With more and more people buying their first property at a later age,
          lenders have had to change their approach. Many lenders will lend up to
          age 75 and some 80 years old. They need to satisfy that the mortgage can
          be repaid by then.
        </p>
        <p>
          You will need to pass an affordability calculator and the shorter the
          term will make the mortgage payments higher, but so long as the lender
          can satisfy that the payments are affordable and you can continue to work
          in your industry then this is not a problem.
        </p>
      </>
    ),
  },
  {
    q: "I’m self employed, how will lenders view this?",
    a: (
      <>
        <p className="mb-3">Lenders will use different streams of income if you are self-employed!</p>
        <p className="mb-3">
          Most will work off salary and some even profit before tax and dividends,
          but some will also use retained profit in the business, and some even
          profit before tax.
        </p>
        <p>
          Even if your business has only been running for 1 year or you’ve swapped
          from sole trader to limited in the same line of work, I can help.
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between a capital repayment and an interest only mortgage?",
    a: (
      <>
        <p className="mb-3">
          Capital repayment means that the interest and the capital is paid every
          month. At the start of the mortgage because the loan is so large the
          majority of the payment will be interest, with a small amount being paid
          off each month from the balance. As the loan reduces, more of your
          payment goes towards paying off the capital. This keeps the mortgage
          payments balanced over its term.
        </p>
        <p className="mb-3">
          Interest only mortgages mean that you are only ever paying the interest
          off each month. The amount you borrowed will still be payable at the end
          of the term. Rules on these type of mortgages are very strict and you
          must have a suitable repayment vehicle at the end, quite often a minimum
          income and a certain amount of equity in the house.
        </p>
        <p>
          BTL mortgages are nearly always arranged on this basis as they are an
          investment property.
        </p>
      </>
    ),
  },
];

function Faqs() {
  return (
    <>
      <SplitHero
        tagline="FAQs"
        title="Frequently Asked Questions"
        imageSrc="/images/faq-hero.png"
        imageAlt="Man and woman sitting on couch looking at laptop with woman holding a mug in a cosy living room."
      >
        <p>
          Whether you’re buying your first home, looking to remortgage or
          considering a buy to let property, it’s natural to have questions. Here
          you’ll find straightforward answers to some of the most common questions
          about mortgages, the application process and what to expect when working
          with JP Mortgage Solutions.
        </p>
      </SplitHero>

      <section className="bg-bg">
        <Container className="pb-16 md:pb-24">
          <Accordion.Root type="single" collapsible className="mx-auto max-w-4xl space-y-4">
            {faqs.map((item) => (
              <Accordion.Item
                key={item.q}
                value={item.q}
                className="overflow-hidden rounded-lg border border-border bg-bg"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold">
                    {item.q}
                    <span className="inline-flex size-6 shrink-0 text-primary transition-transform group-data-[state=open]:rotate-45">
                      <IconPlus />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-none">
                  <div className="px-6 pb-6 text-muted">{item.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Container>
      </section>

      <RiskWarnings residential remortgage buyToLet />
      <section className="bg-sand">
        <Container className="py-12 md:py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="text-3xl font-bold">Still have questions?</h2>
            <BtnLink to="/contact" withChevron>
              Contact Us
            </BtnLink>
          </div>
        </Container>
      </section>
    </>
  );
}
