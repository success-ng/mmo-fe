<script setup lang="ts">
   import type { ProductModel } from "~/composables/models/product.model";
   const { product } = defineProps<{
      product: ProductModel;
   }>();
   const buyModel = ref({
      id: product.id,
      amount: 1,
   });
</script>

<template>
   <div class="overflow-hidden card bg-base-100 text-base-content">
      <p
         class="flex-none p-4 text-base text-center text-white bg-blue-500 card-title">
         {{ product.name }}
      </p>
      <div class="justify-between gap-3 card-body">
         <div class="space-y-4">
            <div class="flex gap-3">
               <span
                  class="gap-2 badge badge-accent text-accent-content text-nowrap">
                  <Icon name="lucide:package-open" />
                  Còn lại:
                  {{ product.amount }}
               </span>
               <span
                  class="gap-2 badge badge-warning text-warning-content text-nowrap">
                  <Icon name="fa6-solid:coins" />Giá: {{ product.price }} đ
               </span>
            </div>
            <div class="">
               <pre class="flex-1 font-sans text-dark text-wrap">{{
                  product.description
               }}</pre>
               <!-- <p class="overflow-hidden text-nowrap">{{ product.description }}</p> -->
               <!-- <div class="my-0 divider" /> -->
               <p>- Change thông tin</p>
               <!-- <div class="my-0 divider" /> -->
               <p>- Hỗ trợ backup</p>
               <!-- <div class="">
               </div> -->
            </div>
         </div>

         <div class="justify-self-end card-actions">
            <a
               class="w-full text-white btn btn-primary btn-sm bg-gradient-to-t from-sky-400 to-sky-700"
               :href="`#my_modal_${product.id}`">
               MUA NGAY
            </a>

            <div class="modal" role="dialog" :id="`my_modal_${product.id}`">
               <div class="max-w-md space-y-4 modal-box">
                  <h3 class="text-lg font-bold">{{ product.name }}!</h3>
                  <label
                     class="flex items-center gap-2 input input-sm input-bordered">
                     Số lượng
                     <input
                        type="number"
                        class="grow"
                        placeholder="Nhập số lượng"
                        v-model="buyModel.amount" />
                  </label>
                  <label
                     class="flex items-center gap-2 input input-sm input-bordered">
                     Đơn giá
                     <span class="badge badge-warning text-warning-content">
                        {{ product.price }} đ</span
                     >
                  </label>
                  <div class="divider" />
                  <label
                     class="flex items-center gap-2 input input-sm input-bordered">
                     Thành tiền
                     <span class="badge badge-warning text-warning-content">
                        {{
                           (
                              parseInt(product.price) * buyModel.amount
                           ).toLocaleString()
                        }}
                        đ</span
                     >
                  </label>
                  <div class="modal-action">
                     <a href="#" class="btn btn-success text-success-content"
                        >Mua!</a
                     >
                     <a href="#" class="btn btn-error text-error-content"
                        >Hủy</a
                     >
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
