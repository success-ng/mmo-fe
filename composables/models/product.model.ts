export type OtherProductModel = {
  id: string;
  name: string;
  price: string;
  amount: number;
  description: string;
  flag: string;
  min: string;
  max: string;
}

export type ProductModel = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  country: string;
  categoryId: number;
  createdAt: string;
}

export type ProductModifiedModel = {
  id: string;
  name: string;
  price: number;
  amount: number;
  description: string;
  country: string;
  categoryId: number;
  created_at: string;
  stock: number;
}