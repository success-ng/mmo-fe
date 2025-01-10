<script setup lang="ts">
import { useApiUserService } from "~/composables/api/user.service";
import { useCoreAxiosInstance } from "~/composables/core/axios.instance";
import type { RegisterForm } from "~/composables/forms/register.form";
const router = useRouter();
const userService = useApiUserService();

const registerForm = ref<RegisterForm>({
   username: "",
   fullname: "",
   email: "",
   password: "",
   rewritePassword: "",
   phone: ""
});
const confirmPassword = ref("");
const axios = useCoreAxiosInstance();
const OnSubmit = async (event: Event) => {
   event.preventDefault(); // Ngăn chặn làm mới trang
   // Kiểm tra các giá trị đầu vào
   registerForm.value.rewritePassword = confirmPassword.value;
   if (registerForm.value.password !== confirmPassword.value) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
   }
   if (
      !registerForm.value.email ||
      !registerForm.value.username ||
      !registerForm.value.password
   ) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
   }
   axios.post("/auth/register", registerForm.value).then((response) => {
      console.log(response.data);
      alert("Đăng ký thành công!");
      router.push("/");
   }).catch(error => {
      console.error("Lỗi:", error);
      alert("Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại.");
   })
};
</script>

<template>
   <form class="space-y-4 basis-1/2" @submit="OnSubmit">
      <p class="justify-center card-title">Đăng ký</p>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:at" />
         <input type="text" class="grow" placeholder="Email" v-model="registerForm.email" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:user" />
         <input type="text" class="grow" placeholder="Username" v-model="registerForm.username" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:user" />
         <input type="text" class="grow" placeholder="Full name" v-model="registerForm.fullname" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:phone" />
         <input type="text" class="grow" placeholder="Phone number..." v-model="registerForm.phone" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:key" />
         <input type="password" class="grow" placeholder="Input your password..." v-model="registerForm.password" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:key" />
         <input type="password" class="grow" placeholder="Confirm your password..." v-model="confirmPassword" />
      </label>
      <div class="">
         <button type="submit" class="w-full btn btn-primary">Đăng ký</button>
         <p class="flex-none text-center">
            Bạn đã có tài khoản?
            <a href="" class="btn btn-primary btn-sm btn-ghost text-primary">Đăng nhập ngay</a>
         </p>
      </div>
   </form>
</template>

<style scoped></style>
