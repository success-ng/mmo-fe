<script setup lang="ts">
   import { useApiClonemupService } from "~/composables/api/clonemup.service";
   import type { CategoryClonemupResponse } from "~/composables/models/category.clonemup.model";

   const cloneMup = useApiClonemupService();
   const categories = ref<CategoryClonemupResponse>(
      {} as CategoryClonemupResponse
   );

   onMounted(() => {
      cloneMup.productCategory().then((res) => {
         categories.value = res;
      });
   });
</script>

<template>
   <div
      class="space-y-3"
      v-for="category in categories.categories"
      :key="category.id">
      <div
         class="flex-row items-center gap-4 p-3 font-bold rounded-md text-primary-content card bg-gradient-to-r from-blue-800 to-purple-800">
         <!-- Ảnh -->
         <figure>
            <img :src="category.icon" alt="" class="w-[2em]" />
         </figure>
         <!-- Tên danh mục -->
         <span class="text-neutral-content">{{ category.name }}</span>
      </div>
      <div class="grid gap-8 md:grid-cols-4">
         <CustomProduct
            :product="product"
            v-for="product in category.products" />
      </div>
   </div>
</template>

<style scoped></style>
