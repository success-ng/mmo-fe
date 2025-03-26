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
   ];
   const isOpenModal = ref(false);
   const changeModal = async () => {
      isOpenModal.value = !isOpenModal.value;
   };
</script>

<template>
   <ul
      class="sticky flex flex-row flex-wrap justify-between drop-shadow-lg top-3 menu bg-base-100 rounded-box lg:block">
      <li v-for="link in links">
         <NuxtLink :to="link.to">
            <Icon :name="link.icon" class="basis-1/4" />
            <span class="hidden font-bold md:block">
               {{ link.name }}
            </span>
         </NuxtLink>
      </li>
      <li>
         <NuxtLink @click="changeModal" class="text-error">
            <Icon name="fa6-solid:right-from-bracket" class="basis-1/4" />
            <span class="hidden font-bold md:block">Đăng xuất</span>
         </NuxtLink>
      </li>
   </ul>
   <dialog class="modal" :class="{ 'modal-open': isOpenModal }">
      <div class="relative modal-box">
         <label
            class="absolute btn btn-sm btn-circle right-2 top-2"
            @click="changeModal"
            >✕</label
         >
         <h2 class="card-title">Bạn có chắc chắn muốn đăng xuất!</h2>
         <div class="modal-action">
            <NuxtLink class="btn btn-success" to="/auth" @click="changeModal">
               Đăng xuất
            </NuxtLink>
            <button class="btn btn-error" @click="changeModal">Hủy</button>
         </div>
         <div class="modal-backdrop" @click="changeModal"></div>
      </div>
   </dialog>
</template>

<style scoped></style>
