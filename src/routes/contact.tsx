import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { IconEnvelope, IconPhone } from "@/components/site/icons";
import { FraudWarning, JustInTimeNotice } from "@/components/site/compliance";
import { TrustBar } from "@/components/site/trust-bar";
import { Container, Tagline } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    pageHead({
      title: "Contact | JP Mortgage Solutions",
      description:
        "Contact JP Mortgage Solutions in Watford on 07763 686547 or send an enquiry. Personal mortgage advice for buyers, remortgages, landlords and protection.",
      path: "/contact",
    }),
});

/** Same Formspree form the Webflow build used (jp-mortgagesolutions.webflow.io/contact).
 * Plain HTML POST: reCAPTCHA stays on in Formspree, so the browser goes to
 * Formspree's captcha and thank-you page. */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwleznjo";

const enquiryTypes = [
  "First Time Buyers",
  "Remortgaging",
  "New Build Mortgage",
  "Buy To Let Mortgage",
  "Other",
];

function Contact() {
  // Formspree receives one "name" field. The visible First name / Last name
  // inputs have no name attribute; this fills the hidden "name" input just
  // before the browser's native POST (no preventDefault, no AJAX).
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const first = (form.querySelector("#First-Name") as HTMLInputElement | null)?.value ?? "";
    const last = (form.querySelector("#Last-Name") as HTMLInputElement | null)?.value ?? "";
    const hidden = form.querySelector('input[name="name"]') as HTMLInputElement | null;
    if (hidden) hidden.value = `${first} ${last}`.trim();
  }

  return (
    <>
      <section className="bg-bg">
        <Container className="py-16 md:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Tagline>Get In Touch</Tagline>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Contact us
              </h1>
              <p className="mt-5 text-lg text-muted">
                I'm happy to answer any questions you may have. Get in touch using
                the details below or complete the enquiry form.
              </p>
              <ul className="mt-8 space-y-5">
                <li className="flex items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary p-3 text-primary-fg">
                    <IconEnvelope />
                  </span>
                  <a
                    href="mailto:info@jp-mortgagesolutions.co.uk?subject=Website%20Enquiry"
                    className="font-medium hover:text-primary"
                  >
                    info@jp-mortgagesolutions.co.uk
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary p-3 text-primary-fg">
                    <IconPhone />
                  </span>
                  <a href="tel:07763686547" className="font-medium hover:text-primary">
                    07763 686547
                  </a>
                </li>
              </ul>
            </div>

            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              onSubmit={onSubmit}
              className="grid gap-6"
              noValidate={false}
            >
              <input type="hidden" name="name" />
              <input
                type="hidden"
                name="_subject"
                value="New enquiry from jp-mortgagesolutions.co.uk"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First name" id="First-Name" required />
                <Field label="Last name" id="Last-Name" required />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email" id="Email" name="email" type="email" required />
                <Field label="Phone number" id="Phone" name="phone" type="tel" required />
              </div>
              <div>
                <label htmlFor="Nature-of-your-enquiry" className="mb-2 block">
                  Nature of your enquiry
                </label>
                <select
                  id="Nature-of-your-enquiry"
                  name="Nature-of-your-enquiry"
                  required
                  defaultValue=""
                  className="min-h-11 w-full rounded-none border border-fg bg-bg px-3 py-2 text-base"
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  {enquiryTypes.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="Message" className="mb-2 block">
                  Message
                </label>
                <textarea
                  id="Message"
                  name="message"
                  required
                  placeholder="Type your message..."
                  rows={6}
                  className="w-full rounded-none border border-fg bg-bg px-3 py-2 text-base"
                />
              </div>
              <JustInTimeNotice />
              <button
                type="submit"
                className="inline-flex items-center justify-center self-start rounded-lg border-2 border-primary bg-primary px-6 py-3 font-semibold text-primary-fg transition-colors hover:border-fg hover:bg-dark"
              >
                Submit Form
              </button>
            </form>
          </div>
        </Container>
      </section>
      <FraudWarning />
      <TrustBar />
    </>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  name?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="min-h-11 w-full rounded-none border border-fg bg-bg px-3 py-2 text-base"
      />
    </div>
  );
}
