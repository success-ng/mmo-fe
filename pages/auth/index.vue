<script setup lang="ts"></script>

<template>
   <div class="grid grid-cols-12">
      <div class="col-span-7 shadow-lg card card-compact bg-base-100">
         <div class="flex-row gap-3 card-body">
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
                  <input
                     type="password"
                     class="grow"
                     placeholder="Input your password..." />
               </label>
               <label class="flex items-center gap-2 input input-bordered">
                  <Icon name="fa6-solid:key" />
                  <input
                     type="password"
                     class="grow"
                     placeholder="Confirm your password..." />
               </label>
               <button class="w-full btn btn-primary">Đăng ký</button>
            </form>
            <form action="" class="basis-1/2">
               <p class="justify-center card-title">Đăng ký</p>
            </form>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
