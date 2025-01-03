import { useCoreAxiosInstance } from "./core/axios.instance"
import type { LoginForm } from "./forms/login.form"


export const useAuthService = () => {
  const axios = useCoreAxiosInstance()
  const { $toast } = useNuxtApp();
  const login = async (form: LoginForm) => {
    return await axios.post("/auth/login", form).then(res => {
      var token = useCookie("authToken")
      token.value = res.data.token;
      $toast({
        title: "Login successful",
        body: "You are now logged in",
        type: "success",
      });
      return res
    }).catch(err => {
      $toast("Login failed", {
        type: "error",
      });
      return Promise.reject(err)
    })
  }
  return { login }
}
