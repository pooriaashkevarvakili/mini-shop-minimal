import { NewsItem } from "./types";

export const newsData: NewsItem[] = [
  {
    id: 1,
    slug: "posht-sahne-entekhab-mahsul",
    title: "پشت صحنه انتخاب یک محصول برای فروشگاه",
    description:
      "از میان صدها گزینه، چه محصولی به کالکشن مینیمال شاپ راه پیدا می‌کند؟",
    image: "https://picsum.photos/id/1015/800/500",
    date: "۲ خرداد ۱۴۰۴",
    category: "پشت صحنه",
    content: `
      انتخاب محصول برای فروشگاه مینیمال شاپ فرآیند دقیقی دارد.
      ما ابتدا نیازهای مشتریان را بررسی می‌کنیم، سپس کیفیت مواد اولیه،
      طراحی و ماندگاری محصول را ارزیابی می‌کنیم.
      در نهایت فقط محصولاتی که با استانداردهای ما همخوانی دارند
      به کالکشن اضافه می‌شوند.
    `,
  },
  {
    id: 2,
    slug: "chetor-az-mahsulat-charmi-moraghebat-konim",
    title: "چطور از محصولات چرمی مراقبت کنیم؟",
    description:
      "چند عادت ساده برای اینکه کیف، کفش و اکسسوری چرمی شما سال‌ها زیبا و سالم بماند.",
    image: "https://picsum.photos/id/1016/800/500",
    date: "۱۰ خرداد ۱۴۰۴",
    category: "راهنمای نگهداری",
    content: `
      محصولات چرمی اگر به درستی نگهداری شوند، سال‌ها عمر می‌کنند.
      نکات مهم:
      • از قرار دادن در معرض نور مستقیم خورشید خودداری کنید
      • با پارچه نرم و خشک تمیز کنید
      • از کرم و واکس مخصوص چرم استفاده کنید
      • در جای خشک و خنک نگهداری کنید
    `,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find((item) => item.slug === slug);
}

export function getAllNews(): NewsItem[] {
  return newsData;
}