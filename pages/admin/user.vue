<script setup lang="ts">
   definePageMeta({
      layout: "admin",
   });
</script>

<template>
   <section class="space-y-6">
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <CustomUserTable />
         </div>
      </div>
   </section>
</template>

<style scoped></style>
