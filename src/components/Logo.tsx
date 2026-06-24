// Simple inline SVG mark: a tennis ball + the Jaguar navy. No external assets.
export function Logo({ size = 40, light = false }: { size?: number; light?: boolean }) {
  const ball = light ? "#ffffff" : "#0a2647";
  const seam = light ? "#1d4ed8" : "#f5b301";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" fill={ball} stroke={light ? "#ffffff" : "#0a2647"} strokeWidth="2" />
      <path
        d="M9 14c8 4 8 16 0 20"
        stroke={seam}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M39 14c-8 4-8 16 0 20"
        stroke={seam}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
