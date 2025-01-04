<script setup lang="ts">
   import { useApiCategoryService } from "~/composables/api/category.service";
   import type { CategoryModel } from "~/composables/models/category.model";

   const categoryService = useApiCategoryService();
   const categories = ref([] as CategoryModel[]);
   const router = useRouter();
   const { $toast } = useNuxtApp();

   const fetch = () => {
      categoryService.index().then((res) => {
         categories.value = res;
      });
   };
   const isOpenModal = ref(false);
   onMounted(() => {
      fetch();
   });
   const newCategory: Ref<CategoryModel> = ref({} as CategoryModel);

   const onCreate = () => {
      categoryService.save(newCategory.value).then((res) => {
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
                        v-model="newCategory.name" />
                  </label>
                  <label class="flex items-center gap-2 input input-bordered">
                     Mô tả
                     <input
                        type="text"
                        class="grow"
                        placeholder="Tên danh mục"
                        v-model="newCategory.description" />
                  </label>
                  <div class="modal-action">
                     <label for="create" class="btn btn-primary btn-sm">
                     </label>
                     <button id="create" type="submit" hidden="true">
                        Tạo
                     </button>
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
   <table class="table table-zebra table-pin-rows table-pin-cols">
      <thead>
         <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Lượng sp</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="category in categories">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ category.description }}</td>
            <td>{{ 0 }}</td>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
