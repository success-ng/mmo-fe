<script setup lang="ts">
   import { ref } from "vue";
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import { useApiUserService } from "~/composables/api/user.service";

   const transactionService = useApiTransactionService();
   const userService = useApiUserService();
   const config = useRuntimeConfig();
   const cashInAmt = [
      5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000,
   ];

   const loading = ref<boolean>(false);
   const selectedAmount = ref<number>(0);

   onMounted(() => {
      userService.profile().then((res) => {
         console.log(res);
      });
   });
   const selectAmount = (amt: number) => {
      selectedAmount.value = amt;
   };

   // Gửi yêu cầu nạp tiền
   const submitCashIn = async () => {
      loading.value = true;
      await transactionService
         .credit({
            id: 0,
            amount: selectedAmount.value,
            paymentMethod: "deposit",
            transactionDate: new Date().toISOString(),
            status: "PAID",
            userId: 0,
            paymentLink: "string",
            qrCode: "string",
            orderCode: 0,
            redirectUrl: `${config.public.domain}/cashin`,
            username: "",
            email: "",
         })
         .then((res) => {
            window.location.href = res.paymentLink;
         });
   };
   loading.value = false;
</script>

<template>
   <section class="space-y-6">
      <div class="shadow-lg card card-compact bg-base-100">
         <div class="card-body">
            <h2 class="text-xl card-title">Nạp tiền</h2>
            <p>Phương thức thanh toán</p>
            <select class="w-full max-w-xs select select-bordered">
               <option value="bank">Ngân hàng nội địa</option>
            </select>

            <p class="mt-4">Số tiền muốn nạp</p>
            <div class="grid grid-cols-4 gap-4 mt-2">
               <button
                  class="btn"
                  :class="{ 'btn-primary': amt === selectedAmount }"
                  v-for="(amt, index) in cashInAmt"
                  :key="index"
                  @click="selectAmount(amt)">
                  {{ amt.toLocaleString() }} VND
               </button>
            </div>

            <div class="flex justify-end mt-6">
               <button
                  class="btn btn-success"
                  @click="submitCashIn"
                  :disabled="!selectedAmount && loading">
                  <span v-if="loading" class="loading loading-bars loading-xs">
                  </span>
                  <span v-else> Xác nhận nạp tiền </span>
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
   /* Tùy chỉnh khoảng cách hoặc màu sắc nếu cần */
</style>
