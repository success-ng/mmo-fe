<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { UserModel } from "~/composables/models/user.model";

   const userService = useApiUserService();
   const { $toast } = useNuxtApp();
   const user: Ref<UserModel> = ref({} as UserModel);

   const router = useRouter();

   const changePassword = ref({
      current_password: "",
      password: "",
      password_confirmation: "",
   });

   onMounted(async () => {
      user.value = await userService.profile();
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
            const data = err.response?.data as {
               responseMessage: {
                  message: string;
                  status: number;
               };
            };
            alert(data.toString());
            console.log(data);
            const message =
               data.responseMessage.message ||
               "Đổi mật khẩu thất bại, có lỗi xảy ra!!";
            $toast(message, {
               type: "error",
            });
         });
   };

   const onSubmit = async (event: Event) => {
      event.preventDefault();
      userService
         .updateProfile(user.value)
         .then(() => {
            $toast("Cập nhật thành công", {
               type: "success",
            });
         })
         .catch(() => {
            $toast("Cập nhật thất bại, có lỗi xảy ra!!", {
               type: "error",
            });
         });
   };
</script>

<template>
   <div class="shadow-lg card card-compact bg-base-100">
      <figure>
         <img
            src="https://picsum.photos/seed/picsum/1920/1000"
            class="w-full h-24 overflow-hidden"
            alt="" />
      </figure>
      <div class="gap-3 md:items-center md:flex-row card-body">
         <div class="flex items-center gap-3 basis-1/2">
            <div class="avatar">
               <div class="w-24 rounded-full">
                  <img :src="user.avatar" />
               </div>
            </div>
            <div class="space-y-3">
               <h1 class="text-lg font-bold">{{ user.fullname }}</h1>
               <p class="font-bold text-base-content/50">{{ user.email }}</p>
            </div>
         </div>
         <div class="space-y-3">
            <p>
               Số dư:
               <span
                  class="gap-2 badge badge-outline badge-success text-success-content">
                  {{ user.balance }} đ
                  <Icon name="fa6-solid:coins" size="12" />
               </span>
            </p>
            <p>
               Đã thanh toán:
               <span
                  class="gap-2 badge badge-outline badge-info text-info-content">
                  {{ user.paid }} đ
                  <Icon name="fa6-solid:money-bills" size="12" />
               </span>
            </p>
            <p>
               Đã nạp:
               <span
                  class="gap-2 badge badge-outline badge-secondary text-secondary-content">
                  <Icon name="fa6-solid:money-bill-transfer" size="12" />
                  {{ user.deposited }} đ
               </span>
            </p>
         </div>
      </div>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <form class="card-body" @submit="onSubmit">
         <h1 class="card-title">Thông tin người dùng</h1>
         <div class="grid gap-3 lg:grid-cols-3">
            <label class="form-control">
               <p>Tên đăng nhập</p>
               <input
                  type="text"
                  name=""
                  id=""
                  disabled
                  class="input input-bordered"
                  v-model="user.username" />
            </label>
            <label class="form-control">
               <p>Email</p>
               <input
                  type="text"
                  name=""
                  id=""
                  class="input input-bordered"
                  v-model="user.email" />
            </label>
            <label class="form-control">
               <p>Số điện thoại</p>
               <input
                  type="tel"
                  name=""
                  id=""
                  class="input input-bordered"
                  v-model="user.phone" />
            </label>
            <label class="form-control">
               <p>Họ và tên</p>
               <input
                  type="text"
                  name=""
                  id=""
                  class="input input-bordered"
                  v-model="user.fullname" />
            </label>
            <label class="form-control">
               <p>Telegram chat id</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label>
            <label class="form-control">
               <p>Ngày đăng ký</p>
               <input
                  type="text"
                  disabled
                  class="input input-bordered"
                  v-model="user.createdAt" />
            </label>
            <!-- <label class="form-control">
               <p>Lần đăng nhập gần nhất</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label> -->
         </div>
         <button class="font-bold btn btn-primary text-primary-content">
            Lưu
         </button>
      </form>
   </div>
   <div class="drop-shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <h1 class="card-title">Thay đổi mật khẩu</h1>
         <form @submit.prevent="" class="grid grid-cols-3 gap-3">
            <label for="">Mật khẩu hiện tại</label>
            <label for="">Mật khẩu mới</label>
            <label for="">Nhập lại mật khẩu mới</label>
            <input
               type="text"
               class="input input-bordered"
               v-model="changePassword.current_password" />
            <input
               type="text"
               class="input input-bordered"
               v-model="changePassword.password" />
            <input
               type="text"
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
