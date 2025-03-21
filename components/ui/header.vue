<script setup lang="ts">
   import { useUserStore } from "~/composables/stores/user.store";

   const userStore = useUserStore();
   const role = computed(() => userStore.getRole);
   const username = computed(() => userStore.getUserName);
   const balance = computed(() => userStore.getBalance);
</script>

<template>
   <nav class="items-center justify-between shadow-xl navbar bg-base-100">
      <div class="">
         <!-- <a class="text-xl btn btn-ghost">daisyUI</a> -->
         <NuxtLink class="text-xl btn btn-ghost" to="/">
            <figure class="w-12">
               <img src="/public/images/icon.png" alt="" height="18" />
            </figure>
            ViaClone68
         </NuxtLink>
      </div>
      <ClientOnly>
         <div class="flex gap-3" v-if="role == 'ADMIN'">
            <NuxtLink to="/admin" class="btn btn-ghost">Admin</NuxtLink>
         </div>
      </ClientOnly>
      <div class="flex-none gap-2">
         <MaterialSwitchTheme />
         <div>
            <div class="font-bold">{{ username }}</div>
            <div class="text-sm opacity-50">Số dư: {{ balance }} VND</div>
         </div>
         <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
               <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
         </div>
      </div>
   </nav>
</template>

<style scoped></style>
