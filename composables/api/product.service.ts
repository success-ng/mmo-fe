import { useCoreAxiosInstance } from "../core/axios.instance"
import type { ProductModel } from "../models/product.model"

export const useApiProductService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = "/product"
  const index = async () => {
    const data = await axios.get(`${prefix}/`)
    return data.data
  }

  const get = async (id: number): Promise<ProductModel> => {
    const data = await axios.get(`${prefix}/${id}`)
    return data.data
  }
  const update = async (body: ProductModel) => {
    const data = await axios.put(`${prefix}/`, body)
    return data.data;
  }
  const create = async (body: ProductModel) => {
    const data = await axios.post(`${prefix}/`, body)
    return data.data;
  }

  const add = async (body: { value: string, productId: number }) => {
    const data = await axios.post(`${prefix}/add`, body)
    return data.data;
  }

  return { index, get, update, add, create }
}