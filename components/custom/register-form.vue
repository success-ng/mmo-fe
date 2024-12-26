<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { RegisterForm } from "~/composables/forms/register.form";
   const router = useRouter();
   const userService = useApiUserService();

   const registerForm = ref<RegisterForm>({
      fullname: "",
      username: "",
      email: "",
      password: "",
      role: "USER",
      status: "active",
      language: "VN",
      phone: "",
      address: "VN",
      country: "VN",
      avatar: "",
   });
   const confirmPassword = ref("");

   const OnSubmit = async (event: Event) => {
      event.preventDefault(); // Ngăn chặn làm mới trang
      // Kiểm tra các giá trị đầu vào
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

      try {
         // Gửi yêu cầu đến API

         const response = await fetch("/api/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(registerForm.value),
         });

         if (!response.ok) {
            const error = await response.json();
            alert(`Đăng ký thất bại: ${error.message}`);
            return;
         }

         // Nếu đăng ký thành công, điều hướng đến trang chính
         alert("Đăng ký thành công!");
         router.push("/");
      } catch (error) {
         console.error("Lỗi:", error);
         alert("Có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại.");
      }
   };
</script>

<template>
   <form class="space-y-4 basis-1/2" @submit="OnSubmit">
      <p class="justify-center card-title">Đăng ký</p>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:at" />
         <input
            type="text"
            class="grow"
            placeholder="Email"
            v-model="registerForm.fullname" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:user" />
         <input
            type="text"
            class="grow"
            placeholder="Username"
            v-model="registerForm.username" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:user" />
         <input
            type="text"
            class="grow"
            placeholder="Full name"
            v-model="registerForm.fullname" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:phone" />
         <input
            type="password"
            class="grow"
            placeholder="Phone number..."
            v-model="registerForm.phone" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:key" />
         <input
            type="password"
            class="grow"
            placeholder="Input your password..."
            v-model="registerForm.password" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:key" />
         <input
            type="password"
            class="grow"
            placeholder="Confirm your password..."
            v-model="confirmPassword" />
      </label>
      <div class="">
         <button type="submit" class="w-full btn btn-primary">Đăng ký</button>
         <p class="flex-none text-center">
            Bạn đã có tài khoản?
            <a href="" class="btn btn-primary btn-sm btn-ghost text-primary"
               >Đăng nhập ngay</a
            >
         </p>
      </div>
   </form>
</template>

<style scoped></style>
