<script setup lang="ts">
   definePageMeta({
      layout: "admin",
   });
   const users = 3;
   const paid = 1000000;
   const deposited = 1000000;
   const product = 10;
   const selled = 10;
</script>

<template>
   <section class="space-y-6">
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <h3 class="card-title">Bảng điều khiển</h3>
            <p>Chào mừng bạn đến với bảng điều khiển</p>
            <label>
               <p>Nội dung trang chính:</p>
               <textarea
                  class="w-full h-32 textarea input-bordered"
                  placeholder="Nhập nội dung"></textarea>
            </label>
            <button class="btn btn-primary">Lưu</button>
         </div>
      </div>
      <div class="grid grid-cols-3 gap-3">
         <div class="card card-compact card-side bg-base-100">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:user" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Lượng người dùng</h3>
               <p class="text-3xl font-bold">{{ users }}</p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:cart-flatbed" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Lượng sản phẩm</h3>
               <p class="text-3xl font-bold">{{ product }}</p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:sack-dollar" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Tổng giá trị đơn hàng</h3>
               <p class="text-3xl font-bold">{{ paid.toLocaleString() }}</p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:money-bill-transfer" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Đơn hàng đã bán</h3>
               <p class="text-3xl font-bold">
                  {{ selled.toLocaleString() }}
               </p>
            </div>
         </div>

         <div class="card card-compact card-side bg-base-100">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:money-bill-wave" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Số tiền đã thanh toán</h3>
               <p class="text-3xl font-bold">{{ paid.toLocaleString() }}</p>
            </div>
         </div>
         <div class="card card-compact card-side bg-base-100">
            <div class="p-3 card-title">
               <span class="p-6 mask mask-circle bg-primary/10 text-primary">
                  <Icon name="fa6-solid:circle-dollar-to-slot" size="20" />
               </span>
            </div>
            <div class="justify-center card-body">
               <h3 class="text-current/20">Số tiền đã nạp</h3>
               <p class="text-3xl font-bold">
                  {{ deposited.toLocaleString() }}
               </p>
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
