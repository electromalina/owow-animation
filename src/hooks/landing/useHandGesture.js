import { useEffect, useRef, useState } from "react";
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";

const WASM_CDN =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm";
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";

const FRAMES_TO_ACTIVATE = 10;
const FRAMES_TO_RELEASE = 14;

/** MediaPipe hand landmark indices */
const FINGERS = [
  { tip: 8, pip: 6 }, // index
  { tip: 12, pip: 10 }, // middle
  { tip: 16, pip: 14 }, // ring
  { tip: 20, pip: 18 }, // pinky
];
const THUMB = { tip: 4, ip: 3 };

function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y, (a.z ?? 0) - (b.z ?? 0));
}

/** Finger extended: tip farther from wrist than the PIP joint. */
function isFingerExtended(landmarks, tipIdx, pipIdx) {
  const wrist = landmarks[0];
  const tip = landmarks[tipIdx];
  const pip = landmarks[pipIdx];
  return dist(wrist, tip) > dist(wrist, pip) * 1.12;
}

/** Open palm: index–pinky tips spread apart (not a fist). */
function areFingersSpread(landmarks) {
  const palmScale = dist(landmarks[0], landmarks[9]);
  const minGap = palmScale * 0.2;
  const gaps = [
    dist(landmarks[8], landmarks[12]),
    dist(landmarks[12], landmarks[16]),
    dist(landmarks[16], landmarks[20]),
  ];
  return gaps.filter((g) => g > minGap).length >= 2;
}

/** Open hand with fingers spread toward the camera. */
function isOpenPalm(landmarks) {
  if (!landmarks?.length) return false;

  const extendedCount = FINGERS.filter(({ tip, pip }) =>
    isFingerExtended(landmarks, tip, pip),
  ).length;

  const thumbExtended =
    dist(landmarks[0], landmarks[THUMB.tip]) >
    dist(landmarks[0], landmarks[THUMB.ip]) * 1.08;

  const tipsAboveKnuckles = FINGERS.filter(
    ({ tip, pip }) => landmarks[tip].y < landmarks[pip].y - 0.015,
  ).length;

  return (
    extendedCount >= 4 &&
    thumbExtended &&
    areFingersSpread(landmarks) &&
    tipsAboveKnuckles >= 3
  );
}

/**
 * Starts the camera and reports when an open-palm gesture is detected.
 */
export function useHandGesture(enabled = true) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const rafRef = useRef(0);
  const stableUpRef = useRef(0);
  const stableDownRef = useRef(0);

  const [isHandUp, setIsHandUp] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState(null);

  useEffect(() => {
    if (!enabled) return undefined;

    let cancelled = false;
    let stream = null;

    async function init() {
      try {
        const vision = await FilesetResolver.forVisionTasks(WASM_CDN);
        if (cancelled) return;

        const landmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: MODEL_URL,
            delegate: "GPU",
          },
          runningMode: "VIDEO",
          numHands: 1,
        });

        if (cancelled) return;
        landmarkerRef.current = landmarker;

        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user", width: 640, height: 480 },
          audio: false,
        });

        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        const video = videoRef.current;
        if (!video) return;

        video.disablePictureInPicture = true;
        video.srcObject = stream;
        await video.play();
        setCameraReady(true);

        let lastVideoTime = -1;

        const detect = () => {
          if (cancelled || !landmarkerRef.current || !videoRef.current) return;

          const videoEl = videoRef.current;
          if (videoEl.readyState >= 2 && videoEl.currentTime !== lastVideoTime) {
            lastVideoTime = videoEl.currentTime;
            const result = landmarkerRef.current.detectForVideo(
              videoEl,
              performance.now(),
            );

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
          setCameraError(
            err instanceof Error ? err.message : "Camera access failed",
          );
        }
      }
    }

    init();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      landmarkerRef.current?.close?.();
      landmarkerRef.current = null;
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (videoRef.current) videoRef.current.srcObject = null;
    };
  }, [enabled]);

  return { videoRef, isHandUp, cameraReady, cameraError };
}
