<script setup lang="ts">
   import { useApiProductService } from "~/composables/api/product.service";
   import type { ProductModel } from "~/composables/models/product.model";
   import type { Column } from "~/composables/types/table.type";
   const data: Ref<ProductModel[]> = ref([] as ProductModel[]);
   const productService = useApiProductService();

   definePageMeta({
      layout: "admin",
   });

   const router = useRouter();
   const loading = ref(true);

   const fetch = async (params?: {}) => {
      loading.value = true;
      await productService.index(params).then((response) => {
         data.value = response;
      });
      loading.value = false;
   };

   const keyWords: Column[] = [
      { key: "name", label: "Tên sản phẩm" },
      { key: "categoryName", label: "Tên danh mục" },
      { key: "country", label: "Quốc gia" },
   ];

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
      :data="data"
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
         <p class="font-bold">{{ row.price.toLocaleString() }} đ</p>
      </template>
      <template #stock="{ row }">
         <div class="space-x-1 font-bold badge badge-outline badge-primary">
            <Icon name="fa6-solid:xmark" class="text-primary" size="10" />
            <span>
               {{ row.stock }}
            </span>
         </div>
      </template>
      <template #categoryName="{ row }">
         <p class="font-bold">{{ row.categoryName }}</p>
         <p class="">Mã danh mục: {{ row.categoryId }}</p>
      </template>
      <template #createdAt="{ row }">
         <p class="font-bold">{{ row.createdAt }}</p>
      </template>
   </MaterialTable>
</template>

<style scoped></style>
