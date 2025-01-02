<script setup lang="ts">
import { useApiUserService } from '~/composables/api/user.service';

const userService = useApiUserService();

const transactions = userService.userTransaction();
</script>

<template>
   <table class="table">
      <!-- head -->
      <thead>
         <tr>
            <th>Số tiền</th>
            <th>Loại giao dịch</th>
            <th>Loại biến động</th>
            <th>Ngày thực hiện</th>
            <th>Trạng thái</th>
         </tr>
      </thead>
      <tbody>
         <!-- row 1 -->
         <tr v-for="transaction in transactions">
            <td>
               <p>{{ transaction.amount }} đ</p>
            </td>
            <td>
               {{ transaction.paymentMethod }}
            </td>
            <td>{{ transaction.transactionType }}</td>
            <td>{{ transaction.transactionDate }}</td>
            <td>{{ transaction.status }}</td>
            <th>
               <button class="btn btn-ghost btn-xs">details</button>
            </th>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
