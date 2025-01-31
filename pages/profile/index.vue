<script setup lang="ts">
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import { useApiUserService } from "~/composables/api/user.service";
   import type { OrderModel } from "~/composables/models/order.model ";
   import type { TransactionModel } from "~/composables/models/transaction.model ";
   import type { UserModel } from "~/composables/models/user.model";
   const userService = useApiUserService();
   const transactionService = useApiTransactionService();
   const txs: Ref<TransactionModel[]> = ref([] as TransactionModel[]);
   const orders = ref<OrderModel[]>([] as OrderModel[]);
   const user: Ref<UserModel> = ref({} as UserModel);
   onMounted(async () => {
      userService.userOrder().then((res) => {
         orders.value = res;
         console.log(orders.value);
      });
      txs.value = await transactionService.myTxs();
      user.value = await userService.profile();
   });

   const onSubmit = async (event: Event) => {
      event.preventDefault();
      await userService.updateProfile(user.value);
   };
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
                  {{ user.deposited }} đ
               </span>
            </p>
         </div>
      </div>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <form class="card-body" @submit="onSubmit">
         <h1 class="card-title">Thông tin người dùng</h1>
         <div class="grid grid-cols-3">
            <label class="space-y-3">
               <p>Tên đăng nhập</p>
               <input
                  type="text"
                  name=""
                  id=""
                  disabled
                  class="input input-bordered"
                  v-model="user.username" />
            </label>
            <label class="space-y-3">
               <p>Email</p>
               <input
                  type="text"
                  name=""
                  id=""
                  class="input input-bordered"
                  v-model="user.email" />
            </label>
            <label class="space-y-3">
               <p>Số điện thoại</p>
               <input
                  type="text"
                  name=""
                  id=""
                  class="input input-bordered"
                  v-model="user.phone" />
            </label>
            <label class="space-y-3">
               <p>Họ và tên</p>
               <input
                  type="text"
                  name=""
                  id=""
                  class="input input-bordered"
                  v-model="user.fullname" />
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
         <button class="font-bold btn btn-primary text-primary-content">
            Lưu
         </button>
      </form>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <p class="card-title">Lịch sử nạp</p>
         <div class="overflow-x-auto">
            <CustomTransactionTable :txs="txs" />
         </div>
      </div>
   </div>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <p class="card-title">Lịch sử mua hàng</p>
         <div class="overflow-x-auto">
            <CustomOrderTable :orders="orders" />
         </div>
      </div>
   </div>
</template>

<style scoped></style>
