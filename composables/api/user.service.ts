import { useCoreAxiosInstance } from "../core/axios.instance"
import type { RegisterForm } from "../forms/register.form"
import type { UserModel } from "../models/user.model"

export const useApiUserService = () => {
  const axios = useCoreAxiosInstance()
  const prefix = '/user'
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

  const create = async (form: UserModel): Promise<UserModel> => {
    const data = await axios.post('/user/create', form);
    return data.data;
  }
  const index = async (params?: {}): Promise<UserModel[]> => {
    const query = new URLSearchParams(params).toString()
    const data = await axios.get(`${prefix}` + (query ? `?${query}` : ''))
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
  return { profile, get, register, update, index, updateProfile, changePassword, logout, create }
}
