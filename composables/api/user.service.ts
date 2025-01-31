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

  const userTransaction = () => {
    return ref([
      {
        id: 1,
        accountId: 101,
        amount: 250.5,
        paymentMethod: "Credit Card",
        status: "Completed",
        transactionDate: "2024-12-20T15:45:00Z",
        transactionType: "Deposit",
        orderCode: 0,
      },
      {
        id: 2,
        accountId: 102,
        amount: 120.0,
        paymentMethod: "PayPal",
        status: "Pending",
        transactionDate: "2024-12-21T10:30:00Z",
        transactionType: "Expense",
        orderCode: 0,
      },
      {
        id: 3,
        accountId: 103,
        amount: 75.25,
        paymentMethod: "Bank Transfer",
        status: "Failed",
        transactionDate: "2024-12-19T08:15:00Z",
        transactionType: "Expense",
        orderCode: 0,
      },
      {
        id: 4,
        accountId: 101,
        amount: 500.0,
        paymentMethod: "Debit Card",
        status: "Completed",
        transactionDate: "2024-12-22T14:00:00Z",
        transactionType: "Deposit",
      },
      {
        id: 5,
        accountId: 104,
        amount: 320.75,
        paymentMethod: "Cryptocurrency",
        status: "Completed",
        transactionDate: "2024-12-22T16:20:00Z",
        transactionType: "Expense",
        orderCode: 0,
      },
    ])
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

  return { profile, userTransaction, userOrder, userHistory, register, getUsers, updateProfile }
}
