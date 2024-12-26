<script setup lang="ts"></script>

<template>
   <form class="flex flex-col justify-between space-y-4 basis-1/2">
      <p class="justify-center flex-none card-title">Đăng nhập</p>
      <div class="space-y-4">
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:at" />
            <input type="text" class="grow" placeholder="Email" />
         </label>
         <label class="flex items-center gap-2 input input-bordered">
            <Icon name="fa6-solid:key" />
            <input
               type="password"
               class="grow"
               placeholder="Input your password..." />
         </label>
      </div>
      <div class="">
         <button class="w-full btn btn-primary">Đăng nhập</button>
         <p class="flex-none text-center">
            Bạn chưa có tài khoản?
            <a href="" class="btn btn-primary btn-sm btn-ghost text-primary"
               >Đăng ký ngay</a
            >
         </p>
      </div>
   </form>
</template>

<style scoped></style>
