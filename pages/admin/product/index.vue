<script setup lang="ts">
   import { useApiProductService } from "~/composables/api/product.service";
   import { useApiUserService } from "~/composables/api/user.service";
   import type { ProductModel } from "~/composables/models/product.model";
   import type { Column } from "~/composables/types/table.type";
   const data: Ref<ProductModel[]> = ref([] as ProductModel[]);
   const productService = useApiProductService();

   definePageMeta({
      layout: "admin",
   });

   const router = useRouter();
   const loading = ref(true);

   const fetch = async () => {
      loading.value = true;
      productService.index().then((response) => {
         loading.value = false;
         data.value = response;
      });
   };

   const keyWords: Column[] = [
      { key: "name", label: "Tên sản phẩm" },
      { key: "Quốc gia", label: "Username" },
   ];

   const create = async () => {
      router.push("/admin/product/create");
   };

   const update = async (id: number) => {
      router.push(`/admin/product/${id}`);
   };

   const columns = [
      { key: "id", label: "#" },
      { key: "country", label: "Quốc gia" },
      { key: "name", label: "Tên" },
      { key: "categoryID", label: "Danh mục" },
      { key: "price", label: "Giá" },
      { key: "stock", label: "Số lượng" },
      { key: "createdAt", label: "Ngày tạo" },
   ];
</script>

<template>
   <MaterialTable
      title="Sản phẩm"
      :fetch="fetch"
      :data="data"
      :key-words="keyWords"
      :create="create"
      :show="update"
      :is-loading="loading"
      :columns="columns">
      <template #stock="{ row }">
         <span class="font-bold badge badge-secondary">{{ row.stock }}</span>
      </template>
      <template #categoryID="{ row }">
         <span class="font-bold badge badge-primary">{{ row.categoryID }}</span>
      </template>
      <template #createdAt="{ row }">
         {{ row.createdAt }}
      </template>
   </MaterialTable>
</template>

<style scoped></style>
