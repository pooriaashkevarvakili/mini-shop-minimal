
import Link from "next/link";

import { NewsItem } from "./types";

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link
      href={`/news/${news.slug}`}
      className="group block h-full"
    >
      <article className="h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="relative h-52 w-full overflow-hidden bg-gray-100">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            {news.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Date */}
          <div className="mb-3 text-right text-xs text-gray-500">
            {news.date}
          </div>

          {/* Title */}
          <h2 className="mb-3 line-clamp-2 text-right text-lg font-bold leading-7 text-gray-900 transition-colors group-hover:text-gray-700">
            {news.title}
          </h2>

          {/* Description */}
          <p className="line-clamp-2 text-right text-sm leading-6 text-gray-500">
            {news.description}
          </p>

          {/* Read more */}
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
