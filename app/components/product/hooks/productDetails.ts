import {PurchaseResponse} from '../type/PurchaseResponse'
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3001";



export async function getPurchaseDetails(
  id: number,
  quantity: number,
): Promise<PurchaseResponse> {
  const response = await fetch(
    `${API_URL}/shop/products/${id}/purchase?quantity=${quantity}`,
  );

  if (!response.ok) {
    throw new Error(
      `خطا در دریافت اطلاعات خرید: ${response.status}`,
    );
  }

  return response.json();
}