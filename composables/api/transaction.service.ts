import { useCoreAxiosInstance } from "../core/axios.instance"
import type { TransactionModel } from "../models/transaction.model "

export const useApiTransactionService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = '/transactions'

  const myTxs = async (): Promise<TransactionModel[]> => {
    return await axios.get(`${prefix}/my-txs`).then(res => {
      return res.data
    })
  }

  const txs = async (): Promise<TransactionModel[]> => {
    return await axios.get(`${prefix}/`).then(res => {
      return res.data
    })
  }

  const credit = async (data: TransactionModel): Promise<TransactionModel> => {
    return await axios.post(`${prefix}/credit`, data).then(res => {
      return res.data
    })
  }
  return { txs, credit, myTxs }
}
