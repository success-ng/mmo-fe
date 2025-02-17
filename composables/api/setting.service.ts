import { useCoreAxiosInstance } from "../core/axios.instance"
import type { SettingModel } from "../models/setting.model"

export const useApiSettingService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = '/setting'

  const getByName = async (name: string): Promise<SettingModel> => {
    return await axios.get(`${prefix}/name/${name}`).then(res => res.data)
  }

  const create = async (name: SettingModel): Promise<SettingModel> => {
    return await axios.post(`${prefix}`, { name }).then(res => res.data)
  }
  const update = async (entity: SettingModel): Promise<SettingModel> => {
    return await axios.put(`${prefix}`, entity).then(res => res.data)
  }
  const index = async (): Promise<SettingModel[]> => {
    return await axios.get(`${prefix}`).then(res => res.data)
  }

  const get = async (id: number): Promise<SettingModel> => {
    return await axios.get(`${prefix}/${id}`).then(res => res.data)
  }

  return { getByName, update, index, get, create }
}
