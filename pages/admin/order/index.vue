<script setup lang="ts">
   definePageMeta({
      layout: "admin",
   });
   import { useApiOrderService } from "~/composables/api/order.service";
   import type { OrderModel } from "~/composables/models/order.model ";
   const orderService = useApiOrderService();
   const { $toast } = useNuxtApp();
   const orders = ref([] as OrderModel[]);
   const isLoading = ref(true);
   const fetch = async () => {
      isLoading.value = true;
      orderService.index().then((res) => {
         orders.value = res;
         isLoading.value = false;
      });
   };
   const columns = [
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
</script>

<template>
   <section>
      <MaterialTable
         :data="orders"
         :fetch="fetch"
         title="Danh sách đơn hàng"
         :columns="columns"
         :is-loading="isLoading">
         <template #id="{ row }">
            <span class="font-bold">
               {{ row.id }}
            </span>
         </template>
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

<style scoped></style>
