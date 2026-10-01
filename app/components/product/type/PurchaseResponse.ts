export interface PurchaseResponse {
  id: number;
  name: string;
  image: string;
  material: string | null;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  currency: string;
  stock: number;
}