// src/layouts/OnboardingLayout.tsx
import React from "react";
import type { JSX, ReactNode } from "react";
import { Outlet } from "@tanstack/react-router";
import Stepper from "../components/Stepper";

/**
 * OnboardingLayout menerima optional children.
 * - Jika dipanggil sebagai <OnboardingLayout>...children...</OnboardingLayout>, akan render children.
 * - Jika dipasang sebagai layout route (Outlet), children akan undefined -> fallback ke <Outlet />.
 */
type Props = {
  children?: ReactNode;
};

export default function OnboardingLayout({ children }: Props): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Onboarding Penulis Buletin.co</h1>

      <Stepper />

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mt-6">
        {/* Jika ada children (dipanggil manual), render itu; kalau tidak, render Outlet */}
        {children ?? <Outlet />}
      </div>
    </div>
  );
}
