<script setup lang="ts">
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import type { TransactionModel } from "~/composables/models/transaction.model ";
   import type { Column } from "~/composables/types/table.type";

   definePageMeta({
      layout: "admin",
   });
   const transactionService = useApiTransactionService();
   const txs: Ref<TransactionModel[]> = ref([] as TransactionModel[]);
   const isLoading = ref(true);
   const fetch = async (params?: {}) => {
      isLoading.value = true;
      transactionService.txs(params).then((res) => {
         isLoading.value = false;
         txs.value = res;
      });
   };
   const keyWords: Column[] = [
      { key: "orderCode", label: "Mã giao dịch", type: "number" },
      {
         key: "transactionDate",
         label: "Ngày giao dịch",
         type: "datetime-local",
      },
   ];

   const columns: Column[] = [
      { key: "id", label: "#" },
      { key: "userId", label: "User Id" },
      { key: "amount", label: "Số tiền" },
      // { key: "paymentMethod", label: "Loại giao dịch" },
      { key: "orderCode", label: "Mã đơn hàng" },
      { key: "status", label: "Trạng thái" },
      { key: "transactionDate", label: "Ngày giao dịch" },
   ];
</script>

<template>
   <section>
      <MaterialTable
         title="Giao dịch"
         :data="txs"
         :key-words="keyWords"
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
         <template #transactionDate="{ row }">
            <span class="font-bold">{{ row.transactionDate }}</span>
         </template>
      </MaterialTable>
   </section>
</template>

<style scoped></style>
