import Link from "next/link";
import type { NewsSlugType } from "./type/newsSlugType";

interface NewsCardProps {
  news: NewsSlugType;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link
      href={`/news/${news.slug}`}
      className="group block h-full"
    >
      <article className="h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-52 w-full overflow-hidden bg-gray-100">
          <img
            src={news.image}
            alt={news.title}
            
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            {news.category}
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3 text-right text-xs text-gray-500">
            {news.date}
          </div>

          <h2 className="mb-3 line-clamp-2 text-right text-lg font-bold leading-7 text-gray-900 transition-colors group-hover:text-gray-700">
            {news.title}
          </h2>

          <p className="line-clamp-2 text-right text-sm leading-6 text-gray-500">
            {news.description}
          </p>

          <div className="mt-5 text-left">
            <span className="text-sm font-semibold text-gray-800 transition-colors group-hover:text-black">
              خواندن خبر ←
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}