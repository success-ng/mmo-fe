import { useUserStore } from "~/composables/stores/user.store"
import axios from 'axios';
import type { UserModel } from '~/composables/models/user.model';

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const baseURL = config.public.base_url || "http://localhost:8081/api"
  const userStore = useUserStore();
  const token = useCookie("authToken").value
  if (useCookie("authToken").value) {
    let data: UserModel = {} as UserModel;
    axios.get(`${baseURL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      data = res.data.data.userInfo
      userStore.setUser(data);
    }).catch(err => {
      userStore.$reset()
    })
  }
})
