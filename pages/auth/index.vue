<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";

   const userService = useApiUserService();
   onMounted(() => {
      userService.logout().then((res) => {
         console.log(res);
      });
   });
</script>

<template>
   <section class="flex items-center justify-center space-y-4">
      <div class="w-full max-w-3xl shadow-lg card bg-base-100">
         <div class="flex-row gap-10 card-body">
            <CustomLoginForm />
            <CustomRegisterForm />
         </div>
      </div>
   </section>
</template>

<style scoped></style>
