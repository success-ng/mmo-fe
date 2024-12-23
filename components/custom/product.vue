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
   <div class="card bg-base-100 text-base-content overflow-hidden">
      <p class="flex-none card-title text-base p-4 bg-blue-500 text-white text-center">
         {{ product.name }}
      </p>
      <div class="gap-3 card-body justify-between">
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
               <pre class="text-dark flex-1 text-wrap font-sans">{{ product.description }}</pre>
               <!-- <p class=" text-nowrap overflow-hidden">{{ product.description }}</p> -->
               <!-- <div class="divider my-0" /> -->
               <p>
                  - Change thông tin
               </p>
               <!-- <div class="divider my-0" /> -->
               <p>
                  - Hỗ trợ backup
               </p>
               <!-- <div class="">
               </div> -->
            </div>
         </div>

         <div class="justify-self-end card-actions">
            <a class="w-full btn btn-primary text-white btn-sm bg-gradient-to-t from-sky-400 to-sky-700"
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
