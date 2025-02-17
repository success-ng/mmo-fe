<script setup lang="ts">
   const route = useRoute();
   const id = Number(route.params.id);
</script>

<template>
   <section class="space-y-6">
      <CustomUserForm :id="id" />
   </section>
</template>
