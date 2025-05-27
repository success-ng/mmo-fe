import { useUserStore } from "~/composables/stores/user.store"

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  if (to.path.startsWith('/admin') && userStore.getRole !== "ADMIN") {
    return navigateTo('/')
  }
})