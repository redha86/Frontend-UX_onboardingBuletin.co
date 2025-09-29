import { Outlet } from "@tanstack/react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white">
      <Outlet />
    </div>
  );
}
