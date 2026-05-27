"use client";

import { usePathname } from "next/navigation";

import { SiteHeader } from "@/src/components/layout/SiteHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <div
      className={
        isLanding
          ? "min-h-screen bg-[#0d0d0d] text-white"
          : "min-h-screen bg-[#101010] text-white"
      }
    >
      {!isLanding ? <SiteHeader /> : null}
      {children}
    </div>
  );
}
