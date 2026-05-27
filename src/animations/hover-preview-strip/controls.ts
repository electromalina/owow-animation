import type { ControlSchema } from "@/src/animations/types";

export const controlSchema: ControlSchema = [
  {
    key: "followDuration",
    label: "Follow",
    min: 0.05,
    max: 1.2,
    step: 0.05,
    decimals: 2,
    unit: "s",
    defaultValue: 0.5,
  },
  {
    key: "stripDuration",
    label: "Strip",
    min: 0.05,
    max: 1.4,
    step: 0.05,
    decimals: 2,
    unit: "s",
    defaultValue: 0.72,
  },
  {
    key: "fadeDuration",
    label: "Fade",
    min: 0.0,
    max: 1.0,
    step: 0.05,
    decimals: 2,
    unit: "s",
    defaultValue: 0.35,
  },
];

