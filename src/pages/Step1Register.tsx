import { useNavigate } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import OnboardingLayout from "../layouts/OnboardingLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Input } from "../components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";

export default function Step1Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              B
            </div>
            <div>
              <CardTitle className="text-lg">Daftar Akun</CardTitle>
              <p className="text-sm text-muted-foreground">
                Gunakan email aktif untuk verifikasi.
              </p>
            </div>
          </div>
        </CardHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/step2" });
          }}
        >
          <CardContent className="space-y-4 pt-4">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="nama@contoh.com" required />

            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="Masukkan password" required />

            <p className="text-xs text-muted-foreground mt-1">
              Password minimal 8 karakter.
            </p>
          </CardContent>

          <CardFooter className="pt-0">
            <Button type="submit" className="w-full">
              Lanjut ke Profil
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export const Route = createFileRoute("/step1")({
  component: () => (
    // OnboardingLayout membungkus step 1 dan menampilkan Stepper hanya di page step
    <OnboardingLayout>
      <Step1Register />
    </OnboardingLayout>
  ),
});
