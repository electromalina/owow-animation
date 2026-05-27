"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { getAllAnimationMeta } from "@/src/animations/registry";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const catalog = getAllAnimationMeta();
  const q = query.toLowerCase();

  const filtered = catalog.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((tag) => tag.toLowerCase().includes(q)),
  );

  useEffect(() => {
    if (isOpen) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 300);
      setQuery("");
      setActiveIndex(0);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && filtered[activeIndex]) {
        router.push(`/library/${filtered[activeIndex].slug}`);
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [filtered, activeIndex, isOpen, onClose, router]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto bg-black/40 backdrop-blur-[2px]"
            : "pointer-events-none bg-black/0"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[420px] border-l border-white/10 bg-[#111111] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Search animations"
        aria-hidden={!isOpen}
      >
        <div className="p-4">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1a1a1a] px-4 py-3">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 text-zinc-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search animations"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
            >
              ESC
            </button>
          </div>
        </div>

        <div className="h-[calc(100vh-80px)] overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="px-6 py-8 text-center text-sm text-zinc-500">
              No animations found
            </div>
          ) : (
            filtered.map((animation, index) => (
              <button
                key={animation.slug}
                type="button"
                className={`flex w-full items-center justify-between px-5 py-4 text-left transition-colors ${
                  index === activeIndex
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                } ${index !== 0 ? "border-t border-white/10" : ""}`}
                onClick={() => {
                  router.push(`/library/${animation.slug}`);
                  onClose();
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[1.1rem] font-normal text-white">
                    {animation.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-[3.38px] bg-[#222222] px-2 py-0.5 text-xs text-[#D0D2CC]">
                      {animation.category}
                    </span>
                  </div>
                </div>
                {index === activeIndex ? (
                  <span className="text-lg text-zinc-400">→</span>
                ) : null}
              </button>
            ))
          )}
        </div>
      </div>
    </>
  );
}
