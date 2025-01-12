<script setup lang="ts"></script>

<template>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="space-y-3 card-body">
         <h1 class="card-title">Bảo mật tài khoản</h1>
         <div class="grid grid-cols-2 gap-4">
            <label class="">Xác minh đăng nhập bằng OTP</label>
            <input type="checkbox" class="toggle" />
            <label class="">Gửi thông báo khi đăng nhập thành công:</label>
            <input type="checkbox" class="toggle" />
         </div>
         <button class="btn btn-primary btn-md">Cập nhật</button>
      </div>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <h1 class="card-title">Thay đổi mật khẩu</h1>
         <form @submit.prevent="" class="grid grid-cols-3 gap-3">
            <label for="">Mật khẩu hiện tại</label>
            <label for="">Mật khẩu mới</label>
            <label for="">Nhập lại mật khẩu mới</label>
            <input type="password_1" name="" class="input input-bordered" />
            <input type="password" name="" class="input input-bordered" />
            <input type="password" name="" class="input input-bordered" />
         </form>
         <button class="btn btn-primary btn-md">Cập nhật</button>
      </div>
   </div>
</template>

<style scoped></style>
