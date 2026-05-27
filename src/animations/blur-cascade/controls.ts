import type { ControlSchema } from "@/src/animations/types";

export const controlSchema: ControlSchema = [
  {
    key: "duration",
    label: "Duration",
    min: 0.2,
    max: 3.0,
    step: 0.05,
    decimals: 2,
    unit: "s",
    defaultValue: 0.8,
  },
  {
    key: "stagger",
    label: "Stagger",
    min: 0.0,
    max: 0.8,
    step: 0.01,
    decimals: 2,
    unit: "s",
    defaultValue: 0.12,
  },
  {
    key: "yOffset",
    label: "Y Offset",
    min: 10,
    max: 120,
    step: 1,
    decimals: 0,
    unit: "px",
    defaultValue: 60,
  },
  {
    key: "blurFrom",
    label: "Blur From",
    min: 0,
    max: 24,
    step: 0.5,
    decimals: 1,
    unit: "px",
    defaultValue: 12,
  },
  {
    key: "ease",
    label: "Easing",
    type: "enum",
    // stored as index (number) in ControlValues — snippet.ts converts back to string
    options: [
      { value: "linear",      curve: "M0 18 L60 0" },
      { value: "power1.out",  curve: "M0 18 C15 10,27 1,60 0" },
      { value: "power2.out",  curve: "M0 18 C10 3,26 0,60 0" },
      { value: "power3.out",  curve: "M0 18 C13 7,21 0,60 0" },
      { value: "expo.out",    curve: "M0 18 C11 0,13 0,60 0" },
      { value: "elastic.out", curve: "M0 18 C8 -6,14 4,20 -2 S40 0,60 0" },
    ],
    min: 0,
    max: 5,
    step: 1,
    decimals: 0,
    unit: "",
    defaultValue: 3, // power3.out
  },
];
