import type { ControlSchema } from "@/src/animations/types";

export const controlSchema: ControlSchema = [
  {
    key: "strength",
    label: "Strength",
    min: 0,
    max: 2,
    step: 0.05,
    decimals: 2,
    unit: "",
    defaultValue: 1.2,
  },
  {
    key: "radius",
    label: "Radius",
    min: 0,
    max: 280,
    step: 1,
    decimals: 0,
    unit: "px",
    defaultValue: 120,
  },
  {
    key: "stiffness",
    label: "Stiffness",
    min: 0.04,
    max: 0.5,
    step: 0.01,
    decimals: 2,
    unit: "",
    defaultValue: 0.18,
  },
  {
    key: "damping",
    label: "Damping",
    min: 0.4,
    max: 0.95,
    step: 0.01,
    decimals: 2,
    unit: "",
    defaultValue: 0.7,
  },
];
