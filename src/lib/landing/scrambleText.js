import { gsap } from "gsap";

const DEFAULT_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

/**
 * GSAP-style scramble reveal (inspired by ScrambleTextPlugin demo).
 * @param {HTMLElement} element
 * @param {string} endText
 * @param {object} options
 * @returns {gsap.core.Tween}
 */
export function scrambleTo(element, endText, options = {}) {
  const {
    duration = 0.45,
    chars = DEFAULT_CHARS,
    ease = "none",
    onComplete,
  } = options;

  const startText = element.textContent || "";
  const maxLen = Math.max(startText.length, endText.length);
  const state = { progress: 0 };

  return gsap.to(state, {
    progress: 1,
    duration,
    ease,
    onUpdate() {
      const p = state.progress;
      let out = "";

      for (let i = 0; i < maxLen; i += 1) {
        const revealAt = (i + 1) / maxLen;
        const from = startText[i] || "";
        const to = endText[i] || "";

        if (p >= revealAt) {
          out += to;
        } else if (from && p > revealAt - 0.15) {
          out += from;
        } else {
          out += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      element.textContent = out.trimEnd() || endText;
    },
    onComplete() {
      element.textContent = endText;
      onComplete?.();
    },
  });
}
