module.exports = [
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/hooks/landing/useHandGesture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHandGesture",
    ()=>useHandGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-ssr] (ecmascript)");
;
;
const WASM_CDN = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm";
const MODEL_URL = "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";
const FRAMES_TO_ACTIVATE = 10;
const FRAMES_TO_RELEASE = 14;
/** MediaPipe hand landmark indices */ const FINGERS = [
    {
        tip: 8,
        pip: 6
    },
    {
        tip: 12,
        pip: 10
    },
    {
        tip: 16,
        pip: 14
    },
    {
        tip: 20,
        pip: 18
    }
];
const THUMB = {
    tip: 4,
    ip: 3
};
function dist(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y, (a.z ?? 0) - (b.z ?? 0));
}
/** Finger extended: tip farther from wrist than the PIP joint. */ function isFingerExtended(landmarks, tipIdx, pipIdx) {
    const wrist = landmarks[0];
    const tip = landmarks[tipIdx];
    const pip = landmarks[pipIdx];
    return dist(wrist, tip) > dist(wrist, pip) * 1.12;
}
/** Open palm: index–pinky tips spread apart (not a fist). */ function areFingersSpread(landmarks) {
    const palmScale = dist(landmarks[0], landmarks[9]);
    const minGap = palmScale * 0.2;
    const gaps = [
        dist(landmarks[8], landmarks[12]),
        dist(landmarks[12], landmarks[16]),
        dist(landmarks[16], landmarks[20])
    ];
    return gaps.filter((g)=>g > minGap).length >= 2;
}
/** Open hand with fingers spread toward the camera. */ function isOpenPalm(landmarks) {
    if (!landmarks?.length) return false;
    const extendedCount = FINGERS.filter(({ tip, pip })=>isFingerExtended(landmarks, tip, pip)).length;
    const thumbExtended = dist(landmarks[0], landmarks[THUMB.tip]) > dist(landmarks[0], landmarks[THUMB.ip]) * 1.08;
    const tipsAboveKnuckles = FINGERS.filter(({ tip, pip })=>landmarks[tip].y < landmarks[pip].y - 0.015).length;
    return extendedCount >= 4 && thumbExtended && areFingersSpread(landmarks) && tipsAboveKnuckles >= 3;
}
function useHandGesture(enabled = true) {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const landmarkerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const stableUpRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const stableDownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isHandUp, setIsHandUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraReady, setCameraReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraError, setCameraError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled) return undefined;
        let cancelled = false;
        let stream = null;
        async function init() {
            try {
                const vision = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilesetResolver"].forVisionTasks(WASM_CDN);
                if (cancelled) return;
                const landmarker = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandLandmarker"].createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: MODEL_URL,
                        delegate: "GPU"
                    },
                    runningMode: "VIDEO",
                    numHands: 1
                });
                if (cancelled) return;
                landmarkerRef.current = landmarker;
                stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user",
                        width: 640,
                        height: 480
                    },
                    audio: false
                });
                if (cancelled) {
                    stream.getTracks().forEach((t)=>t.stop());
                    return;
                }
                const video = videoRef.current;
                if (!video) return;
                video.srcObject = stream;
                await video.play();
                setCameraReady(true);
                let lastVideoTime = -1;
                const detect = ()=>{
                    if (cancelled || !landmarkerRef.current || !videoRef.current) return;
                    const videoEl = videoRef.current;
                    if (videoEl.readyState >= 2 && videoEl.currentTime !== lastVideoTime) {
                        lastVideoTime = videoEl.currentTime;
                        const result = landmarkerRef.current.detectForVideo(videoEl, performance.now());
                        const openPalm = result.landmarks.some(isOpenPalm);
                        if (openPalm) {
                            stableUpRef.current += 1;
                            stableDownRef.current = 0;
                        } else {
                            stableDownRef.current += 1;
                            stableUpRef.current = 0;
                        }
                        if (stableUpRef.current >= FRAMES_TO_ACTIVATE) {
                            setIsHandUp(true);
                        } else if (stableDownRef.current >= FRAMES_TO_RELEASE) {
                            setIsHandUp(false);
                        }
                    }
                    rafRef.current = requestAnimationFrame(detect);
                };
                rafRef.current = requestAnimationFrame(detect);
            } catch (err) {
                if (!cancelled) {
                    setCameraError(err instanceof Error ? err.message : "Camera access failed");
                }
            }
        }
        init();
        return ()=>{
            cancelled = true;
            cancelAnimationFrame(rafRef.current);
            landmarkerRef.current?.close?.();
            landmarkerRef.current = null;
            if (stream) stream.getTracks().forEach((t)=>t.stop());
            if (videoRef.current) videoRef.current.srcObject = null;
        };
    }, [
        enabled
    ]);
    return {
        videoRef,
        isHandUp,
        cameraReady,
        cameraError
    };
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/landing/scrambleText.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrambleTo",
    ()=>scrambleTo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
;
const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function scrambleTo(element, endText, options = {}) {
    const { duration = 0.45, chars = DEFAULT_CHARS, ease = "none", onComplete } = options;
    const startText = element.textContent || "";
    const maxLen = Math.max(startText.length, endText.length);
    const state = {
        progress: 0
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(state, {
        progress: 1,
        duration,
        ease,
        onUpdate () {
            const p = state.progress;
            let out = "";
            for(let i = 0; i < maxLen; i += 1){
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
        onComplete () {
            element.textContent = endText;
            onComplete?.();
        }
    });
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroLanding",
    ()=>HeroLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$search$2f$SearchButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/search/SearchButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useHandGesture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/hooks/landing/useHandGesture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$landing$2f$scrambleText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/lib/landing/scrambleText.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const LANDING_ASSETS = {
    logo: "/landing/union.svg",
    silver: "/landing/silver.svg",
    interaction: "/landing/interaction.svg",
    search: "/landing/search-icon.svg"
};
const CYCLE_WORDS = [
    "motion",
    "experience",
    "exploration",
    "immersion"
];
const IDLE_WORD = "interaction";
const CYCLE_INTERVAL = 1.1;
const SCRAMBLE_DURATION = 0.45;
function HeroLanding({ headerAnchorRef }) {
    const keywordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineBlockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const alignMeasureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glyphRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cycleIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const activeTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cycleTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wasHandUpRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { videoRef, isHandUp, cameraReady, cameraError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useHandGesture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHandGesture"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const block = headlineBlockRef.current;
        const measure = alignMeasureRef.current;
        const glyph = glyphRef.current;
        if (!block || !measure) return undefined;
        const updateAlign = ()=>{
            const throughOffset = measure.getBoundingClientRect().width;
            const glyphWidth = glyph?.getBoundingClientRect().width ?? 0;
            block.style.setProperty("--hero-through-align", `${throughOffset}px`);
            block.style.setProperty("--hero-glyph-width", `${glyphWidth}px`);
        };
        updateAlign();
        const observer = new ResizeObserver(updateAlign);
        observer.observe(measure);
        if (glyph) observer.observe(glyph);
        window.addEventListener("resize", updateAlign);
        return ()=>{
            observer.disconnect();
            window.removeEventListener("resize", updateAlign);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = keywordRef.current;
        if (!el) return undefined;
        const clearCycle = ()=>{
            if (cycleTimerRef.current) {
                clearInterval(cycleTimerRef.current);
                cycleTimerRef.current = null;
            }
            activeTweenRef.current?.kill();
            activeTweenRef.current = null;
        };
        const scrambleWord = (nextWord, onDone)=>{
            activeTweenRef.current?.kill();
            activeTweenRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$lib$2f$landing$2f$scrambleText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scrambleTo"])(el, nextWord, {
                duration: SCRAMBLE_DURATION,
                onComplete: onDone
            });
        };
        if (isHandUp && !wasHandUpRef.current) {
            cycleIndexRef.current = 0;
            scrambleWord(CYCLE_WORDS[0], ()=>{
                el.classList.add("hero-landing__keyword--active");
            });
            cycleTimerRef.current = window.setInterval(()=>{
                cycleIndexRef.current = (cycleIndexRef.current + 1) % CYCLE_WORDS.length;
                scrambleWord(CYCLE_WORDS[cycleIndexRef.current]);
            }, CYCLE_INTERVAL * 1000);
        }
        if (!isHandUp && wasHandUpRef.current) {
            clearCycle();
            el.classList.remove("hero-landing__keyword--active");
            scrambleWord(IDLE_WORD);
            cycleIndexRef.current = 0;
        }
        wasHandUpRef.current = isHandUp;
    }, [
        isHandUp
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>{
            if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
            activeTweenRef.current?.kill();
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(keywordRef.current);
        }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero-landing",
        "aria-label": "Atlas hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                className: "hero-landing__camera",
                playsInline: true,
                muted: true,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "hero-landing__header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "hero-landing__logo",
                        "aria-label": "owow home",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LANDING_ASSETS.logo,
                            alt: "owow",
                            width: 121,
                            height: 26
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerAnchorRef,
                        className: "hero-landing__silver-anchor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LANDING_ASSETS.silver,
                            alt: "",
                            className: "hero-landing__silver-header"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-landing__header-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/library",
                                className: "hero-landing__cta",
                                children: "Animation Library"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$search$2f$SearchButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchButton"], {
                                className: "hero-landing__search",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: LANDING_ASSETS.search,
                                        alt: "",
                                        width: 15,
                                        height: 15
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-landing__body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-landing__eyebrow",
                        children: "[ Atlas Animation library ]"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-landing__headline-block",
                        ref: headlineBlockRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ref: alignMeasureRef,
                                className: "hero-landing__align-measure",
                                "aria-hidden": true,
                                children: "The future move"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-landing__headline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-landing__line hero-landing__line--1",
                                        children: [
                                            "The future moves",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hero-landing__hint",
                                                children: "[ Move your hand infront of the camera .]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-landing__line hero-landing__line--2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-landing__line-2-inner",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `hero-landing__glyph${isHandUp ? " hero-landing__glyph--active" : ""}`,
                                                    ref: glyphRef,
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: LANDING_ASSETS.interaction,
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                                        lineNumber: 174,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hero-landing__line-2-text",
                                                    children: [
                                                        "through",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            ref: keywordRef,
                                                            className: "hero-landing__keyword",
                                                            children: IDLE_WORD
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                                            lineNumber: 178,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-landing__description",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-landing__description--bright",
                                children: "[Atlas is an interactive animation showcase built for designers and developers"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-landing__description--dim",
                                children: [
                                    " ",
                                    "to explore immersive motion systems and real-time animation experiences."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-landing__description--bright",
                                children: "]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hero-landing__status",
                "aria-live": "polite",
                children: cameraError ? `Camera unavailable: ${cameraError}` : cameraReady ? isHandUp ? "Open palm detected — words cycling" : "Camera on — show open fingers to camera" : "Starting camera…"
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/hooks/landing/useIconScrollAnimation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapProgress",
    ()=>mapProgress,
    "useDocumentScrollProgress",
    ()=>useDocumentScrollProgress,
    "useHeaderAnchorOrigin",
    ()=>useHeaderAnchorOrigin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function clamp(value, min = 0, max = 1) {
    return Math.min(max, Math.max(min, value));
}
function mapProgress(progress, start, end, outMin, outMax) {
    const t = clamp((progress - start) / (end - start));
    return outMin + (outMax - outMin) * t;
}
function useDocumentScrollProgress(sectionRef) {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        if (!section) return undefined;
        const update = ()=>{
            const end = section.offsetTop + section.offsetHeight - window.innerHeight;
            setProgress(clamp(window.scrollY / Math.max(end, 1)));
        };
        update();
        window.addEventListener("scroll", update, {
            passive: true
        });
        window.addEventListener("resize", update);
        return ()=>{
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [
        sectionRef
    ]);
    return progress;
}
function useHeaderAnchorOrigin(anchorRef) {
    const [origin, setOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const anchor = anchorRef.current;
        if (!anchor) return undefined;
        const measure = ()=>{
            const rect = anchor.getBoundingClientRect();
            setOrigin({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            });
        };
        measure();
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("resize", measure);
            window.removeEventListener("scroll", measure);
        };
    }, [
        anchorRef
    ]);
    return origin;
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollIconSequence",
    ()=>ScrollIconSequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useIconScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/hooks/landing/useIconScrollAnimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/split-type/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const SILVER_GLOBE_SRC = "/landing/silver.svg";
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
/** Figma: node 22:4087 header icon vs node 19:4063 about globe */ const SILVER_HEADER_PX = 83.25;
const SILVER_ABOUT_PX = 971;
const SILVER_START_SCALE = SILVER_HEADER_PX / SILVER_ABOUT_PX;
const MOVE_END = 0.26;
const SCALE_END = 0.3;
const ROTATE_START = 0.2;
const ROTATE_END = 0.58;
/** Document scroll progress (same space as useDocumentScrollProgress) when 3D hits 180° */ const COPY_SCROLL_START = ROTATE_START + 180 / 360 * (ROTATE_END - ROTATE_START);
const COPY_GREY = "rgba(255, 255, 255, 0.38)";
const COPY_WHITE = "#ffffff";
const LIGHT_WAVE_WIDTH = 5;
/** Rise phase share; remainder = grey→white “light pass” (scrub-driven) */ const REVEAL_SHARE = 0.48;
function getSilverBaseWidth() {
    if ("TURBOPACK compile-time truthy", 1) return SILVER_ABOUT_PX;
    //TURBOPACK unreachable
    ;
}
/** Resting Y when icon + copy are centered (higher than viewport middle) */ const CLUSTER_CENTER_Y_RATIO = 0.4;
function getCenterY() {
    if ("TURBOPACK compile-time truthy", 1) return 0;
    //TURBOPACK unreachable
    ;
}
function hookScrollDenominator(sectionEl) {
    return Math.max(sectionEl.offsetTop + sectionEl.offsetHeight - window.innerHeight, 1);
}
function documentScrollProgress(sectionEl) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(0, 1, window.scrollY / hookScrollDenominator(sectionEl));
}
/** Soft falloff — how lit each word is along the wave front */ function wordLightAmount(lightProgress, index, total) {
    const wave = LIGHT_WAVE_WIDTH;
    const head = lightProgress * (total + wave) - index;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(0, 1, head / wave);
}
const COPY_LEAD = "Atlas transforms animation into an interactive experience.";
const COPY_BODY = "Instead of static showcases, users can explore motion systems through live previews, experimental interactions, and real-time controls designed for creative exploration.";
function ScrollIconSequence({ headerAnchorRef }) {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const copyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const splitsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const masksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useIconScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDocumentScrollProgress"])(sectionRef);
    const headerOrigin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useIconScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHeaderAnchorOrigin"])(headerAnchorRef);
    const centerX = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : headerOrigin.x;
    const centerY = getCenterY() || headerOrigin.y;
    const posX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useIconScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProgress"])(progress, 0, MOVE_END, headerOrigin.x, centerX);
    const posY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useIconScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProgress"])(progress, 0, MOVE_END, headerOrigin.y, centerY);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useIconScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProgress"])(progress, 0, SCALE_END, SILVER_START_SCALE, 1);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useIconScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProgress"])(progress, ROTATE_START, ROTATE_END, 0, 360);
    const showCopy = rotate >= 180;
    const silverSize = getSilverBaseWidth() * scale * 0.85;
    const parallaxY = -((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$hooks$2f$landing$2f$useIconScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapProgress"])(progress, 0.2, 0.85, 0, 1) * 18);
    const applyWordLight = (lightProgressVal)=>{
        const words = wordsRef.current;
        if (!words.length) return;
        const total = words.length;
        words.forEach((word, i)=>{
            const amount = wordLightAmount(lightProgressVal, i, total);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(word, {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(COPY_GREY, COPY_WHITE, amount)
            });
        });
    };
    /**
   * u ∈ [0,1]: scrubs through masked word rise → lightning pass over words,
   * same mental model as an image sequence / frame scrub (see GSAP image-sequence demos).
   */ const applySequence = (u)=>{
        const words = wordsRef.current;
        if (!words.length) return;
        const total = words.length;
        if (u < REVEAL_SHARE) {
            const r = u / Math.max(REVEAL_SHARE, 0.001);
            const wordWindow = 0.13;
            words.forEach((word, i)=>{
                const stagger = i / Math.max(total, 1) * 0.9;
                const local = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(0, 1, (r - stagger) / wordWindow);
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(word, {
                    yPercent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.mapRange(0, 1, 110, 0, local),
                    color: COPY_GREY
                });
            });
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(words, {
            yPercent: 0
        });
        const lu = (u - REVEAL_SHARE) / Math.max(1 - REVEAL_SHARE, 0.001);
        applyWordLight(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(0, 1, lu));
    };
    /** Map document scroll progress (hero + section) → text sequence 0..1 */ const syncTextSequenceFromDocumentScroll = (sectionEl)=>{
        const docP = documentScrollProgress(sectionEl);
        if (docP < COPY_SCROLL_START) {
            applySequence(0);
            return;
        }
        applySequence((docP - COPY_SCROLL_START) / (1 - COPY_SCROLL_START));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = copyRef.current;
        const section = sectionRef.current;
        if (!el || !section) return;
        const reduceMotion = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        if (reduceMotion || !showCopy) return;
        const leadEl = el.querySelector(".scroll-icons__copy--lead");
        const bodyEl = el.querySelector(".scroll-icons__copy--body");
        if (!leadEl || !bodyEl) return;
        const splitOpts = {
            types: "words",
            tagName: "span"
        };
        const splitLead = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](leadEl, splitOpts);
        const splitBody = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](bodyEl, splitOpts);
        splitsRef.current = [
            splitLead,
            splitBody
        ];
        const words = [
            ...splitLead.words || [],
            ...splitBody.words || []
        ];
        wordsRef.current = words;
        const masks = [];
        words.forEach((word)=>{
            word.classList.add("atlas-word");
            const mask = document.createElement("span");
            mask.className = "atlas-word-mask";
            word.parentNode?.insertBefore(mask, word);
            mask.appendChild(word);
            masks.push(mask);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(word, {
                yPercent: 110,
                color: COPY_GREY
            });
        });
        masksRef.current = masks;
        /*
     * Scrub-driven “sequence” timeline (like GSAP image-sequence demos):
     * https://codepen.io/GreenSock/pen/VwgevYW
     * https://demos.gsap.com/demo/image-sequence/
     * Dummy tween enables scrub smoothing; frames read from actual document scroll.
     */ const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.15,
                invalidateOnRefresh: true
            },
            onUpdate: ()=>syncTextSequenceFromDocumentScroll(section)
        });
        tl.to({
            __dummy: 0
        }, {
            __dummy: 1,
            duration: 1,
            ease: "none"
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].refresh();
        syncTextSequenceFromDocumentScroll(section);
        tlRef.current = tl;
        return ()=>{
            tl.kill();
            tlRef.current = null;
            masksRef.current.forEach((mask)=>{
                const word = mask.firstChild;
                if (!word) return;
                mask.replaceWith(word);
            });
            masksRef.current = [];
            splitsRef.current.forEach((s)=>s?.revert?.());
            splitsRef.current = [];
            wordsRef.current = [];
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].refresh();
        };
    }, [
        showCopy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-icons__cluster",
                style: {
                    left: posX,
                    top: posY
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: SILVER_GLOBE_SRC,
                        alt: "",
                        className: "scroll-icons__silver-fixed",
                        style: {
                            width: silverSize,
                            transform: `rotateY(${rotate}deg)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scroll-icons__copy-wrap",
                        style: {
                            display: showCopy ? "block" : "none",
                            transform: `translateY(${parallaxY}px)`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: copyRef,
                            className: "scroll-icons__copy-stack atlas-description-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "scroll-icons__copy scroll-icons__copy--lead",
                                    children: COPY_LEAD
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "scroll-icons__copy scroll-icons__copy--body",
                                    children: COPY_BODY
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRef,
                className: "scroll-icons",
                "aria-label": "About Atlas"
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HomeLanding.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeLanding",
    ()=>HomeLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$landing$2f$HeroLanding$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HeroLanding.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$landing$2f$ScrollIconSequence$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/ScrollIconSequence.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HomeLanding() {
    const headerAnchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$landing$2f$HeroLanding$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroLanding"], {
                headerAnchorRef: headerAnchorRef
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HomeLanding.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SeM__4__evidences$2f$Budget__snapshot__prototype$2f$owow$2d$animation$2f$src$2f$components$2f$landing$2f$ScrollIconSequence$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollIconSequence"], {
                headerAnchorRef: headerAnchorRef
            }, void 0, false, {
                fileName: "[project]/Desktop/SeM 4 evidences/Budget snapshot prototype/owow-animation/src/components/landing/HomeLanding.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Desktop_SeM%204%20evidences_Budget%20snapshot%20prototype_owow-animation_src_0o4-z.w._.js.map