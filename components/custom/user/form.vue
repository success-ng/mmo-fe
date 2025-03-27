<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { UserModel } from "~/composables/models/user.model";

   const { $toast } = useNuxtApp();
   const router = useRouter();
   const data = ref({} as UserModel);
   const password_confirmation = ref("");
   const userService = useApiUserService();

   const props = defineProps<{
      id?: number;
   }>();

   const fetch = () => {
      if (props.id) {
         userService
            .get(props.id)
            .then((res) => {
               data.value = res;
            })
            .catch((err) => {
               $toast(err.message, {
                  type: "error",
               });
            });
      }
   };

   const save = () => {
      if (props.id) {
         userService
            .update(data.value)
            .then((res) => {
               $toast(`Cập nhật người dùng ${res.id}`, {
                  type: "success",
                  onClose: () => {
                     router.back();
                  },
               });
            })
            .catch((err) => {
               $toast(err.message, {
                  type: "error",
               });
            });
      } else {
         userService
            .create(data.value)
            .then((res) => {
               $toast(`Tạo người dùng ${res.id}`, {
                  type: "success",
                  onClose: () => {
                     router.back();
                  },
               });
            })
            .catch((err) => {
               $toast(err.message, {
                  type: "error",
               });
            });
      }
   };

   onMounted(() => {
      fetch();
   });
</script>

<template>
   <div class="card card-compact bg-base-100">
      <div class="card-body">
         <h2 class="card-title">Người dùng</h2>
         <form @submit.prevent="save">
            <div class="grid grid-cols-2 gap-3">
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Email: </span>
                     <!-- <Icon name="fa6-solid:envelope" /> -->
                  </div>
                  <input
                     type="text"
                     class="input input-bordered"
                     placeholder="Email"
                     v-model="data.email" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> UserName: </span>
                     <!-- <Icon name="fa6-solid:envelope" /> -->
                  </div>
                  <input
                     type="text"
                     class="input input-bordered"
                     placeholder="Username"
                     v-model="data.username" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <!-- <Icon name="fa6-solid:lock" /> -->
                  <div class="label">
                     <span class="label-text"> Password: </span>
                  </div>
                  <input
                     type="password"
                     class="input input-bordered"
                     placeholder="Password"
                     v-model="data.password" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <!-- <Icon name="fa6-solid:lock" /> -->
                  <div class="label">
                     <span class="label-text">Confirm password: </span>
                  </div>
                  <input
                     type="password"
                     class="input input-bordered"
                     placeholder="Password Confirm"
                     v-model="password_confirmation" />
               </label>

               <label class="w-full max-w-xs form-control">
                  <!-- <Icon name="fa6-solid:user" /> -->
                  <div class="label">
                     <span class="label-text"> Fullname: </span>
                  </div>

                  <input
                     type="text"
                     class="input input-bordered"
                     placeholder="Name"
                     v-model="data.fullname" />
               </label>
               <!-- <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Phone: </span>
                  </div>

                  <input
                     type="text"
                     class="input input-bordered"
                     placeholder="Phone"
                     v-model="data.phone" />
               </label> -->
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Address: </span>
                  </div>
                  <input
                     type="text"
                     class="input input-bordered"
                     placeholder="Address"
                     v-model="data.address" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Role: </span>
                  </div>
                  <select class="select select-bordered" v-model="data.role">
                     <option disabled selected :value="undefined">Role</option>
                     <option value="USER">USER</option>
                     <option value="ADMIN">ADMIN</option>
                  </select>
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Status: </span>
                  </div>
                  <select class="select select-bordered" v-model="data.enabled">
                     <option disabled selected :value="undefined">
                        Status
                     </option>
                     <option :value="true">Enabled</option>
                     <option :value="false">Disabled</option>
                  </select>
               </label>

               <label class="w-full max-w-xs form-control">
                  <!-- <Icon name="fa6-solid:image" /> -->
                  <div class="label">
                     <span class="label-text"> Avatar: </span>
                  </div>
                  <input
                     type="text"
                     class="input input-bordered"
                     placeholder="Avatar"
                     v-model="data.avatar" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Kịch hoạt: </span>
                  </div>
                  <select
                     class="select select-bordered"
                     v-model="data.is_active">
                     <option disabled selected :value="undefined">
                        <Icon name="fa6-solid:check-circle" />
                        Tùy chọn kích hoạt
                     </option>
                     <option :value="true">Đã được kích hoạt</option>
                     <option :value="false">Chưa được kích hoạt</option>
                  </select>
               </label>
            </div>
            <div class="flex justify-center col-span-3 gap-3">
               <button type="submit" class="btn btn-primary">Save</button>
               <button
                  type="reset"
                  class="btn btn-error"
                  @click="router.back()">
                  Hủy
               </button>
            </div>
         </form>
      </div>
   </div>
</template>
