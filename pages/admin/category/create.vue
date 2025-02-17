<script setup lang="ts">
   definePageMeta({
      layout: "admin",
   });
</script>
<template>
   <section class="space-y-6">
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <h3 class="card-title">Create</h3>
            <CustomCategoryForm />
         </div>
      </div>
   </section>
</template>
