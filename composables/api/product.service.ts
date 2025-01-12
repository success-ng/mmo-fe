import { useCoreAxiosInstance } from "../core/axios.instance"
import type { OrderModel } from "../models/order.model "
import type { ProductModel } from "../models/product.model"
import type { TransactionModel } from "../models/transaction.model "

export const useApiProductService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = "/product"
  const index = async () => {
    const data = await axios.get(`${prefix}/`)
    return data.data
  }
  const save = async (body: ProductModel) => {
    const data = await axios.post(`${prefix}/`, body)
    return data.data;
  }

  const add = async (body: { value: string, productId: number }) => {
    const data = await axios.post(`${prefix}/add`, body)
    return data.data;
  }

  return { index, save, add }
}