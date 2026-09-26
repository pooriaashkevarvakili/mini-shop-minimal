import { StaticImageData } from "next/image";

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string |StaticImageData;
  date: string;
  category: string;
  content: string; // متن کامل خبر
}