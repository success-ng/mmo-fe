<script setup lang="ts">
   const router = useRouter();
   useHead({
      meta: [{ name: "robots", content: "noindex, nofollow" }],
   });
</script>

<template>
   <div class="flex flex-col h-dvh bg-base-300">
      <header><UiHeader /></header>
      <div
         class="flex overflow-y-auto flex-col flex-1 justify-between"
         style="-webkit-overflow-scrolling: touch">
         <main class="p-3">
            <div class="flex flex-col gap-3 lg:flex-row">
               <!-- <CustomProfileMenu /> -->
               <aside class="basis-2/12">
                  <CustomAdminMenu />
               </aside>
               <div class="flex-1 space-y-3">
                  <slot />
                  <div class="flex justify-between">
                     <button
                        @click="router.back()"
                        class="drop-shadow btn btn-border">
                        <Icon name="fa6-solid:arrow-left" />
                        Back
                     </button>
                     <button
                        @click="router.forward()"
                        class="drop-shadow btn btn-border">
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
