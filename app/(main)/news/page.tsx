import NewsCard from "./NewsCard";
import NewsHerofront from "./NewsHero";

import { newsSlugSection } from "./ts/newsslug";

export default async function NewsListPage() {
  const response = await newsSlugSection();

  const news = response.data;

  return (
    <>
      <NewsHerofront />

      <main
        dir="rtl"
        className="bg-gray-50 px-4 py-0"
      >
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-10 text-center text-3xl font-bold text-gray-900">
            اخبار و مقالات
          </h1>

          {news.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-gray-500">
                خبری برای نمایش وجود ندارد.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {news.map((item) => (
                <NewsCard
                  key={item.id}
                  news={item}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}