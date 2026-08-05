import { Check, MessageCircle, Sparkles } from "lucide-react";

const bullets = ["MVP за дни", "Лендинги", "Веб-приложения"];

const codeLines = [
  { indent: 0, tokens: [["kw", "const"], ["fn", " app"], ["op", " = "], ["kw", "await"], ["fn", " vibe"], ["op", "("]] },
  { indent: 1, tokens: [["prop", "idea"], ["op", ": "], ["str", "\"AI-продукт\""], ["op", ","]] },
  { indent: 1, tokens: [["prop", "stack"], ["op", ": ["], ["str", "\"React\""], ["op", ", "], ["str", "\"AI\""], ["op", "],"]] },
  { indent: 1, tokens: [["prop", "speed"], ["op", ": "], ["num", "10"], ["op", "x"]] },
  { indent: 0, tokens: [["op", ")"]] },
  { indent: 0, tokens: [["cm", "// ship → done ✦"]] },
] as const;

const tokenClass: Record<string, string> = {
  kw: "text-neon-violet",
  fn: "text-neon-orange",
  op: "text-muted-foreground",
  prop: "text-foreground/80",
  str: "text-neon-cyan",
  num: "text-neon-orange",
  cm: "text-muted-foreground/60 italic",
};

const metrics = [
  { label: "Проектов", value: "40+" },
  { label: "Срок MVP", value: "7 дней" },
  { label: "AI-инструментов", value: "12" },
];

export function Hero() {
  return (
    <section className="section-blend hero-stars relative overflow-hidden bg-background text-foreground">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-6 sm:px-8">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="text-xl font-black tracking-[0.25em] uppercase">
              vibe<span className="text-neon-orange">.dev</span>
            </span>
            <span className="hidden min-w-0 border-l border-border pl-3 text-xs leading-tight text-muted-foreground sm:block">
              Вайбкодинг
              <br />
              под ключ
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden text-right text-xs leading-tight text-muted-foreground md:block">
              Пишите, я на связи
              <br />
              ежедневно 10:00 – 21:00
            </span>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-neon-violet/15 text-neon-violet ring-1 ring-neon-violet/40">
              <MessageCircle className="size-4" />
            </span>
          </div>
        </header>

        <div className="grid items-center gap-10 py-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <Sparkles className="size-3.5 text-neon-orange" />
              AI-разработка без лишних итераций
            </span>

            <h1 className="mt-6 text-[clamp(2.1rem,7vw,4.25rem)] leading-[1.05] font-bold tracking-tight">
              Создаю AI-продукты с&nbsp;помощью{" "}
              <span className="text-neon-gradient">вайбкодирования</span>.
            </h1>

            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Быстро собираю MVP, лендинги и веб-приложения с помощью современных
              AI-инструментов.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {bullets.map((b) => (
                <li key={b} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-secondary text-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="min-w-0 text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
              <a
                href="#projects"
                className="glow-orange inline-flex h-15 w-full items-center justify-center rounded-full bg-neon-orange px-8 text-base font-semibold text-background transition-transform hover:-translate-y-0.5 sm:h-13 sm:w-auto sm:text-sm"
              >
                Посмотреть проекты
              </a>
              <a
                href="#contact"
                className="glow-violet inline-flex h-15 w-full items-center justify-center rounded-full border border-neon-violet/60 bg-neon-violet/10 px-8 text-base font-semibold text-neon-violet transition-transform hover:-translate-y-0.5 sm:h-13 sm:w-auto sm:text-sm"
              >
                Связаться
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="glow-card relative rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-xl sm:p-6">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-neon-orange" />
                <span className="size-2.5 rounded-full bg-neon-violet" />
                <span className="size-2.5 rounded-full bg-neon-cyan" />
                <span className="ml-auto truncate text-xs text-muted-foreground">
                  vibe-studio / app.tsx
                </span>
              </div>

              <pre className="mt-4 overflow-x-auto rounded-xl bg-background/60 p-4 font-mono text-[13px] leading-relaxed">
                <code>
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-4 shrink-0 text-right text-muted-foreground/40">
                        {i + 1}
                      </span>
                      <span style={{ paddingLeft: line.indent * 16 }}>
                        {line.tokens.map(([t, text], j) => (
                          <span key={j} className={tokenClass[t]}>
                            {text}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="min-w-0 rounded-xl border border-border bg-background/50 p-3"
                  >
                    <div className="truncate text-lg font-bold">{m.value}</div>
                    <div className="truncate text-[11px] text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-border bg-background/50 p-4">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <span className="truncate text-xs text-muted-foreground">
                    Скорость доставки фич
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-neon-orange">+68%</span>
                </div>
                <svg viewBox="0 0 300 60" className="mt-3 h-14 w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--neon-violet)" />
                      <stop offset="100%" stopColor="var(--neon-orange)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 50 L40 44 L80 46 L120 30 L160 34 L200 20 L240 22 L300 4"
                    fill="none"
                    stroke="url(#spark)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
