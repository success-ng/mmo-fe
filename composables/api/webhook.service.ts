import { useCoreAxiosInstance } from "../core/axios.instance"

export const useApiWebhookService = () => {
  const axios = useCoreAxiosInstance()
  const config = useRuntimeConfig()
  const register = async () => {
    const data = await axios.post('/webhook/register-webhook',
      {
        "webhookUrl": `${config.public.base_url}/webhook/confirm-transaction`
      }
    )
    return data
  }

  return { register }
}