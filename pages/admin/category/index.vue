<script setup lang="ts">
   import { routerKey } from "vue-router";
   import CategoryTable from "~/components/custom/category.table.vue";
   import { useApiCategoryService } from "~/composables/api/category.service";
   import type { CategoryModel } from "~/composables/models/category.model";

   definePageMeta({
      layout: "admin",
   });
   const { $toast } = useNuxtApp();
   const categoryService = useApiCategoryService();
   const data = ref([]);
   const isLoading = ref(true);
   const columns = [
      { key: "id", label: "#" },
      { key: "name", label: "Tên" },
      { key: "description", label: "Mô tả" },
   ];

   const router = useRouter();

   const fetch = async () => {
      isLoading.value = true;
      categoryService.index().then((res) => {
         data.value = res;
         isLoading.value = false;
      });
   };
   const create = async () => {
      router.push("/admin/category/create");
   };

   const show = async (id: number) => {
      router.push(`/admin/category/${id}`);
   };

   const edit = async (model: any) => {
      await categoryService.update(model);
   };

   const remove = async (id: number) => {
      await categoryService.remove(id);
   };

   onMounted(() => {
      fetch();
   });
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
      </MaterialTable>
   </section>
</template>

<style scoped></style>
