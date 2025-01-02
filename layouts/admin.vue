<script setup lang="ts"></script>

<template>
   <div class="flex flex-col h-dvh bg-base-300">
      <header><UiHeader /></header>
      <div class="flex flex-col justify-between flex-1 overflow-y-auto">
         <main class="p-6">
            <div class="flex gap-3">
               <!-- <CustomProfileMenu /> -->
               <aside class="basis-2/12">
                  <ul class="sticky top-6 menu bg-base-100 rounded-box">
                     <li>
                        <NuxtLink to="/admin">
                           <Icon name="fa6-solid:house" />
                           Dashboard
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/admin/user">
                           <Icon name="fa6-solid:users" />
                           User
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/admin/transaction">
                           <Icon name="fa6-solid:money-bill-wave" />
                           Transaction
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink to="/admin/order">
                           <Icon name="fa6-solid:cart-shopping" />
                           Order
                        </NuxtLink>
                     </li>
                  </ul>
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
