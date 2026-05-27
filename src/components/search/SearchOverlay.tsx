"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { getAllAnimationMeta } from "@/src/animations/registry";

import "./search-overlay.css";

export const SEARCH_OVERLAY_PANEL_ID = "search-overlay-panel";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
};

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.hasAttribute("disabled") && el.offsetParent !== null,
  );
}

export function SearchOverlay({ isOpen, onClose, triggerRef }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const router = useRouter();

  const catalog = useMemo(() => getAllAnimationMeta(), []);
  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return catalog;
    return catalog.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((tag) => tag.toLowerCase().includes(q)),
    );
  }, [catalog, q]);

  const activeSlug = filtered[activeIndex]?.slug;
  const activeOptionId = activeSlug ? `search-option-${activeSlug}` : undefined;

  const navigateToActive = useCallback(() => {
    const target = filtered[activeIndex];
    if (!target) return;
    router.push(`/library/${target.slug}`);
    onClose();
  }, [activeIndex, filtered, onClose, router]);

  const handleClose = useCallback(() => {
    onClose();
    requestAnimationFrame(() => triggerRef?.current?.focus());
  }, [onClose, triggerRef]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => inputRef.current?.focus(), 50);
    setQuery("");
    setActiveIndex(0);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = getFocusableElements(panelRef.current);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose, isOpen]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filtered.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      navigateToActive();
    }
  };

  return (
    <>
      <div
        className={`search-overlay__scrim ${
          isOpen ? "search-overlay__scrim--open" : "search-overlay__scrim--closed"
        }`}
        onClick={handleClose}
        aria-hidden={!isOpen}
      />

      <div
        ref={panelRef}
        id={SEARCH_OVERLAY_PANEL_ID}
        className={`search-overlay__panel ${
          isOpen ? "search-overlay__panel--open" : "search-overlay__panel--closed"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Search animations"
        {...(!isOpen ? { inert: true as const } : {})}
      >
        <div className="search-overlay__header">
          <div className="search-overlay__field">
            <svg
              viewBox="0 0 24 24"
              className="search-overlay__field-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            <label htmlFor="search-overlay-input" className="search-overlay__status">
              Search animations
            </label>
            <input
              ref={inputRef}
              id="search-overlay-input"
              type="text"
              enterKeyHint="search"
              role="combobox"
              aria-expanded={isOpen}
              aria-controls={listboxId}
              aria-autocomplete="list"
              aria-activedescendant={activeOptionId}
              placeholder="Search animations"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleInputKeyDown}
              className="search-overlay__input"
              autoComplete="off"
            />
            {query.trim() ? (
              <button
                type="button"
                className="search-overlay__close search-overlay__close--clear"
                onClick={() => {
                  setQuery("");
                  setActiveIndex(0);
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="search-overlay__close-icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="search-overlay__close"
                onClick={handleClose}
                aria-label="Close search"
              >
                Esc
              </button>
            )}
          </div>
        </div>

        <p className="search-overlay__status" aria-live="polite" aria-atomic="true">
          {isOpen
            ? filtered.length === 0
              ? q
                ? `No animations match ${query}`
                : "No animations in catalog"
              : `${filtered.length} ${filtered.length === 1 ? "result" : "results"}`
            : ""}
        </p>

        <div className="search-overlay__results">
          {filtered.length === 0 ? (
            <div className="search-overlay__empty">
              <p className="search-overlay__empty-title">
                {q ? `No match for “${query.trim()}”` : "No animations found"}
              </p>
              <p className="search-overlay__empty-desc">
                {q
                  ? "Try a different title, category, or tag."
                  : "Browse the full library to explore every animation."}
              </p>
              <Link
                href="/library"
                className="search-overlay__empty-link"
                onClick={handleClose}
              >
                Browse library
              </Link>
            </div>
          ) : (
            <ul
              id={listboxId}
              role="listbox"
              className="search-overlay__listbox"
              aria-label="Search results"
            >
              {filtered.map((animation, index) => {
                const isActive = index === activeIndex;
                const optionId = `search-option-${animation.slug}`;
                return (
                  <li key={animation.slug} role="presentation">
                    <button
                      id={optionId}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      className={[
                        "search-overlay__option",
                        isActive ? "search-overlay__option--selected" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => {
                        router.push(`/library/${animation.slug}`);
                        handleClose();
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <span className="search-overlay__option-body">
                        <span className="search-overlay__option-title">
                          {animation.title}
                        </span>
                        <span className="search-overlay__option-tag">
                          {animation.category}
                        </span>
                      </span>
                      {isActive ? (
                        <span className="search-overlay__option-arrow" aria-hidden>
                          →
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
