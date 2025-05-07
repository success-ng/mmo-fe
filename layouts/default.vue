<script setup lang="ts">
   const router = useRouter();
</script>

<template>
   <div class="flex flex-col h-dvh bg-base-300">
      <header><UiHeader /></header>
      <!-- Ví dụ góc phải dưới -->
      <div class="fixed z-50 flex flex-col gap-3 bottom-4 right-4">
         <a
            target="_blank"
            href="https://zalo.me/g/etlzlc963"
            class="flex items-center gap-2 p-3 text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700">
            <Icon name="fa6-solid:phone" />
            Liên hệ Zalo
         </a>
         <a
            target="_blank"
            href="https://t.me/Viabmtrust"
            class="flex items-center gap-2 p-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600">
            <Icon name="fa6-brands:telegram" />
            Liên hệ Telegram
         </a>
      </div>

      <div
         class="flex flex-col justify-between flex-1 overflow-y-auto"
         style="-webkit-overflow-scrolling: touch">
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
