<script setup lang="ts">
   import { useApiCategoryService } from "~/composables/api/category.service";
   import { useApiProductService } from "~/composables/api/product.service";
   import type { ProductModel } from "~/composables/models/product.model";
   import type { Column } from "~/composables/types/table.type";

   definePageMeta({
      layout: "admin",
   });

   const router = useRouter();
   const route = useRoute();
   const id = Number(route.params.id);
   const category = ref({});
   const products = ref([] as ProductModel[]);
   const loading = ref(true);
   const categoryService = useApiCategoryService();
   const productService = useApiProductService();
   const fetch = async () => {
      loading.value = true;
      await categoryService.get(id).then((res) => {
         products.value = res.products;
         category.value = res;
      });
      loading.value = false;
   };

   const keyWords: Column[] = [{ key: "name", label: "Tên sản phẩm" }];

   const create = async () => {
      router.push("/admin/product/create");
   };

   const update = async (id: number) => {
      router.push(`/admin/product/${id}`);
   };

   const del = async (id: number) => {
      await productService.del(id);
   };

   const columns = [
      { key: "id", label: "#" },
      { key: "country", label: "Quốc gia" },
      { key: "name", label: "Tên" },
      { key: "categoryName", label: "Danh mục" },
      { key: "price", label: "Giá" },
      { key: "stock", label: "Số lượng" },
      { key: "createdAt", label: "Ngày tạo" },
   ];
</script>

<template>
   <MaterialTable
      title="Sản phẩm"
      :fetch="fetch"
      :data="products"
      :key-words="keyWords"
      :create="create"
      :show="update"
      :remove="del"
      :is-loading="loading"
      :columns="columns">
      <template #country="{ row }">
         <p class="font-bold">{{ row.country }}</p>
      </template>
      <template #name="{ row }">
         <p class="font-bold">{{ row.name }}</p>
      </template>
      <template #price="{ row }">
         <p class="font-bold">{{ row.price }}</p>
      </template>
      <template #stock="{ row }">
         <span class="font-bold badge badge-secondary">{{ row.stock }}</span>
      </template>
      <template #categoryName="{ row }">
         <p class="font-bold">{{ row.categoryName }}</p>
         <p class="">Mã danh mục: {{ row.categoryId }}</p>
      </template>
      <template #createdAt="{ row }">
         {{ row.createdAt }}
      </template>
   </MaterialTable>
</template>
