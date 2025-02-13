<script setup lang="ts">
   import { QuillEditor } from "@vueup/vue-quill";
   import "@vueup/vue-quill/dist/vue-quill.snow.css";
   import type { ProductModel } from "~/composables/models/product.model";

   const save = () => {
      console.log("Save");
   };
   const { $toast } = useNuxtApp();
   const data = ref({} as ProductModel);
   const router = useRouter();
</script>

<template>
   <form @submit.prevent="save" class="grid grid-cols-3">
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:envelope" />
         <input type="text" class="grow" placeholder="Tên sản phẩm" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:user" />
         <input type="number" class="grow" placeholder="Đơn giá" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         <Icon name="fa6-solid:lock" />
         <input type="text" class="grow" placeholder="Quốc gia" />
      </label>
      <ClientOnly fallback-tag="div" fallback="Loading...">
         <QuillEditor content-type="text" toolbar="minimal" />
      </ClientOnly>
   </form>
</template>
