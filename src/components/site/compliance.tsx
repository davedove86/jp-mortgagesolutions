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
    <details className="group border-2 border-fg bg-sand text-sm leading-relaxed text-fg">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
        How we use your personal data
        <span className="inline-flex size-5 shrink-0 text-primary transition-transform group-open:rotate-45">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </summary>
      <div className="space-y-3 border-t border-fg px-4 py-4">
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
    </details>
  );
}
