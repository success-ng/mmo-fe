<script setup lang="ts">
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";
   import type { Column } from "~/composables/types/table.type";

   definePageMeta({
      layout: "admin",
   });
   const settingService = useApiSettingService();
   const router = useRouter();

   const isLoading = ref(true);
   const settings = ref<SettingModel[]>([] as SettingModel[]);
   const fetch = async () => {
      isLoading.value = true;
      settings.value = await settingService.index().then((res) => {
         return res;
      });
      isLoading.value = false;
   };
   const show = async (id: number) => {
      router.push(`/admin/setting/${id}`);
   };
   const create = async () => {
      router.push(`/admin/setting/create`);
   };
   const columns: Column[] = [
      { key: "id", label: "#" },
      { key: "name", label: "Tên" },
      { key: "description", label: "Mô tả" },
      { key: "val", label: "Giá trị" },
   ];
</script>

<template>
   <section class="space-y-6">
      <MaterialTable
         title="Cài đặt"
         :data="settings"
         :fetch="fetch"
         :columns="columns"
         :isLoading="isLoading"
         :create="create"
         :show="show">
         <template #name="{ row }">
            <span class="font-bold">{{ row.name }}</span>
         </template>
         <template #description="{ row }">
            <span class="font-bold">{{ row.description }}</span>
         </template>
         <template #val="{ row }">
            <span class="" v-html="row.val" />
         </template>
      </MaterialTable>
   </section>
</template>

<style scoped></style>
