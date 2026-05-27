"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import { DemoShell } from "@/src/animations/shared/DemoShell";
import type { DemoProps } from "@/src/animations/types";

import { controlSchema } from "./controls";
import "./demo.css";

gsap.registerPlugin(ScrollTrigger);

const SENTENCES = [
  "We are on a mission to touch",
  "the lives of 1 billion people",
  "through better designed",
  "technology",
];

function splitSentence(el: HTMLElement): HTMLElement[] {
  const raw = el.textContent ?? "";
  el.textContent = "";
  const chars: HTMLElement[] = [];
  for (const ch of raw) {
    const span = document.createElement("span");
    span.className = "sms-demo__char";
    span.textContent = ch === " " ? "\u00a0" : ch;
    el.appendChild(span);
    chars.push(span);
  }
  return chars;
}

export function Demo({ platform, params, embedded }: DemoProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pinRootRef = useRef<HTMLElement>(null);

  const waveDuration = params.waveDuration ?? controlSchema[0].defaultValue;
  const stagger = params.stagger ?? controlSchema[1].defaultValue;
  const scrub = params.scrub ?? controlSchema[2].defaultValue;
  const travel = params.travel ?? controlSchema[3].defaultValue;
  const segmentHeight = params.segmentHeight ?? controlSchema[4].defaultValue;

  const paramKey = `${waveDuration}-${stagger}-${scrub}-${travel}-${segmentHeight}`;

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const pinRoot = pinRootRef.current;
    if (!viewport || !pinRoot) return undefined;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      pinRoot.classList.add("sms-demo--reduced");
      return () => {
        pinRoot.classList.remove("sms-demo--reduced");
      };
    }

    pinRoot.classList.remove("sms-demo--reduced");

    const sentenceEls = Array.from(
      pinRoot.querySelectorAll<HTMLElement>(".sms-demo__sentence"),
    );
    if (sentenceEls.length === 0) return undefined;

    const charGroups = sentenceEls.map(splitSentence);
    const segmentCount = Math.max(1, charGroups.length - 1);

    function updatePinHeight() {
      if (!viewport || !pinRoot) return;
      const h = viewport.clientHeight;
      const container = pinRoot.querySelector<HTMLElement>(".sms-demo__container");
      if (container) {
        // When ScrollTrigger pins, it preserves the element's own height.
        // Make it equal to the preview viewport so our flex centering is truly vertical-center.
        container.style.height = `${h}px`;
      }
      pinRoot.style.minHeight = `${Math.max(
        h * 0.5,
        segmentCount * segmentHeight * h,
      )}px`;
    }
    updatePinHeight();

    const offBelow = `${travel}vh`;
    const offAbove = `-${travel}vh`;

    charGroups.forEach((group, i) => {
      gsap.set(group, {
        opacity: 1,
        y: i === 0 ? 0 : offBelow,
      });
    });

    const ctx = gsap.context(() => {
      const container = pinRoot.querySelector<HTMLElement>(
        ".sms-demo__container",
      );
      if (!container) return;

      const master = gsap.timeline({
        defaults: { overwrite: "auto" as const },
        scrollTrigger: {
          trigger: pinRoot,
          scroller: viewport,
          start: "top top",
          end: "bottom bottom",
          scrub,
          pin: container,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      function waveDurationChars(charCount: number) {
        return waveDuration + stagger * Math.max(0, charCount - 1);
      }

      let cursorPos = 0.45;
      const tailHold = 0.95;

      for (let i = 0; i < segmentCount; i++) {
        const outgoing = charGroups[i];
        const incoming = charGroups[i + 1];

        master.to(
          outgoing,
          {
            y: offAbove,
            duration: waveDuration,
            ease: "power4.in",
            stagger: { each: stagger, from: "start" },
          },
          cursorPos,
        );

        cursorPos += waveDurationChars(outgoing.length);

        master.fromTo(
          incoming,
          { y: offBelow },
          {
            y: 0,
            duration: waveDuration,
            ease: "power4.out",
            stagger: { each: stagger, from: "start" },
          },
          cursorPos,
        );

        cursorPos += waveDurationChars(incoming.length);
      }

      const tailPad = { _: 0 };
      master.to(tailPad, { _: 1, duration: tailHold, ease: "none" }, cursorPos);
    }, pinRoot);

    const refresh = () => {
      updatePinHeight();
      ScrollTrigger.refresh();
    };

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(refresh)
        : null;
    ro?.observe(viewport);

    refresh();

    return () => {
      ro?.disconnect();
      ctx.revert();
      sentenceEls.forEach((el, i) => {
        el.textContent = SENTENCES[i] ?? "";
      });
    };
  }, [paramKey, waveDuration, stagger, scrub, travel, segmentHeight]);

  const stage = (
    <div ref={viewportRef} className="sms-demo__viewport">
      <section key={paramKey} ref={pinRootRef} className="sms-demo__pin">
        <div className="sms-demo__container">
          <div className="sms-demo__viewport-inner">
            <div className="sms-demo__center">
              {SENTENCES.map((line) => (
                <div key={line} className="sms-demo__sentence">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (embedded) return stage;

  return (
    <DemoShell
      platform={platform}
      footerTags={["scroll · typography", "ScrollTrigger scrub"]}
    >
      {stage}
    </DemoShell>
  );
}
