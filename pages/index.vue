<script setup lang="ts">
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";
   import "~/assets/css/main.css";
   const settingService = useApiSettingService();
   const intro = ref<SettingModel>({} as SettingModel);
   const dialog = ref<SettingModel>({} as SettingModel);
   const loading = ref(true);
   onMounted(async () => {
      loading.value = true;
      try {
         const [introRes, dialogRes] = await Promise.all([
            settingService.getByName("INTRO"),
            settingService.getByName("DIALOG"),
         ]);
         intro.value = introRes;
         dialog.value = dialogRes;
      } finally {
         loading.value = false;
      }
   });
</script>

<template>
   <section class="space-y-3">
      <div class="p-10 card bg-base-100 drop-shadow-lg">
         <p class="" v-html="intro.val"></p>
         <div v-if="loading" class="flex justify-center">
            <span class="loading" />
         </div>
      </div>
      <CustomCategory />
      <MaterialDialog :is-open="true" title="Giới thiệu">
         <p class="" v-html="dialog.val"></p>
         <div class="flex justify-center">
            <span :class="{ loading: loading }" />
         </div>
      </MaterialDialog>
   </section>
</template>

<style scoped></style>
