<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { UserModel } from "~/composables/models/user.model";

   const { $toast } = useNuxtApp();
   const router = useRouter();
   const data = ref({} as UserModel);
   const password_confirmation = ref("");
   const userService = useApiUserService();

   const save = (event: Event) => {
      event.preventDefault();
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
   };

   const cancel = () => {
      router.back();
   };
</script>

<template>
   <form @submit="save">
      <div class="grid grid-cols-3 gap-3">
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:envelope" />
            <input
               type="text"
               class="grow"
               placeholder="Email"
               v-model="data.email" />
         </label>
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:user" />
            <input
               type="text"
               class="grow"
               placeholder="Username"
               v-model="data.username" />
         </label>
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:lock" />
            <input
               type="password"
               class="grow"
               placeholder="Password"
               v-model="data.password" />
         </label>
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:lock" />
            <input
               type="password"
               class="grow"
               placeholder="Password Confirm"
               v-model="password_confirmation" />
         </label>

         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:user" />
            <input
               type="text"
               class="grow"
               placeholder="Name"
               v-model="data.fullname" />
         </label>
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:phone" />
            <input
               type="text"
               class="grow"
               placeholder="Phone"
               v-model="data.phone" />
         </label>
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:map-marker-alt" />
            <input
               type="text"
               class="grow"
               placeholder="Address"
               v-model="data.address" />
         </label>
         <label class="w-full form-control">
            <select class="select select-bordered" v-model="data.role">
               <option disabled selected :value="undefined">
                  <Icon name="fa6-solid:user-tag" />
                  Role
               </option>
               <option value="USER">USER</option>
               <option value="ADMIN">ADMIN</option>
            </select>
         </label>
         <label class="w-full form-control">
            <select class="select select-bordered" v-model="data.enabled">
               <option disabled selected :value="undefined">
                  <Icon name="fa6-solid:toggle-on" />
                  Status
               </option>
               <option :value="true">Enabled</option>
               <option :value="false">Disabled</option>
            </select>
         </label>

         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:image" />
            <input
               type="text"
               class="grow"
               placeholder="Avatar"
               v-model="data.avatar" />
         </label>
         <label class="w-full form-control">
            <select class="select select-bordered" v-model="data.is_active">
               <option disabled selected :value="undefined">
                  <Icon name="fa6-solid:check-circle" />
                  Đã được kích hoạt
               </option>
               <option :value="true">Active</option>
               <option :value="false">Inactive</option>
            </select>
         </label>
      </div>
      <div class="flex justify-center col-span-3 gap-3">
         <button type="submit" class="btn btn-primary">Save</button>
         <button type="reset" class="btn btn-error" @click="cancel">Hủy</button>
      </div>
   </form>
</template>
