import { aboutSection } from "./ts/aboutSection";

export default async function AboutSectionFront() {
  const response = await aboutSection();
  const about = response.data?.[0];

  if (!about) {
    return null;
  }

  return (
    <section dir="rtl" className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-start">
        <span className="text-sm text-gray-500">
          {about.title}
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-tight mb-6">
          {about.titleOne}
          <br />
          <span className="text-gray-500 font-medium">
            {about.titleTwo}
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {about.description}
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <img
          src={about.img}
          alt={about.title}
          className="w-full h-[420px] md:h-[520px] lg:h-[580px] object-cover object-center"
        />
      </div>
    </section>
  );
}