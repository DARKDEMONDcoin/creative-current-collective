import { createFileRoute } from "@tanstack/react-router";
import { NextStage } from "@/components/next-stage";

export const Route = createFileRoute("/dashboard")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Client Portal — Contentech" },
      { name: "description", content: "Contentech Client Portal." },
      { property: "og:title", content: "Client Portal — Contentech" },
      { property: "og:description", content: "Contentech Client Portal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <NextStage area="Client Portal" loginHref="/login" />,
});
