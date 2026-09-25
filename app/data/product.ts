
import type { StaticImageData } from "next/image";

import watch from "../../public/watch.webp";
import Dastband from "../../public/dastband3.webp";
import glass from "../../public/glass.webp";
import ShowRed from "../../public/shoered.webp";
import bagKule from "../../public/bagkule.webp";
import bagBlack from "../../public/bagblack.webp";

export type BadgeType = "new" | "bestseller" | "discount";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string | StaticImageData;

  badge?: BadgeType;
  description?: string;
  rating?: number;
  reviews?: number;

  colors?: ProductColor[];

  stock?: number;
  material?: string;
  sizeRange?: string;

  images?: (string | StaticImageData)[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "کفش چرم کلاسیک",
    category: "کفش",
    price: 950000,
    image: ShowRed,
    description:
      "کفش چرم مردانه با طراحی کلاسیک و زیره آنتی‌شوک. مناسب برای محیط‌های کاری و استفاده‌های رسمی. چرم اصل با آستر پارچه‌ای تنفس‌پذیر.",
    rating: 4.6,
    reviews: 63,
    colors: [
      {
        name: "قهوه‌ای",
        hex: "#8B4513",
      },
      {
        name: "مشکی",
        hex: "#1a1a1a",
      },
    ],
    stock: 20,
    material: "چرم طبیعی + آستر پارچه",
    sizeRange: "۴۰ تا ۴۵",
    images: [ShowRed, ShowRed, ShowRed],
  },

  {
    id: 2,
    name: "ساعت مینیمال",
    category: "اکسسوری",
    price: 1200000,
    image: watch,
    badge: "new",
    description: "ساعت مینیمال با طراحی مدرن و بند چرمی.",
    rating: 4.8,
    reviews: 42,
    colors: [
      {
        name: "مشکی",
        hex: "#1a1a1a",
      },
      {
        name: "نقره‌ای",
        hex: "#C0C0C0",
      },
    ],
    stock: 15,
    material: "استیل + چرم",
    sizeRange: "فری سایز",
    images: [watch],
  },

  {
    id: 3,
    name: "کیف چرم دستی",
    category: "کیف",
    price: 850000,
    image: bagBlack,
    badge: "bestseller",
    description: "کیف چرم دستی کلاسیک مناسب استفاده روزانه.",
    rating: 4.5,
    reviews: 89,
    colors: [
      {
        name: "مشکی",
        hex: "#1a1a1a",
      },
      {
        name: "قهوه‌ای",
        hex: "#8B4513",
      },
    ],
    stock: 12,
    material: "چرم طبیعی",
    sizeRange: "یک سایز",
    images: [bagBlack],
  },

  {
    id: 4,
    name: "عینک آفتابی",
    category: "عینک",
    price: 780000,
    image: glass,
    description: "عینک آفتابی با فریم سبک و محافظ UV.",
    rating: 4.3,
    reviews: 31,
    colors: [
      {
        name: "مشکی",
        hex: "#1a1a1a",
      },
      {
        name: "طلایی",
        hex: "#D4AF37",
      },
    ],
    stock: 25,
    material: "پلاستیک مقاوم + فلز",
    sizeRange: "فری سایز",
    images: [glass],
  },

  {
    id: 5,
    name: "کیف اسپرت جدید",
    category: "کیف",
    price: 1100000,
    image: bagKule,
    badge: "new",
    description: "کیف اسپرت سبک و جادار مناسب باشگاه و سفر.",
    rating: 4.7,
    reviews: 56,
    colors: [
      {
        name: "مشکی",
        hex: "#1a1a1a",
      },
      {
        name: "خاکستری",
        hex: "#6B7280",
      },
    ],
    stock: 18,
    material: "پارچه ضدآب",
    sizeRange: "یک سایز",
    images: [bagKule],
  },

  {
    id: 6,
    name: "دستبند چرم",
    category: "دستبند",
    price: 450000,
    image: Dastband,
    badge: "discount",
    description: "دستبند چرم دست‌دوز با قفل استیل.",
    rating: 4.4,
    reviews: 27,
    colors: [
      {
        name: "قهوه‌ای",
        hex: "#8B4513",
      },
      {
        name: "مشکی",
        hex: "#1a1a1a",
      },
    ],
    stock: 30,
    material: "چرم طبیعی",
    sizeRange: "قابل تنظیم",
    images: [Dastband],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}
