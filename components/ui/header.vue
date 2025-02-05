<script setup lang="ts">
   // const themeMode = useColorMode();
</script>

<template>
   <nav class="items-center justify-between shadow-xl navbar bg-base-100">
      <div class="">
         <!-- <a class="text-xl btn btn-ghost">daisyUI</a> -->
         <NuxtLink class="text-xl btn btn-ghost" to="/">
            <figure class="w-12">
               <img
                  src="/public/images/3a4bfe3d-5773-4f82-a8ca-4a43baa95383.jpg"
                  alt=""
                  height="18" />
            </figure>
            ViaClone68
         </NuxtLink>
      </div>
      <ul class="flex gap-3">
         <li>
            <NuxtLink to="/admin" class="btn btn-ghost">Admin</NuxtLink>
         </li>
      </ul>
      <div class="flex-none gap-2">
         <MaterialSwitchTheme />
         <!-- <div class="form-control">
            <input
               type="text"
               placeholder="Search"
               class="w-24 input input-bordered md:w-auto" />
         </div> -->
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
