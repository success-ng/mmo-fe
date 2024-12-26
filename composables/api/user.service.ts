import { useCoreAxiosInstance } from "../core/axios.instance"
import type { RegisterForm } from "../forms/register.form"
import type { UserHistoryModel } from "../models/user-history.model "

export const useApiUserService = () => {
  const axios = useCoreAxiosInstance()

  const userInfo = () => {
    return ref({
      id: 1,
      username: "john_doe",
      address: "123 Main St, Springfield, IL",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      country: "USA",
      email: "johndoe@example.com",
      fullname: "John Doe",
      is_active: 1,
      is_deleted: 0,
      language: "en",
      phone: "+1234567890",
      balance: 200,
      paid: 200,
      deposit: 200,
      createAt: "2024-12-22T12:00:00Z",
      updateAt: "2024-12-22T12:30:00Z"
    })
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
      },
      {
        id: 2,
        accountId: 102,
        amount: 120.0,
        paymentMethod: "PayPal",
        status: "Pending",
        transactionDate: "2024-12-21T10:30:00Z",
        transactionType: "Expense",
      },
      {
        id: 3,
        accountId: 103,
        amount: 75.25,
        paymentMethod: "Bank Transfer",
        status: "Failed",
        transactionDate: "2024-12-19T08:15:00Z",
        transactionType: "Expense",
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
      },
    ])
  }
  const userOrder = () => {
    return ref([
      {
        id: 1,
        price: 50.0,
        quantity: 2,
        productId: "P12345",
        status: "Completed",
        orderDate: "2024-12-20T15:45:00Z",
        userId: 101,
        totalAmount: 50.0 * 2,
      },
      {
        id: 2,
        price: 25.5,
        quantity: 1,
        productId: "P67890",
        status: "Pending",
        orderDate: "2024-12-21T10:30:00Z",
        userId: 102,
        totalAmount: 25.5 * 1,
      },
      {
        id: 3,
        price: 100.0,
        quantity: 3,
        productId: "P54321",
        status: "Failed",
        orderDate: "2024-12-19T08:15:00Z",
        userId: 103,
        totalAmount: 100.0 * 3,
      },
      {
        id: 4,
        price: 75.75,
        quantity: 4,
        productId: "P98765",
        status: "Completed",
        orderDate: "2024-12-22T14:00:00Z",
        userId: 104,
        totalAmount: 75.75 * 4,
      },
      {
        id: 5,
        price: 60.0,
        quantity: 5,
        productId: "P45678",
        status: "Completed",
        orderDate: "2024-12-22T16:20:00Z",
        userId: 105,
        totalAmount: 60.0 * 5,
      },
    ])
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

  const register = (form: RegisterForm) => {
    axios.post('/user/create', form)
  }

  return { userInfo, userTransaction, userOrder, userHistory, register }
}
