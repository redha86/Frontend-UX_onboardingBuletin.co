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

export default function Step3FirstPost() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-yellow-600 flex items-center justify-center text-white font-bold">
              T
            </div>
            <div>
              <CardTitle className="text-lg">Tulisan Pertama Anda</CardTitle>
              <p className="text-sm text-muted-foreground">
                Buat judul menarik dan isi singkat untuk mencoba editor.
              </p>
            </div>
          </div>
        </CardHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/step4" });
          }}
        >
          <CardContent className="space-y-4 pt-4">
            <label className="text-sm font-medium">Judul Tulisan</label>
            <Input type="text" placeholder="Contoh: 5 Tips Produktif Menulis" required />

            <label className="text-sm font-medium">Isi Tulisan</label>
            <Textarea placeholder="Mulai ketik ide Anda di sini..." rows={8} />
          </CardContent>

          <CardFooter className="flex justify-between pt-0">
            <Button type="button" variant="outline" onClick={() => navigate({ to: "/step2" })}>
              Kembali
            </Button>
            <Button type="submit">Selesai & Lihat Dashboard</Button>
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
      <Step3FirstPost />
    </OnboardingLayout>
  ),
});
