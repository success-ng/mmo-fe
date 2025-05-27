<script setup lang="ts">
   import type { AxiosError } from "axios";
   import type { Column } from "~/composables/types/table.type";

   const {
      fetch,
      edit,
      create,
      remove,
      show,
      data,
      columns,
      isLoading,
      keyWords,
   } = defineProps<{
      title?: string;
      class?: string;
      data: any[];
      keyWords?: Column[];
      columns: Column[];
      isLoading: boolean;
      fetch: (params?: {}) => Promise<void>;
      edit?: (model: any) => Promise<void>;
      remove?: (id: number) => Promise<void>;
      create?: () => Promise<void>;
      show?: (id: number) => void;
   }>();
   const { $toast } = useNuxtApp();

   const searchTerms = ref<{ [key: string]: string }>({});
   function trimStringsInObject(obj: any): any {
      if (typeof obj !== "object" || obj === null) return obj;

      const trimmed: any = {};
      for (const key in obj) {
         const value = obj[key];
         if (typeof value === "string") {
            trimmed[key] = value.trim();
         } else {
            trimmed[key] = value;
         }
      }
      return trimmed;
   }

   const onRemove = (model: any) => {
      if (remove) {
         remove(model.id).then((res) => {
            fetch();
            $toast(`Xóa thành công ${model.id}`, {
               type: "success",
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
   <div class="overflow-x-auto card card-compact bg-base-100 drop-shadow-lg">
      <div class="card-body">
         <div class="flex justify-between">
            <h3 class="card-title">{{ title }}</h3>
            <button class="btn btn-primary btn-sm btn-outline" @click="fetch()">
               <Icon name="fa6-solid:arrows-rotate" />
               Refresh
            </button>
         </div>
         <div class="flex flex-wrap gap-2">
            <div
               v-if="keyWords && keyWords.length"
               v-for="(keyword, index) in keyWords"
               :key="index"
               class="form-control">
               <label class="label" :for="keyword.key">{{
                  keyword.label
               }}</label>
               <select
                  v-if="keyword.type == 'select'"
                  :id="keyword.key"
                  v-model="searchTerms[keyword.key]"
                  class="select select-bordered">
                  <option :value="undefined" disabled>-- Chọn --</option>
                  <option
                     v-for="(option, index) in keyword.options"
                     :key="index"
                     :value="option.value">
                     {{ option.label }}
                  </option>
               </select>
               <input
                  v-else
                  :type="keyword.type || `text`"
                  :id="keyword.key"
                  v-model="searchTerms[keyword.key]"
                  class="input input-bordered" />
            </div>
         </div>
         <button
            v-if="keyWords && keyWords.length"
            class="btn btn-primary btn-sm"
            @click="fetch(trimStringsInObject(searchTerms))">
            <Icon name="fa6-solid:search" />
            Search
         </button>
         <div class="overflow-auto">
            <table class="table table-pin-rows">
               <thead>
                  <tr class="border-b-2 border-base-300">
                     <th
                        v-for="(col, index) in columns"
                        class="text-lg font-bold">
                        {{ col.label }}
                     </th>
                     <th v-if="edit || remove || show">Action</th>
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
                           <textarea
                              v-else-if="col.key == `description`"
                              :disabled="!row.isEdit"
                              class="w-full textarea textarea-bordered disabled:text-base-content"
                              v-model="row[col.key]" />
                           <input
                              v-else
                              type="text"
                              v-model="row[col.key]"
                              :disabled="!row.isEdit"
                              class="input input-sm disabled:text-base-content input-bordered" />
                        </slot>
                     </td>
                     <td v-if="edit || remove || show">
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
                                 Page 1 of 1
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
   </div>
</template>

<style scoped></style>
