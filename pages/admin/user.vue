<script setup lang="ts">
   import type { UserModel } from "~/composables/models/user.model";
   import { useApiUserService } from "~/composables/api/user.service";

   definePageMeta({
      layout: "admin",
   });
   const userService = useApiUserService();

   const users: Ref<UserModel[]> = ref<UserModel[]>([]);
   onMounted(() => {
      userService.getUsers().then((res) => {
         users.value = res;
      });
   });
</script>

<template>
   <section class="space-y-6">
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <h3 class="card-title">Người dùng</h3>
            <CustomUserTable :users="users" />
         </div>
      </div>
   </section>
</template>

<style scoped></style>
