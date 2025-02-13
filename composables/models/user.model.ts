export type UserModel = {
  id: 0,
  username: string,
  password: string,
  fullname: string,
  email: string,
  phone: string,
  avatar: string,
  language: string,
  country: string,
  address: string,
  role: "USER" | "ADMIN",
  is_active: boolean,
  is_deleted: boolean,
  createdAt: string,
  updatedAt: string,
  balance: number,
  paid: number,
  deposited: number,
  enabled: true,
  discount: number;
  authorities: [
    {
      authority: "string"
    }
  ],
  accountNonExpired: true,
  accountNonLocked: true,
  credentialsNonExpired: true
}