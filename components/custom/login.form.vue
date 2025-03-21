<script setup lang="ts">
   import { useAuthService } from "~/composables/api/auth.service";
   import type { LoginForm } from "~/composables/forms/login.form";
   import { useUserStore } from "~/composables/stores/user.store";

   const userStore = useUserStore();
   const otp = ref(false);
   const loading = ref(false);
   const router = useRouter();
   const authService = useAuthService();
   const showPassword = ref(false);
   const loginForm = ref<LoginForm>({} as LoginForm);
   const login = async () => {
      loading.value = true;
      try {
         const data = await authService.login(loginForm.value);
         if (data.verify) {
            otp.value = true;
         } else {
            userStore.setUser(data.userInfo);
            router.back();
         }
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
               :type="showPassword ? 'text' : 'password'"
               v-model="loginForm.password"
               class="grow"
               placeholder="Password" />
            <button type="button" @click="showPassword = !showPassword">
               <Icon
                  :name="
                     showPassword ? 'fa6-solid:eye-slash' : 'fa6-solid:eye'
                  " />
            </button>
         </label>
         <label v-if="otp" class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:envelope-open-text" />
            <input
               class="grow"
               minlength="6"
               maxlength="6"
               placeholder="OTP"
               v-model="loginForm.otp" />
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
            <NuxtLink
               type="reset"
               to="/auth/register"
               class="btn btn-primary btn-sm btn-ghost text-primary">
               Đăng ký ngay
            </NuxtLink>
         </p>
         <p class="flex-none text-center">
            Quên mật khẩu?
            <NuxtLink
               type="reset"
               to="/auth/forget"
               class="btn btn-primary btn-sm btn-ghost text-primary">
               Lấy lại mật khẩu
            </NuxtLink>
         </p>
      </div>
   </form>
</template>

<style scoped></style>
