import axios, { AxiosError } from "axios";
import type { ErrorModel } from "../models/error.model";

export const useCoreAxiosInstance = () => {
  const router = useRouter();
  const toast = useToast();
  const config = useRuntimeConfig();
  const axiosInstance = axios.create({
    // baseURL: "http://localhost/api",
    baseURL: config.public.base_url || "http://localhost:8081/api",
    timeout: 10000, // Thời gian timeout
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Thêm request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // Ví dụ: Thêm token vào header Authorization
      const token = useCookie("authToken").value;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Xử lý lỗi trước khi request được gửi đi
      return Promise.reject(error);
    }
  );

  // Thêm response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // Xử lý phản hồi thành công
      // toast.success(`Request successful! Status: ${response.status}`);
      return response.data;
    },
    (error: AxiosError<ErrorModel>) => {
      // Xử lý lỗi từ phản hồi
      if (error.response?.status === 401) {
        // Ví dụ: Điều hướng đến trang đăng nhập nếu token hết hạn
        router.push("/auth");
      } else if (error.response?.status === 403) {
        router.push("/403");
      }
      else if (error.code === "ECONNABORTED" || error.message === "Network Error") {
        // Nếu lỗi kết nối mạng (server không phản hồi)
        router.push("/500");
      }
      toast.error(`${error.response?.data?.data.errors ?? error.code}`);
      // toast.error(`Request failed! Status: ${error.response?.status}`);
      return Promise.reject(error);
    }
  );

  // Trả về instance Axios
  return axiosInstance;
}
