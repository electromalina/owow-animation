import Link from "next/link";

import { animations } from "@/src/data/animations";
import SearchButton from "@/src/components/SearchButton";

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 text-zinc-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16" />
      <path d="M7 12h10" />
      <path d="M10 17h4" />
      <circle cx="9" cy="7" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function LibraryPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-8 md:px-10">
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <label className="flex h-12 w-full max-w-[460px] items-center gap-3 rounded-xl border border-white/10 bg-[#1a1a1a] px-4 text-sm text-zinc-300">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Animations"
            className="w-full bg-transparent outline-none placeholder:text-zinc-500"
          />
        </label>
        <SearchButton />
      </div>

      <section className="grid gap-x-8 gap-y-10 md:grid-cols-2">
        {animations.map((animation) => (
          <Link
            key={animation.slug}
            href={`/library/${animation.slug}`}
            className="group flex flex-col gap-3"
          >
            <div className="aspect-[16/11] w-full rounded-lg border border-white/10 bg-[#1a1a1a] transition duration-200 group-hover:border-white/20 group-hover:bg-[#1f1f1f]" />
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[1.85rem] font-normal leading-none tracking-tight text-zinc-100">
                {animation.title}
              </h2>
              <span className="rounded-md border border-white/8 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.16em] text-zinc-300">
                {animation.category}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
