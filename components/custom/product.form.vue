<script lang="ts" setup>
   import { useApiCategoryService } from "~/composables/api/category.service";
   import { useApiProductService } from "~/composables/api/product.service";
   import type { CategoryModel } from "~/composables/models/category.model";
   import type { ProductModel } from "~/composables/models/product.model";

   const { isOpenModal, onCreate } = defineProps<{
      isOpenModal: boolean;
      onCreate: (model: ProductModel) => void;
   }>();
   const categoryService = useApiCategoryService();
   const categories = ref([] as CategoryModel[]);
   const newModel: Ref<ProductModel> = ref({} as ProductModel);
   onMounted(() => {
      categoryService.index().then((res) => {
         categories.value = res;
      });
   });
</script>
<template>
   <form @submit.prevent="onCreate(newModel)" class="space-y-3">
      <label class="flex items-center gap-2 input input-bordered">
         Tên
         <input
            type="text"
            class="grow"
            placeholder="Tên sản phẩm"
            v-model="newModel.name" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         Giá
         <input
            type="number"
            class="grow"
            placeholder="Tên sản phẩm"
            v-model="newModel.price" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         Quốc gia
         <input
            type="text"
            class="grow"
            placeholder="Tên sản phẩm"
            v-model="newModel.country" />
      </label>
      <label class="flex items-center gap-2 input input-bordered">
         Mô tả
         <input
            type="text"
            class="grow"
            placeholder="Tên sản phẩm"
            v-model="newModel.description" />
      </label>
      <label class="flex items-center gap-2">
         Danh mục
         <select
            class="flex-1 select select-bordered"
            v-model="newModel.categoryID">
            <option
               v-for="category in categories"
               :key="category.id"
               :value="category.id">
               {{ category.name }}
            </option>
         </select>
      </label>
      <div class="modal-action">
         <label for="create" class="btn btn-primary btn-sm"> Tạo </label>
         <button id="create" type="submit" hidden="true"></button>
         <label for="create_category" class="btn btn-sm btn-error btn-outline">
            Hủy</label
         >
      </div>
   </form>
</template>
