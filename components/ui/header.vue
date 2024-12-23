<script setup lang="ts">
   // const themeMode = useColorMode();
</script>

<template>
   <nav class="shadow-xl navbar bg-base-100">
      <div class="flex-1">
         <!-- <a class="text-xl btn btn-ghost">daisyUI</a> -->
         <NuxtLink class="text-xl btn btn-ghost" to="/">daisyUi</NuxtLink>
      </div>
      <div class="flex-none gap-2">
         <MaterialSwitchTheme />
         <div class="form-control">
            <input
               type="text"
               placeholder="Search"
               class="w-24 input input-bordered md:w-auto" />
         </div>
         <div class="dropdown dropdown-end">
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
            <ul
               tabindex="0"
               class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               <li>
                  <NuxtLink class="justify-between" to="/profile">
                     Profile
                     <span class="badge">New</span>
                  </NuxtLink>
               </li>
               <li><a>Settings</a></li>
               <li><a>Logout</a></li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<style scoped></style>
