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
  price: string;
  amount: number;
  description: string;
  country: string,
  createFrom: number,
  createTo: number,
  friends: string,
}