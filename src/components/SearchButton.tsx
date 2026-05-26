"use client";

import { useState } from "react";
import SearchOverlay from "./SearchOverlay";

export default function SearchButton() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSearchOpen(true)}
        type="button"
        className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-medium text-black transition hover:bg-zinc-200"
      >
        Search
      </button>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}