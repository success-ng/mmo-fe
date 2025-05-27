export type ErrorModel = {
  data: ErrorModelData,
  responseMessage: ErrorResponseMessage,
  offset: number,
  limit: number,
  quantity: number,
}

export type ErrorResponseMessage = {
  status: number,
  message: string,
}

export type ErrorModelData = {
  timestamp: string,
  type: string,
  errorCode: number,
  errors: string[],
  path: string

}