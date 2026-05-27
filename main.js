(function () {
  const pinRoot = document.getElementById("pin-height");
  const sentences = pinRoot ? Array.from(pinRoot.querySelectorAll(".sentence")) : [];
  if (!pinRoot || sentences.length === 0) return;

  const prefersReduced =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    document.documentElement.classList.add("reduced-motion");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  function splitSentence(el) {
    const raw = el.textContent;
    el.textContent = "";
    const chars = [];
    for (const ch of raw) {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch === " " ? "\u00a0" : ch;
      el.appendChild(span);
      chars.push(span);
    }
    return chars;
  }

  const charGroups = sentences.map(splitSentence);

  pinRoot.style.setProperty("--segments", String(Math.max(1, sentences.length - 1)));

  const staggerEach = 0.095;
  const tweenDur = 1.05;
  const easeOut = "power4.out";
  const easeIn = "power4.in";
  const offBelow = "52vh";
  const offAbove = "-52vh";

  charGroups.forEach((group, i) => {
    gsap.set(group, {
      opacity: 1,
      y: i === 0 ? 0 : offBelow,
    });
  });

  const segmentCount = Math.max(1, sentences.length - 1);
  const startHold = 0.45;
  const tailHold = 0.95;

  const master = gsap.timeline({
    defaults: { overwrite: "auto" },
    scrollTrigger: {
      trigger: pinRoot,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.85,
      pin: ".container",
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  function waveDuration(charCount) {
    return tweenDur + staggerEach * Math.max(0, charCount - 1);
  }

  let cursor = startHold;

  for (let i = 0; i < segmentCount; i++) {
    const outgoing = charGroups[i];
    const incoming = charGroups[i + 1];

    master.to(
      outgoing,
      {
        y: offAbove,
        duration: tweenDur,
        ease: easeIn,
        stagger: { each: staggerEach, from: "start" },
      },
      cursor
    );

    cursor += waveDuration(outgoing.length);

    master.fromTo(
      incoming,
      { y: offBelow },
      {
        y: 0,
        duration: tweenDur,
        ease: easeOut,
        stagger: { each: staggerEach, from: "start" },
      },
      cursor
    );

    cursor += waveDuration(incoming.length);
  }

  const tailPad = { _: 0 };
  master.to(tailPad, { _: 1, duration: tailHold, ease: "none" }, cursor);
})();
