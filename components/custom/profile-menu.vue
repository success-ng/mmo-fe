<script setup lang="ts">
   import { Link } from "#build/components";

   const profileItem = [
      {
         link: "/profile",
         icon: "fa6-solid:user",
         title: "Thông tin",
      },
      {
         link: "/profile/security",
         icon: "fa6-solid:user-shield",
         title: "Bảo mât",
      },
      {
         link: "/profile/history",
         icon: "fa6-solid:clock-rotate-left",
         title: "Lịch sử",
      },
      {
         Link: "/auth",
         icon: "fa6-solid:right-from-bracket",
         title: "Đăng xuất",
      },
   ];
</script>

<template>
   <div class="basis-2/12">
      <ul
         class="sticky shadow-xl top-6 menu bg-base-100 text-base-content rounded-box h-fit">
         <li v-for="item in profileItem">
            <NuxtLink :to="item.link">
               <Icon :name="item.icon" size="20" />
               {{ item.title }}
            </NuxtLink>
         </li>
      </ul>
   </div>
</template>

<style scoped></style>
