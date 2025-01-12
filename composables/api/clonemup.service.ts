import { useCoreAxiosInstance } from "../core/axios.instance"
import type { CategoryClonemupResponse } from "../models/category.clonemup.model"

export const useApiClonemupService = () => {
  const axios = useCoreAxiosInstance()
  const accountInfo = () => {
    return ref({
      "status": "success",
      "msg": "Lấy dữ liệu thành công!",
      "data": {
        "username": "kong1032002",
        "money": "0"
      }
    })
  }

  const productCategory = async (): Promise<CategoryClonemupResponse> => {
    return await axios.get('/category/clonemup').then(res => {
      return res.data
    }).catch(err => { return Promise.reject(err) })
  }

  const buyProduct = () => {
    return ref({
      "status": "success",
      "msg": "Tạo đơn hàng thành công!",
      "trans_id": "JF465f728224ce11",
      "data": [
        "1000040304952|GUTJXYIFPWLHCNDOMBRKVAQESZ",
        "1000087676467|IVMRLABECWTQYUXHPOFNJDSZGK",
        "1000073612513|ERKPFTVCAJDLINWMXSUOGBQZHY",
        "1000011975745|JXEZTVLYOFBQNRHGDKMIPUCAWS"
      ]
    })
  }

  return {
    accountInfo, buyProduct, productCategory
  }
}
