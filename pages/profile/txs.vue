<script setup lang="ts">
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import type { TransactionModel } from "~/composables/models/transaction.model ";
   import type { Column } from "~/composables/types/table.type";

   const isLoadingTxs = ref(true);
   const txs: Ref<TransactionModel[]> = ref([] as TransactionModel[]);
   const transactionService = useApiTransactionService();

   const fetch = async () => {
      isLoadingTxs.value = true;
      transactionService.myTxs().then((res) => {
         isLoadingTxs.value = false;
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
      { key: "orderCode", label: "Mã giao dịch" },
      { key: "status", label: "Trạng thái" },
      { key: "transactionDate", label: "Ngày giao dịch" },
   ];
</script>
<template>
   <section class="space-y-6">
      <MaterialTable
         title="Lịch sử nạp"
         :key-words="keyWords"
         :data="txs"
         :fetch="fetch"
         :columns="columns"
         :is-loading="isLoadingTxs">
         <template #orderCode="{ row }">
            <span class="font-bold badge badge-ghost">{{ row.orderCode }}</span>
         </template>
         <template #userId="{ row }">
            <p>
               Username: <span class="font-bold">{{ row.username }}</span>
            </p>
            <p>
               Mã người dùng: <span class="font-bold">{{ row.userId }}</span>
            </p>
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
