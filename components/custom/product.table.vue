<script setup lang="ts">
   import { useApiCategoryService } from "~/composables/api/category.service";
   import { useApiProductService } from "~/composables/api/product.service";
   import type { CategoryModel } from "~/composables/models/category.model";
   import type {
      ProductModel,
      ProductModifiedModel,
   } from "~/composables/models/product.model";

   const props = defineProps<{
      products: ProductModel[];
   }>();
   const { $toast } = useNuxtApp();
   const productService = useApiProductService();
   const categoryService = useApiCategoryService();
   const categories = ref([] as CategoryModel[]);
   const data: Ref<ProductModel[]> = ref([] as ProductModel[]);
   const isOpenModal = ref(false);
   const newModel: Ref<ProductModifiedModel> = ref({} as ProductModifiedModel);
   onMounted(() => {
      data.value = props.products;
      categoryService.index().then((res) => {
         categories.value = res;
      });
   });

   const fetch = () => {
      productService.index().then((res) => {
         data.value = res;
      });
   };
   const onCreate = () => {
      newModel.value.stock = 0;
      productService.save(newModel.value).then((res) => {
         $toast(`Tạo danh mục ${res.id}}`, {
            type: "success",
         });
         isOpenModal.value = false;
         fetch();
      });
   };
</script>

<template>
   <div class="flex justify-between">
      <div class=""></div>
      <div class="">
         <!-- The button to open modal -->
         <label for="create_category" class="btn btn-sm btn-primary"
            >Thêm danh mục</label
         >

         <!-- Put this part before </body> tag -->
         <input
            type="checkbox"
            id="create_category"
            class="modal-toggle"
            v-model="isOpenModal" />
         <div class="modal">
            <div class="space-y-3 modal-box">
               <h3 class="text-lg font-bold">Tạo danh mục sản phẩm!</h3>
               <form @submit.prevent="onCreate" class="space-y-3">
                  <label class="flex items-center gap-2 input input-bordered">
                     Tên
                     <input
                        type="text"
                        class="grow"
                        placeholder="Tên danh mục"
                        v-model="newModel.name" />
                  </label>
                  <label class="flex items-center gap-2 input input-bordered">
                     Giá
                     <input
                        type="number"
                        class="grow"
                        placeholder="Tên danh mục"
                        v-model="newModel.price" />
                  </label>
                  <label class="flex items-center gap-2 input input-bordered">
                     Quốc gia
                     <input
                        type="text"
                        class="grow"
                        placeholder="Tên danh mục"
                        v-model="newModel.country" />
                  </label>
                  <label class="flex items-center gap-2 input input-bordered">
                     Mô tả
                     <input
                        type="text"
                        class="grow"
                        placeholder="Tên danh mục"
                        v-model="newModel.description" />
                  </label>
                  <label class="flex items-center gap-2">
                     Danh mục
                     <select
                        class="flex-1 select select-bordered"
                        v-model="newModel.categoryId">
                        <option
                           v-for="category in categories"
                           :key="category.id"
                           :value="category.id">
                           {{ category.name }}
                        </option>
                     </select>
                  </label>
                  <div class="modal-action">
                     <label for="create" class="btn btn-primary btn-sm">
                        Tạo
                     </label>
                     <button id="create" type="submit" hidden="true"></button>
                     <label
                        for="create_category"
                        class="btn btn-sm btn-error btn-outline">
                        Hủy</label
                     >
                  </div>
               </form>
            </div>
            <label class="modal-backdrop" for="create_category">Close</label>
         </div>
      </div>
   </div>
   <table class="table table-xs table-pin-rows table-pin-cols">
      <thead>
         <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Ngày tạo</th>
            <th>Quốc gia</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="product in data">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.amount }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.created_at }}</td>
            <td>{{ product.country }}</td>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
