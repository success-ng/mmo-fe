import { useCoreAxiosInstance } from "./core/axios.instance"
import type { LoginForm } from "./forms/login.form"


export const useAuthService = () => {
  const axios = useCoreAxiosInstance()
  const login = async (form: LoginForm) => {
    return await axios.post("/auth/login", form).then(res => {
      var token = useCookie("authToken")
      token.value = res.data.token;
      return res
    })
  }
  return { login }
}
