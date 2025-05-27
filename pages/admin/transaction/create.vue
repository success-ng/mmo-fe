<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import { useApiTransactionService } from "~/composables/api/transaction.service";
   import type { UserModel } from "~/composables/models/user.model";
   import type { TransactionModel } from "~/composables/models/transaction.model ";

   definePageMeta({
      layout: "admin",
   });

   const userService = useApiUserService();
   const transactionService = useApiTransactionService();
   const { $toast } = useNuxtApp();
   const router = useRouter();

   const users = ref<UserModel[]>([]);
   const selectedUser = ref<UserModel | null>(null);
   const loading = ref(false);

   const transaction = ref<Partial<TransactionModel>>({
      amount: 0,
      paymentMethod: "deposit",
      status: "PAID",
      transactionDate: new Date().toISOString(),
   });

   // Load users for selection
   const loadUsers = async () => {
      loading.value = true;
      try {
         users.value = await userService.index();
      } catch (error) {
         console.error("Error loading users:", error);
         $toast("Không thể tải danh sách người dùng", { type: "error" });
      }
      loading.value = false;
   };

   // Handle user selection
   const onUserSelect = (userId: number) => {
      selectedUser.value = users.value.find((u) => u.id === userId) || null;
      if (selectedUser.value) {
         transaction.value.userId = selectedUser.value.id;
         transaction.value.username = selectedUser.value.username;
         transaction.value.email = selectedUser.value.email;
      }
   };

   // Create transaction
   const createTransaction = async () => {
      if (!selectedUser.value || !transaction.value.amount) {
         $toast("Vui lòng chọn người dùng và nhập số tiền", { type: "error" });
         return;
      }

      loading.value = true;
      try {
         await transactionService.create(transaction.value as TransactionModel);
         $toast("Tạo giao dịch thành công", {
            type: "success",
            onClose: () => {
               router.push("/admin/transaction");
            },
         });
      } catch (error) {
         console.error("Error creating transaction:", error);
         $toast("Không thể tạo giao dịch", { type: "error" });
      }
      loading.value = false;
   };

   onMounted(() => {
      loadUsers();
   });
</script>

<template>
   <div class="shadow-lg card card-compact bg-base-100">
      <div class="card-body">
         <h2 class="card-title">Tạo giao dịch nạp tiền</h2>
         <form @submit.prevent="createTransaction" class="space-y-4">
            <!-- User Selection -->
            <div class="w-full form-control">
               <label class="label">
                  <span class="label-text">Chọn người dùng</span>
               </label>
               <select
                  class="select select-bordered"
                  :disabled="loading"
                  @change="
                     onUserSelect(
                        Number(($event.target as HTMLSelectElement).value)
                     )
                  ">
                  <option value="">-- Chọn người dùng --</option>
                  <option v-for="user in users" :key="user.id" :value="user.id">
                     {{ user.username }} - {{ user.email }}
                  </option>
               </select>
            </div>

            <!-- Selected User Info -->
            <div v-if="selectedUser" class="p-4 rounded-lg bg-base-200">
               <h3 class="mb-2 font-bold">Thông tin người dùng</h3>
               <div class="grid grid-cols-2 gap-4">
                  <div>
                     <p class="text-sm">Username:</p>
                     <p class="font-bold">{{ selectedUser.username }}</p>
                  </div>
                  <div>
                     <p class="text-sm">Email:</p>
                     <p class="font-bold">{{ selectedUser.email }}</p>
                  </div>
                  <div>
                     <p class="text-sm">Số dư hiện tại:</p>
                     <p class="font-bold">
                        {{ selectedUser.balance?.toLocaleString() }} đ
                     </p>
                  </div>
               </div>
            </div>

            <!-- Amount Input -->
            <div class="w-full form-control">
               <label class="label">
                  <span class="label-text">Số tiền nạp</span>
               </label>
               <input
                  type="number"
                  v-model="transaction.amount"
                  class="input input-bordered"
                  placeholder="Nhập số tiền"
                  :disabled="loading || !selectedUser"
                  min="0"
                  step="1000" />
            </div>

            <!-- Submit Button -->
            <div class="justify-end card-actions">
               <button
                  type="submit"
                  class="btn btn-primary"
                  :disabled="loading || !selectedUser || !transaction.amount">
                  <span v-if="loading" class="loading loading-spinner"></span>
                  <span v-else>Tạo giao dịch</span>
               </button>
            </div>
         </form>
      </div>
   </div>
</template>
