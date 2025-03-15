<script setup lang="ts">
   import { useApiOrderService } from "~/composables/api/order.service";
   import { useApiUserService } from "~/composables/api/user.service";
   import type { OrderModel } from "~/composables/models/order.model ";
   import type { Column } from "~/composables/types/table.type";
   const { $toast } = useNuxtApp();
   const orderService = useApiOrderService();
   const orders = ref<OrderModel[]>([] as OrderModel[]);
   const isLoading = ref(true);

   const columns = [
      { key: "id", label: "#" },
      { key: "user", label: "Người dùng" },
      { key: "product", label: "Sản phẩm" },
      { key: "price", label: "Giá" },
      { key: "orderCode", label: "Mã đơn hàng" },
      { key: "orderDate", label: "Ngày mua" },
      // { key: "status", label: "Trạng thái" },
      { key: "via", label: "VIA" },
   ];
   const keyWords: Column[] = [
      { key: "orderCode", label: "Mã đơn hàng" },
      { key: "orderDate", label: "Ngày mua", type: "datetime-local" },
   ];
   const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      $toast("Đã copy via vào clipboard, CTRL+V để dán!!!", {
         type: "success",
      });
   };

   const fetch = async (params?: {}) => {
      isLoading.value = true;
      orderService.index(params).then((res) => {
         orders.value = res;
         isLoading.value = false;
      });
   };
</script>
<template>
   <section class="space-y-6">
      <MaterialTable
         title="Danh sách đơn hàng"
         :data="orders.slice().reverse()"
         :fetch="fetch"
         :columns="columns"
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
               Tên sản phẩm:
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
            <div class="flex flex-col items-center gap-3">
               <p>Đơn giá: {{ row.price }} đ x{{ row.quantity }}</p>
               <div class="font-bold">Thành tiền: {{ row.totalAmount }} đ</div>
            </div>
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
