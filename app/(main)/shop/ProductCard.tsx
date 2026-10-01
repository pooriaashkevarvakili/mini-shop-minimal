import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price) + " ت";

const badgeLabels: Record<string, string> = {
  new: "جدید",
  bestseller: "پرفروش",
  discount: "تخفیف",
};

const badgeClasses: Record<string, string> = {
  new: "bg-cyan-500 text-white",
  bestseller: "bg-yellow-500 text-white",
  discount: "bg-pink-500 text-white",
};

interface Product {
  id: string | number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:3001";

  const imageSrc = product.image.startsWith("http")
    ? product.image
    : `${apiUrl}${product.image}`;

  const badgeClass =
    badgeClasses[product.badge ?? ""] ||
    "bg-gray-500 text-white";

  return (
    <div className="group overflow-hidden rounded-2xl border-0 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square cursor-pointer overflow-hidden bg-gray-50">
          {product.badge && (
            <div className="absolute left-3 top-3 z-10">
              <span
                className={`inline-flex rounded-full px-3 py-0.5 text-xs font-medium ${badgeClass}`}
              >
                {badgeLabels[product.badge] ?? product.badge}
              </span>
            </div>
          )}

          <img
            src={imageSrc}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-3 p-4">
        <p className="text-xs font-medium text-gray-400">
          {product.category}
        </p>

        <Link href={`/product/${product.id}`}>
          <h3 className="line-clamp-1 cursor-pointer text-base font-semibold text-gray-900 hover:text-black">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>

          <Link
            href={`/product/${product.id}`}
            className="inline-flex h-9 items-center justify-center gap-1 rounded-full border-0 bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            <FiPlus size={17} />
            افزودن
          </Link>
        </div>
      </div>
    </div>
  );
}