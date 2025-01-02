<script setup lang="ts">
import { useApiOrderService } from "~/composables/api/order.service";
import type { OrderModel } from "~/composables/models/order.model ";

const orderService = useApiOrderService();
const orders = ref([] as OrderModel[]);
onMounted(() => {
   orderService.index().then((response) => {
      orders.value = response.data;
   });
});
</script>

<template>
   <table class="table">
      <!-- head -->
      <thead>
         <tr>
            <th>Id</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Trạng thái</th>
         </tr>
      </thead>
      <tbody>
         <!-- row 1 -->
         <tr v-for="order in orders">
            <td>
               <p>{{ order.id }}</p>
            </td>
            <td>
               {{ order.productId }}
            </td>
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
            <th>
               <button class="btn btn-ghost btn-xs">details</button>
            </th>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
