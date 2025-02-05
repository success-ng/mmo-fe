<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";

   const userService = useApiUserService();
   const isLogin = ref(true);
   onMounted(() => {
      userService.logout().then((res) => {
         console.log(res);
      });
   });
   const changeLogin = () => {
      isLogin.value = !isLogin.value;
   };
</script>

<template>
   <section class="flex items-center justify-center space-y-4">
      <div class="w-full max-w-3xl overflow-hidden shadow-lg card bg-base-100">
         <div class="relative flex-row gap-10 card-body transition-container">
            <CustomLoginForm :change="changeLogin" />
            <CustomRegisterForm :change="changeLogin" />
            <div
               class="absolute top-0 w-1/2 h-full transition-transform duration-300 transform bg-sky-500"
               :class="[isLogin ? 'right-0' : 'left-0']"></div>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
