import type { UserModel } from "./user.model";

export type OrderModel = {
  id: number;
  price: number;
  quantity: number;
  productId: number;
  status: string;
  orderDate: string;
  user: UserModel;
  via: string;
  userId: number; // ID của người dùng
  totalAmount: number; // Tổng tiền (price * quantity)
};