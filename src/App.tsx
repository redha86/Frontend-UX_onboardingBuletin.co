// src/App.tsx
import React from "react";
import { RouterProvider, Outlet, useRouterState, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen"; // sesuaikan jika kamu pakai export berbeda
import Stepper from "./components/Stepper";
const router = createRouter({ routeTree });
function Layout() {
  const { location } = useRouterState();

  // Ambil path saat ini
  const path = location.pathname?.toString() ?? "/";

  // tampilkan Stepper hanya bila path diawali dengan "/step"
  const showStepper = path.startsWith("/step");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">
        Onboarding Penulis Buletin.co
      </h1>

      {/* Stepper hanya render di halaman step */}
      {showStepper && <Stepper />}

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router}  />;
}
