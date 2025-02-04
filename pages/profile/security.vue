<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { UserModel } from "~/composables/models/user.model";

   const { $toast } = useNuxtApp();
   const userService = useApiUserService();
   const router = useRouter();
   const profile = ref<UserModel>({} as UserModel);
   const changePassword = ref({
      current_password: "",
      password: "",
      password_confirmation: "",
   });

   onMounted(() => {
      userService.profile().then((res) => {
         profile.value = res;
      });
   });

   const onChangePassword = async (event: Event) => {
      event.preventDefault();
      if (
         changePassword.value.password !==
         changePassword.value.password_confirmation
      ) {
         $toast("Mật khẩu không trùng khớp", {
            type: "error",
         });
         return;
      }
      await userService
         .changePassword({
            currentPassword: changePassword.value.current_password,
            newPassword: changePassword.value.password,
         })
         .then((res) => {
            userService.logout();

            $toast("Đổi mật khẩu thành công", {
               type: "success",
               onClose: () => {
                  router.push("/");
               },
            });
         })
         .catch((err) => {
            $toast("Đổi mật khẩu thất bại, có lỗi xảy ra!!", {
               type: "error",
            });
         });
   };
</script>

<template>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="space-y-3 card-body">
         <h1 class="card-title">Bảo mật tài khoản</h1>
         <div class="grid grid-cols-2 gap-4">
            <label class="">Xác minh đăng nhập bằng OTP</label>
            <input type="checkbox" class="toggle" />
            <label class="">Gửi thông báo khi đăng nhập thành công:</label>
            <input type="checkbox" class="toggle" />
         </div>
         <button class="btn btn-primary btn-md">Cập nhật</button>
      </div>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <h1 class="card-title">Thay đổi mật khẩu</h1>
         <form @submit.prevent="" class="grid grid-cols-3 gap-3">
            <label for="">Mật khẩu hiện tại</label>
            <label for="">Mật khẩu mới</label>
            <label for="">Nhập lại mật khẩu mới</label>
            <input
               type="password"
               name=""
               class="input input-bordered"
               v-model="changePassword.current_password" />
            <input
               type="password"
               name=""
               class="input input-bordered"
               v-model="changePassword.password" />
            <input
               type="password"
               name=""
               class="input input-bordered"
               v-model="changePassword.password_confirmation" />
         </form>
         <button class="btn btn-primary btn-md" @click="onChangePassword">
            Cập nhật
         </button>
      </div>
   </div>
</template>

<style scoped></style>
