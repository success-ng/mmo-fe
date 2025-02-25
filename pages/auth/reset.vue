<script setup lang="ts">
   const { $toast } = useNuxtApp();
</script>
<template>
   <section class="flex items-center justify-center space-y-4">
      <div class="w-full max-w-lg overflow-hidden shadow-lg card bg-base-100">
         <div class="relative w-full gap-10 card-body">
            <CustomResetForm />
         </div>
      </div>
   </section>
</template>
