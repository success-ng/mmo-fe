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

  const create = async (form: UserModel): Promise<UserModel> => {
    const data = await axios.post('/user/create', form);
    return data.data;
  }
  const getUsers = async (): Promise<UserModel[]> => {
    const data = await axios.get('/user/')
    return data.data
  }

  const register = async (form: RegisterForm): Promise<UserModel> => {
    const data = await axios.post('/user/create', form)
    return data.data;
  }

  const get = async (id: number) => {
    const data = await axios.get(`/user/${id}`)
    return data.data
  }

  const update = async (form: UserModel) => {
    const data = await axios.put(`/user`, form)
    return data.data
  }

  const logout = async () => {
    const token = useCookie("authToken")
    token.value = undefined
  }
  return { profile, userTransaction, userOrder, get, register, update, getUsers, updateProfile, changePassword, logout, create }
}
