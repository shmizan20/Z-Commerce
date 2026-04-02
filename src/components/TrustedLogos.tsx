"use client";

const logos = [
  "StackFlow", "NorthStar", "Visionary", "CubeIO", "OptiTech",
  "StackFlow", "NorthStar", "Visionary", "CubeIO", "OptiTech",
];

export default function TrustedLogos() {
  return (
    <section className="py-16 bg-[var(--surface)] border-y border-[var(--border)]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-8">
          Trusted by 500+ ambitious businesses
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--surface)] to-transparent z-10" />

          <div className="flex animate-marquee">
            {logos.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center min-w-[200px] px-8 py-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-base font-extrabold text-gray-500">{name[0]}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-600">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
