<script setup lang="ts">
   import { useApiCategoryService } from "~/composables/api/category.service";
   import type { CategoryModel } from "~/composables/models/category.model";

   const { id } = defineProps<{
      id?: number;
   }>();

   const router = useRouter();
   const { $toast } = useNuxtApp();
   const categoryService = useApiCategoryService();
   const data = ref({} as CategoryModel);
   const fetch = () => {
      if (id) {
         categoryService.get(id).then((res) => {
            data.value = res;
         });
      } else {
         data.value = {} as CategoryModel;
      }
   };

   const save = (event: Event) => {
      event.preventDefault();
      if (id) {
         categoryService
            .update(data.value)
            .then((res) => {
               $toast(`Cập nhật danh mục ${res.id}`, {
                  type: "success",
                  onClose: () => {
                     router.push("/admin/category");
                  },
               });
            })
            .catch((err) => {
               $toast(err.message, {
                  type: "error",
               });
            });
      } else {
         categoryService
            .create(data.value)
            .then((res) => {
               $toast(`Tạo danh mục ${res.id}`, {
                  type: "success",
                  onClose: () => {
                     router.push("/admin/category");
                  },
               });
            })
            .catch((err) => {
               $toast(err.message, {
                  type: "error",
               });
            });
      }
      onMounted(() => {
         fetch();
      });
   };
</script>

<template>
   <form @submit="save" class="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <label class="w-full max-w-xs form-control">
         <div class="label">
            <span class="label-text">Tên</span>
         </div>
         <input
            class="input input-bordered"
            type="text"
            v-model="data.name"
            placeholder="Tên danh mục" />
      </label>
      <label class="w-full max-w-xs form-control">
         <div class="label">
            <span class="label-text"> Mô tả</span>
         </div>
         <textarea
            class="textarea textarea-bordered"
            cols="30"
            placeholder="Tên danh mục"
            v-model="data.description" />
      </label>
      <!-- <label class="flex items-center gap-2 input input-bordered">
         Icon
         <input
            type="text"
            class="grow"
            placeholder="Tên danh mục"
            v-model="data.icon" />
      </label> -->
      <input type="submit" class="font-bold btn btn-primary" value="Lưu" />
      <input type="reset" class="font-bold btn btn-secondary" value="Hủy" />
   </form>
</template>
