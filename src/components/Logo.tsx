import Image from "next/image";

// The official FJA Jaguars mark. Navy-on-white, so on dark backgrounds it
// sits inside a white rounded badge to stay crisp.
export function Logo({ size = 40, light = false }: { size?: number; light?: boolean }) {
  return (
    <span
      className={`inline-grid place-items-center rounded-full overflow-hidden shrink-0 ${
        light ? "bg-white ring-1 ring-white/40" : "bg-white ring-1 ring-[var(--line)]"
      }`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/jaguar-logo.png"
        alt="Frankel Jewish Academy Jaguars logo"
        width={size}
        height={size}
        className="object-contain"
        style={{ padding: Math.round(size * 0.08) }}
        priority
      />
    </span>
  );
}
