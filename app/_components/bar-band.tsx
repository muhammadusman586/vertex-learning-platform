/**
 * The decorative band that closes the page: soft orange columns rising from the
 * bottom edge. Widths and heights are the ones measured off the design reference,
 * expressed as shares so the band scales with the sheet.
 */
const BARS: { width: number; height: number }[] = [
  { width: 73, height: 87 },
  { width: 59, height: 120 },
  { width: 40, height: 152 },
  { width: 55, height: 181 },
  { width: 90, height: 131 },
  { width: 52, height: 95 },
  { width: 103, height: 0 },
  { width: 30, height: 59 },
  { width: 85, height: 82 },
  { width: 80, height: 113 },
  { width: 45, height: 150 },
  { width: 65, height: 182 },
  { width: 50, height: 93 },
  { width: 40, height: 131 },
  { width: 97, height: 168 },
];

const TALLEST = 182;

export function BarBand() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex h-30 w-full items-end overflow-hidden lg:h-48"
    >
      {BARS.map((bar, index) => (
        <span
          key={index}
          className="block bg-[linear-gradient(to_bottom,transparent,var(--color-primary-300)_50%,transparent_97%)] opacity-85 blur-[2px]"
          style={{
            flexGrow: bar.width,
            flexBasis: 0,
            height: `${(bar.height / TALLEST) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
