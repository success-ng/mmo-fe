import { useCoreAxiosInstance } from "../core/axios.instance"
import type { TransactionModel } from "../models/transaction.model "

export const useApiTransactionService = () => {
  const axios = useCoreAxiosInstance()

  const txs = async (): Promise<TransactionModel[]> => {
    return await axios.get('/transactions').then(res => {
      return res.data
    })
  }

  const cashIn = async (data: TransactionModel): Promise<TransactionModel> => {
    return await axios.post('/transaction/save', data).then(res => {
      return res.data
    })
  }
  return { txs, cashIn }
}
