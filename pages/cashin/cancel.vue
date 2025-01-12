<script setup lang="ts">
   const route = useRoute();
</script>

<template>
   <section class="flex justify-center">
      <div class="max-w-6xl card bg-base-100">
         <div class="items-center align-middle card-body">
            <Icon
               name="fa6-regular:circle-check"
               size="50"
               class="bg-success" />
            <p>Giao dịch thành công</p>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
