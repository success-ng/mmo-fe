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
   <div>Component: custom/order.table</div>
</template>

<style scoped></style>
