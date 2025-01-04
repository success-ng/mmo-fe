<script setup lang="ts">
   import type { OrderModel } from "~/composables/models/order.model ";

   const { orders } = defineProps<{
      orders: OrderModel[];
   }>();
   const orderLst = ref([] as OrderModel[]);
   onMounted(() => {
      orderLst.value = orders;
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
         <tr v-for="order in orderLst">
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
