export type OrderModel = {
  id: number;
  price: number;
  quantity: number;
  productId: string;
  status: "Pending" | "Completed" | "Failed";
  orderDate: string;
  userId: number; // ID của người dùng
  totalAmount: number; // Tổng tiền (price * quantity)
};