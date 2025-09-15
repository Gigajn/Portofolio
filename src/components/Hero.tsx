// components/Hero.tsx
import { personal } from "@/data/personal";

export function Hero() {
  // gandakan passions untuk loop mulus
  const loop = [...personal.passions, ...personal.passions];

  return (
    <div>
      <div className="pt-2 md:pt-4">
        <div className="space-y-6">
          <span className="badge">#</span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900 italic text-center">
            Applying the idea of digitization for humanitarian purposes
          </h1>

          <p className="text-lg subtle text-center">
            {personal.mission}
          </p>

          {/* Marquee passions */}
          <div className="marquee mt-4">
            <div className="marquee-track">
              {loop.map((p, i) => (
                <span key={`${p}-${i}`} className="chip">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
