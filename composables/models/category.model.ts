import type { ProductModel } from "./product.model"

export type CategoryModel = {
  id: number,
  name: string,
  description: string,
  products: ProductModel[]
}