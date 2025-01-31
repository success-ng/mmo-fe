import { useCoreAxiosInstance } from "../core/axios.instance"
import type { BuyModel } from "../models/buy.model"
import type { OrderModel } from "../models/order.model "
import type { TransactionModel } from "../models/transaction.model "

export const useApiOrderService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = '/order'
  const index = async () => {
    const data = await axios.get(`${prefix}/`)
    return data.data
  }
  const save = async (body: OrderModel) => {
    const data = await axios.post(`${prefix}/`, body)
    return data.data;
  }

  const buy = async (body: BuyModel) => {
    const data = await axios.post(`${prefix}/buy`, body)
    return data.data
  }
  return { index, save, buy }
}