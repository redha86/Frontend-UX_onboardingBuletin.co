import { useNavigate } from "@tanstack/react-router";
import OnboardingLayout from "../layouts/OnboardingLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";

export default function Step4Finish() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Card className="w-full max-w-md text-center shadow-2xl">
        <CardHeader className="pt-6">
          <CardTitle className="text-2xl">🎉 Selamat!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Kamu berhasil menyelesaikan onboarding. Sekarang kamu siap untuk
            membuat dan membagikan tulisan di Buletin.co.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 pt-0">
          <Button className="w-full" onClick={() => navigate({ to: "/dashboard" })}>
            Masuk ke Dashboard
          </Button>
          <Button variant="outline" onClick={() => navigate({ to: "/step3" })}>
            Edit Tulisan Pertama
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export const Route = createFileRoute("/step1")({
  component: () => (
    // OnboardingLayout membungkus step 1 dan menampilkan Stepper hanya di page step
    <OnboardingLayout>
      <Step4Finish />
    </OnboardingLayout>
  ),
});
