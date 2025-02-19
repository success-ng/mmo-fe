<script setup lang="ts">
   const links = [
      {
         name: "Home",
         icon: "fa6-solid:house",
         to: "/admin/",
      },
      {
         name: "Cài đặt",
         icon: "fa6-solid:wrench",
         to: "/admin/setting",
      },
      {
         name: "Người dùng",
         icon: "fa6-solid:users",
         to: "/admin/user",
      },
      {
         name: "Danh mục",
         icon: "fa6-solid:clipboard-list",
         to: "/admin/category",
      },
      {
         name: "Sản phẩm",
         icon: "fa6-solid:user",
         to: "/admin/product",
      },
      {
         name: "Giao dịch",
         icon: "fa6-solid:money-bill-wave",
         to: "/admin/transaction",
      },
      {
         name: "Đơn hàng",
         icon: "fa6-solid:clock-rotate-left",
         to: "/admin/order",
      },
      {
         to: "/auth",
         icon: "fa6-solid:right-from-bracket",
         name: "Đăng xuất",
      },
   ];
</script>

<template>
   <ul
      class="sticky flex flex-row flex-wrap justify-between drop-shadow-lg top-3 menu menu-md bg-base-100 rounded-box lg:block">
      <li v-for="link in links">
         <NuxtLink :to="link.to">
            <Icon :name="link.icon" class="basis-1/4" />
            <span class="hidden md:block">
               {{ link.name }}
            </span>
         </NuxtLink>
      </li>
   </ul>
</template>

<style scoped></style>
