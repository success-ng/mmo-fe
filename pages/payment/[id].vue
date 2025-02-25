<script setup lang="ts">
   const route = useRoute();
   const id = ref(route.params.id);
   const vias = ref(route.query.productString?.toString().split("\n"));

   const { $toast } = useNuxtApp();
   const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      $toast("Đã copy via vào clipboard, CTRL+V để dán!!!", {
         type: "success",
      });
   };
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
            <div class="join join-vertical">
               <button
                  class="btn btn-sm btn-outline join-item"
                  v-for="via in vias"
                  @click="copyToClipboard(via)">
                  {{ via }}
               </button>
            </div>
            <p class="text-center">
               Vui lòng kiểm tra đơn hàng
               <NuxtLink href="/profile/order" class="link badge badge-primary"
                  >Tại đây</NuxtLink
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
