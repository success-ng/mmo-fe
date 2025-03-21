// composables/stores/user.ts
import type { UserModel } from './../models/user.model'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as UserModel | null
  }),

  actions: {
    setUser(userData: UserModel) {
      this.user = userData
    },

    clearUser() {
      this.user = null
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
    getRole: (state) => state.user?.role,
    getUserName: (state) => state.user?.username || 'Guest',
    getBalance: (state) => state.user?.balance,
  },
})
