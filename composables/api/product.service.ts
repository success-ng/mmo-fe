import { useCoreAxiosInstance } from "../core/axios.instance"
import type { ProductModel } from "../models/product.model"

export const useApiProductService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = "/product"
  const index = async (params?: {}) => {
    const query = new URLSearchParams(params).toString()
    const data = await axios.get(`${prefix}` + (query ? `?${query}` : ''))
    return data.data
  }

  const get = async (id: number): Promise<ProductModel> => {
    const data = await axios.get(`${prefix}/${id}`)
    return data.data
  }
  const update = async (body: ProductModel) => {
    const data = await axios.put(`${prefix}`, body)
    return data.data;
  }
  const create = async (body: ProductModel) => {
    const data = await axios.post(`${prefix}`, body)
    return data.data;
  }

  const add = async (body: { value: string, productId: number }) => {
    const data = await axios.post(`${prefix}/add`, body)
    return data.data;
  }

  const info = async (id: number) => {
    const data = await axios.get(`${prefix}/info/${id}`)
    return data.data
  }

  const del = async (id: number) => {
    const data = await axios.delete(`${prefix}/${id}`)
    return data.data
  }

  const removeVia = async (id: number) => {
    const data = await axios.delete(`${prefix}/info/${id}`)
    return data.data
  }
  return { index, get, update, add, create, info, del, removeVia }
}