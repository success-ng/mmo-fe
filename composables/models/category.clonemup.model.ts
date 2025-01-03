import { Icon } from './../../.nuxt/components.d';
export type CategoryClonemupResponse = {
  status: string;
  msg: string;
  categories: CategoryClonemup[];
}

export type CategoryClonemup = {
  id: string;
  name: string;
  icon: string;
  products: ProductClonemup[];
}

export type ProductClonemup = {
  id: string;
  name: string;
  price: string;
  amount: number;
  description: string;
  flag: string;
  min: string;
  max: string;
}
