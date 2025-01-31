import { useCoreAxiosInstance } from "../core/axios.instance"
import type { CategoryModel } from "../models/category.model"

export const useApiCategoryService = () => {
  const axios = useCoreAxiosInstance()

  const index = async () => {
    return await axios.get('/category').then(res => res.data)
  }

  const save = async (model: CategoryModel) => {
    return await axios.post('/category', model).then(res => res.data)
  }

  const get = async (id: number): Promise<CategoryModel> => {
    return await axios.get(`/category/${id}`).then(res => {
      return res.data
    })
  }
  return { index, save, get }
}
