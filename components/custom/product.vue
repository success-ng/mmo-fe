<script setup lang="ts">
   import type { ProductModel } from "~/composables/models/product.model";
   defineProps<{
      product: ProductModel;
   }>();
   const myModal = ref<HTMLDialogElement | null>(null);

   // Hàm để mở modal
   const openModal = () => {
      if (myModal.value) {
         myModal.value.showModal();
      }
   };
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
               <span class="gap-2 badge badge-accent text-accent-content">
                  <Icon name="lucide:package-open" />
                  Còn lại:
                  {{ product.amount }}
               </span>
               <span class="gap-2 badge badge-warning text-warning-content">
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
               href="#my_modal_2">
               MUA NGAY
            </a>

            <div class="modal" role="dialog" id="my_modal_2">
               <div class="modal-box">
                  <h3 class="text-lg font-bold">Hello!</h3>
                  <p class="py-4">This modal works with anchor links</p>
                  <div class="modal-action">
                     <a href="#" class="btn">Yay!</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
