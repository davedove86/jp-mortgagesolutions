import type { ReactNode } from "react";
import { SiteFooter } from "./footer";
import { SiteHeader } from "./header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
