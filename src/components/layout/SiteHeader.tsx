"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SearchButton } from "@/src/components/search/SearchButton";

import "./site-header.css";

const LANDING_ASSETS = {
  logo: "/landing/union.svg",
  silver: "/landing/silver.svg",
  search: "/landing/search-icon.svg",
};

export function SiteHeader() {
  const pathname = usePathname();
  const hideLibraryCta = pathname === "/library";
  const isLibraryShell = pathname.startsWith("/library");

  return (
    <header
      className={`site-header${isLibraryShell ? " site-header--library" : ""}`}
      aria-label="Site"
    >
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="owow home">
          <img src={LANDING_ASSETS.logo} alt="owow" width={121} height={26} />
        </Link>

        <div className="site-header__silver-anchor">
          <img
            src={LANDING_ASSETS.silver}
            alt=""
            className="site-header__silver-header"
          />
        </div>

        <div className="site-header__actions">
          {!hideLibraryCta ? (
            <Link href="/library" className="site-header__cta">
              Animation Library
            </Link>
          ) : null}
          <SearchButton className="site-header__search">
            <img src={LANDING_ASSETS.search} alt="" width={15} height={15} />
            <span>Search</span>
          </SearchButton>
        </div>
      </div>
    </header>
  );
}
