<script setup lang="ts">
   import { useApiProductService } from "~/composables/api/product.service";
   import { useApiUserService } from "~/composables/api/user.service";
   import type { ProductModel } from "~/composables/models/product.model";
   const data: Ref<ProductModel[]> = ref([] as ProductModel[]);
   const productService = useApiProductService();

   const userService = useApiUserService();
   definePageMeta({
      layout: "admin",
   });

   const router = useRouter();
   const fetch = async () => {
      loading.value = true;
      productService.index().then((response) => {
         loading.value = false;
         data.value = response;
      });
   };

   const create = async () => {
      router.push("/admin/product/create");
   };

   const update = async (model: ProductModel) => {
      router.push(`/admin/product/${model.id}`);
   };
   const loading = ref(true);

   onMounted(() => {
      userService.getUsers().then((res) => {
         console.log(res);
      });
   });
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
      :fetch="fetch"
      :data="data"
      :create="create"
      :edit="update"
      :is-loading="loading"
      :columns="columns">
      <template #id="{ row }">
         <span class="font-bold">{{ row.id }}</span>
      </template>
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
