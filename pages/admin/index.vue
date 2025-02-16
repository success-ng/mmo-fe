<script setup lang="ts">
   import { QuillEditor } from "@vueup/vue-quill";
   import "@vueup/vue-quill/dist/vue-quill.snow.css";
   import { useApiAnalysisService } from "~/composables/api/analysis.service";
   import { useApiSettingService } from "~/composables/api/setting.service";
   import {
      getAnalysis,
      type AnalysisModel,
   } from "~/composables/models/analysis.model";
   import type { SettingModel } from "~/composables/models/setting.model";

   definePageMeta({
      layout: "admin",
   });
   const { $toast } = useNuxtApp();
   const settingService = useApiSettingService();
   const analysisService = useApiAnalysisService();
   const content = ref("<p>Đây là nội dung mặc định!</p>");
   const intro = ref<SettingModel>({} as SettingModel);
   const analysis = ref<AnalysisModel[]>([] as AnalysisModel[]);
   onMounted(() => {
      analysisService.index().then((res) => {
         analysis.value = res;
      });
      settingService.getByName("INTRO").then((res) => {
         intro.value = res;
      });
   });

   const onsubmit = () => {
      settingService.update(intro.value).then((result) => {
         intro.value = result;
         $toast("Cập nhật thành công", {
            type: "success",
         });
      });
   };
</script>

<template>
   <section class="space-y-6">
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <h3 class="card-title">Bảng điều khiển</h3>
            <label>
               <p>Nội dung giới thiệu:</p>
               <!-- <textarea
                  class="w-full h-32 textarea input-bordered"
                  placeholder="Nhập nội dung"
                  v-model="intro.val"></textarea> -->
               <div>
                  <ClientOnly fallback-tag="div" fallback="Loading...">
                     <QuillEditor
                        content-type="html"
                        toolbar="full"
                        class="textarea input-bordered"
                        v-model:content="intro.val">
                     </QuillEditor>
                  </ClientOnly>
               </div>
            </label>
            <button class="btn btn-primary" @click="onsubmit">Lưu</button>
         </div>
      </div>
      <div class="grid grid-cols-3 gap-3">
         <div class="card card-compact card-side bg-base-100">
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
         <div class="card card-compact card-side bg-base-100">
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
         <div class="card card-compact card-side bg-base-100">
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
         <div class="card card-compact card-side bg-base-100">
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
         <div class="card card-compact card-side bg-base-100">
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

         <div class="card card-compact card-side bg-base-100">
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
         <div class="card card-compact card-side bg-base-100">
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
