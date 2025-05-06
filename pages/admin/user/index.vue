<script setup lang="ts">
   import type { UserModel } from "~/composables/models/user.model";
   import { useApiUserService } from "~/composables/api/user.service";
   import type { Column } from "~/composables/types/table.type";

   definePageMeta({
      layout: "admin",
   });
   const userService = useApiUserService();
   const router = useRouter();
   const users: Ref<UserModel[]> = ref<UserModel[]>([]);
   const isLoading = ref(true);
   const fetch = async (params?: {}) => {
      isLoading.value = true;
      await userService.index(params).then((res) => {
         users.value = res;
      });
      isLoading.value = false;
   };

   const show = async (id: number) => {
      router.push(`/admin/user/${id}`);
   };

   const create = async () => {
      router.push("/admin/user/create");
   };

   const keyWords: Column[] = [
      { key: "email", label: "Email" },
      { key: "username", label: "Username" },
      {
         key: "role",
         label: "Vai trò",
         type: "select",
         options: [
            { label: "Quản trị viên", value: "ADMIN" },
            { label: "Người dùng", value: "USER" },
         ],
      },
   ];

   const columns = [
      { key: "id", label: "#" },
      { key: "name", label: "Tên" },
      { key: "contact", label: "Liên hệ" },
      { key: "active", label: "Hoạt động" },
      { key: "role", label: "Vai trò" },
      { key: "amount", label: "Số dư/Nạp/Thanh toán" },
      { key: "discount", label: "Giảm giá" },
   ];
</script>

<template>
   <section class="space-y-6">
      <MaterialTable
         title="Danh sách người dùng"
         :is-loading="isLoading"
         :data="users.slice().reverse()"
         :key-words="keyWords"
         :columns="columns"
         :fetch="fetch">
         <template #name="{ row }">
            <div class="flex items-center gap-3">
               <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                     <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
               </div>
               <div>
                  <div class="font-bold">{{ row.fullname }}</div>
                  <div class="text-sm opacity-50">
                     {{ row.username }}
                  </div>
               </div>
            </div>
         </template>
         <template #contact="{ row }">
            <p>
               Email:
               <span class="font-bold">
                  {{ row.email }}
               </span>
            </p>
            <!-- <p>
               Phone:
               <span class="font-bold">
                  {{ row.phone }}
               </span>
            </p> -->
         </template>
         <template #active="{ row }">
            <div
               class="space-x-1 badge badge-outline badge-md"
               :class="[row.enabled ? `badge-success` : `badge-error`]">
               <Icon
                  name="fa6-solid:circle"
                  :class="[row.enabled ? `text-success` : `text-error`]"
                  size="10" />
               <span>
                  {{ row.enabled ? "Active" : "Inactive" }}
               </span>
            </div>
         </template>
         <template #amount="{ row }">
            <span class="badge badge-ghost">
               {{ Number(row.balance | 0).toLocaleString() }} đ /
               {{ Number(row.deposited | 0).toLocaleString() }} đ /
               {{ Number(row.paid | 0).toLocaleString() }} đ
            </span>
         </template>
         <template #discount="{ row }">
            <span class="badge badge-ghost"> {{ row.discount | 0 }} % </span>
         </template>
      </MaterialTable>
   </section>
</template>

<style scoped></style>
