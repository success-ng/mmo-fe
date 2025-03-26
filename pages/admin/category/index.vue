<script setup lang="ts">
   import { useApiCategoryService } from "~/composables/api/category.service";
   import type { Column } from "~/composables/types/table.type";

   definePageMeta({
      layout: "admin",
   });
   const { $toast } = useNuxtApp();
   const categoryService = useApiCategoryService();
   const data = ref([]);
   const isLoading = ref(true);
   const columns: Column[] = [
      { key: "id", label: "#" },
      { key: "name", label: "Tên" },
      { key: "description", label: "Mô tả" },
      { key: "productCount", label: "Số loại via" },
   ];

   const router = useRouter();

   const fetch = async () => {
      isLoading.value = true;
      await categoryService.index().then((res) => {
         data.value = res;
      });
      isLoading.value = false;
   };
   const create = async () => {
      router.push("/admin/category/create");
   };

   const show = async (id: number) => {
      router.push(`/admin/category/${id}`);
   };

   const edit = async (model: any) => {
      await categoryService
         .update(model)
         .then(() => {
            fetch();
            $toast(`Cập nhật thành công ${model.id}`, {
               type: "success",
            });
         })
         .catch((err) => {
            $toast(err.message, {
               type: "error",
            });
         });
   };

   const remove = async (id: number) => {
      await categoryService
         .remove(id)
         .then(() => {
            fetch();
            $toast(`Xóa thành công ${id}`, {
               type: "success",
            });
         })
         .catch((err) => {
            $toast(err.message, {
               type: "error",
            });
         });
   };
</script>

<template>
   <section>
      <MaterialTable
         :is-loading="isLoading"
         title="Danh mục"
         :data="data"
         :fetch="fetch"
         :create="create"
         :show="show"
         :edit="edit"
         :remove="remove"
         :columns="columns">
         <template #productCount="{ row }">
            <div class="space-x-1 font-bold badge badge-outline badge-primary">
               <Icon name="fa6-solid:xmark" class="text-primary" size="10" />
               <span>
                  {{ row.products.length }}
               </span>
            </div>
         </template>
      </MaterialTable>
   </section>
</template>

<style scoped></style>
