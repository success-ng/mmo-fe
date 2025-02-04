<script setup lang="ts"></script>

<template>
   <div class="flex flex-col h-dvh bg-base-300">
      <header><UiHeader /></header>
      <div class="flex flex-col justify-between flex-1 overflow-y-auto">
         <main class="flex-1 p-3">
            <div class="flex gap-3">
               <!-- <CustomProfileMenu /> -->
               <aside class="basis-2/12">
                  <CustomUserMenu />
               </aside>
               <div class="flex-1 space-y-3">
                  <slot />
               </div>
            </div>
         </main>
         <footer><UiFooter /></footer>
      </div>
   </div>
</template>

<style scoped></style>
