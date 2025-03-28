<script setup lang="ts">
   import { ref } from "vue";
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import { useApiUserService } from "~/composables/api/user.service";

   const transactionService = useApiTransactionService();
   const userService = useApiUserService();
   const config = useRuntimeConfig();
   const cashInAmt = [
      50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 7000000,
   ];

   const loading = ref<boolean>(false);
   const selectedAmount = ref<number>(0);

   onMounted(() => {
      userService.profile();
   });
   const selectAmount = (amt: number) => {
      selectedAmount.value = amt;
   };

   const type = ref<string>("bank");

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
   const $toast = useNuxtApp().$toast;
   loading.value = false;
   const copyToClipboard = async (text: string) => {
      try {
         await navigator.clipboard.writeText(text);
         $toast("Đã sao chép địa chỉ ví vào clipboard", {
            type: "success",
         });
      } catch (err) {
         console.error("Failed to copy: ", err);
      }
   };
   const network = ref<string>("TRON(TRC20)");
   const address = ref<string>("TSNCRSHadEdZnJAz55YvX6WgGWGbzWGpZ4");
</script>

<template>
   <section class="space-y-6">
      <div class="shadow-lg card card-compact bg-base-100">
         <div class="card-body">
            <h2 class="text-xl card-title">Nạp tiền</h2>
            <p>Phương thức thanh toán</p>
            <select
               class="w-full max-w-xs select select-bordered"
               v-model="type">
               <option value="bank" selected>Ngân hàng nội địa</option>
               <option value="crypto">Tiền điện tử</option>
            </select>

            <div v-if="type === 'bank'" class="mt-4">
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
                     <span
                        v-if="loading"
                        class="loading loading-bars loading-xs">
                     </span>
                     <span v-else> Xác nhận nạp tiền </span>
                  </button>
               </div>
            </div>
            <div v-else class="flex flex-col items-center mt-4 space-y-4">
               <figure class="w-64 overflow-hidden rounded-lg shadow-md">
                  <img
                     src="/images/bnb_qr.jpeg"
                     alt="QR Code"
                     class="mx-auto" />
               </figure>
               <div
                  class="flex flex-col items-center p-4 space-y-4 border rounded-md shadow-sm bg-gray-50">
                  <fieldset class="w-full fieldset">
                     <legend class="font-bold fieldset-legend">
                        Mạng lưới:
                     </legend>
                     <p class="font-medium text-center input">{{ network }}</p>
                  </fieldset>
                  <fieldset class="w-full fieldset">
                     <legend class="font-bold fieldset-legend">
                        Địa chỉ ví:
                     </legend>
                     <p class="font-medium text-center break-all input">
                        {{ address }}
                     </p>
                  </fieldset>
                  <button
                     class="btn btn-outline btn-sm"
                     @click="copyToClipboard(address)">
                     Sao chép địa chỉ ví
                  </button>
                  <p class="text-sm text-center text-gray-600">
                     Vui lòng liên hệ qua
                     <strong class="text-blue-600">SDT</strong> hoặc
                     <strong class="text-blue-600">Telegram</strong> để xác nhận
                     sau khi thanh toán:
                     <a href="tel:0779266757" class="text-blue-500 underline"
                        >0779266757</a
                     >
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped>
   /* Tùy chỉnh khoảng cách hoặc màu sắc nếu cần */
</style>
