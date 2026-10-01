export type BadgeType = 'new' | 'bestseller' | 'discount';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: BadgeType;
  description?: string;
  rating?: number;
  reviews?: number;
  colors?: ProductColor[];
  stock?: number;
  material?: string;
  sizeRange?: string;
  images?: string[];
}