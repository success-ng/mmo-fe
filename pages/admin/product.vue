<script setup lang="ts">
   import { useApiProductService } from "~/composables/api/product.service";
   import type { ProductModel } from "~/composables/models/product.model";
   const products: Ref<ProductModel[]> = ref([] as ProductModel[]);
   const productService = useApiProductService();
   definePageMeta({
      layout: "admin",
   });

   const fetch = () => {
      productService.index().then((response) => {
         products.value = response;
      });
   };

   onMounted(() => {
      productService.index().then((response) => {
         products.value = response;
         console.log(products.value);
      });
   });
</script>

<template>
   <section class="card card-compact bg-base-100">
      <div class="card-body">
         <h3 class="card-title">Sản phẩm</h3>
         <div class="overflow-x-auto">
            <CustomProductTable :products="products" :fetch="fetch" />
         </div>
      </div>
   </section>
</template>

<style scoped></style>
