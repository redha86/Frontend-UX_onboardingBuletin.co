import { createFileRoute } from "@tanstack/react-router";
import Step1Register from "../pages/Step1Register";

export const Route = createFileRoute("/step1")({
  component: Step1Register,
});
