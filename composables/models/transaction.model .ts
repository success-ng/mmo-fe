export type TransactionModel = {
  id: number,
  userId: number,
  amount: number,
  paymentMethod: string,
  status: string,
  transactionDate: string
  order: {}
}