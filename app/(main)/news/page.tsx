
import NewsCard from "../../components/news/NewsCard";
import { getAllNews } from "../../components/news/news";
import Home from '../../components/news/Home'
export default function NewsListPage() {
  const news = getAllNews();

  return (
<>
<Home/>
    <main
      dir="rtl"
      className=" bg-gray-50 px-4 py-0"
    >
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-3xl font-bold text-gray-900">
          اخبار و مقالات
        </h1>

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
</>
  );
}
