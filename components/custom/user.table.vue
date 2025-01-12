<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { UserModel } from "~/composables/models/user.model";

   const userService = useApiUserService();
   const users: Ref<UserModel[]> = ref([]);

   onMounted(() => {
      userService.getUsers().then((res) => {
         users.value = res;
      });
   });
</script>

<template>
   <div class="overflow-x-auto">
      <table class="table">
         <!-- head -->
         <thead>
            <tr>
               <th>
                  <label>
                     <input type="checkbox" class="checkbox" />
                  </label>
               </th>
               <th>Tên</th>
               <th>Liên hệ</th>
               <th>Hoạt động</th>
               <th>Vai trò</th>
               <th>Số dư / Nạp / Thanh toán</th>
               <th></th>
            </tr>
         </thead>
         <tbody>
            <!-- row 1 -->
            <tr v-for="user in users" :key="user.id">
               <th>
                  <label>
                     <input type="checkbox" class="checkbox" />
                  </label>
               </th>
               <td>
                  <div class="flex items-center gap-3">
                     <div class="avatar">
                        <div class="w-12 h-12 mask mask-squircle">
                           <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component" />
                        </div>
                     </div>
                     <div>
                        <div class="font-bold">{{ user.fullname }}</div>
                        <div class="text-sm opacity-50">
                           {{ user.username }}
                        </div>
                     </div>
                  </div>
               </td>
               <td>
                  {{ user.email }}
                  <br />
                  <span class="badge badge-ghost badge-sm">{{
                     user.phone
                  }}</span>
               </td>
               <td>
                  <input
                     disabled
                     type="checkbox"
                     class="checbox checkbox-sm"
                     v-model="user.enabled" />
               </td>
               <td>
                  {{ user.role }}
               </td>
               <td>
                  <div class="flex justify-center">
                     <span class="badge badge-ghost">
                        {{ user.balance | 0 }}
                        /
                        {{ user.paid | 0 }}
                        /
                        {{ user.deposited | 0 }}
                     </span>
                  </div>
               </td>
               <th>
                  <button class="btn btn-ghost btn-xs">details</button>
               </th>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<style scoped></style>
