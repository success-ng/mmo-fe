<script setup lang="ts">
   //  import "@vueup/vue-quill/dist/vue-quill.snow.css";
   const { content } = defineProps<{
      content: string;
   }>();
</script>

<template>
   <div v-html="content" />
</template>

<style lang="css"></style>
