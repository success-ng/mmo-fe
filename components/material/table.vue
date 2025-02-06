<script setup lang="ts">
   import type { TableProps } from "~/composables/types/table.type";

   const { fetch, data, columns } = defineProps<TableProps>();
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
               {{ row[col.key] }}
            </td>
         </tr>
      </tbody>
   </table>
</template>

<style scoped></style>
