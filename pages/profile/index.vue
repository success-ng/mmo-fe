<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   definePageMeta({
      layout: "profile",
   });
   const userService = useApiUserService();
   const user = userService.userInfo();
   const orders = userService.userOrder();
   const transactions = userService.userTransaction();
</script>

<template>
   <div class="shadow-lg card card-compact bg-base-100">
      <figure>
         <img
            src="https://picsum.photos/seed/picsum/1920/1000"
            class="w-full h-24 overflow-hidden"
            alt="" />
      </figure>
      <div class="flex-row items-center gap-3 card-body">
         <div class="flex items-center gap-3 basis-1/2">
            <div class="avatar">
               <div class="w-24 rounded-full">
                  <img :src="user.avatar" />
               </div>
            </div>
            <div class="space-y-3">
               <h1 class="text-lg font-bold">{{ user.fullname }}</h1>
               <p class="font-bold text-base-content/50">{{ user.email }}</p>
            </div>
         </div>
         <div class="space-y-3">
            <p>
               Số dư:
               <span
                  class="gap-2 badge badge-outline badge-success text-success-content">
                  {{ user.balance }} đ
                  <Icon name="fa6-solid:coins" size="12" />
               </span>
            </p>
            <p>
               Đã thanh toán:
               <span
                  class="gap-2 badge badge-outline badge-info text-info-content">
                  {{ user.paid }} đ
                  <Icon name="fa6-solid:money-bills" size="12" />
               </span>
            </p>
            <p>
               Đã nạp:
               <span
                  class="gap-2 badge badge-outline badge-secondary text-secondary-content">
                  <Icon name="fa6-solid:money-bill-transfer" size="12" />
                  {{ user.deposit }} đ
               </span>
            </p>
         </div>
      </div>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <h1 class="card-title">Thông tin người dùng</h1>
         <div class="grid grid-cols-3">
            <label class="space-y-3">
               <p>Tên đăng nhập</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label>
            <label class="space-y-3">
               <p>Email</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label>
            <label class="space-y-3">
               <p>Số điện thoại</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label>
            <label class="space-y-3">
               <p>Họ và tên</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label>
            <label class="space-y-3">
               <p>Telegram chat id</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label>
            <label class="space-y-3">
               <p>Ngày đăng ký</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label>
            <label class="space-y-3">
               <p>Lần đăng nhập gần nhất</p>
               <input type="text" name="" id="" class="input input-bordered" />
            </label>
         </div>
      </div>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <p class="card-title">Lịch sử nạp</p>
         <div class="overflow-x-auto">
            <table class="table">
               <!-- head -->
               <thead>
                  <tr>
                     <th>Số tiền</th>
                     <th>Loại giao dịch</th>
                     <th>Loại biến động</th>
                     <th>Ngày thực hiện</th>
                     <th>Trạng thái</th>
                  </tr>
               </thead>
               <tbody>
                  <!-- row 1 -->
                  <tr v-for="transaction in transactions">
                     <td>
                        <p>{{ transaction.amount }} đ</p>
                     </td>
                     <td>
                        {{ transaction.paymentMethod }}
                     </td>
                     <td>{{ transaction.transactionType }}</td>
                     <td>{{ transaction.transactionDate }}</td>
                     <td>{{ transaction.status }}</td>
                     <th>
                        <button class="btn btn-ghost btn-xs">details</button>
                     </th>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <p class="card-title">Lịch sử mua hàng</p>
         <div class="overflow-x-auto">
            <table class="table">
               <!-- head -->
               <thead>
                  <tr>
                     <th>Id</th>
                     <th>Sản phẩm</th>
                     <th>Giá</th>
                     <th>Trạng thái</th>
                  </tr>
               </thead>
               <tbody>
                  <!-- row 1 -->
                  <tr v-for="order in orders">
                     <td>
                        <p>{{ order.id }}</p>
                     </td>
                     <td>
                        {{ order.productId }}
                     </td>
                     <td>
                        <div class="flex items-center gap-3">
                           <div class="">
                              <p>Đơn giá: {{ order.price }} đ</p>
                              <p>Số lượng: x{{ order.quantity }}</p>
                           </div>
                           <div class="">= {{ order.totalAmount }} đ</div>
                        </div>
                     </td>
                     <td>{{ order.status }}</td>
                     <th>
                        <button class="btn btn-ghost btn-xs">details</button>
                     </th>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
