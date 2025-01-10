import { useCoreAxiosInstance } from "../core/axios.instance"
import type { OrderModel } from "../models/order.model "
import type { TransactionModel } from "../models/transaction.model "

export const useApiOrderService = () => {
  const axios = useCoreAxiosInstance()
  const index = async () => {
    const data = await axios.get('/order/')
    return data.data
  }
  const save = async (body: OrderModel) => {
    const data = await axios.post('/order/', body)
    return data.data;
  }
  return { index, save }
}