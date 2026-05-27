import type { ControlSchema } from "@/src/animations/types";

export const controlSchema: ControlSchema = [
  {
    key: "strength",
    label: "Pull strength",
    min: 0.1,
    max: 0.8,
    step: 0.02,
    decimals: 2,
    unit: "",
    defaultValue: 0.42,
  },
  {
    key: "radius",
    label: "Radius",
    min: 60,
    max: 200,
    step: 5,
    decimals: 0,
    unit: "px",
    defaultValue: 110,
  },
];
