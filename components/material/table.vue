<script setup lang="ts">
   import type { TableProps } from "~/composables/types/table.type";

   const { fetch, edit, create, remove, data, columns } =
      defineProps<TableProps<any>>();
</script>

<template>
   <table class="table table-pin-rows table-pin-cols" :class="class">
      <thead>
         <tr>
            <th v-for="(col, index) in columns">{{ col.label }}</th>
         </tr>
      </thead>
      <tbody>
         <tr v-if="data.length == 0">
            <td :colspan="columns.length">No record !!!!</td>
         </tr>
         <tr v-if="isLoading">
            <td :colspan="columns.length">
               <span
                  class="loading loading-spinner loading-sm text-primary"></span>
               Loading...
            </td>
         </tr>
         <tr v-for="(row, index) in data">
            <td v-for="(col, key) in columns" :key="key">
               <input
                  type="text"
                  v-model="row[col.key]"
                  :disabled="!row.isEdit"
                  class="input input-xs disabled:text-base-content" />
            </td>
            <td>
               <button class="btn btn-accent btn-xs" @click="edit(row)">
                  {{ row.isEdit ? "Lưu" : "Sửa" }}
               </button>
               <button class="btn btn-error btn-xs" @click="remove(row)">
                  Xóa
               </button>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
