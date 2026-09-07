import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { IconEnvelope, IconPhone } from "@/components/site/icons";
import { TrustBar } from "@/components/site/trust-bar";
import { Container, Tagline } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [{ title: "Contact | JP Mortgage Solutions | Experienced Mortgage Advice" }],
  }),
});

const enquiryTypes = [
  "First Time Buyers",
  "Remortgaging",
  "New Build Mortgage",
  "Buy To Let Mortgage",
  "Other",
];

function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("success");
    form.reset();
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

            <form onSubmit={onSubmit} className="grid gap-6" noValidate={false}>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First name" name="First-Name" required />
                <Field label="Last name" name="Last-Name" required />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email" name="Email" type="email" required />
                <Field label="Phone number" name="Phone" type="tel" required />
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
                  name="Message"
                  required
                  placeholder="Type your message..."
                  rows={6}
                  className="w-full rounded-none border border-fg bg-bg px-3 py-2 text-base"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center self-start rounded-lg border-2 border-primary bg-primary px-6 py-3 font-semibold text-primary-fg transition-colors hover:border-fg hover:bg-dark"
              >
                Submit Form
              </button>
              {status === "success" ? (
                <p className="rounded-lg bg-sand px-4 py-3 font-medium text-fg" role="status">
                  Thank you! Your submission has been received!
                </p>
              ) : null}
              {status === "error" ? (
                <p className="text-red-700" role="alert">
                  Oops! Something went wrong while submitting the form.
                </p>
              ) : null}
            </form>
          </div>
        </Container>
      </section>
      <TrustBar />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = name;
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
