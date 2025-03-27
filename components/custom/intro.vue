<script setup lang="ts">
   //  import "@vueup/vue-quill/dist/vue-quill.snow.css";
   const { content } = defineProps<{
      content: string;
   }>();
</script>

<template>
   <div v-html="content" />
</template>

<style scoped>
   ::v-deep(ul li::before) {
      margin-right: 5px;
   }
   ::v-deep(ul li) {
      margin-bottom: 5px;
   }
</style>
