import { ArrowUpRight } from "lucide-react";

import launchproImg from "@/assets/project-launchpro.jpg";
import neuroanalystImg from "@/assets/project-neuroanalyst.jpg";
import studyflowImg from "@/assets/project-studyflow.jpg";

const projects = [
  {
    name: "StudyFlow",
    description:
      "AI-платформа для персонализированного обучения. Строит индивидуальный трек и адаптирует материал под темп ученика.",
    tags: ["React", "OpenAI", "Supabase"],
    accent: "var(--neon-orange)",
    image: studyflowImg,
    alt: "Превью интерфейса AI-платформы StudyFlow",
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
      className="hero-stars relative overflow-hidden bg-background py-20 text-foreground sm:py-28"
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
              <div
                className="relative aspect-[16/10] w-full overflow-hidden"
                style={{
                  background: `radial-gradient(120% 100% at 20% 0%, color-mix(in oklab, ${p.accent} 45%, transparent), transparent 70%), var(--muted)`,
                }}
                aria-hidden="true"
              >
                <div className="absolute inset-x-5 top-6 space-y-2">
                  <div className="h-2.5 w-2/3 rounded-full bg-foreground/25" />
                  <div className="h-2.5 w-1/2 rounded-full bg-foreground/15" />
                </div>
                <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
                  <div className="h-10 rounded-lg bg-background/50" />
                  <div className="h-10 rounded-lg bg-background/35" />
                  <div className="h-10 rounded-lg bg-background/50" />
                </div>
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
