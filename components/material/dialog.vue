<script setup lang="ts">
   const { onClose, onOpen, onSave } = defineProps<{
      class?: any;
      title: string;
      showModal?: boolean;
      onClose?: () => void;
      onOpen?: () => void;
      onSave: () => void;
   }>();

   const showModal = ref(false);

   const open = () => {
      if (onOpen) onOpen();
      showModal.value = !showModal.value;
   };

   const close = () => {
      if (onClose) onClose();
      showModal.value = !showModal.value;
   };

   const save = () => {
      onSave();
      showModal.value = !showModal.value;
   };
</script>

<template>
   <button :class="class" @click="open">
      <slot name="btn-content">Toggle modal</slot>
   </button>
   <div class="modal" :class="{ 'modal-open': showModal }">
      <div class="modal-box">
         <h3 class="text-lg font-bold">{{ title }}</h3>
         <slot name="modal-content">
            <p class="py-4">Content</p>
         </slot>
         <div class="modal-action">
            <button class="btn btn-success" @click="save">Save</button>
            <button class="btn btn-error" @click="close">Close</button>
         </div>
      </div>
      <form method="dialog" class="modal-backdrop">
         <button @click="close">close</button>
      </form>
   </div>
</template>
