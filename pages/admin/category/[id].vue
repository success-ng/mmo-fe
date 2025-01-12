<script setup>
   import { useApiCategoryService } from "~/composables/api/category.service";

   definePageMeta({
      layout: "admin",
   });

   const route = useRoute();
   const id = route.params.id;

   const products = ref([]);
   const categoryService = useApiCategoryService();
   onMounted(() => {
      categoryService.get(id).then((res) => {
         products.value = res.products;
      });
   });
</script>

<template>
   <section>
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <div class="card-title">Danh mục sản phẩm {{}}</div>
            <CustomProductTable :products="products" />
         </div>
      </div>
   </section>
</template>
