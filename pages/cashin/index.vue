<script setup lang="ts">
   import { ref } from "vue";
   import { useApiTransactionService } from "~/composables/api/transaction.service";

   // Danh sách các số tiền nạp
   const cashInAmt = [
      5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000,
   ];
   const transactionService = useApiTransactionService();
   // Lưu trữ số tiền đã chọn
   const selectedAmount = ref<number>(0);

   // Xử lý khi người dùng chọn số tiền
   const selectAmount = (amt: number) => {
      selectedAmount.value = amt;
   };

   // Gửi yêu cầu nạp tiền
   const submitCashIn = () => {
      transactionService
         .cashIn({
            amount: selectedAmount.value,
            paymentMethod: "bank",
            id: 0,
            userId: 0,
            status: "",
            transactionDate: "",
            paymentLink: "",
         })
         .then((res) => {
            window.open(res.paymentLink, "_blank");
         });
   };
</script>

<template>
   <section class="container py-10 mx-auto">
      <div class="shadow-lg card card-compact bg-base-100">
         <div class="card-body">
            <h2 class="text-xl card-title">Nạp tiền</h2>
            <p>Phương thức thanh toán</p>
            <select class="w-full max-w-xs select select-bordered">
               <option value="bank">Ngân hàng nội địa</option>
               <option value="momo">Ví MoMo</option>
               <option value="zalo">ZaloPay</option>
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
               <button class="btn btn-success" @click="submitCashIn">
                  Xác nhận nạp tiền
               </button>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
   /* Tùy chỉnh khoảng cách hoặc màu sắc nếu cần */
</style>
