<script setup lang="ts">
   import { useApiCategoryService } from "~/composables/api/category.service";
   import type { CategoryModel } from "~/composables/models/category.model";

   const categoryService = useApiCategoryService();
   const categories = ref([] as CategoryModel[]);
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

   const save = (model: CategoryModel) => {
      if (model.isEdit) {
         categoryService
            .create(model)
            .then(() => {
               fetch();
               $toast(`Cập nhật danh mục ${model.id}`, {
                  type: "success",
               });
            })
            .catch((err) => {
               $toast(err.message, {
                  type: "error",
               });
            });
      }
      model.isEdit = !model.isEdit;
   };

   const onCreate = () => {
      categoryService
         .create(newCategory.value)
         .then((res) => {
            $toast(`Tạo danh mục ${res.id}}`, {
               type: "success",
            });
            isOpenModal.value = false;
            fetch();
         })
         .catch((err) => {
            $toast(`Lỗi tạo danh mục`, {
               type: "error",
            });
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
                        Tạo
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
   <table class="table table-pin-rows table-pin-cols">
      <thead>
         <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Lượng sp</th>
         </tr>
      </thead>
      <tbody>
         <tr v-if="categories.length == 0">
            <td colspan="6" class="italic text-center">No record !!!!</td>
         </tr>

         <tr v-for="category in categories">
            <td>{{ category.id }}</td>
            <td>
               <input
                  type="text"
                  v-model="category.name"
                  :disabled="!category.isEdit"
                  class="input input-xs input-bordered disabled:text-base-content" />
            </td>
            <td>
               <input
                  type="text"
                  v-model="category.description"
                  :disabled="!category.isEdit"
                  class="input input-xs input-bordered disabled:text-base-content" />
            </td>
            <td>{{ category.products.length }}</td>
            <td class="space-x-3">
               <NuxtLink
                  class="btn btn-primary btn-xs"
                  :to="`/admin/category/${category.id}`"
                  >Chi tiết</NuxtLink
               >
               <button class="btn btn-accent btn-xs" @click="save(category)">
                  {{ category.isEdit ? "Lưu" : "Sửa" }}
               </button>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
