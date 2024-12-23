<script setup lang="ts"></script>

<template>
   <div class="w-full max-w-3xl shadow-lg card bg-base-100">
      <div class="flex-row gap-10 card-body">
         <form class="space-y-4 basis-1/2 flex flex-col justify-between">
            <p class="justify-center card-title flex-none">Đăng nhập</p>
            <div class="space-y-4">
               <label class="flex items-center gap-2 input input-bordered">
                  <Icon name="fa6-solid:at" />
                  <input type="text" class="grow" placeholder="Email" />
               </label>
               <label class="flex items-center gap-2 input input-bordered">
                  <Icon name="fa6-solid:key" />
                  <input type="password" class="grow" placeholder="Input your password..." />
               </label>
            </div>
            <div class="">
               <button class="w-full btn btn-primary">Đăng nhập</button>
               <p class="flex-none text-center">Bạn chưa có tài khoản?
                  <a href="" class="btn btn-primary btn-sm btn-ghost text-primary">Đăng ký ngay</a>
               </p>
            </div>
         </form>
         <form class="space-y-4 basis-1/2">
            <p class="justify-center card-title">Đăng ký</p>
            <label class="flex items-center gap-2 input input-bordered">
               <Icon name="fa6-solid:at" />
               <input type="text" class="grow" placeholder="Email" />
            </label>
            <label class="flex items-center gap-2 input input-bordered">
               <Icon name="fa6-solid:user" />
               <input type="text" class="grow" placeholder="Username" />
            </label>
            <label class="flex items-center gap-2 input input-bordered">
               <Icon name="fa6-solid:key" />
               <input type="password" class="grow" placeholder="Input your password..." />
            </label>
            <label class="flex items-center gap-2 input input-bordered">
               <Icon name="fa6-solid:key" />
               <input type="password" class="grow" placeholder="Confirm your password..." />
            </label>
            <div class="">
               <button class="w-full btn btn-primary">Đăng ký</button>
               <p class="flex-none text-center">Bạn đã có tài khoản?
                  <a href="" class="btn btn-primary btn-sm btn-ghost text-primary">Đăng nhập ngay</a>
               </p>
            </div>
         </form>
      </div>
   </div>
</template>

<style scoped></style>
