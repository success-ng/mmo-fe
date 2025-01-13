<script setup lang="ts">
   const { btn, submitBtn } = defineProps<{
      submit?: () => void;
      btn: string;
      submitBtn?: string;
      class?: string | undefined;
   }>();
   const isOpen = ref(false);
</script>

<template>
   <label for="my_modal_7" :class="class">{{ btn }}</label>

   <!-- Put this part before </body> tag -->
   <input
      type="checkbox"
      id="my_modal_7"
      class="modal-toggle"
      v-model="isOpen" />
   <div class="modal" role="dialog">
      <div class="space-y-3 modal-box">
         <slot name="content" />
         <div class="modal-action">
            <label
               class="btn btn-sm btn-outline btn-primary"
               for="my_modal_7"
               @click="submit">
               {{ submitBtn || "Save" }}
            </label>
            <label class="btn btn-sm btn-outline btn-error" for="my_modal_7"
               >Close</label
            >
         </div>
      </div>
      <label class="modal-backdrop" for="my_modal_7">Close</label>
   </div>
</template>
