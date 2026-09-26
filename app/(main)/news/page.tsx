
import NewsCard from "../../components/news/NewsCard";
import { getAllNews } from "../../components/news/news";

export default function NewsListPage() {
  const news = getAllNews();

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gray-50 px-4 py-12"
    >
      <div className="mx-auto max-w-5xl">
        {/* Page Title */}
        <h1 className="mb-10 text-center text-3xl font-bold text-gray-900">
          اخبار و مقالات
        </h1>

        {/* News List */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              news={item}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
