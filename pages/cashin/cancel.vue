<script setup lang="ts">
   const router = useRouter();
</script>

<template>
   <section class="flex justify-center">
      <div class="max-w-6xl card bg-base-100">
         <div class="items-center align-middle card-body">
            <Icon name="fa6-regular:circle-xmark" size="50" class="bg-error" />
            <p>Giao dịch đã bị hủy</p>
         </div>
         <button class="btn btn-ghost" @click="router.push('/profile')">
            Quay lại
         </button>
      </div>
   </section>
</template>

<style scoped></style>
