import { useNavigate } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import OnboardingLayout from "../layouts/OnboardingLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";

export default function Step2Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <CardTitle className="text-lg">Lengkapi Profil</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tambahkan bio singkat agar pembaca mengenalmu.
              </p>
            </div>
          </div>
        </CardHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/step3" });
          }}
        >
          <CardContent className="space-y-4 pt-4">
            <label className="text-sm font-medium">Nama Lengkap</label>
            <Input type="text" placeholder="Nama Anda" required />

            <label className="text-sm font-medium">Tentang Anda</label>
            <Textarea placeholder="Tulis bio singkat (mis. penulis teknologi)" rows={4} />
          </CardContent>

          <CardFooter className="flex justify-between pt-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate({ to: "/step1" })}
            >
              Kembali
            </Button>
            <Button type="submit">Lanjut ke Tulisan</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export const Route = createFileRoute("/step2")({
  component: () => (
    // OnboardingLayout membungkus step 1 dan menampilkan Stepper hanya di page step
    <OnboardingLayout>
      <Step2Profile />
    </OnboardingLayout>
  ),
});
