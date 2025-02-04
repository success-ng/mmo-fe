<script setup lang="ts">
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";

   const settingService = useApiSettingService();
   const intro = ref<SettingModel>({} as SettingModel);

   onMounted(() => {
      settingService.getByName("INTRO").then((res) => {
         intro.value = res;
      });
   });
</script>

<template>
   <section class="space-y-4">
      <div class="p-10 card bg-base-100">
         <pre class="font-sans text-base text text-pretty">
            {{ intro.val }}
         </pre>
      </div>
      <CustomCategory />
      <!-- <div class="p-10 space-y-4 card bg-base-100 text-base-content">
      </div> -->
   </section>
</template>
