<script setup>
   import { useApiCategoryService } from "~/composables/api/category.service";

   definePageMeta({
      layout: "admin",
   });

   const route = useRoute();
   const id = route.params.id;
   const category = ref({});
   const products = ref([]);
   const categoryService = useApiCategoryService();
   onMounted(() => {
      categoryService.get(id).then((res) => {
         products.value = res.products;
         category.value = res;
      });
   });
</script>

<template>
   <section>
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <div class="card-title">Danh mục sản phẩm: {{ category.name }}</div>
            <CustomProductTable :products="products" />
         </div>
      </div>
   </section>
</template>
