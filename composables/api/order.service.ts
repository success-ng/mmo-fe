import { useCoreAxiosInstance } from "../core/axios.instance"

export const useApiOrderService = () => {
  const axios = useCoreAxiosInstance()
  const index = async () => {
    const data = await axios.get('/order')
    return data.data
  }
  return { index }
}