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
   <div class="card bg-base-100 text-base-content">
      <div class="gap-3 card-body">
         <p class="flex-none card-title">
            {{ product.name }}
         </p>
         <div class="flex gap-3">
            <span class="gap-2 badge badge-accent text-accent-content">
               <Icon name="lucide:package-open" />
               Còn lại:
               {{ product.amount }}
            </span>
            <span class="gap-2 badge badge-warning text-warning-content">
               <Icon name="fa6-solid:coins" /> {{ product.price }} đ
            </span>
         </div>
         <pre class="flex-1 text-wrap">{{ product.description }}</pre>
         <div class="justify-self-end card-actions">
            <a
               class="w-full btn btn-primary text-primary-content btn-sm"
               href="#my_modal_2">
               Mua
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
