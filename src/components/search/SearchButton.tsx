"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import {
  SEARCH_OVERLAY_PANEL_ID,
  SearchOverlay,
} from "@/src/components/search/SearchOverlay";

type SearchButtonProps = {
  className?: string;
  children?: ReactNode;
};

export function SearchButton({ className, children }: SearchButtonProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== "k") return;

      const target = e.target;
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT")
      ) {
        return;
      }

      e.preventDefault();
      openSearch();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openSearch]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openSearch}
        aria-expanded={searchOpen}
        aria-controls={SEARCH_OVERLAY_PANEL_ID}
        aria-haspopup="dialog"
        className={
          className ??
          "inline-flex h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-black transition hover:bg-zinc-200"
        }
      >
        {children ?? "Search"}
      </button>
      <SearchOverlay
        isOpen={searchOpen}
        onClose={closeSearch}
        triggerRef={triggerRef}
      />
    </>
  );
}
