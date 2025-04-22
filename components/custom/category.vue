<script setup lang="ts">
   import { useApiCategoryService } from "~/composables/api/category.service";
   import { useApiProductService } from "~/composables/api/product.service";
   // import { useApiClonemupService } from "~/composables/api/clonemup.service";
   // import type { CategoryClonemupResponse } from "~/composables/models/category.clonemup.model";
   import type { CategoryModel } from "~/composables/models/category.model";
   import type { ProductModel } from "~/composables/models/product.model";

   const categoryService = useApiCategoryService();
   const productService = useApiProductService();
   // const cloneMup = useApiClonemupService();
   // const clonemup_categories = ref<CategoryClonemupResponse>(
   //    {} as CategoryClonemupResponse
   // );

   const newVia: Ref<ProductModel[]> = ref([] as ProductModel[]);
   const categories: Ref<CategoryModel[]> = ref([] as CategoryModel[]);

   onMounted(() => {
      // cloneMup.productCategory().then((res) => {
      //    clonemup_categories.value = res;
      // });
      categoryService.index().then((res) => {
         categories.value = res;
      });
      productService.latestProducts().then((res) => {
         // categories.value = res;
         newVia.value = res;
      });
   });
</script>

<template>
   <div class="space-y-3">
      <div
         class="flex-row items-center gap-4 p-3 font-bold rounded-md text-primary-content card bg-gradient-to-r from-blue-800 to-purple-800 drop-shadow-lg">
         <!-- <figure>
            <img :src="category.icon" alt="" class="w-[2em]" />
         </figure> -->
         <span class="text-xl text-neutral-content">Mới nhất</span>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
         <CustomProduct
            :product="product"
            v-for="product in newVia.filter(
               (product) => product.stock !== 0
            )" />
      </div>
   </div>
   <div class="space-y-3" v-for="category in categories" :key="category.id">
      <div
         v-if="category.products.length > 0"
         class="flex-row items-center gap-4 p-3 font-bold rounded-md text-primary-content card bg-gradient-to-r from-blue-800 to-purple-800 drop-shadow-lg">
         <figure>
            <img :src="category.icon" alt="" class="w-[2em]" />
         </figure>
         <span class="text-xl text-neutral-content">{{ category.name }}</span>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
         <CustomProduct
            :product="product"
            v-for="product in category.products.filter(
               (product) => product.stock !== 0
            )" />
      </div>
   </div>
   <!-- <div
      class="space-y-3"
      v-for="category in clonemup_categories.categories"
      :key="category.id">
      <div
         class="flex-row items-center gap-4 p-3 font-bold rounded-md text-primary-content card bg-gradient-to-r from-blue-800 to-purple-800">
         <figure>
            <img :src="category.icon" alt="" class="w-[2em]" />
         </figure>
         <span class="text-neutral-content">{{ category.name }}</span>
      </div>
   </div> -->
</template>

<style scoped></style>
