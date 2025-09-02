import type { Experience } from "../types";

type ExperienceSectionProps = { items: Experience[] };

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50"></div>
      <header className="z-10 mt-1 mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 sm:text-right">
        {item.date}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-800">
          <div>
            <p className="inline-block font-bold text-slate-800">
              {item.role} · {item.company}
            </p>
          </div>
        </h3>
        <ul className="mt-2 text-sm leading-normal list-disc list-outside ml-5 space-y-2">
          {item.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-50/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="group/list space-y-12">
          {items.map((item, index) => (
            <li key={index}>
              <ExperienceCard item={item} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ExperienceSection;
