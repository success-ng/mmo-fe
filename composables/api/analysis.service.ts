import { useCoreAxiosInstance } from "../core/axios.instance"
import type { AnalysisModel } from "../models/analysis.model"

export const useApiAnalysisService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = '/analysis'

  const index = async (): Promise<AnalysisModel[]> => {
    return await axios.get(`${prefix}`).then(res => res.data)
  }

  return { index }
}
