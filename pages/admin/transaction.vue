<script setup lang="ts">
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import type { TransactionModel } from "~/composables/models/transaction.model ";

   definePageMeta({
      layout: "admin",
   });
   const transactionService = useApiTransactionService();
   const txs: Ref<TransactionModel[]> = ref([] as TransactionModel[]);
   onMounted(() => {
      transactionService.txs().then((res) => {
         txs.value = res;
      });
   });
</script>

<template>
   <section class="space-y-6">
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <h3 class="card-title">Giao dịch</h3>
            <CustomTransactionTable :txs="txs" />
         </div>
      </div>
   </section>
</template>

<style scoped></style>
