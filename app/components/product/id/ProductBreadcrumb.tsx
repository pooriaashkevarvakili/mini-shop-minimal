

import Link from "next/link";

interface Props {
  category: string;
  productName: string;
}

export default function ProductBreadcrumb({
  category,
  productName,
}: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm text-gray-500"
      dir="rtl"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-gray-900"
          >
            خانه
          </Link>
        </li>

        <li
          aria-hidden="true"
          className="text-gray-300"
        >
          /
        </li>

        <li>
          <span>{category}</span>
        </li>

        <li
          aria-hidden="true"
          className="text-gray-300"
        >
          /
        </li>

        <li>
          <span className="font-medium text-gray-900">
            {productName}
          </span>
        </li>
      </ol>
    </nav>
  );
}