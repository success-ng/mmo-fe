export type UserHistoryModel = {
  id: number;
  createAt: string; // Thời gian thực hiện hành động
  action: string; // Mô tả hành động
  ip: string; // Địa chỉ IP thực hiện hành động
};
