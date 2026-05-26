"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/src/components/header";

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
      {!isLanding && <Header />}
      {children}
    </div>
  );
}
