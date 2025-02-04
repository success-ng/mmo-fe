import { useCoreAxiosInstance } from "../core/axios.instance"
import type { RegisterForm } from "../forms/register.form"
import type { OrderModel } from "../models/order.model "
import type { UserHistoryModel } from "../models/user-history.model "
import type { UserModel } from "../models/user.model"

export const useApiUserService = () => {
  const axios = useCoreAxiosInstance()

  const profile = async (): Promise<UserModel> => {
    const data = await axios.get('/auth/profile')
    return {
      ...data.data.userInfo,
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    };
  }

  const updateProfile = async (form: UserModel) => {
    const data = await axios.put('/auth/profile', form)
    return data.data
  }

  const changePassword = async (form: { currentPassword: string, newPassword: string }) => {
    const data = await axios.put('/auth/change-password', form)
    return data.data
  }

  const userTransaction = async () => {
    const data = await axios.get('/transaction/my-txs');
    return data.data;
  }
  const userOrder = async (): Promise<OrderModel[]> => {
    const data = await axios.get('/order/user');
    return data.data;
  }
  const userHistory = () => {
    return ref<UserHistoryModel[]>([
      {
        id: 1,
        createAt: "2024-12-22T16:20:00Z",
        action: "Create an account",
        ip: "42.113.220.25",
      },
      {
        id: 2,
        createAt: "2024-12-23T09:15:00Z",
        action: "Login",
        ip: "192.168.1.15",
      },
      {
        id: 3,
        createAt: "2024-12-23T10:05:00Z",
        action: "Update profile",
        ip: "203.113.112.45",
      },
      {
        id: 4,
        createAt: "2024-12-24T08:30:00Z",
        action: "Change password",
        ip: "202.54.1.5",
      },
      {
        id: 5,
        createAt: "2024-12-24T12:45:00Z",
        action: "Logout",
        ip: "42.113.220.25",
      },
    ]);
  }

  const getUsers = async (): Promise<UserModel[]> => {
    const data = await axios.get('/user/')
    return data.data
  }

  const register = (form: RegisterForm) => {
    axios.post('/user/create', form)
  }

  const logout = async () => {
    const token = useCookie("authToken")
    token.value = undefined
  }
  return { profile, userTransaction, userOrder, userHistory, register, getUsers, updateProfile, changePassword, logout }
}
