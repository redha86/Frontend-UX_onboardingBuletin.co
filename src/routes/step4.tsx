import { createFileRoute } from "@tanstack/react-router";
import Step4Finish from "../pages/Step4Finish";

export const Route = createFileRoute("/step4")({
  component: Step4Finish,
});
