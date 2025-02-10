<script setup lang="ts">
   import type { Column, TableProps } from "~/composables/types/table.type";

   const { fetch, edit, create, remove, show, data, columns, isLoading } =
      defineProps<{
         title?: string;
         class?: string;
         data: any[];
         columns: Column[];
         isLoading: boolean;
         fetch: () => void;
         edit?: (model: any) => void;
         remove?: (id: number) => void;
         create?: (model: any) => void;
         show?: (id: number) => void;
      }>();

   const isOpenDialog: Ref<boolean> = ref(false as boolean);

   const editModel = (model: any) => {
      if (model.isEdit && edit) {
         edit(model);
      }
      model.isEdit = !model.isEdit;
   };

   const openDialog = (model: any) => {
      isOpenDialog.value = !isOpenDialog.value;
   };
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
                  <th>Action</th>
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
               <tr v-if="!isLoading" class="border-b-2 border-base-300">
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
                        <input
                           type="text"
                           v-model="row[col.key]"
                           :disabled="!row.isEdit"
                           class="input input-sm disabled:text-base-content input-bordered" />
                     </slot>
                  </td>
                  <td>
                     <div class="flex gap-3">
                        <button
                           v-if="show"
                           class="btn btn-info btn-sm"
                           @click="openDialog(row)">
                           <Icon name="fa6-solid:eye" />
                        </button>
                        <button
                           v-if="edit"
                           class="btn btn-sm"
                           :class="row.isEdit ? 'btn-accent' : 'btn-warning'"
                           @click="editModel(row)">
                           <Icon
                              v-if="row.isEdit"
                              name="fa6-solid:floppy-disk" />
                           <Icon v-else name="fa6-solid:pen-to-square" />
                        </button>
                        <button
                           v-if="remove"
                           class="btn btn-error btn-sm"
                           @click="remove(row)">
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
   <!-- <MaterialDialog :is-open="isOpenDialog" @close="openDialog">
      <template v-slot:default>
         <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">This modal works with a hidden checkbox!</p>
            <button class="btn btn-primary" @click="openDialog">Close</button>
         </div>
         <div class="modal-backdrop" @click="openDialog"></div>
      </template>
   </MaterialDialog> -->
</template>

<style scoped></style>
