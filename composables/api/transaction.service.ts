import { useCoreAxiosInstance } from "../core/axios.instance"
import type { TransactionModel } from "../models/transaction.model "

export const useApiTransactionService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = '/transactions'

  const myTxs = async (params?: {}): Promise<TransactionModel[]> => {
    const query = new URLSearchParams(params).toString()
    return await axios.get(`${prefix}/my-txs${query ? `?${query}` : ''}`).then(res => {
      return res.data
    })
  }

  const txs = async (params?: {}): Promise<TransactionModel[]> => {
    const query = new URLSearchParams(params).toString()
    return await axios.get(`${prefix}` + (query ? `?${query}` : '')).then(res => {
      return res.data
    })
  }

  const credit = async (data: TransactionModel): Promise<TransactionModel> => {
    return await axios.post(`${prefix}/credit`, data).then(res => {
      return res.data
    })
  }

  const get = async (id: number): Promise<TransactionModel> => {
    const data = await axios.get(`${prefix}/${id}`)
    return data.data;
  }

  const accept = async (id: number): Promise<TransactionModel> => {
    const data = await axios.put(`${prefix}/${id}/accept`)
    return data.data
  }

  return { txs, credit, myTxs, get, accept }
}
