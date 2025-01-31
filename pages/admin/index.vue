<script setup lang="ts">
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";

   definePageMeta({
      layout: "admin",
   });
   const { $toast } = useNuxtApp();
   const settingService = useApiSettingService();
   const intro = ref<SettingModel>({} as SettingModel);

   const paid = 1000000;
   const deposited = 1000000;
   const product = 10;
   const selled = 10;
   const users = 3;

   onMounted(() => {
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
            <p>Chào mừng bạn đến với bảng điều khiển</p>
            <label>
               <p>Nội dung trang chính:</p>
               <textarea
                  class="w-full h-32 textarea input-bordered"
                  placeholder="Nhập nội dung"
                  v-model="intro.val"></textarea>
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
               <p class="text-3xl font-bold">{{ users }}</p>
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
               <p class="text-3xl font-bold">{{ product }}</p>
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
               <p class="text-3xl font-bold">{{ paid.toLocaleString() }}</p>
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
                  {{ selled.toLocaleString() }}
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
               <h3 class="text-current/20">Số tiền đã thanh toán</h3>
               <p class="text-3xl font-bold">{{ paid.toLocaleString() }}</p>
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
                  {{ deposited.toLocaleString() }}
               </p>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
