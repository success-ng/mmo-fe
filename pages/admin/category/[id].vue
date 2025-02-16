<script setup>
   import { useApiCategoryService } from "~/composables/api/category.service";

   definePageMeta({
      layout: "admin",
   });

   const route = useRoute();
   const id = route.params.id;
   const category = ref({});
   const products = ref([]);
   const isLoading = ref(true);
   const categoryService = useApiCategoryService();
   const fetch = async () => {
      categoryService.get(id).then((res) => {
         products.value = res.products;
         category.value = res;
      });
   };
   const columns = [
      { key: "id", label: "#" },
      { key: "name", label: "Tên" },
      { key: "price", label: "Giá" },
      { key: "stock", label: "Số lượng" },
      { key: "createdAt", label: "Ngày tạo" },
   ];
</script>

<template>
   <section>
      <MaterialTable
         :title="`Danh sách sản phẩm trong: ${category.name}`"
         :fetch="fetch"
         :is-loading="isLoading"
         :columns="columns"
         :data="products">
         <template #id="{ row }">
            <span class="font-bold">{{ row.id }}</span>
         </template>
      </MaterialTable>
   </section>
</template>
