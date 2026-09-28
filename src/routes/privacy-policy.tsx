import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/ui";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | JP Mortgage Solutions",
      },
      {
        name: "description",
        content:
          "Privacy Policy of Jodi Pyle Limited, trading as JP Mortgage Solutions.",
      },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <section className="bg-bg">
      <Container className="py-16 md:py-20">
        <article className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-fg">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p>
            This Privacy Policy is issued by Jodi Pyle Limited, trading as JP
            Mortgage Solutions (“we”, “us”).
          </p>

          <h2 className="pt-2 text-2xl font-bold">Who is the controller?</h2>
          <p>
            Jodi Pyle Limited is the controller of personal data collected through
            this website and in the course of providing mortgage and protection
            advice.
          </p>
          <p>
            Jodi Pyle Limited is registered in England and Wales. Company number
            11048520. Registered office: 18 St. James Road, Watford, England, WD18
            0EA.
          </p>
          <p>
            Email:{" "}
            <a className="underline" href="mailto:info@jp-mortgagesolutions.co.uk">
              info@jp-mortgagesolutions.co.uk
            </a>
            <br />
            Tel:{" "}
            <a className="underline" href="tel:07763686547">
              07763 686547
            </a>
          </p>
          <p>
            JP Mortgage Solutions is a trading style of Jodi Pyle Limited, which is
            an Appointed Representative of Stonebridge Mortgage Solutions Ltd, which
            is authorised and regulated by the Financial Conduct Authority.
          </p>

          <h2 className="pt-2 text-2xl font-bold">What data we collect and why</h2>
          <p>We collect only the personal data we need, which may include:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Enquiry details you send us — such as your name, email address,
              telephone number and the content of your message — so we can respond
              to you and provide the service you requested.
            </li>
            <li>
              Identity and financial information needed to carry out identity
              checks and to advise on a mortgage or protection product, where you
              ask us to do so.
            </li>
            <li>
              Records of our advice, applications and communications, so we can
              provide the service and meet our regulatory duties.
            </li>
            <li>
              Marketing messages only where you have given consent. You can
              withdraw that consent at any time.
            </li>
          </ul>
          <p>
            We do not collect special category data or location-based information
            through the website enquiry form.
          </p>

          <h2 className="pt-2 text-2xl font-bold">How long we keep data</h2>
          <p>
            We keep personal data for at least 6 years after the end of a business
            relationship. We may store data for up to six years after that
            relationship ends, after which it is securely destroyed, unless a
            longer period is required by law or regulation.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Where data is processed</h2>
          <p>
            Personal data is processed in the United Kingdom by our staff. It may
            be processed outside the UK if the hosting or tools we use require it.
            Where that happens, we take steps required by UK data protection law.
          </p>

          <h2 className="pt-2 text-2xl font-bold">We do not sell personal data</h2>
          <p>
            We do not sell your personal data. We share it with third parties only
            where that is necessary to respond to your request or to provide the
            service — for example a lender, insurer or our principal — and, where
            required, we will seek your permission before passing on your details.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Cookies</h2>
          <p>
            Please read our{" "}
            <Link to="/cookie-policy" className="font-semibold underline">
              Cookie Policy
            </Link>{" "}
            for how this website uses cookies.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Your rights</h2>
          <p>
            You can ask for access to your personal data, and you can ask us to
            correct it, erase it, restrict it, or object to processing. Contact{" "}
            <a className="underline" href="mailto:info@jp-mortgagesolutions.co.uk">
              info@jp-mortgagesolutions.co.uk
            </a>{" "}
            for access, erasure or objection requests.
          </p>
          <p>
            You have the right to complain to the Information Commissioner’s
            Office:{" "}
            <a
              className="underline"
              href="https://ico.org.uk"
              target="_blank"
              rel="noreferrer"
            >
              https://ico.org.uk
            </a>
            .
          </p>

          <h2 className="pt-2 text-2xl font-bold">No financial advice on this website</h2>
          <p>
            No information on this website constitutes financial advice. If you
            require financial advice, please contact us.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Fraud</h2>
          <p>
            We will never send you an email asking you to transfer deposit funds or
            requesting bank details. If you receive an email claiming to be from us
            and asking you to transfer money, take no further action and phone
            07763 686547. Always confirm payment requests with your solicitor
            directly.
          </p>
        </article>
      </Container>
    </section>
  );
}
