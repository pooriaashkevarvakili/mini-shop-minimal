import type { StaticImageData } from "next/image";
import speaker from '../../public/speaker.webp'
import mack from '../../public/mack.webp'
import watch from "../../public/watch.webp";
 import daftarYadasht from '../../public/daftar.webp'
import Dastband from "../../public/dastband3.webp";
import glass from "../../public/glass.webp";
import ShowRed from "../../public/shoered.webp";
import sini from '../../public/sini.webp'
import bagKule from "../../public/bagkule.webp";
import shabmotar from '../../public/shabmotar.jpeg'
import sandal from '../../public/sandal.webp'
import kifpull from  '../../public/kifpull.webp'
import ghomegheme from '../../public/ghomgheme.webp'
import bagBlack from "../../public/bagblack.webp";
import camera from '../../public/camera.webp'
import atar from '../../public/atar.webp'
import kifdasti from '../../public/kifdasti.webp'
import goldan from '../../public/goldan.webp'
import cheragh from '../../public/cheragh.webp'
import headphone from '../../public/headphone.webp'
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
      { name: "قهوه‌ای", hex: "#8B4513" },
      { name: "مشکی", hex: "#1a1a1a" },
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
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "نقره‌ای", hex: "#C0C0C0" },
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
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "قهوه‌ای", hex: "#8B4513" },
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
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "طلایی", hex: "#D4AF37" },
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
      { name: "مشکی", hex: "#1a1a1a" },
      { name: "خاکستری", hex: "#6B7280" },
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
      { name: "قهوه‌ای", hex: "#8B4513" },
      { name: "مشکی", hex: "#1a1a1a" },
    ],
    stock: 30,
    material: "چرم طبیعی",
    sizeRange: "قابل تنظیم",
    images: [Dastband],
  },

 {
  id: 7,

  name: "ماک",

  category: "اکسسوری",

  price: 1890000,

  image: mack,

  badge: "new",

  description:
    "ماک با طراحی جذاب و کاربردی، مناسب استفاده روزمره و تکمیل استایل شما. سبک و راحت با ظاهر مدرن.",

  rating: 4.9,

  reviews: 124,

  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "آبی", hex: "#1E40AF" },
  ],

  stock: 22,

  material: "پلاستیک مقاوم",

  sizeRange: "فری سایز",

  images: [mack],
},

 
{
  id: 8,
  name: "هدفون بی‌سیم",
  category: "دیجیتال",
  price: 2450000,
  image: headphone,
  badge: "bestseller",
  description:
    "هدفون بی‌سیم با صدای باکیفیت، حذف نویز و باتری با دوام بالا.",
  rating: 4.7,
  reviews: 98,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "سفید", hex: "#f5f5f5" },
  ],
  stock: 14,
  material: "پلاستیک + فلز",
  sizeRange: "فری سایز",
  images: [headphone],
},


{
  id: 9,
  name: "چراغ دکوراتیو",
  category: "خانه",
  price: 380000,
  image: cheragh,
  badge: "new",
  description:
    "چراغ دکوراتیو مدرن با طراحی زیبا و نور ملایم، مناسب برای اتاق خواب، میز کار و دکوراسیون منزل.",
  rating: 4.5,
  reviews: 67,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "سفید", hex: "#f5f5f5" },
  ],
  stock: 35,
  material: "فلز + شیشه",
  sizeRange: "یک سایز",
  images: [cheragh],
},



{
  id: 10,
  name: "دوربین دیجیتال",
  category: "دیجیتال",
  price: 3200000,
  image: camera,
  badge: "discount",
  description:
    "دوربین دیجیتال با کیفیت تصویر بالا، طراحی جمع‌وجور و مناسب برای عکاسی روزمره و سفر.",
  rating: 4.2,
  reviews: 45,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "نقره‌ای", hex: "#C0C0C0" },
  ],
  stock: 40,
  material: "آلیاژ فلز + پلاستیک",
  sizeRange: "یک سایز",
  images: [camera],
},


 
{
  id: 11,
  name: "گلدان",
  category: "خانه",
  price: 890000,
  image: goldan,
  badge: "new",
  description:
    "Goldan با طراحی مدرن و کاربردی، مناسب برای دکوراسیون منزل و ایجاد فضای زیبا و دلنشین.",
  rating: 4.6,
  reviews: 73,
  colors: [
    { name: "طلایی", hex: "#D4AF37" },
    { name: "مشکی", hex: "#1a1a1a" },
  ],
  stock: 16,
  material: "فلز",
  sizeRange: "یک سایز",
  images: [goldan],
},



{
  id: 12,
  name: "کیف دستی زنانه",
  category: "کیف",
  price: 1120000,
  image: kifdasti,
  badge: "bestseller",
  description:
    "کیف دستی شیک و جادار با طراحی مدرن، مناسب استفاده روزمره، مهمانی و استایل‌های رسمی.",
  rating: 4.4,
  reviews: 51,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "قهوه‌ای", hex: "#8B4513" },
  ],
  stock: 19,
  material: "چرم مصنوعی باکیفیت",
  sizeRange: "یک سایز",
  images: [kifdasti],
},


{
  id: 13,
  name: "اسپیکر بلوتوثی",
  category: "دیجیتال",
  price: 980000,
  image: speaker,
  badge: "bestseller",
  description:
    "اسپیکر بلوتوثی با صدای شفاف و قدرتمند، طراحی قابل حمل و باتری بادوام؛ مناسب خانه، سفر و استفاده روزمره.",
  rating: 4.8,
  reviews: 112,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "کرم", hex: "#F5F5DC" },
  ],
  stock: 11,
  material: "پلاستیک مقاوم + فلز",
  sizeRange: "یک سایز",
  images: [speaker],
},


{
  id: 14,
  name: "عطر زنانه",
  category: "اکسسوری",
  price: 520000,
  image: atar,
  badge: "new",
  description:
    "عطر زنانه با رایحه‌ای دلنشین و ماندگار، مناسب استفاده روزمره و مهمانی با طراحی شیک و جذاب.",
  rating: 4.5,
  reviews: 38,
  colors: [
    { name: "طلایی", hex: "#D4AF37" },
    { name: "شفاف", hex: "#F5F5F5" },
  ],
  stock: 28,
  material: "شیشه + مایع عطر",
  sizeRange: "یک سایز",
  images: [atar],
},



{
  id: 15,
  name: "صندل زنانه",
  category: "کفش",
  price: 1350000,
  image: sandal,
  badge: "new",
  description:
    "صندل زنانه شیک و راحت با طراحی مدرن، مناسب استفاده روزمره و استایل تابستانی.",
  rating: 4.6,
  reviews: 64,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "قهوه‌ای", hex: "#8B4513" },
  ],
  stock: 13,
  material: "چرم مصنوعی + زیره لاستیکی",
  sizeRange: "۳۶ تا ۴۱",
  images: [sandal],
},


{
  id: 16,
  name: "سینی دکوراتیو",
  category: "خانه",
  price: 780000,
  image: sini,
  badge: "discount",
  description:
    "سینی دکوراتیو شیک و کاربردی با طراحی مدرن، مناسب پذیرایی، سرو نوشیدنی و استفاده برای چیدمان دکور منزل.",
  rating: 4.3,
  reviews: 87,
  colors: [
    { name: "سفید", hex: "#FFFFFF" },
    { name: "خاکستری", hex: "#9CA3AF" },
  ],
  stock: 24,
  material: "چوب + روکش مقاوم",
  sizeRange: "یک سایز",
  images: [sini],
},


{
  id: 17,
  name: "کیف پول چرمی",
  category: "اکسسوری",
  price: 650000,
  image: kifpull,
  badge: "new",
  description:
    "کیف پول شیک و جمع‌وجور با فضای کافی برای کارت‌ها و اسکناس، مناسب استفاده روزمره با طراحی ساده و مدرن.",
  rating: 4.4,
  reviews: 29,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "قهوه‌ای", hex: "#8B4513" },
  ],
  stock: 21,
  material: "چرم مصنوعی باکیفیت",
  sizeRange: "یک سایز",
  images: [kifpull],
},


{
  id: 18,
  name: "قمقمه آب",
  category: "خانه",
  price: 420000,
  image: ghomegheme,
  badge: "new",
  description:
    "قمقمه آب سبک و مقاوم با طراحی کاربردی، مناسب ورزش، سفر، پیاده‌روی و استفاده روزمره.",
  rating: 4.2,
  reviews: 41,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "سبز زیتونی", hex: "#556B2F" },
  ],
  stock: 27,
  material: "استیل ضدزنگ",
  sizeRange: "۷۵۰ میلی‌لیتر",
  images: [ghomegheme],
},


{
  id: 19,
  name: "شمع معطر",
  category: "خانه",
  price: 390000,
  image: shabmotar,
  badge: "new",
  description:
    "شمع معطر با رایحه‌ای دلنشین و ماندگار، مناسب دکوراسیون منزل، اتاق خواب و ایجاد فضایی آرام و دلپذیر.",
  rating: 4.3,
  reviews: 33,
  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "کرم", hex: "#F5F5DC" },
  ],
  stock: 32,
  material: "موم طبیعی + اسانس معطر",
  sizeRange: "یک سایز",
  images: [shabmotar],
},


 {
  id: 20,

  name: "دفتر یادداشت",

  category: "نوشت‌افزار",

  price: 1680000,

  image: daftarYadasht,

  badge: "bestseller",

  description:
    "دفتر یادداشت با طراحی کاربردی و جلد مقاوم، مناسب برای یادداشت‌برداری روزانه، مدرسه، دانشگاه و محل کار.",

  rating: 4.7,

  reviews: 76,

  colors: [
    { name: "مشکی", hex: "#1a1a1a" },
    { name: "آبی", hex: "#1E40AF" },
  ],

  stock: 17,

  material: "کاغذ باکیفیت + جلد مقاوم",

  sizeRange: "A5",

  images: [daftarYadasht],
 }
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}