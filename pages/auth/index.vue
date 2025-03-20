<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import { useUserStore } from "~/composables/stores/user.store";

   const userService = useApiUserService();
   const isLogin = ref(true);
   const userStore = useUserStore();
   onMounted(() => {
      userService.logout().then((res) => {
         userStore.$reset();
      });
   });
   const changeLogin = () => {
      isLogin.value = !isLogin.value;
   };
</script>

<template>
   <section class="flex items-center justify-center space-y-4">
      <div class="w-full max-w-lg overflow-hidden shadow-lg card bg-base-100">
         <div class="relative w-full gap-10 card-body">
            <CustomLoginForm :change="changeLogin" />
         </div>
      </div>
   </section>
</template>

<style scoped></style>
