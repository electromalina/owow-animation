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
import {
  formatEngineLabel,
  formatPlatformsLabel,
  getAboutHeadline,
} from "@/src/components/detail/detail-utils";

import "./detail-page.css";

export function DetailClient({ animation }: { animation: Animation }) {
  const module = useMemo(
    () => getAnimationModule(animation.slug),
    [animation.slug],
  );
  const Demo = module?.Demo;
  const aboutHeadline = useMemo(() => getAboutHeadline(animation), [animation]);

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

  const titleWords = animation.title.split(" ");

  return (
    <main className="detail-page">
      <nav aria-label="Breadcrumb">
        <ol className="detail-page__breadcrumb">
          <li>
            <Link href="/library">Atlas</Link>
          </li>
          <li className="detail-page__breadcrumb-sep" aria-hidden>
            /
          </li>
          <li>{animation.category}</li>
          <li className="detail-page__breadcrumb-sep" aria-hidden>
            /
          </li>
          <li>
            <span className="detail-page__breadcrumb-current" aria-current="page">
              {animation.title}
            </span>
          </li>
        </ol>
      </nav>

      <header className="detail-page__hero">
        <h1 className="detail-page__title">
          {titleWords.map((word, i) => (
            <span key={i} className="detail-page__title-word">
              {word}
              {i < titleWords.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <p className="detail-page__summary">{animation.summary}</p>
        <div className="detail-page__tags" role="list" aria-label="Tags">
          {animation.tags.map((tag) => (
            <span key={tag} className="detail-page__tag" role="listitem">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="detail-page__layout">
        <div className="detail-page__demo">
          {Demo ? (
            <Demo platform={state.platform} params={state.params} />
          ) : (
            <p className="detail-page__demo-fallback" role="status">
              Live preview is not available for this animation yet.
            </p>
          )}
        </div>

        {module ? (
          <ControlsSidebar
            className="detail-page__controls"
            animation={animation}
            module={module}
            state={state}
            onParamChange={handleParamChange}
            onPlatformChange={handlePlatformChange}
            onReset={handleReset}
          />
        ) : null}

        <article className="detail-page__sections">
          <section aria-labelledby="detail-about-label">
            <div id="detail-about-label" className="detail-page__section-label">
              01 · About
            </div>
            <h2 className="detail-page__about-title">{aboutHeadline}</h2>
            {animation.about.map((para, i) => (
              <p key={i} className="detail-page__prose">
                {para}
              </p>
            ))}
          </section>

          <section aria-labelledby="detail-meta-label">
            <div id="detail-meta-label" className="detail-page__section-label">
              02 · Metadata
            </div>
            <dl className="detail-page__meta-grid">
              <div className="detail-page__meta-cell">
                <dt className="detail-page__meta-label">Status</dt>
                <dd className="detail-page__meta-value detail-page__meta-value--muted">
                  <span className="detail-page__meta-dot" aria-hidden />
                  {animation.status}
                </dd>
              </div>
              <div className="detail-page__meta-cell">
                <dt className="detail-page__meta-label">Category</dt>
                <dd className="detail-page__meta-value">{animation.category}</dd>
              </div>
              <div className="detail-page__meta-cell">
                <dt className="detail-page__meta-label">Engine</dt>
                <dd className="detail-page__meta-value">
                  {formatEngineLabel(animation)}
                </dd>
              </div>
              <div className="detail-page__meta-cell">
                <dt className="detail-page__meta-label">Platforms</dt>
                <dd className="detail-page__meta-value">
                  {formatPlatformsLabel(animation.platforms)}
                </dd>
              </div>
              <div className="detail-page__meta-cell">
                <dt className="detail-page__meta-label">Last updated</dt>
                <dd className="detail-page__meta-value">
                  {animation.updatedAt}
                  <span className="detail-page__meta-hint">· v{animation.version}</span>
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="detail-tech-label">
            <div id="detail-tech-label" className="detail-page__section-label">
              03 · Technical notes
            </div>
            <div className="detail-page__tech-panel">
              <div className="detail-page__tech-label">Implementation</div>
              <div>
                {animation.technicalNotes.map((para, i) => (
                  <p key={i} className="detail-page__tech-body">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="detail-usecases-label">
            <div id="detail-usecases-label" className="detail-page__section-label">
              04 · Use cases
            </div>
            <ul className="detail-page__use-cases">
              {animation.useCases.map((uc, i) => (
                <li key={uc.title} className="detail-page__use-case">
                  <span className="detail-page__use-case-index" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="detail-page__use-case-title">{uc.title}</h3>
                    <span className="detail-page__use-case-desc">{uc.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
