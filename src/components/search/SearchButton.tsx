"use client";

import { useState, type ReactNode } from "react";

import { SearchOverlay } from "@/src/components/search/SearchOverlay";

type SearchButtonProps = {
  className?: string;
  children?: ReactNode;
};

export function SearchButton({ className, children }: SearchButtonProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        className={
          className ??
          "inline-flex h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-black transition hover:bg-zinc-200"
        }
      >
        {children ?? "Search"}
      </button>
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
