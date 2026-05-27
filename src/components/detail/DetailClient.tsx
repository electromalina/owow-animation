"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  buildDefaultState,
  getAnimationModule,
  type Animation,
  type AnimationState,
} from "@/src/animations/registry";
import { ControlsSidebar } from "@/src/components/detail/ControlsSidebar";

export function DetailClient({ animation }: { animation: Animation }) {
  const module = useMemo(
    () => getAnimationModule(animation.slug),
    [animation.slug],
  );
  const Demo = module?.Demo;

  const [state, setState] = useState<AnimationState>(() =>
    module ? buildDefaultState(module) : { platform: "web", params: {} },
  );

  function handleParamChange(key: string, value: number) {
    setState((prev) => ({
      ...prev,
      params: { ...prev.params, [key]: value },
    }));
  }

  function handlePlatformChange(platform: "web" | "mobile") {
    setState((prev) => ({ ...prev, platform }));
  }

  function handleReset() {
    if (module) setState(buildDefaultState(module));
  }

  const isMobile = state.platform === "mobile";
  const frameworkName = isMobile ? "React Native" : "React + GSAP";
  const frameworkVersion = isMobile ? "Reanimated 3" : "v3.x";

  const titleWords = animation.title.split(" ");

  return (
    <main className="mx-auto w-full max-w-[1440px] px-10 pb-24 pt-10">
      <nav className="mb-10 flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/50">
        <Link href="/library" className="transition-colors hover:text-white">
          Atlas
        </Link>
        <span className="text-white/30">/</span>
        <span className="text-white/30">{animation.category}</span>
        <span className="text-white/30">/</span>
        <span className="text-white">{animation.title}</span>
      </nav>

      <section className="mb-12 border-b border-white/10 pb-9">
        <div>
          <h1
            className="font-semibold leading-[0.92] tracking-[-0.045em]"
            style={{ fontSize: "clamp(64px, 8vw, 112px)" }}
          >
            {titleWords.map((word, i) => (
              <span key={i}>
                {word}
                {i < titleWords.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-[22px] max-w-[640px] text-lg leading-[26px] tracking-[-0.005em] text-[#e2e2e2]">
            {animation.summary}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {animation.tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="inline-flex items-center rounded-full border border-[#222] px-3.5 py-2 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.10em] text-white/70 transition-colors hover:border-white/35 hover:text-white"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div
        className="grid items-start gap-8"
        style={{ gridTemplateColumns: "minmax(0,1fr) 440px" }}
      >
        <article className="flex min-w-0 flex-col gap-14">
          {Demo ? (
            <Demo platform={state.platform} params={state.params} />
          ) : null}

          <section>
            <div className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/50 before:block before:h-px before:w-7 before:shrink-0 before:bg-white/30 before:content-['']">
              01 · About
            </div>
            <h2 className="mb-4 text-[32px] font-medium leading-[1.1] tracking-[-0.03em] [text-wrap:balance]">
              A cursor that responds to intent, not just position.
            </h2>
            {animation.about.map((para, i) => (
              <p
                key={i}
                className={`max-w-[680px] text-lg leading-[26px] text-[#e2e2e2] [text-wrap:pretty] ${i > 0 ? "mt-3.5" : ""}`}
              >
                {para}
              </p>
            ))}
          </section>

          <section>
            <div className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/50 before:block before:h-px before:w-7 before:shrink-0 before:bg-white/30 before:content-['']">
              02 · Metadata
            </div>
            <div className="grid grid-cols-2 border-t border-white/10">
              <MetaCell label="Status" odd>
                <span className="flex items-center gap-2.5 text-[#d0d2cc]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                  {animation.status}
                </span>
              </MetaCell>
              <MetaCell label="Category">
                {animation.category}{" "}
                <small className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.04em] text-white/50">
                  · cursor
                </small>
              </MetaCell>
              <MetaCell label="Framework" odd>
                {frameworkName}{" "}
                <small className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.04em] text-white/50">
                  · {frameworkVersion}
                </small>
              </MetaCell>
              <MetaCell label="Performance">
                60 fps{" "}
                <small className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.04em] text-white/50">
                  · 1.4 kb gz
                </small>
              </MetaCell>
              <MetaCell label="Accessibility" odd>
                Keyboard safe{" "}
                <small className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.04em] text-white/50">
                  · prefers-reduced-motion
                </small>
              </MetaCell>
              <MetaCell label="Last updated">
                {animation.updatedAt}{" "}
                <small className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.04em] text-white/50">
                  · v{animation.version}
                </small>
              </MetaCell>
            </div>
          </section>

          <section>
            <div className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/50 before:block before:h-px before:w-7 before:shrink-0 before:bg-white/30 before:content-['']">
              03 · Technical notes
            </div>
            <div className="grid grid-cols-[180px_1fr] gap-7 rounded-lg border border-[#222] bg-[#181818] p-[30px]">
              <div className="pt-1.5 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/50">
                Implementation
              </div>
              <div>
                {animation.technicalNotes.map((para, i) => (
                  <p
                    key={i}
                    className={`text-[15px] leading-[1.55] text-[#e2e2e2] ${i > 0 ? "mt-3" : ""}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="mb-5 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/50 before:block before:h-px before:w-7 before:shrink-0 before:bg-white/30 before:content-['']">
              04 · Use cases
            </div>
            <ul className="grid grid-cols-2 gap-x-8 border-t border-white/10">
              {animation.useCases.map((uc, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[32px_1fr] items-start gap-2.5 border-b border-white/10 py-5"
                >
                  <span className="pt-[3px] font-[family-name:var(--font-mono)] text-[12px] tracking-[0.04em] text-white/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="mb-1 text-[16px] font-semibold leading-[22px] tracking-[-0.005em] text-white">
                      {uc.title}
                    </h4>
                    <small className="block text-[12px] leading-[1.5] text-[#e2e2e2]">
                      {uc.description}
                    </small>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <ControlsSidebar
          animation={animation}
          state={state}
          onParamChange={handleParamChange}
          onPlatformChange={handlePlatformChange}
          onReset={handleReset}
        />
      </div>
    </main>
  );
}

function MetaCell({
  label,
  odd,
  children,
}: {
  label: string;
  odd?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-2 border-b border-white/10 py-[22px] ${
        odd ? "border-r border-white/10 pr-8" : "pl-8"
      }`}
    >
      <span className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white/50">
        {label}
      </span>
      <span className="flex items-center gap-2.5 text-[18px] font-medium leading-[24px] tracking-[-0.01em] text-white">
        {children}
      </span>
    </div>
  );
}
