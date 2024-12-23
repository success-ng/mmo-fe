export type TransactionModel = {
  id: number,
  accountId: number,
  amount: number,
  paymentMethod: string,
  status: string,
  transactionDate: string
}