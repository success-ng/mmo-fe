<script setup lang="ts">
   import type { SettingModel } from "~/composables/models/setting.model";

   definePageMeta({
      layout: "admin",
   });
</script>
<template>
   <section class="space-y-6">
      <CustomSettingForm />
   </section>
</template>
