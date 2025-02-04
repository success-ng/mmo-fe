<script setup lang="ts">
   import { useApiProductService } from "~/composables/api/product.service";
   import type { ProductModel } from "~/composables/models/product.model";
   import { ref } from "vue";
   import { useRouter } from "vue-router";
   const { $toast } = useNuxtApp();

   const { products, fetch } = defineProps<{
      products: ProductModel[];
      fetch: () => void;
   }>();
   const productService = useApiProductService();
   const router = useRouter();
   const isOpenModal = ref(false);
   const pi = ref({
      value: "",
      productId: 0,
   });
   const isOpen = ref(false);

   const onCreate = (model: ProductModel) => {
      model.stock = 0;
      productService.save(model).then((res) => {
         isOpenModal.value = false;
         fetch();
         $toast(`Tạo sản phẩm ${res.id}}`, {
            type: "success",
         });
      });
   };
   const addProduct = () => {
      productService.add(pi.value).then(() => {
         fetch();
         $toast(`Thêm sản phẩm`, {
            type: "success",
         });
      });
   };
</script>

<template>
   <div class="flex justify-between">
      <div></div>
      <div>
         <!-- The button to open modal -->
         <label for="create_category" class="btn btn-sm btn-primary"
            >Thêm sản phẩm</label
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
               <CustomProductForm
                  :is-open-modal="isOpenModal"
                  :onCreate="onCreate" />
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
            <th>Quốc gia</th>
            <th>Ngày tạo</th>
         </tr>
      </thead>
      <tbody>
         <tr v-if="products.length == 0">
            <td colspan="6" class="italic text-center">No record !!!!</td>
         </tr>

         <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.price.toLocaleString() }}</td>
            <td>{{ product.country }}</td>
            <td>{{ product.createdAt }}</td>
            <td>
               <label
                  for="my_modal_7"
                  class="btn btn-primary btn-sm"
                  @click="pi.productId = product.id"
                  >Thêm
               </label>

               <input
                  type="checkbox"
                  id="my_modal_7"
                  class="modal-toggle"
                  v-model="isOpen" />
               <div class="modal" role="dialog">
                  <div class="space-y-3 modal-box">
                     <label class="form-control">
                        <div class="label">
                           <span class="label-text">Via</span>
                        </div>
                        <textarea
                           type="text"
                           class="h-24 textarea textarea-bordered"
                           placeholder="..."
                           v-model="pi.value" />
                     </label>
                     <div class="modal-action">
                        <label
                           class="btn btn-sm btn-outline btn-primary"
                           for="my_modal_7"
                           @click="addProduct()">
                           Thêm sản phẩm
                        </label>
                        <label
                           class="btn btn-sm btn-outline btn-error"
                           for="my_modal_7"
                           >Close</label
                        >
                     </div>
                  </div>
                  <label class="modal-backdrop" for="my_modal_7">Close</label>
               </div>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
