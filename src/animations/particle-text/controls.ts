import type { ControlSchema } from "@/src/animations/types";

export const controlSchema: ControlSchema = [
  {
    key: "chaos",
    label: "Chaos",
    min: 0,
    max: 6,
    step: 0.1,
    decimals: 1,
    unit: "",
    defaultValue: 3.1,
  },
  {
    key: "repulsionStrength",
    label: "Repulsion",
    min: 1,
    max: 20,
    step: 0.5,
    decimals: 1,
    unit: "",
    defaultValue: 9,
  },
  {
    key: "radius",
    label: "Radius",
    min: 80,
    max: 320,
    step: 10,
    decimals: 0,
    unit: "px",
    defaultValue: 200,
  },
];
