<script setup lang="ts">
   import CategoryTable from "~/components/custom/category.table.vue";

   definePageMeta({
      layout: "admin",
   });
</script>

<template>
   <section>
      <div class="card card-compact bg-base-100">
         <div class="card-body">
            <h3 class="card-title">Danh mục</h3>
            <div class="overflow-x-auto">
               <CategoryTable />
            </div>
         </div>
      </div>
   </section>
</template>

<style scoped></style>
