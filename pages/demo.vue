<script setup lang="ts">
   import { useApiUserService } from "~/composables/api/user.service";
   import type { UserModel } from "~/composables/models/user.model";
   import type { Column } from "~/composables/types/table.type";

   const userService = useApiUserService();
   const data: Ref<UserModel[]> = ref([] as UserModel[]);
   const isLoading = ref(true);
   const columns: Column[] = [
      { key: "id", label: "ID" },
      { key: "username", label: "Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "address", label: "Address" },
   ];
   const fetch = () => {
      isLoading.value = true;
      userService.getUsers().then((res) => {
         data.value = res;
         isLoading.value = false;
      });
   };
   const create = (model: UserModel) => {};
   const show = (id: number) => {};
   const edit = (model: UserModel) => {};
   const remove = (id: number) => {};
   onMounted(() => {
      fetch();
   });
</script>

<template>
   <MaterialTable
      title="User Management"
      :data="data"
      :columns="columns"
      :is-loading="isLoading"
      :fetch="fetch"
      :create="create"
      :show="show"
      :edit="edit"
      :remove="remove"></MaterialTable>
</template>
