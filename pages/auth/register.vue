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
      <div class="w-full max-w-lg overflow-hidden shadow-lg card bg-base-100">
         <div class="relative gap-10 card-body transition-container">
            <CustomRegisterForm :change="changeLogin" />
         </div>
      </div>
   </section>
</template>
