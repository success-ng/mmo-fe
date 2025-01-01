export type UserModel = {
  id: 0,
  username: "string",
  password: "string",
  fullname: "string",
  email: "string",
  phone: "string",
  avatar: "string",
  language: "string",
  country: "string",
  address: "string",
  role: "USER",
  is_active: true,
  is_deleted: true,
  createdAt: "2025-01-01T10:49:43.784Z",
  updatedAt: "2025-01-01T10:49:43.784Z",
  balance: 0,
  paid: 0,
  deposited: 0,
  enabled: true,
  authorities: [
    {
      authority: "string"
    }
  ],
  accountNonExpired: true,
  accountNonLocked: true,
  credentialsNonExpired: true
}