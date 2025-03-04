import { useCoreAxiosInstance } from "../core/axios.instance"
import type { CategoryModel } from "../models/category.model"

export const useApiCategoryService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = "/category"
  const index = async (params?: {}) => {
    const query = new URLSearchParams(params).toString()
    return await axios.get(`${prefix}` + (query ? `?${query}` : '')).then(res => res.data)
  }

  const create = async (model: CategoryModel) => {
    return await axios.post('/category', model).then(res => res.data)
  }

  const update = async (model: CategoryModel) => {
    return await axios.put(`/category`, model).then(res => res.data)
  }

  const get = async (id: number): Promise<CategoryModel> => {
    return await axios.get(`/category/${id}`).then(res => {
      return res.data
    })
  }

  const remove = async (id: number): Promise<CategoryModel> => {
    return await axios.delete(`/category/${id}`).then(res => res.data)
  }

  return { index, create, get, update, remove }
}
