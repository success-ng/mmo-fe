<script setup lang="ts">
   import { useApiProductService } from "~/composables/api/product.service";
   import type { ProductModel } from "~/composables/models/product.model";
   import "@vueup/vue-quill/dist/vue-quill.snow.css";
   import { QuillEditor } from "@vueup/vue-quill";
   import { useApiCategoryService } from "~/composables/api/category.service";
   import type { CategoryModel } from "~/composables/models/category.model";

   const props = defineProps<{
      id?: number;
   }>();
   const { $toast } = useNuxtApp();
   const productService = useApiProductService();
   const categoryService = useApiCategoryService();
   const router = useRouter();
   const category = ref([] as CategoryModel[]);
   const product = ref({} as ProductModel);
   const isNotValid = computed(() => {
      return (
         !product.value ||
         Object.keys(product.value).length === 0 ||
         !product.value.name ||
         !product.value.price ||
         !product.value.country ||
         !product.value.categoryId ||
         !product.value.createdAt ||
         !product.value.description
      );
   });

   const fetch = () => {
      categoryService.index().then((res) => {
         category.value = res;
      });
      if (props.id) {
         productService.get(props.id).then((res) => {
            product.value = res;
            product.value.createdAt = new Date(product.value.createdAt)
               .toISOString()
               .slice(0, 16);
         });
      }
   };
   const save = () => {
      if (props.id) {
         productService.update(product.value).then((res) => {
            product.value = res;
            $toast.success("Lưu thành công");
         });
      } else {
         productService.create(product.value).then((res) => {
            product.value = res;
            $toast.success("Lưu thành công");
         });
      }
   };
   onMounted(() => {
      fetch();
   });
</script>
<template>
   <div class="card card-compact bg-base-100 drop-shadow-lg">
      <div class="card-body">
         <h3 class="card-title">Sản phẩm: {{ product.name }}</h3>
         <form @submit.prevent="save" class="grid grid-cols-2 gap-3">
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
               <select
                  v-model="product.categoryId"
                  class="select select-bordered">
                  <option disabled :value="undefined">Chọn danh mục</option>
                  <option
                     v-for="item in category"
                     :key="item.id"
                     :value="item.id">
                     {{ item.name }}
                  </option>
               </select>
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
            <div class="flex col-span-2 gap-3">
               <button type="submit" class="grow btn btn-primary">Lưu</button>
               <button
                  type="button"
                  @click="router.back()"
                  class="grow btn btn-secondary">
                  Quay lại
               </button>
            </div>
         </form>
      </div>
   </div>
</template>
