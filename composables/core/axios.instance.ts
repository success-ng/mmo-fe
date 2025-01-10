import axios from "axios";
import { toast } from "vue3-toastify";

export const useCoreAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL || "http://localhost:8081/api", // Đổi URL theo dự án của bạn
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
    (error) => {
      // Xử lý lỗi từ phản hồi
      if (error.response?.status === 401 || error.response?.status === 403) {
        // Ví dụ: Điều hướng đến trang đăng nhập nếu token hết hạn
        const router = useRouter();
        router.push("/auth");
      }
      // toast.error(`Request failed! Status: ${error.response?.status}`);
      return Promise.reject(error);
    }
  );

  // Trả về instance Axios
  return axiosInstance;
}
