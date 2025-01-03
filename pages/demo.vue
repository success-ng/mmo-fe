<script setup>
   onMounted(() => {
      const { $toast } = useNuxtApp();
      $toast("notify on mounted");
   });

   const notify = () => {
      const { $toast } = useNuxtApp();
      $toast.info("toastify success");
   };
</script>

<template>
   <button @click="notify">notify by click</button>
</template>
