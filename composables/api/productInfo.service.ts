import { useCoreAxiosInstance } from "../core/axios.instance"

export const useApiProductInfoService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = "/product-info"
  const remove = async (id: number) => {
    const data = await axios.delete(`${prefix}/${id}`)
    return data.data
  }
  return { remove }
}