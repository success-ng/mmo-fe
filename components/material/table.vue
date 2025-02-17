<script setup lang="ts">
   import type { Column } from "~/composables/types/table.type";

   const { fetch, edit, create, remove, show, data, columns, isLoading } =
      defineProps<{
         title?: string;
         class?: string;
         data: any[];
         columns: Column[];
         isLoading: boolean;
         fetch: () => Promise<void>;
         edit?: (model: any) => Promise<void>;
         remove?: (id: number) => Promise<void>;
         create?: () => Promise<void>;
         show?: (id: number) => void;
      }>();

   const { $toast } = useNuxtApp();

   const onRemove = (model: any) => {
      if (remove) {
         remove(model.id)
            .then(() => {
               fetch();
               $toast(`Xóa thành công ${model.id}`, {
                  type: "success",
               });
            })
            .catch((err) => {
               $toast(err.message, {
                  type: "error",
               });
            });
      }
   };

   const onEdit = (model: any) => {
      if (model.isEdit && edit) {
         edit(model)
            .then(() => {
               fetch();
               $toast(`Cập nhật thành công!!!! ${model.id}`, {
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

   onMounted(() => {
      fetch();
   });
</script>

<template>
   <div class="overflow-x-auto card card-compact bg-base-100">
      <div class="card-body">
         <div class="flex justify-between">
            <h3 class="card-title">{{ title }}</h3>
            <button class="btn btn-primary btn-sm btn-outline" @click="fetch">
               <Icon name="fa6-solid:arrows-rotate" />
               Refresh
            </button>
         </div>
         <table class="table table-pin-rows table-pin-cols" :class="class">
            <thead>
               <tr class="border-b-2 border-base-300">
                  <th v-for="(col, index) in columns">
                     {{ col.label }}
                  </th>
                  <th v-if="create || edit || remove">Action</th>
               </tr>
            </thead>
            <tbody>
               <tr v-if="isLoading">
                  <td :colspan="columns.length + 1">
                     <div class="flex justify-center gap-3">
                        <span
                           class="loading loading-spinner loading-sm text-primary"></span>
                        Loading...
                     </div>
                  </td>
               </tr>
               <tr v-else v-if="data.length == 0">
                  <td :colspan="columns.length + 1">
                     <p class="text-center text-primary">No record !!!</p>
                  </td>
               </tr>
               <tr
                  v-if="!isLoading && create"
                  class="border-b-2 border-base-300">
                  <td :colspan="columns.length + 1">
                     <div class="flex justify-center">
                        <button
                           class="btn btn-primary btn-sm btn-outline"
                           @click="create">
                           <Icon name="fa6-solid:circle-plus" />
                           Thêm mới
                        </button>
                     </div>
                  </td>
               </tr>
               <tr v-for="(row, index) in data">
                  <td v-for="(col, key) in columns" :key="key">
                     <slot :name="col.key" :row="row">
                        <span v-if="col.key == `id`" class="font-bold">{{
                           row[col.key]
                        }}</span>
                        <input
                           v-else
                           type="text"
                           v-model="row[col.key]"
                           :disabled="!row.isEdit"
                           class="input input-sm disabled:text-base-content input-bordered" />
                     </slot>
                  </td>
                  <td v-if="create || edit || remove || show">
                     <div class="flex gap-3">
                        <button
                           v-if="show"
                           class="btn btn-sm btn-info"
                           @click="show(row.id)">
                           <Icon name="fa6-solid:eye" />
                        </button>
                        <button
                           v-if="edit"
                           class="btn btn-sm"
                           :class="row.isEdit ? 'btn-accent' : 'btn-warning'"
                           @click="onEdit(row)">
                           <Icon
                              v-if="row.isEdit"
                              name="fa6-solid:floppy-disk" />
                           <Icon v-else name="fa6-solid:pen-to-square" />
                        </button>
                        <button
                           v-if="remove"
                           class="btn btn-error btn-sm"
                           @click="onRemove(row)">
                           <Icon name="fa6-solid:trash" />
                        </button>
                     </div>
                  </td>
               </tr>
            </tbody>
            <tfoot>
               <tr class="border-t-2 border-base-300">
                  <td :colspan="columns.length + 1">
                     <div class="flex justify-center">
                        <div class="join">
                           <button
                              class="join-item btn btn-sm btn-outline btn-primary">
                              «
                           </button>
                           <button
                              class="join-item btn btn-sm btn-outline btn-primary">
                              Page 22
                           </button>
                           <button
                              class="join-item btn btn-sm btn-outline btn-primary">
                              »
                           </button>
                        </div>
                     </div>
                  </td>
               </tr>
            </tfoot>
         </table>
      </div>
   </div>
</template>

<style scoped></style>
