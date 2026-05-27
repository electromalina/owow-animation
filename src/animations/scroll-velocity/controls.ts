import type { ControlSchema } from "@/src/animations/types";

export const controlSchema: ControlSchema = [
  {
    key: "speed",
    label: "Speed",
    min: 0.3,
    max: 1.5,
    step: 0.05,
    decimals: 2,
    unit: "×",
    defaultValue: 0.7,
  },
];
