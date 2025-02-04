<script setup lang="ts">
   const route = useRoute();
   const id = ref(route.params.id);
</script>

<template>
   <section class="space-y-6">
      <div class="items-center card bg-base-100">
         <div class="items-center p-10 space-y-4 card-body">
            <Icon
               name="fa6-regular:circle-check"
               size="50"
               class="text-success" />
            <h3 class="card-title">Giao dịch thành công</h3>
            <p class="text-center">
               Vui lòng kiểm tra đơn hàng
               <a
                  href="http://localhost:3000/profile#order-table"
                  class="link badge badge-primary"
                  >Tại đây</a
               >!
               <br />
               Chú ý không chia sẻ thông tin với người khác để tránh gây ra rủi
               ro cho tài khoản của bạn.
            </p>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
