<script setup lang="ts">
   definePageMeta({
      layout: "admin",
   });
</script>

<template>
   <section class="space-y-4">
      <div class="card bg-base-100">
         <div class="card-body">
            <h3 class="card-title">Tạo người dùng mới</h3>
            <CustomUserForm />
         </div>
      </div>
   </section>
</template>
