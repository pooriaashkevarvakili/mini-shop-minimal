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
  // 1
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
      { name: "قهوه‌ای", hex: "#8B4513" },
      { name: "مشکی", hex: "#1a1a1a" },
    ],
    stock: 20,
    material: "چرم طبیعی + آستر پارچه",
    sizeRange: "۴۰ تا ۴۵",
    images: [ShowRed, ShowRed, ShowRed],
  },

  // 2
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
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "نقره‌ای", hex: "#C0C0C0" },
    ],
    stock: 15,
    material: "استیل + چرم",
    sizeRange: "فری سایز",
    images: [watch],
  },

  // 3
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
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "قهوه‌ای", hex: "#8B4513" },
    ],
    stock: 12,
    material: "چرم طبیعی",
    sizeRange: "یک سایز",
    images: [bagBlack],
  },

  // 4
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
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "طلایی", hex: "#D4AF37" },
    ],
    stock: 25,
    material: "پلاستیک مقاوم + فلز",
    sizeRange: "فری سایز",
    images: [glass],
  },

  // 5
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
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "خاکستری", hex: "#6B7280" },
    ],
    stock: 18,
    material: "پارچه ضدآب",
    sizeRange: "یک سایز",
    images: [bagKule],
  },

  // 6
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
      { name: "قهوه‌ای", hex: "#8B4513" },
      { name: "مشکی", hex: "#1a1a1a" },
    ],
    stock: 30,
    material: "چرم طبیعی",
    sizeRange: "قابل تنظیم",
    images: [Dastband],
  },

  // 7
  {
    id: 7,
    name: "کفش ورزشی نایک",
    category: "کفش",
    price: 1890000,
    image: ShowRed,
    badge: "new",
    description: "کفش ورزشی سبک و راحت با کفی نرم و تنفس‌پذیر. مناسب دویدن و باشگاه.",
    rating: 4.9,
    reviews: 124,
    colors: [
      { name: "قرمز", hex: "#DC2626" },
      { name: "مشکی", hex: "#1a1a1a" },
    ],
    stock: 22,
    material: "مش + لاستیک",
    sizeRange: "۴۰ تا ۴۶",
    images: [ShowRed],
  },

  // 8
  {
    id: 8,
    name: "ساعت هوشمند",
    category: "دیجیتال",
    price: 2450000,
    image: watch,
    badge: "bestseller",
    description: "ساعت هوشمند با مانیتور ضربان قلب، GPS و مقاومت در برابر آب.",
    rating: 4.7,
    reviews: 98,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "نقره‌ای", hex: "#C0C0C0" },
    ],
    stock: 14,
    material: "آلومینیوم + سیلیکون",
    sizeRange: "فری سایز",
    images: [watch],
  },

  // 9
  {
    id: 9,
    name: "کیف پول چرمی",
    category: "اکسسوری",
    price: 380000,
    image: bagBlack,
    description: "کیف پول چرم طبیعی با جای کارت و اسکناس. طراحی باریک و شیک.",
    rating: 4.5,
    reviews: 67,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "قهوه‌ای", hex: "#8B4513" },
    ],
    stock: 35,
    material: "چرم طبیعی",
    sizeRange: "یک سایز",
    images: [bagBlack],
  },

  // 10
  {
    id: 10,
    name: "عینک آبی",
    category: "عینک",
    price: 320000,
    image: glass,
    badge: "discount",
    description: "عینک محافظ نور آبی مناسب کار با کامپیوتر و موبایل.",
    rating: 4.2,
    reviews: 45,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "شفاف", hex: "#E5E7EB" },
    ],
    stock: 40,
    material: "پلاستیک سبک",
    sizeRange: "فری سایز",
    images: [glass],
  },

  // 11
  {
    id: 11,
    name: "کوله لپ‌تاپ",
    category: "کیف",
    price: 890000,
    image: bagKule,
    description: "کوله مخصوص لپ‌تاپ تا ۱۵ اینچ با محفظه ضدضربه و جیب‌های متعدد.",
    rating: 4.6,
    reviews: 73,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "خاکستری", hex: "#6B7280" },
    ],
    stock: 16,
    material: "پارچه ضدآب + فوم",
    sizeRange: "یک سایز",
    images: [bagKule],
  },

  // 12
  {
    id: 12,
    name: "کفش رسمی مردانه",
    category: "کفش",
    price: 1120000,
    image: ShowRed,
    description: "کفش رسمی چرم با طراحی شیک و زیره لاستیکی. مناسب مراسم و محیط کار.",
    rating: 4.4,
    reviews: 51,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "قهوه‌ای تیره", hex: "#5C4033" },
    ],
    stock: 19,
    material: "چرم طبیعی",
    sizeRange: "۴۰ تا ۴۵",
    images: [ShowRed],
  },

  // 13
  {
    id: 13,
    name: "کیف دوشی زنانه",
    category: "کیف",
    price: 980000,
    image: bagBlack,
    badge: "bestseller",
    description: "کیف دوشی زنانه چرم با طراحی مینیمال و فضای کافی برای وسایل روزمره.",
    rating: 4.8,
    reviews: 112,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "کرم", hex: "#F5F5DC" },
    ],
    stock: 11,
    material: "چرم مصنوعی باکیفیت",
    sizeRange: "یک سایز",
    images: [bagBlack],
  },

  // 14
  {
    id: 14,
    name: "دستبند استیل",
    category: "دستبند",
    price: 520000,
    image: Dastband,
    badge: "new",
    description: "دستبند استیل ضدحساسیت با طراحی مدرن و قفل مغناطیسی.",
    rating: 4.5,
    reviews: 38,
    colors: [
      { name: "نقره‌ای", hex: "#C0C0C0" },
      { name: "طلایی", hex: "#D4AF37" },
    ],
    stock: 28,
    material: "استیل ضدزنگ",
    sizeRange: "قابل تنظیم",
    images: [Dastband],
  },

  // 15
  {
    id: 15,
    name: "ساعت کلاسیک",
    category: "اکسسوری",
    price: 1350000,
    image: watch,
    description: "ساعت کلاسیک با صفحه آنالوگ و بند چرمی اصل. مناسب استایل رسمی.",
    rating: 4.6,
    reviews: 64,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "قهوه‌ای", hex: "#8B4513" },
    ],
    stock: 13,
    material: "استیل + چرم",
    sizeRange: "فری سایز",
    images: [watch],
  },

  // 16
  {
    id: 16,
    name: "کفش کتانی سفید",
    category: "کفش",
    price: 780000,
    image: ShowRed,
    badge: "discount",
    description: "کفش کتانی سفید سبک و راحت برای استفاده روزمره و پیاده‌روی.",
    rating: 4.3,
    reviews: 87,
    colors: [
      { name: "سفید", hex: "#FFFFFF" },
      { name: "خاکستری", hex: "#9CA3AF" },
    ],
    stock: 24,
    material: "پارچه + لاستیک",
    sizeRange: "۳۹ تا ۴۵",
    images: [ShowRed],
  },

  // 17
  {
    id: 17,
    name: "عینک ورزشی",
    category: "عینک",
    price: 650000,
    image: glass,
    description: "عینک ورزشی با لنز پولاریزه و فریم سبک. مناسب دوچرخه‌سواری و دویدن.",
    rating: 4.4,
    reviews: 29,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "آبی", hex: "#2563EB" },
    ],
    stock: 21,
    material: "پلاستیک مقاوم",
    sizeRange: "فری سایز",
    images: [glass],
  },

  // 18
  {
    id: 18,
    name: "کیف کمری",
    category: "کیف",
    price: 420000,
    image: bagKule,
    badge: "new",
    description: "کیف کمری جمع‌وجور مناسب سفر و پیاده‌روی شهری.",
    rating: 4.2,
    reviews: 41,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "سبز زیتونی", hex: "#556B2F" },
    ],
    stock: 27,
    material: "پارچه ضدآب",
    sizeRange: "یک سایز",
    images: [bagKule],
  },

  // 19
  {
    id: 19,
    name: "دستبند چرم مشکی",
    category: "دستبند",
    price: 390000,
    image: Dastband,
    description: "دستبند چرم مشکی ساده و شیک با قفل استیل.",
    rating: 4.3,
    reviews: 33,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
    ],
    stock: 32,
    material: "چرم طبیعی",
    sizeRange: "قابل تنظیم",
    images: [Dastband],
  },

  // 20
  {
    id: 20,
    name: "ساعت اسپرت",
    category: "دیجیتال",
    price: 1680000,
    image: watch,
    badge: "bestseller",
    description: "ساعت اسپرت ضدآب با کرونومتر و نور پس‌زمینه. مناسب ورزش و فعالیت روزانه.",
    rating: 4.7,
    reviews: 76,
    colors: [
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "آبی", hex: "#1E40AF" },
    ],
    stock: 17,
    material: "پلاستیک + سیلیکون",
    sizeRange: "فری سایز",
    images: [watch],
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}