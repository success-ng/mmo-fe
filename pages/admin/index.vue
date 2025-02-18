<script setup lang="ts">
   import "@vueup/vue-quill/dist/vue-quill.snow.css";
   import { useApiAnalysisService } from "~/composables/api/analysis.service";
   import { useApiWebhookService } from "~/composables/api/webhook.service";
   import {
      getAnalysis,
      type AnalysisModel,
   } from "~/composables/models/analysis.model";

   definePageMeta({
      layout: "admin",
   });
   const analysisService = useApiAnalysisService();
   const analysis = ref<AnalysisModel[]>([] as AnalysisModel[]);
   const webhooks = useApiWebhookService();

   onMounted(() => {
      analysisService.index().then((res) => {
         analysis.value = res;
      });
      webhooks.register().then((res) => {
         console.log(res);
      });
   });
</script>

<template>
   <section class="space-y-6">
      <div class="grid grid-cols-3 gap-3">
         <div class="card card-compact card-side bg-base-100 drop-shadow-lg">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:user" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Lượng người dùng</h3>
               <p class="text-3xl font-bold">
                  {{ getAnalysis(analysis, "users") }}
               </p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100 drop-shadow-lg">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:cart-flatbed" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Lượng sản phẩm</h3>
               <p class="text-3xl font-bold">
                  {{ getAnalysis(analysis, "products") }}
               </p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100 drop-shadow-lg">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:sack-dollar" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Tổng giá trị đơn hàng</h3>
               <p class="text-3xl font-bold">
                  {{ getAnalysis(analysis, "totalOrderAmt") }} VND
               </p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100 drop-shadow-lg">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:money-bill-transfer" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Đơn hàng đã bán</h3>
               <p class="text-3xl font-bold">
                  {{ getAnalysis(analysis, "totalOrders") }}
               </p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100 drop-shadow-lg">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:circle-dollar-to-slot" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Số tiền đã nạp</h3>
               <p class="text-3xl font-bold">
                  {{ getAnalysis(analysis, "txsDepositAmt") }}
               </p>
            </div>
         </div>

         <div class="card card-compact card-side bg-base-100 drop-shadow-lg">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:money-bill-wave" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Số tiền đã nạp trong tháng này</h3>
               <p class="text-3xl font-bold">
                  {{ getAnalysis(analysis, "txsThisMonth") }}
               </p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100 drop-shadow-lg">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:money-bill-wave" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Số tiền đã nạp trong tháng trước</h3>
               <p class="text-3xl font-bold">
                  {{ getAnalysis(analysis, "txsLastMonth") }}
               </p>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
