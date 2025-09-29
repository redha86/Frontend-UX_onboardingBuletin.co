// src/components/Stepper.tsx
import React, { type JSX } from "react";
import { useRouterState } from "@tanstack/react-router";

const steps = [
  { path: "/step1", label: "Daftar Akun" },
  { path: "/step2", label: "Profil" },
  { path: "/step3", label: "Tulisan" },
  { path: "/step4", label: "Selesai" },
];

export default function Stepper(): JSX.Element {
  const routerState = useRouterState();
  const currentPath = routerState.location?.pathname ?? "/step1";
  const currentIndex = Math.max(0, steps.findIndex((s) => s.path === currentPath));

  return (
    <nav aria-label="Onboarding steps" className="mb-6">
      <ol className="flex gap-2 justify-center items-center">
        {steps.map((s, i) => {
          const isActive = i === currentIndex;
          const isCompleted = i < currentIndex;

          const base = "inline-flex items-center px-4 py-2 rounded-md text-sm font-medium";
          const style = isCompleted
            ? "bg-green-600 text-white"
            : isActive
            ? "bg-blue-600 text-white"
            : "bg-white border border-gray-200 text-gray-700";

          // Render non-interactive element (span) sehingga tidak bisa diklik
          return (
            <li key={s.path}>
              <span
                className={`${base} ${style}`}
                aria-current={isActive ? "step" : undefined}
                title={s.label}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
