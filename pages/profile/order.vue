<script setup lang="ts">
   import { useApiOrderService } from "~/composables/api/order.service";
   import { useApiUserService } from "~/composables/api/user.service";
   import type { OrderModel } from "~/composables/models/order.model ";
   import type { Column } from "~/composables/types/table.type";
   const { $toast } = useNuxtApp();
   const userService = useApiUserService();
   const orderService = useApiOrderService();
   const orders = ref<OrderModel[]>([] as OrderModel[]);
   const isLoadingOrders = ref(true);

   const columns = [
      { key: "id", label: "#" },
      { key: "user", label: "Người dùng" },
      { key: "product", label: "Sản phẩm" },
      { key: "price", label: "Giá" },
      { key: "orderCode", label: "Má đơn hàng" },
      // { key: "status", label: "Trạng thái" },
      { key: "via", label: "VIA" },
   ];
   const keyWords: Column[] = [
      { key: "orderCode", label: "Mã giao dịch" },
      { key: "orderDate", label: "Ngày mua", type: "date" },
   ];
   const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      $toast("Đã copy via vào clipboard, CTRL+V để dán!!!", {
         type: "success",
      });
   };

   const fetch = async (params?: {}) => {
      isLoadingOrders.value = true;
      orderService.myOrder(params).then((res) => {
         isLoadingOrders.value = false;
         orders.value = res;
      });
   };
</script>
<template>
   <section class="space-y-6">
      <MaterialTable
         :data="orders"
         :key-words="keyWords"
         :fetch="fetch"
         title="Danh sách đơn hàng"
         :columns="columns"
         :is-loading="isLoadingOrders">
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
            <span class="font-bold badge badge-ghost">{{ row.orderCode }}</span>
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
            <div class="flex items-center gap-3">
               <div class="">
                  <p>Đơn giá: {{ row.price }} đ</p>
                  <p>Số lượng: x{{ row.quantity }}</p>
               </div>
               <div class="font-bold">= {{ row.totalAmount }} đ</div>
            </div>
         </template>
         <template #via="{ row }">
            <div class="tooltip" :data-tip="row.via">
               <button class="btn btn-xs" @click="copyToClipboard(row.via)">
                  Sao chép
               </button>
            </div>
         </template>
      </MaterialTable>
   </section>
</template>
