import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteLayout } from "@/components/site/layout";
import { businessJsonLd } from "@/lib/seo";
import appCss from "../styles.css?url";

const APP_NAME = "JP Mortgage Solutions | Personal Mortgage Advice";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#a19356" },
      { name: "author", content: "Jodi Pyle Limited" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(businessJsonLd),
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteLayout>
            <Outlet />
          </SiteLayout>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <section className="page-pad py-24 text-center">
      <div className="container-site mx-auto max-w-xl">
        <p className="mb-3 font-semibold tracking-wide text-primary uppercase">404</p>
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-muted">
          That page doesn’t exist. Head back home or book an enquiry and I’ll help
          you find the right mortgage.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-lg border-2 border-primary bg-primary px-6 py-3 font-semibold text-primary-fg"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
