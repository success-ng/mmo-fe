<script setup lang="ts">
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import type { TransactionModel } from "~/composables/models/transaction.model ";

   const txService = useApiTransactionService();
   const route = useRoute();
   const id = Number(route.params.id);
   const tx = ref({} as TransactionModel);
   const loading = ref(false);
   onMounted(async () => {
      loading.value = true;
      await txService.get(id).then((res) => {
         tx.value = res;
      });
      loading.value = false;
   });

   const acceptTx = async () => {
      loading.value = true;
      await txService.accept(id).then((res) => {
         tx.value = res;
      });
      loading.value = false;
   };

   definePageMeta({
      layout: "admin",
   });
</script>
<template>
   <section class="space-y-6">
      <div class="card card-compact bg-base-100 drop-shadow-lg">
         <div class="card-body">
            <h3 class="card-title">Giao dich: {{ tx.orderCode }}</h3>
            <div class="grid grid-cols-2">
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Mã giao dịch: </span>
                  </div>
                  <div class="font-bold badge">{{ tx.orderCode }}</div>
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Số tiền nạp: </span>
                  </div>
                  <div class="font-bold badge badge-primary">
                     {{ tx.amount }} VND
                  </div>
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Trạng thái: </span>
                  </div>
                  <div class="font-bold badge badge-secondary">
                     {{ tx.status }}
                  </div>
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Ngày thực hiện: </span>
                  </div>
                  <div class="font-bold badge badge-ghost">
                     {{ tx.transactionDate }}
                  </div>
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Người thực hiện: </span>
                  </div>
                  <div class="p-2 bg-gray-100">
                     <p>
                        Username:
                        <span class="font-bold"> {{ tx.username }}</span>
                     </p>
                     <p>
                        Email:
                        <span class="font-bold">: {{ tx.email }}</span>
                     </p>
                  </div>
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Mã giao dịch: </span>
                  </div>
                  <div class="font-bold badge badge-ghost">
                     {{ tx.orderCode }}
                  </div>
               </label>
            </div>
            <button
               v-if="tx.status != 'PAID'"
               @click="acceptTx"
               :disabled="loading"
               class="font-bold btn btn-primary">
               <span v-if="loading" class="loading loading-bars loading-xs" />
               <span v-else> Chấp nhận giao dịch </span>
            </button>
         </div>
      </div>
   </section>
</template>
