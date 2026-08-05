const services = [
  {
    icon: "🚀",
    title: "MVP за неделю",
    description:
      "Собираю рабочий продукт из идеи в сжатые сроки. Фокус на главном сценарии, без лишних деталей.",
    result: "Готовый продукт для первых пользователей за 5–7 дней",
    accent: "var(--neon-orange)",
  },
  {
    icon: "🤖",
    title: "AI-автоматизация",
    description:
      "Встраиваю LLM и агентов в рутинные процессы. Обработка текстов, документов, заявок и поддержки.",
    result: "До 70% рутины уходит на автопилот",
    accent: "var(--neon-violet)",
  },
  {
    icon: "🎨",
    title: "UI/UX с вайбкодингом",
    description:
      "Дизайн рождается прямо в коде — быстро проверяю гипотезы интерфейса. Каждый экран адаптивен и живой.",
    result: "Интерфейс, который не стыдно показать инвестору",
    accent: "var(--neon-cyan)",
  },
  {
    icon: "🔌",
    title: "Интеграции",
    description:
      "Подключаю платежи, CRM, аналитику и внешние API. Настраиваю вебхуки и синхронизацию данных.",
    result: "Все сервисы работают как одна система",
    accent: "var(--neon-orange)",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section-blend relative overflow-hidden bg-background py-6 text-foreground sm:py-10"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Услуги
          </span>
          <h2 className="mt-4 text-[clamp(1.8rem,5vw,3rem)] leading-tight font-bold tracking-tight">
            Что я <span className="text-neon-gradient">делаю</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Четыре направления, в которых вайбкодинг даёт результат быстрее классической разработки.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li
              key={s.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors duration-300"
              style={{ ["--card-accent" as string]: s.accent }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow:
                    "0 24px 70px -40px color-mix(in oklab, var(--card-accent) 80%, transparent), inset 0 0 0 1px color-mix(in oklab, var(--card-accent) 35%, transparent)",
                }}
                aria-hidden="true"
              />
              <span
                className="relative flex size-12 items-center justify-center rounded-xl text-2xl"
                style={{
                  background: "color-mix(in oklab, var(--card-accent) 14%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--card-accent) 30%, transparent)",
                }}
                aria-hidden="true"
              >
                {s.icon}
              </span>

              <h3 className="relative mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>

              <div className="relative mt-5 border-t border-border pt-4">
                <span className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Результат
                </span>
                <p
                  className="mt-1.5 text-sm font-medium"
                  style={{ color: "color-mix(in oklab, var(--card-accent) 85%, white)" }}
                >
                  {s.result}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
