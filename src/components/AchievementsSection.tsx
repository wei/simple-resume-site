import type { Achievement } from "../types";

type AchievementsSectionProps = { items: Achievement[] };

function Badge({ name }: { name: string }) {
  return (
    <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-600">
      {name}
    </div>
  );
}

function AchievementsSection({ items }: AchievementsSectionProps) {
  return (
    <section
      id="achievements"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Achievements"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-50/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 lg:sr-only">Achievements</h2>
      </div>
      <div>
        <ul className="flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <li key={idx}>
              <Badge name={item.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AchievementsSection;
