import { useCoreAxiosInstance } from "../core/axios.instance"
import type { BuyModel } from "../models/buy.model"
import type { OrderModel } from "../models/order.model "

export const useApiOrderService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = '/order'
  const index = async (params?: {}) => {
    const query = new URLSearchParams(params).toString()
    const data = await axios.get(`${prefix}` + (query ? `?${query}` : ''))
    return data.data
  }
  const save = async (body: OrderModel) => {
    const data = await axios.post(`${prefix}`, body)
    return data.data;
  }

  const buy = async (body: BuyModel): Promise<OrderModel> => {
    const data = await axios.post(`${prefix}/buy`, body)
    return data.data
  }

  const myOrder = async (params?: {}) => {
    const query = new URLSearchParams(params).toString()
    const data = await axios.get(`${prefix}/user` + (query ? `?${query}` : ''))
    return data.data
  }
  return { index, save, buy, myOrder }
}