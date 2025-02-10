<script setup lang="ts">
   const { onClose, onOpen } = defineProps<{
      onClose: () => void;
      onOpen: () => void;
   }>();
   const isOpen = ref(false);

   const open = () => {
      isOpen.value = true;
      onOpen();
   };

   const close = () => {
      isOpen.value = false;
      onClose();
   };
</script>
<template>
   <input
      type="checkbox"
      id="my_modal_7"
      class="modal-toggle"
      v-model="isOpen" />

   <div v-if="isOpen" class="modal" role="dialog">
      <div class="modal-box">
         <h3 class="text-lg font-bold">Hello!</h3>
         <p class="py-4">This modal works with a hidden checkbox!</p>
         <button class="btn btn-primary" @click="close">Close</button>
      </div>
      <div class="modal-backdrop" @click="close"></div>
   </div>
</template>
