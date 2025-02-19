<script setup lang="ts">
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import type { TransactionModel } from "~/composables/models/transaction.model ";

   const isLoadingTxs = ref(true);
   const txs: Ref<TransactionModel[]> = ref([] as TransactionModel[]);
   const transactionService = useApiTransactionService();

   const fetchTxs = async () => {
      isLoadingTxs.value = true;
      transactionService.myTxs().then((res) => {
         isLoadingTxs.value = false;
         txs.value = res;
      });
   };
   const columnsTxs = [
      { key: "id", label: "#" },
      { key: "userId", label: "User Id" },
      { key: "amount", label: "Số tiền" },
      { key: "paymentMethod", label: "Loại giao dịch" },
      { key: "status", label: "Trạng thái" },
      { key: "transactionDate", label: "Ngày giao dịch" },
   ];
</script>
<template>
   <section class="space-y-6">
      <MaterialTable
         title="Lịch sử nạp"
         :data="txs"
         :fetch="fetchTxs"
         :columns="columnsTxs"
         :is-loading="isLoadingTxs">
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
