import { createFileRoute } from "@tanstack/react-router";
import Step3FirstPost from "../pages/Step3FirstPost";

export const Route = createFileRoute("/step3")({
  component: Step3FirstPost,
});
