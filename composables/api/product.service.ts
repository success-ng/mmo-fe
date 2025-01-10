import { useCoreAxiosInstance } from "../core/axios.instance"
import type { OrderModel } from "../models/order.model "
import type { ProductModel } from "../models/product.model"
import type { TransactionModel } from "../models/transaction.model "

export const useApiProductService = () => {
  const axios = useCoreAxiosInstance()
  const index = async () => {
    const data = await axios.get('/product/')
    return data.data
  }
  const save = async (body: ProductModel) => {
    const data = await axios.post('/product/', body)
    return data.data;
  }
  return { index, save }
}