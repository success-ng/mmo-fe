<script setup lang="ts">
   import { trackAdsConversion } from "~/composables/core/ads";

   const router = useRouter();
   onMounted(() => {
      trackAdsConversion("AW-16967853926/cashin_success");
      setTimeout(() => {
         router.push("/profile");
      }, 2000);
   });
</script>

<template>
   <section class="flex items-center justify-center h-full">
      <div class="max-w-6xl card bg-base-100">
         <div class="items-center max-w-full align-middle card-body">
            <Icon name="fa6-regular:circle-check" size="50" class="colo" />
            <p>Giao dịch thành công</p>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
