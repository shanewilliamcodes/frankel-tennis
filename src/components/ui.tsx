import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#061b33_0%,#0a2647_48%,#103a6b_100%)] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,.16) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-page relative py-12 sm:py-16">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--sky)]">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-4xl text-3xl sm:text-5xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-white/80 leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  );
}

export function Badge({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "gold" | "gray" | "green";
}) {
  const tones: Record<string, string> = {
    blue: "bg-[var(--sky)] text-[var(--navy)]",
    gold: "bg-amber-100 text-amber-800",
    gray: "bg-slate-100 text-slate-600",
    green: "bg-emerald-100 text-emerald-700",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function NeedsUpdateBanner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 flex items-start gap-2">
      <span aria-hidden className="mt-0.5 font-black">!</span>
      <p>{children}</p>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--navy)]">{title}</h2>
      {children && <p className="mt-2 text-[var(--muted)] max-w-2xl">{children}</p>}
    </div>
  );
}
