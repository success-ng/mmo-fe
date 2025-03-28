<script setup lang="ts">
   import type { AxiosError } from "axios";
   import { useApiOrderService } from "~/composables/api/order.service";
   import type { BuyModel } from "~/composables/models/buy.model";
   import type { ProductModel } from "~/composables/models/product.model";
   const { product } = defineProps<{
      product: ProductModel;
   }>();

   const { $toast } = useNuxtApp();
   const buyModel: Ref<BuyModel> = ref({} as BuyModel);
   const router = useRouter();
   onMounted(() => {
      buyModel.value = {
         productId: product.id,
         quantity: 1,
      };
   });
   const orderService = useApiOrderService();
   const onSubmit = (event: Event) => {
      if (buyModel.value.quantity > product.stock) {
         $toast("Số lượng không đủ", {
            type: "error",
         });
         event.preventDefault();
         return;
      }
      orderService
         .buy(buyModel.value)
         .then((res) => {
            router.push({
               path: `/payment/${res.id}`,
               query: {
                  productString: res.via,
               },
            });
         })
         .catch((err: AxiosError) => {
            const data = err.response?.data as {
               responseMessage: {
                  message: string;
                  status: number;
               };
            };
            $toast(data.responseMessage.message, {
               type: "error",
            });
         });
   };
</script>

<template>
   <div
      class="card card-compact bg-base-100 text-base-content drop-shadow-lg"
      style="-webkit-overflow-scrolling: touch">
      <p
         class="p-4 text-lg font-bold text-center text-white bg-blue-500 rounded-t-xl">
         {{ product.name }}
      </p>
      <div class="justify-between gap-3 card-body">
         <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
               <span class="gap-2 font-bold badge badge-accent text-nowrap">
                  <Icon name="lucide:package-open" />
                  Còn lại:
                  {{ product.stock }}
               </span>
               <span class="gap-2 font-bold badge badge-warning text-nowrap">
                  <Icon name="fa6-solid:coins" />Giá:
                  {{ product.price.toLocaleString() }} đ
               </span>
            </div>
            <div class="space-y-1">
               <p class="" v-html="product.description" />
               <p>
                  🌍 Quốc gia:
                  {{ product.country }}
               </p>
               <!-- <p class="overflow-hidden text-nowrap">{{ product.description }}</p> -->
               <!-- <div class="my-0 divider" /> -->
               <p>🛠 Change thông tin</p>
               <!-- <div class="my-0 divider" /> -->
               <p>🛡 Hỗ trợ backup</p>
               <!-- <div class="">
               </div> -->
            </div>
         </div>

         <div class="justify-self-end card-actions">
            <a
               v-if="product.stock > 0"
               class="w-full text-white btn btn-primary btn-sm bg-gradient-to-l from-sky-400 to-sky-700"
               :href="`#my_modal_${product.id}`">
               MUA NGAY
            </a>
            <button
               v-else
               class="w-full text-white btn btn-error btn-sm bg-gradient-to-t from-error to-error-dark"
               href="#">
               HẾT HÀNG
            </button>
         </div>
      </div>
   </div>
   <div class="modal" role="dialog" :id="`my_modal_${product.id}`">
      <div class="max-w-md space-y-4 modal-box">
         <h3 class="text-lg font-bold">{{ product.name }}!</h3>
         <label class="flex items-center gap-2 input input-sm input-bordered">
            Số lượng
            <input
               type="number"
               class="grow"
               placeholder="Nhập số lượng"
               v-model="buyModel.quantity" />
         </label>
         <label class="flex items-center gap-2 input input-sm input-bordered">
            Đơn giá
            <span class="badge badge-warning text-warning-content">
               {{ product.price }} đ</span
            >
         </label>
         <div class="divider" />
         <label class="flex items-center gap-2 input input-sm input-bordered">
            Thành tiền
            <span class="badge badge-warning text-warning-content">
               {{ (product.price * buyModel.quantity).toLocaleString() }}
               đ</span
            >
         </label>
         <div class="modal-action">
            <a
               href="#"
               class="btn btn-success text-success-content"
               @click="onSubmit"
               >Mua!</a
            >
            <a href="#" class="btn btn-error text-error-content">Hủy</a>
         </div>
      </div>
   </div>
</template>

<style scoped>
   ::v-deep(ul li::before) {
      content: "💥";
      margin-right: 5px;
   }
   ::v-deep(ul li) {
      margin-bottom: 5px;
   }
</style>
