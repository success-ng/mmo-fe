<script setup lang="ts">
   const links = [
      {
         name: "Home",
         icon: "fa6-solid:house",
         to: "/",
      },
      {
         name: "Nạp tiền",
         icon: "fa6-solid:coins",
         to: "/cashin",
      },
      {
         to: "/profile",
         icon: "fa6-solid:user",
         name: "Thông tin",
      },
      {
         to: "/profile/security",
         icon: "fa6-solid:user-shield",
         name: "Bảo mât",
      },
      {
         to: "/profile/history",
         icon: "fa6-solid:clock-rotate-left",
         name: "Lịch sử",
      },
      {
         to: "/auth",
         icon: "fa6-solid:right-from-bracket",
         name: "Đăng xuất",
      },
   ];
</script>

<template>
   <div class="flex flex-col h-dvh bg-base-300">
      <header><UiHeader /></header>
      <div class="flex flex-col justify-between flex-1 overflow-y-auto">
         <main class="p-3">
            <div class="flex gap-3">
               <!-- <CustomProfileMenu /> -->
               <aside class="basis-2/12">
                  <ul class="sticky top-3 menu bg-base-100 rounded-box">
                     <li v-for="link in links">
                        <NuxtLink :to="link.to">
                           <Icon :name="link.icon" />
                           {{ link.name }}
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
