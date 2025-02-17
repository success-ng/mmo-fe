<script setup lang="ts">
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import type { TransactionModel } from "~/composables/models/transaction.model ";

   definePageMeta({
      layout: "admin",
   });
   const transactionService = useApiTransactionService();
   const txs: Ref<TransactionModel[]> = ref([] as TransactionModel[]);
   const isLoading = ref(true);
   const fetch = async () => {
      isLoading.value = true;
      transactionService.txs().then((res) => {
         isLoading.value = false;
         txs.value = res;
      });
   };
   const columns = [
      { key: "id", label: "#" },
      { key: "userId", label: "User Id" },
      { key: "amount", label: "Số tiền" },
      { key: "paymentMethod", label: "Loại giao dịch" },
      { key: "status", label: "Trạng thái" },
      { key: "transactionDate", label: "Ngày giao dịch" },
   ];
</script>

<template>
   <section>
      <MaterialTable
         :data="txs"
         :columns="columns"
         :fetch="fetch"
         :is-loading="isLoading">
         <template #userId="{ row }">
            <span class="font-bold">{{ row.userId }}</span>
         </template>
         <template #status="{ row }">
            <span class="font-bold badge badge-secondary">{{
               row.status
            }}</span>
         </template>
         <template #amount="{ row }">
            <span class="font-bold">{{ row.amount }} đ</span>
         </template>
         <template #paymentMethod="{ row }">
            <span class="font-bold">{{ row.paymentMethod }}</span>
         </template>
         <template #transactionDate="{ row }">
            <span class="font-bold">{{ row.transactionDate }}</span>
         </template>
      </MaterialTable>
   </section>
</template>

<style scoped></style>
