<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { TransactionModel } from "~/composables/models/transaction.model ";

   const userService = useApiUserService();

   const { txs: transactions } = defineProps<{
      txs: TransactionModel[];
   }>();

   const txs = ref([] as TransactionModel[]);
   onMounted(() => {
      txs.value = transactions;
   });
</script>

<template>
   <table class="table">
      <!-- head -->
      <thead>
         <tr>
            <th>#</th>
            <th>User</th>
            <th>Số tiền</th>
            <th>Loại giao dịch</th>
            <th>Ngày thực hiện</th>
            <th>Trạng thái</th>
         </tr>
      </thead>
      <tbody>
         <!-- row 1 -->
         <tr v-for="tx in txs">
            <td>{{ tx.id }}</td>
            <td>
               {{ tx.userId }}
            </td>
            <td>
               <p>{{ tx.amount }} đ</p>
            </td>
            <td>
               {{ tx.paymentMethod }}
            </td>
            <td>{{ tx.transactionDate }}</td>
            <td>{{ tx.status }}</td>
            <th>
               <button class="btn btn-ghost btn-xs">details</button>
            </th>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
