import { Link } from "@tanstack/react-router";

export function RiskWarnings({
  residential = false,
  remortgage = false,
  buyToLet = false,
  protection = false,
}: {
  residential?: boolean;
  remortgage?: boolean;
  buyToLet?: boolean;
  protection?: boolean;
}) {
  const items = [
    residential
      ? "Your home may be repossessed if you do not keep up repayments on your mortgage."
      : null,
    remortgage
      ? "You may have to pay an early repayment charge to your existing lender if you remortgage."
      : null,
    buyToLet
      ? "Your property may be repossessed if you do not keep up repayments on your mortgage."
      : null,
    buyToLet
      ? "Not all Buy to Let Mortgages are regulated by The Financial Conduct Authority."
      : null,
    protection
      ? "As with all insurance policies, conditions and exclusions will apply."
      : null,
  ].filter(Boolean) as string[];

  if (items.length === 0) return null;

  return (
    <section className="bg-bg" aria-label="Important risk warnings">
      <div className="page-pad">
        <div className="container-site pb-4">
          <div className="border-2 border-fg bg-sand p-6 md:p-8">
            <h2 className="text-xl font-bold text-fg md:text-2xl">Important information</h2>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item} className="text-base font-semibold leading-relaxed text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeeStatement() {
  return (
    <section className="bg-bg" aria-label="Mortgage arrangement fee">
      <div className="page-pad">
        <div className="container-site pb-4">
          <p className="border-2 border-fg p-6 text-base font-semibold leading-relaxed text-fg md:p-8">
            There may be a fee for arranging a mortgage. The precise amount will
            depend on your circumstances and is typically £399. We will confirm
            the fee, and when it is payable, before you decide to proceed.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FraudWarning() {
  return (
    <section className="bg-bg" aria-label="Fraud warning">
      <div className="page-pad">
        <div className="container-site pb-8">
          <div className="border-2 border-fg bg-bg p-6 md:p-8">
            <h2 className="text-xl font-bold text-fg md:text-2xl">Protect yourself from fraud</h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-fg">
              <p>
                We will never send you an email asking you to transfer money or
                requesting your bank details. We will never ask you to transfer
                deposit money to your solicitor.
              </p>
              <p>
                If you receive an email claiming to be from us and asking you to
                transfer money, take no further action and phone us immediately on{" "}
                <a href="tel:07763686547" className="font-semibold underline">
                  07763 686547
                </a>
                .
              </p>
              <p>
                Your solicitor or another professional involved in your property
                transaction may request this, but you should always seek
                confirmation from them directly that the email is genuine before
                sending any payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JustInTimeNotice() {
  return (
    <div className="space-y-3 border-2 border-fg bg-sand p-4 text-sm leading-relaxed text-fg">
      <p>
        Jodi Pyle Limited (trading as JP Mortgage Solutions) will be the
        controller of the personal data you provide. We only collect basic
        personal data about you, which does not include special category or
        location-based information.
      </p>
      <p>
        <span className="font-semibold">
          Why do you need my data and what will it be used for?
        </span>
        <br />
        We need your basic personal data so we can contact you and respond to
        your message, request or query. All personal data we process is processed
        by our staff in the UK.
      </p>
      <p>
        <span className="font-semibold">Who is my data shared with?</span>
        <br />
        Your data will only be shared with third parties if this is necessary to
        respond to your request. If that is the case, we will seek your permission
        before passing on your details.
      </p>
      <p>
        <span className="font-semibold">How long do you keep my data for?</span>
        <br />
        We may store your data for up to six years after the end of any business
        relationship, after which it will be securely destroyed. To object to
        processing, contact{" "}
        <a
          href="mailto:info@jp-mortgagesolutions.co.uk"
          className="font-semibold underline"
        >
          info@jp-mortgagesolutions.co.uk
        </a>
        .
      </p>
      <p>
        <span className="font-semibold">What are my rights?</span>
        <br />
        You can object, request access, rectification, erasure or restriction.
        Concerns:{" "}
        <a
          href="mailto:info@jp-mortgagesolutions.co.uk"
          className="font-semibold underline"
        >
          info@jp-mortgagesolutions.co.uk
        </a>
        . You can also complain to the ICO at{" "}
        <a
          href="https://ico.org.uk"
          className="font-semibold underline"
          target="_blank"
          rel="noreferrer"
        >
          https://ico.org.uk
        </a>
        .
      </p>
      <p>
        Please also read our{" "}
        <Link to="/privacy-policy" className="font-semibold underline">
          Privacy Policy
        </Link>{" "}
        before submitting this form.
      </p>
    </div>
  );
}
