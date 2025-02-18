<script setup lang="ts">
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";
   import "~/assets/css/main.css";
   const settingService = useApiSettingService();
   const intro = ref<SettingModel>({} as SettingModel);
   const dialog = ref<SettingModel>({} as SettingModel);
   onMounted(() => {
      settingService.getByName("INTRO").then((res) => {
         intro.value = res;
      });
      settingService.getByName("DIALOG").then((res) => {
         dialog.value = res;
      });
   });
</script>

<template>
   <section class="space-y-3">
      <div class="p-10 card bg-base-100">
         <div class="" v-html="intro.val"></div>
      </div>
      <CustomCategory />
      <MaterialDialog :is-open="true" title="Giới thiệu">
         <div class="" v-html="dialog.val"></div>
      </MaterialDialog>
   </section>
</template>
