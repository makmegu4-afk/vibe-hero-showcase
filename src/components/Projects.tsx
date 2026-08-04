import { ArrowUpRight } from "lucide-react";

import billboardImg from "@/assets/project-billboard.jpg";
import launchproImg from "@/assets/project-launchpro.jpg";
import neuroanalystImg from "@/assets/project-neuroanalyst.jpg";

const projects = [
  {
    name: "CityBoards",
    description:
      "Лендинг для заказчиков рекламы на билбордах города. Карта свободных щитов, расчёт стоимости и заявка на бронирование в пару кликов.",
    tags: ["React", "Mapbox", "Tailwind"],
    accent: "var(--neon-orange)",
    image: billboardImg,
    alt: "Превью лендинга для бронирования рекламы на билбордах города",
  },

  {
    name: "НейроАналитик",
    description:
      "AI-сервис для анализа данных. Загружаете таблицы — получаете выводы, графики и готовый отчёт за минуты.",
    tags: ["Next.js", "Python", "LLM"],
    accent: "var(--neon-violet)",
    image: neuroanalystImg,
    alt: "Превью дашборда аналитики НейроАналитик",
  },
  {
    name: "LaunchPro",
    description:
      "Лендинг для продукта. Быстрая сборка, анимации и высокая конверсия на любых устройствах.",
    tags: ["Tailwind", "Motion", "Vercel"],
    accent: "var(--neon-cyan)",
    image: launchproImg,
    alt: "Превью лендинга LaunchPro",
  },
];


export function Projects() {
  return (
    <section
      id="projects"
      className="section-blend hero-stars relative overflow-hidden bg-background py-10 text-foreground sm:py-28"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Портфолио
          </span>
          <h2 className="mt-4 text-[clamp(1.8rem,5vw,3rem)] leading-tight font-bold tracking-tight">
            Избранные <span className="text-neon-gradient">проекты</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Несколько продуктов, собранных вайбкодингом — от идеи до релиза.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.name}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-xl transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `radial-gradient(120% 100% at 20% 0%, color-mix(in oklab, ${p.accent} 22%, transparent), transparent 70%)`,
                  }}
                  aria-hidden="true"
                />
              </div>


              <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <h3 className="truncate text-lg font-semibold">{p.name}</h3>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-neon-orange"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
