import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-700 p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl font-bold text-white">
          B
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Selamat Datang di Buletin.co
        </h1>
        <p className="text-white/90 mb-6">
          Platform menulis & berbagi ide. Mulai perjalanan menulismu dengan
          onboarding cepat — daftar, lengkapi profil, dan buat tulisan pertama.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/step1"
            className="inline-block rounded-lg bg-white text-indigo-700 px-6 py-3 font-semibold shadow-lg hover:translate-y-[-2px] transition"
          >
            Mulai Onboarding
          </Link>

          
        </div>
      </div>
    </div>
  ),
});
