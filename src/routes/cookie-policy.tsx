import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/ui";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicy,
  head: () => ({
    meta: [
      { title: "Cookie Policy | JP Mortgage Solutions" },
      {
        name: "description",
        content: "Cookie Policy for JP Mortgage Solutions.",
      },
    ],
  }),
});

function CookiePolicy() {
  return (
    <section className="bg-bg">
      <Container className="py-16 md:py-20">
        <article className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-fg">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Cookie Policy</h1>
          <p>
            This Cookie Policy explains how JP Mortgage Solutions, a trading style
            of Jodi Pyle Limited, uses cookies on this website.
          </p>

          <h2 className="pt-2 text-2xl font-bold">What cookies are</h2>
          <p>
            Cookies are small text files placed on your device when you visit a
            website. They are widely used to make sites work, to remember your
            choices, and to understand how a site is used.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Session cookies</h2>
          <p>
            Session cookies last only for your visit. They are deleted when you
            close your browser. They can be used to keep a page working while you
            move around the site.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Persistent cookies</h2>
          <p>
            Persistent cookies stay on your device for a set period, or until you
            delete them. We use one persistent cookie,{" "}
            <span className="font-semibold">jpms_cookie_consent</span>, to remember
            whether you accepted cookies or chose essential only. It lasts for up
            to 180 days.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Third-party cookies</h2>
          <p>
            Third-party cookies are set by a domain other than this website, for
            example by an analytics or advertising provider. This website does not
            set third-party cookies.
          </p>

          <h2 className="pt-2 text-2xl font-bold">How to accept or block cookies</h2>
          <p>
            When you first visit, a banner lets you accept cookies or keep
            essential storage only. You can also block or delete cookies in your
            browser settings. Blocking the consent cookie means the banner will
            appear again on your next visit.
          </p>
          <p>Common browser help pages:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <a
                className="underline"
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noreferrer"
              >
                Apple Safari
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            Further information is available from the Information Commissioner’s
            Office:{" "}
            <a
              className="underline"
              href="https://www.ico.org.uk/for-the-public/online/cookies/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.ico.org.uk/for-the-public/online/cookies/
            </a>
            .
          </p>
        </article>
      </Container>
    </section>
  );
}
