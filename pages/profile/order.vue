<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { OrderModel } from "~/composables/models/order.model ";
   const { $toast } = useNuxtApp();
   const userService = useApiUserService();

   const orders = ref<OrderModel[]>([] as OrderModel[]);
   const isLoadingOrders = ref(true);

   const columnsOrders = [
      { key: "id", label: "#" },
      { key: "user", label: "Người dùng" },
      { key: "productId", label: "Mã sản phẩm" },
      { key: "price", label: "Giá" },
      { key: "status", label: "Trạng thái" },
      { key: "via", label: "VIA" },
   ];
   const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      $toast("Đã copy via vào clipboard, CTRL+V để dán!!!", {
         type: "success",
      });
   };

   const fetchOrders = async () => {
      isLoadingOrders.value = true;
      userService.userOrder().then((res) => {
         isLoadingOrders.value = false;
         orders.value = res;
      });
   };
</script>
<template>
   <section class="space-y-6">
      <MaterialTable
         :data="orders"
         :fetch="fetchOrders"
         title="Danh sách đơn hàng"
         :columns="columnsOrders"
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
         <template #productId="{ row }">
            <span class="font-bold">
               {{ row.productId }}
            </span>
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
                  <Icon name="fa6-solid:ellipsis" />
               </button>
            </div>
         </template>
      </MaterialTable>
   </section>
</template>
