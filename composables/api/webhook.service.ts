import { useCoreAxiosInstance } from "../core/axios.instance"

export const useApiWebhookService = () => {
  const axios = useCoreAxiosInstance()

  const register = async () => {
    const data = await axios.post('/webhook/register-webhook',
      {
        "webhookUrl": "http://103.167.89.227:8081/api/webhook/confirm-transaction"
      }
    )
    return data.data
  }

  return { register }
}