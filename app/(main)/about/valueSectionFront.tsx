import { ValueSection } from "./ts/valueSection";

export default async function ValueSectionFront() {
  const response = await ValueSection();

  const values = response.data ?? [];

  if (!values.length) {
    return null;
  }

  return (
    <section
      dir="rtl"
      className="w-full max-w-5xl mx-auto px-4 py-16 bg-white"
    >
      <div className="text-center mb-12">
        <p className="text-sm text-neutral-400 mb-2 font-light tracking-wide">
          ارزش‌های ما
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
          چه چیزی برایمان مهم است
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {values.map((item) => (
          <div
            key={item.id}
            className="
              group
              bg-[#fafafa]
              rounded-2xl
              px-7
              py-8
              border
              border-transparent
              hover:border-neutral-200
              hover:bg-white
              transition-all
              duration-300
              min-h-[190px]
              flex
              flex-col
              items-start
            "
          >
            <div className="w-full text-right">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-500 leading-7">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}