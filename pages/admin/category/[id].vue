<script setup>
   import { useApiCategoryService } from "~/composables/api/category.service";

   definePageMeta({
      layout: "admin",
   });

   const router = useRouter();
   const route = useRoute();
   const id = route.params.id;
   const category = ref({});
   const products = ref([]);
   const isLoading = ref(true);
   const categoryService = useApiCategoryService();
   const fetch = async () => {
      isLoading.value = true;
      categoryService.get(id).then((res) => {
         products.value = res.products;
         category.value = res;
         isLoading.value = false;
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
         :create="() => router.push(`/admin/product/create`)"
         :is-loading="isLoading"
         :columns="columns"
         :data="products">
      </MaterialTable>
   </section>
</template>
