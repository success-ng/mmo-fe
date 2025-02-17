<script setup lang="ts">
   import { QuillEditor } from "@vueup/vue-quill";
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";

   definePageMeta({
      layout: "admin",
   });
   const route = useRoute();

   const id = Number(route.params.id);
</script>
<template>
   <section class="space-y-6">
      <CustomSettingForm :id="id" />
   </section>
</template>
