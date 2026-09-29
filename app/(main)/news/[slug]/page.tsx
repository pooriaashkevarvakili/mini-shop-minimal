import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import {
  getNewsBySlug,
  getAllNews,
} from "../ts/newsslug";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export async function generateStaticParams() {
  const news = await getAllNews();

  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-white hover:text-gray-900 hover:shadow-sm"
          >
            <FiArrowRight size={18} aria-hidden="true" />
            <span>بازگشت به اخبار</span>
          </Link>
        </div>

        <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="relative w-full overflow-hidden bg-gray-100">
            <img
              src={news.image}
              alt={news.title}
              width={1200}
              height={700}
              
              className="
                block
                h-72
                w-full
                object-cover
                sm:h-80
                md:h-[420px]
                lg:h-[500px]
                xl:h-[560px]
                2xl:h-[620px]
              "
            />
          </div>

          <div className="px-5 py-7 sm:px-8 sm:py-9 md:px-12 md:py-12 lg:px-16">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500">
              <span>{news.date}</span>

              <span className="rounded-full bg-gray-100 px-4 py-1.5 font-medium text-gray-600">
                {news.category}
              </span>
            </div>

            <h1
              className="
                mb-6
                text-right
                text-2xl
                font-bold
                leading-10
                text-gray-900
                sm:text-3xl
                sm:leading-[1.8]
                md:text-4xl
                md:leading-[1.7]
                lg:text-5xl
                lg:leading-[1.6]
                2xl:text-5xl
              "
            >
              {news.title}
            </h1>

            <p
              className="
                mb-8
                text-right
                text-base
                leading-8
                text-gray-600
                sm:text-lg
                sm:leading-9
                md:text-xl
                md:leading-10
              "
            >
              {news.description}
            </p>

            <div
              className="
                whitespace-pre-line
                border-t
                border-gray-100
                pt-7
                text-right
                text-base
                leading-9
                text-gray-800
                sm:text-lg
                sm:leading-10
                md:text-xl
                md:leading-[2.2]
              "
            >
              {news.content}
            </div>

            <div className="mt-10 border-t border-gray-100 pt-7">
              <Link
                href="/news"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gray-900
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-200
                  hover:bg-gray-700
                  hover:shadow-md
                "
              >
                <FiArrowRight size={18} aria-hidden="true" />
                <span>بازگشت به اخبار</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}