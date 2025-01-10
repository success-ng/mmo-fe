<script setup lang="ts">
   definePageMeta({
      layout: "admin",
   });
   import { useApiOrderService } from "~/composables/api/order.service";
   import type { OrderModel } from "~/composables/models/order.model ";
   const orderService = useApiOrderService();

   const orders = ref([] as OrderModel[]);

   onMounted(() => {
      orderService.index().then((res) => {
         orders.value = res;
      });
   });
</script>

<template>
   <section>
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <h3 class="card-title">Đơn hàng</h3>
            <CustomOrderTable :orders="orders" />
         </div>
      </div>
   </section>
</template>

<style scoped></style>
