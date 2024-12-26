<script setup lang="ts">
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
   ];
</script>

<template>
   <ul
      class="w-56 shadow-xl -z-10 menu bg-base-100 text-base-content rounded-box h-fit">
      <li v-for="item in profileItem">
         <NuxtLink :to="item.link">
            <Icon :name="item.icon" size="20" />
            {{ item.title }}
         </NuxtLink>
      </li>
      <li>
         <NuxtLink class="">
            <Icon name="fa6-solid:right-from-bracket" size="20" />
            Đăng xuất
         </NuxtLink>
      </li>
   </ul>
</template>

<style scoped></style>
