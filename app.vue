<script setup lang="ts">
   import { trackAdsPageView } from "~/composables/core/ads";

   const route = useRoute();

   onMounted(() => {
      trackAdsPageView(route.fullPath);
   });

   watch(
      () => route.fullPath,
      (path) => {
         trackAdsPageView(path);
      },
   );
</script>

<template>
   <div>
      <NuxtRouteAnnouncer />
   </div>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<style>
   body {
      font-family:
         "Roboto",
         "Noto Sans",
         system-ui,
         -apple-system,
         "Segoe UI",
         "Helvetica Neue",
         "Liberation Sans",
         Arial,
         sans-serif;
   }
</style>
