import { aboutSection } from "./ts/count";
import StatCard from "./StatCard";

export default async function StatsBanner() {
  const data = await aboutSection();

  return (
    <section className="w-full bg-[#1a1a1a] py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-around gap-8 px-4">
        {data.map((stat, index) => (
          <StatCard
            key={`${stat.label}-${index}`}
            {...stat}
          />
        ))}
      </div>
    </section>
  );
}