<script setup lang="ts"></script>

<template>
   <section class="space-y-6">
      <div class="card bg-base-100">
         <div class="items-center card-body">
            <figure class="w-64 overflow-hidden rounded-lg">
               <img
                  src="/images/404.webp"
                  alt="404"
                  class="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
            </figure>
         </div>
      </div>
      <div class="card card-compact bg-base-100">
         <div class="items-center card-body">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-squircle bg-primary/10 text-primary">
                  404
               </span>
            </div>
            <p class="mt-4 text-2xl font-semibold">
               Oops! Trang bạn tìm kiếm không tồn tại.
            </p>
            <p class="mt-2">Vui lòng kiểm tra hoặc quay lại trang chủ.</p>

            <NuxtLink
               class="px-6 py-3 mt-6 transition rounded-lg shadow-md btn btn-primary"
               to="/">
               Quay về trang chủ
            </NuxtLink>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
