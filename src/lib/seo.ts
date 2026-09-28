/** Production site origin. Update this if the live domain changes. */
export const SITE_URL = "https://jp-mortgagesolutions.co.uk";

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = new URL(path, SITE_URL).href;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MortgageBroker",
  name: "JP Mortgage Solutions",
  legalName: "Jodi Pyle Limited",
  url: SITE_URL,
  email: "info@jp-mortgagesolutions.co.uk",
  telephone: "+447763686547",
  image: `${SITE_URL}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 St. James Road",
    addressLocality: "Watford",
    addressRegion: "England",
    postalCode: "WD18 0EA",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  description:
    "Personal mortgage advice from Jodi Pyle Limited, trading as JP Mortgage Solutions. Whole-of-market support for first-time buyers, remortgages, buy to let, new builds and protection.",
};
