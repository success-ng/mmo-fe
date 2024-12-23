<script setup lang="ts"></script>

<template>
   <div class="flex flex-col h-dvh bg-base-300">
      <header><UiHeader /></header>
      <div class="flex flex-col justify-between flex-1 overflow-y-auto">
         <main class="flex justify-center p-6"><slot /></main>
         <footer><UiFooter /></footer>
      </div>
   </div>
</template>

<style scoped></style>
