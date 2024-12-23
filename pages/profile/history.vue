<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";

   definePageMeta({
      layout: "profile",
   });
   const userService = useApiUserService();
   const userHistory = userService.userHistory();
</script>

<template>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <p class="card-title">Lịch sử hoạt động</p>
         <div class="overflow-x-auto">
            <table class="table">
               <!-- head -->
               <thead>
                  <tr>
                     <th>id</th>
                     <th>Thời điểm thực hiện</th>
                     <th>Loại hành động</th>
                     <th>Ip</th>
                  </tr>
               </thead>
               <tbody>
                  <!-- row 1 -->
                  <tr v-for="transaction in userHistory">
                     <td>{{ transaction.id }}</td>
                     <td>
                        <p>{{ transaction.createAt }} đ</p>
                     </td>
                     <td>
                        {{ transaction.action }}
                     </td>
                     <td>{{ transaction.ip }}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
