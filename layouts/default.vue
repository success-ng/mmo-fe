<script setup lang="ts">
   const router = useRouter();
</script>

<template>
   <div class="flex flex-col h-dvh bg-base-300">
      <header><UiHeader /></header>
      <div class="flex flex-col justify-between flex-1 overflow-y-auto">
         <main class="flex-1 p-3">
            <div class="flex flex-col gap-3 md:flex-row">
               <!-- <CustomProfileMenu /> -->
               <aside class="basis-2/12">
                  <CustomUserMenu />
               </aside>
               <div class="flex-1 space-y-3">
                  <slot />
                  <div class="flex justify-between">
                     <button
                        @click="router.back()"
                        class="btn btn-border drop-shadow">
                        <Icon name="fa6-solid:arrow-left" />
                        Back
                     </button>
                     <button
                        @click="router.forward()"
                        class="btn btn-border drop-shadow">
                        <Icon name="fa6-solid:arrow-right" />
                        Forward
                     </button>
                  </div>
               </div>
            </div>
         </main>
         <footer><UiFooter /></footer>
      </div>
   </div>
</template>

<style scoped></style>
