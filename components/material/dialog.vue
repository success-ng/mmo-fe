<script setup lang="ts">
   const props = defineProps<{
      isOpen: boolean;
   }>();

   const emit = defineEmits(["update:isOpen"]);

   const isOpenModal = ref(props.isOpen);

   watch(
      () => props.isOpen,
      (newVal) => {
         isOpenModal.value = newVal;
      }
   );

   const closeModal = () => {
      isOpenModal.value = false;
      emit("update:isOpen", false);
   };
</script>

<template>
   <div>
      <div class="modal" :class="{ 'modal-open': isOpenModal }">
         <div class="relative modal-box">
            <label
               class="absolute btn btn-sm btn-circle right-2 top-2"
               @click="closeModal"
               >✕</label
            >
            <slot>
               <h1>Hey, it works 👏🏽</h1>
            </slot>
         </div>
         <div class="modal-backdrop" @click="closeModal"></div>
      </div>
   </div>
</template>

<style scoped></style>
