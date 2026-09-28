import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const COOKIE_NAME = "jpms_cookie_consent";

function readConsent() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|; )jpms_cookie_consent=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function writeConsent(value: "accepted" | "essential") {
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${COOKIE_NAME}=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  if (!visible) return null;

  function choose(value: "accepted" | "essential") {
    writeConsent(value);
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-fg bg-bg p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:p-6">
      <div className="container-site flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-fg md:text-base">
          We use a cookie to remember your choice on this banner. We do not use
          Google Analytics. Read the{" "}
          <Link to="/cookie-policy" className="font-semibold underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            className="min-h-11 border-2 border-fg bg-bg px-5 py-2 text-sm font-semibold text-fg"
            onClick={() => choose("essential")}
          >
            Essential only
          </button>
          <button
            type="button"
            className="min-h-11 border-2 border-primary bg-primary px-5 py-2 text-sm font-semibold text-primary-fg"
            onClick={() => choose("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
