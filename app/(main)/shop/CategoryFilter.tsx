import Link from "next/link";

type Category =
  | "all"
  | "bags"
  | "accessories"
  | "shoes"
  | "digital"
  | "home"
  | "stationery"
  | "glasses"
  | "bracelets";

const categories: {
  label: string;
  value: Category;
}[] = [
  { label: "همه", value: "all" },
  { label: "کیف", value: "bags" },
  { label: "اکسسوری", value: "accessories" },
  { label: "کفش", value: "shoes" },
  { label: "دیجیتال", value: "digital" },
  { label: "خانه", value: "home" },
  { label: "نوشت‌افزار", value: "stationery" },
  { label: "عینک", value: "glasses" },
  { label: "دستبند", value: "bracelets" },
];

interface Props {
  activeCategory: Category;
  productCount: number;
}

export default function CategoryFilter({
  activeCategory,
  productCount,
}: Props) {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const active =
            activeCategory === category.value;

          return (
            <Link
              key={category.value}
              href={
                category.value === "all"
                  ? "/shop"
                  : `/shop?category=${category.value}`
              }
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-black text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              {category.label}
            </Link>
          );
        })}
      </div>

      <div className="text-right">
        <p className="mb-1 text-sm text-gray-500">
          کالکشن کامل
        </p>

        <h1 className="text-2xl font-bold text-gray-900">
          {productCount} محصول
        </h1>
      </div>
    </div>
  );
}