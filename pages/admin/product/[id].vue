<script setup lang="ts">
   import { useApiProductService } from "~/composables/api/product.service";
   import type { ProductInfoModel } from "~/composables/models/productinfo.model";
   import type { Column } from "~/composables/types/table.type";

   definePageMeta({
      layout: "admin",
   });
   const router = useRoute();
   const isLoading = ref(true);
   const isOpenModal = ref(false);
   const newVia = ref("");
   const { $toast } = useNuxtApp();
   const id = Number(router.params.id);
   const productService = useApiProductService();
   const productInfos: Ref<ProductInfoModel[]> = ref({} as ProductInfoModel[]);
   const columns: Column[] = [
      { key: "id", label: "#" },
      { key: "productId", label: "ID sản phẩm" },
      { key: "value", label: "VIA" },
   ];
   const changeModal = async () => {
      isOpenModal.value = !isOpenModal.value;
   };
   const fetch = async () => {
      isLoading.value = true;
      productService.info(id).then((response) => {
         productInfos.value = response;
         isLoading.value = false;
      });
   };
   const save = async () => {
      productService
         .add({ value: newVia.value, productId: id })
         .then(() => {
            $toast("Thêm thành công", {
               type: "success",
            });
            fetch();
            changeModal();
         })
         .catch(() => {
            $toast("Thêm thất bại", {
               type: "error",
            });
         });
   };
</script>

<template>
   <section class="space-y-6">
      <CustomProductForm :id="id" />
   </section>
   <section class="space-y-6">
      <MaterialTable
         title="Thông tin sản phẩm"
         class="table-sm"
         :fetch="fetch"
         :is-loading="isLoading"
         :data="productInfos"
         :create="changeModal"
         :columns="columns">
         <template #productId="{ row }">
            <span class="font-bold">{{ row.productId }}</span>
         </template>
         <template #value="{ row }">
            <span class="font-bold">{{ row.value }}</span>
         </template>
      </MaterialTable>
      <div class="modal" :class="{ 'modal-open': isOpenModal }">
         <div class="relative modal-box">
            <label
               class="absolute btn btn-sm btn-circle right-2 top-2"
               @click="changeModal"
               >✕</label
            >
            <h2 class="card-title">Thêm via mới</h2>
            <label class="form-control">
               <p class="label">Nhập via mới</p>
               <textarea
                  class="w-full h-32 textarea textarea-bordered textarea-primary"
                  placeholder="Nhập vào các via mới, mỗi via một dòng"
                  v-model="newVia"></textarea>
            </label>
            <div class="modal-action">
               <button class="btn btn-success" @click="save">Thêm</button>
               <button class="btn btn-error" @click="changeModal">Hủy</button>
            </div>
            <div class="modal-backdrop" @click="changeModal"></div>
         </div>
      </div>
   </section>
</template>
