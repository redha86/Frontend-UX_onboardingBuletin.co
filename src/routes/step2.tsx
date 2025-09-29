import { createFileRoute } from "@tanstack/react-router";
import Step2Profile from "../pages/Step2Profile";

export const Route = createFileRoute("/step2")({
  component: Step2Profile,
});
