<script setup lang="ts">
   import { useApiProductService } from "~/composables/api/product.service";
   import type { ProductModel } from "~/composables/models/product.model";
   const { products } = defineProps<{
      products: ProductModel[];
   }>();
   const add = async () => {};
   console.log(products);
   const isOpenModal = ref(false);
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
               <CustomProductForm :is-open-modal="isOpenModal" />
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
         <tr v-for="product in products">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.createdAt }}</td>
            <td>{{ product.country }}</td>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
