<script setup lang="ts">
   import type { OrderModel } from "~/composables/models/order.model ";
   const { $toast } = useNuxtApp();
   const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      $toast("Đã copy via vào clipboard, CTRL+V để dán!!!", {
         type: "success",
      });
   };

   const { orders } = defineProps<{
      orders: OrderModel[];
   }>();
</script>

<template>
   <table class="table" id="order-table">
      <!-- head -->
      <thead>
         <tr>
            <th>Id</th>
            <th>User</th>
            <th>Mã sản phẩm</th>
            <th>Giá</th>
            <th>Trạng thái</th>
            <th>VIA</th>
         </tr>
      </thead>
      <tbody>
         <!-- row 1 -->
         <tr v-if="orders.length == 0">
            <td colspan="4" class="italic text-center">No record !!!!</td>
         </tr>
         <tr v-for="order in orders">
            <td>
               <p>{{ order.id }}</p>
            </td>
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
                     <div class="font-bold">{{ order.user.email }}</div>
                     <div class="text-sm opacity-50">
                        Id: {{ order.userId }} -
                        {{ order.user.username }}
                     </div>
                  </div>
               </div>
            </td>
            <td>{{ order.productId }}</td>
            <td>
               <div class="flex items-center gap-3">
                  <div class="">
                     <p>Đơn giá: {{ order.price }} đ</p>
                     <p>Số lượng: x{{ order.quantity }}</p>
                  </div>
                  <div class="">= {{ order.totalAmount }} đ</div>
               </div>
            </td>
            <td>{{ order.status }}</td>
            <td>
               <div class="tooltip" :data-tip="order.via">
                  <button
                     class="btn btn-xs"
                     @click="copyToClipboard(order.via)">
                     <Icon name="fa6-solid:ellipsis" />
                  </button>
               </div>
            </td>
            <th></th>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
