import { aboutStory } from "./ts/aboutStory";

export default async function AboutStoryFront() {
  const response = await aboutStory();
  const about = response.data?.[0];

  if (!about) {
    return null;
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          <div className="flex-1 text-right" dir="rtl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              {about.title}
            </h2>

            <div className="space-y-5 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              {about.descriptionOne && (
                <p>{about.descriptionOne}</p>
              )}

              {about.descriptionTwo && (
                <p>{about.descriptionTwo}</p>
              )}

              {about.descriptionThree && (
                <p>{about.descriptionThree}</p>
              )}
            </div>
          </div>

          <div className="relative w-full max-w-md shrink-0 lg:max-w-lg">
            <div className="overflow-hidden rounded-3xl shadow-sm">
              <img
                src={about.img}
                alt={about.title || "About us"}
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -top-3 left-4 z-10">
              <div className="rounded-full bg-neutral-800 px-4 py-1.5 text-sm font-medium text-white shadow-md">
                از ۱۴۰۱
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}