import { Mail, Send } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-28"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-8">
        <div className="glow-card relative overflow-hidden rounded-3xl border border-border bg-card/60 px-6 py-12 text-center backdrop-blur sm:px-12 sm:py-16">
          <div className="hero-stars pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="relative">
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Контакты
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,5vw,2.75rem)] leading-tight font-bold tracking-tight">
              Готовы начать <span className="text-neon-gradient">проект?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Напишите мне, и мы обсудим вашу задачу
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="https://t.me/test_bezz"
                target="_blank"
                rel="noreferrer"
                className="glow-orange inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--neon-orange)" }}
              >
                <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                Написать в Telegram
              </a>
              <a
                href="mailto:testbezz@gmail.com"
                className="glow-violet inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ borderColor: "var(--neon-violet)", color: "var(--neon-violet)" }}
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                Написать на Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
