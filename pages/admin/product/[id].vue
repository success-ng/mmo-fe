<script setup lang="ts">
   import { QuillEditor } from "@vueup/vue-quill";
   import { useApiProductService } from "~/composables/api/product.service";
   import type { ProductModel } from "~/composables/models/product.model";
   import "@vueup/vue-quill/dist/vue-quill.snow.css";

   definePageMeta({
      layout: "admin",
   });
   const router = useRoute();

   const product: Ref<ProductModel> = ref({} as ProductModel);
   const productService = useApiProductService();
   const fetch = async () => {
      const id = Number(router.params.id);
      product.value = await productService.get(id);
      product.value.createdAt = new Date(product.value.createdAt)
         .toISOString()
         .slice(0, 16);
   };
   onMounted(() => {
      fetch();
   });
</script>

<template>
   <section class="space-y-3">
      <div class="card card-compact bg-base-100 drop-shadow-lg">
         <div class="card-body">
            <h3 class="card-title">Sản phẩm: {{ product.name }}</h3>
            <form @submit.prevent="() => {}" class="grid grid-cols-2 gap-3">
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Tên sản phẩm: </span>
                  </div>
                  <input
                     type="text"
                     v-model="product.name"
                     class="input input-bordered" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Giá sản phẩm: </span>
                  </div>
                  <input
                     type="number"
                     v-model="product.price"
                     class="input input-bordered" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Quốc gia: </span>
                  </div>
                  <input
                     type="text"
                     v-model="product.country"
                     class="input input-bordered" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Danh mục: </span>
                  </div>
                  <input
                     type="number"
                     v-model="product.categoryID"
                     class="input input-bordered" />
               </label>
               <label class="w-full max-w-xs form-control">
                  <div class="label">
                     <span class="label-text"> Ngày tạo: </span>
                  </div>
                  <input
                     type="datetime-local"
                     v-model="product.createdAt"
                     class="input input-bordered" />
               </label>

               <label class="col-span-2 form-control">
                  <div class="label">
                     <span class="label-text"> Mô tả: </span>
                  </div>
                  <ClientOnly fallback="Loading..." fallback-tag="div">
                     <QuillEditor
                        content-type="html"
                        toolbar="full"
                        v-model:content="product.description">
                     </QuillEditor>
                  </ClientOnly>
               </label>
               <div class="flex col-span-2">
                  <button class="grow btn btn-primary">Lưu</button>
               </div>
            </form>
         </div>
      </div>
   </section>
</template>
