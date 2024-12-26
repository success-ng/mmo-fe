export type RegisterForm = {
  fullname: string,
  username: string,
  email: string,
  password: string,
  role: "USER" | "ADMIN",
  status: string,
  language: string,
  phone: string,
  address: string,
  country: string,
  avatar: string,
}