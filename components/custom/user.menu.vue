<script setup lang="ts">
   import { useUserStore } from "~/composables/stores/user.store";
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
         to: "/profile/txs",
         icon: "fa6-solid:circle-dollar-to-slot",
         name: "Giao dịch",
      },
      {
         to: "/profile/order",
         icon: "fa6-solid:cart-shopping",
         name: "Đơn hàng",
      },
      {
         to: "/contact",
         icon: "fa6-solid:envelope",
         name: "Liên hệ",
      },
   ];
   const isOpenModal = ref(false);
   const changeModal = async () => {
      isOpenModal.value = !isOpenModal.value;
   };

   const userStore = useUserStore();
   const { isLoggedIn } = storeToRefs(userStore);
   watch(isLoggedIn, (val) => {
      console.log("Login state changed:", val);
   });
</script>

<template>
   <ul
      class="sticky flex flex-row flex-wrap justify-between drop-shadow-lg top-3 menu menu-md bg-base-100 rounded-box lg:block">
      <li v-for="link in links">
         <NuxtLink :to="link.to">
            <Icon :name="link.icon" class="basis-1/4" />
            <span class="hidden font-bold text md:block">
               {{ link.name }}
            </span>
         </NuxtLink>
      </li>
      <ClientOnly>
         <li v-if="isLoggedIn">
            <NuxtLink @click="changeModal" class="text-error">
               <Icon name="fa6-solid:right-from-bracket" class="basis-1/4" />
               <span class="hidden font-bold md:block">Đăng xuất</span>
            </NuxtLink>
         </li>
         <li v-else>
            <NuxtLink to="/auth" class="text-success">
               <Icon name="fa6-solid:right-from-bracket" class="basis-1/4" />
               <span class="hidden font-bold md:block">Đăng nhập</span>
            </NuxtLink>
         </li>
      </ClientOnly>
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
