<script setup lang="ts">
   import { useAuthService } from "~/composables/api/auth.service";
   import type { LoginForm } from "~/composables/forms/login.form";

   const { change } = defineProps<{
      change: () => void;
   }>();

   const loading = ref(false);
   const router = useRouter();
   const authService = useAuthService();
   const loginForm = ref<LoginForm>({
      username: "",
      password: "",
   });
   const login = async () => {
      loading.value = true;
      try {
         await authService.login(loginForm.value);
         router.back();
      } catch (error) {
         console.error(error);
      }
      loading.value = false;
   };
</script>

<template>
   <form class="flex flex-col justify-center space-y-4" @submit.prevent="login">
      <p class="justify-center flex-none card-title">Đăng nhập</p>
      <div class="space-y-4">
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:at" />
            <input
               type="text"
               class="grow"
               placeholder="Username"
               v-model="loginForm.username" />
         </label>
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:key" />
            <input
               v-model="loginForm.password"
               type="password"
               class="grow"
               placeholder="Password" />
         </label>
      </div>
      <div class="">
         <button
            type="submit"
            class="w-full btn btn-primary"
            :disabled="loading">
            <span v-if="loading" class="loading loading-spinner loading-sm" />
            <span v-else> Đăng nhập </span>
         </button>
         <p class="flex-none text-center">
            Bạn chưa có tài khoản?
            <button
               type="reset"
               @click="router.push('/auth/register')"
               class="btn btn-primary btn-sm btn-ghost text-primary">
               Đăng ký ngay
            </button>
         </p>
         <p class="flex-none text-center">
            Quên mật khẩu?
            <button
               type="reset"
               @click="router.push('/auth/forget')"
               class="btn btn-primary btn-sm btn-ghost text-primary">
               Lấy lại mật khẩu
            </button>
         </p>
      </div>
   </form>
</template>

<style scoped></style>
