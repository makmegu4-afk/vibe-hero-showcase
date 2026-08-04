const steps = [
  {
    number: "01",
    title: "Погружаюсь в задачу",
    description:
      "Разбираю цель, аудиторию и метрики успеха. Формулирую минимальный объём для первого запуска.",
    accent: "var(--neon-orange)",
  },
  {
    number: "02",
    title: "Создаю с ИИ",
    description:
      "Собираю интерфейс и логику в вайбкодинге. Итерации идут часами, а не неделями.",
    accent: "var(--neon-violet)",
  },
  {
    number: "03",
    title: "Тестирую и улучшаю",
    description:
      "Проверяю сценарии, скорость и адаптив. Правлю по реальной обратной связи.",
    accent: "var(--neon-cyan)",
  },
  {
    number: "04",
    title: "Запускаю и масштабирую",
    description:
      "Публикую продукт, подключаю аналитику и интеграции. Дальше растим по данным.",
    accent: "var(--neon-orange)",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="section-blend relative overflow-hidden bg-background py-10 text-foreground sm:py-28"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Процесс
          </span>
          <h2 className="mt-4 text-[clamp(1.8rem,5vw,3rem)] leading-tight font-bold tracking-tight">
            Как я <span className="text-neon-gradient">работаю</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Четыре шага от идеи до работающего продукта в проде.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {/* connector line */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-transparent via-border to-transparent lg:top-[19px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />

          {steps.map((s) => (
            <li key={s.number} className="relative pl-14 lg:pl-0">
              <div
                className="absolute top-0 left-0 grid h-10 w-10 shrink-0 place-items-center rounded-full border bg-background text-sm font-bold lg:relative lg:mb-6"
                style={{
                  borderColor: s.accent,
                  color: s.accent,
                  boxShadow: `0 0 18px -4px ${s.accent}`,
                }}
              >
                {s.number}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
