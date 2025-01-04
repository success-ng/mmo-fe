export type TransactionModel = {
  id: number,
  userId: number,
  amount: number,
  paymentMethod: string,
  status: string,
  transactionDate: string,
  paymentLink: string
}

export type CheckoutResponseModel = {
  bin: string,
  accountNumber: string,
  accountName: string,
  amount: 0,
  description: string,
  orderCode: 0,
  currency: string,
  paymentLinkId: string,
  status: string,
  checkoutUrl: string,
  qrCode: string
}