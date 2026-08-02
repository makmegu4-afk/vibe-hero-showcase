import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/Hero";

const title = "Вайбкодинг: AI-продукты, MVP и лендинги на заказ";
const description =
  "Создаю AI-продукты с помощью вайбкодирования: быстрые MVP, лендинги и веб-приложения на современных AI-инструментах.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="dark">
      <Hero />
    </main>
  );
}
