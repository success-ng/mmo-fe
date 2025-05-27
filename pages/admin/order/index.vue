<script setup lang="ts">
   definePageMeta({
      layout: "admin",
   });
   import { useApiOrderService } from "~/composables/api/order.service";
   import type { OrderModel } from "~/composables/models/order.model ";
   import type { Column } from "~/composables/types/table.type";
   const orderService = useApiOrderService();
   const { $toast } = useNuxtApp();
   const orders = ref([] as OrderModel[]);
   const isLoading = ref(true);
   const fetch = async (params?: {}) => {
      isLoading.value = true;
      await orderService.index(params).then((res) => {
         orders.value = res;
      });
      isLoading.value = false;
   };

   const remove = async (id: number) => {
      isLoading.value = true;
      await orderService.remove(id).then((res) => {
         if (res) {
            $toast("Xóa thành công", { type: "success" });
         } else {
            $toast("Xóa thất bại", { type: "error" });
         }
      });
      isLoading.value = false;
   };
   const columns = [
      { key: "id", label: "#" },
      { key: "user", label: "Người dùng" },
      { key: "product", label: "Sản phẩm" },
      { key: "price", label: "Giá" },
      { key: "orderCode", label: "Mã đơn hàng" },
      // { key: "status", label: "Trạng thái" },
      { key: "orderDate", label: "Ngày mua" },
      { key: "via", label: "VIA" },
   ];
   const keyWords: Column[] = [
      { key: "orderCode", label: "Mã đơn hàng" },
      { key: "username", label: "Username" },
      { key: "email", label: "Email" },
      { key: "orderDate", label: "Ngày mua", type: "datetime-local" },
   ];
   const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      $toast("Đã copy via vào clipboard, CTRL+V để dán!!!", {
         type: "success",
      });
   };
</script>

<template>
   <section>
      <MaterialTable
         title="Danh sách đơn hàng"
         :data="orders.slice().reverse()"
         :fetch="fetch"
         :columns="columns"
         :remove="remove"
         :key-words="keyWords"
         :is-loading="isLoading">
         <template #user="{ row }">
            <div class="flex items-center gap-3">
               <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                     <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
               </div>
               <div>
                  <div class="font-bold">{{ row.user.email }}</div>
                  <div class="text-sm opacity-50">
                     Id: {{ row.userId }} -
                     {{ row.user.username }}
                  </div>
               </div>
            </div>
         </template>
         <template #orderCode="{ row }">
            <span class="font-bold">{{ row.orderCode }}</span>
         </template>
         <template #product="{ row }">
            <p>
               Tên:
               <span class="font-bold">{{ row.productName }}</span>
            </p>
            <p class="text-sm opacity-50">
               Mã sản phẩm:
               <span>
                  {{ row.productId }}
               </span>
            </p>
         </template>
         <template #price="{ row }">
            <p>Đơn giá: {{ row.price }} đ</p>
            <p>Số lượng: x{{ row.quantity }}</p>
            <p class="font-bold border-t-2 border-neutral">
               Thành tiền: {{ row.totalAmount }} đ
            </p>
         </template>
         <template #via="{ row }">
            <div class="tooltip" :data-tip="row.via">
               <button
                  class="btn btn-xs btn-info"
                  @click="copyToClipboard(row.via)">
                  Sao chép
               </button>
            </div>
         </template>
         <template #orderDate="{ row }">
            <span class="font-bold">{{
               new Date(row.orderDate).toLocaleString()
            }}</span>
         </template>
      </MaterialTable>
   </section>
</template>

<style scoped></style>
