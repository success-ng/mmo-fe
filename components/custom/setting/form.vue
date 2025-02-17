<script setup lang="ts">
   import "@vueup/vue-quill/dist/vue-quill.snow.css";

   import { QuillEditor } from "@vueup/vue-quill";
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";

   const props = defineProps<{
      id?: number;
   }>();
   const router = useRouter();
   const { $toast } = useNuxtApp();
   const settingService = useApiSettingService();

   const setting = ref({
      description: "",
      id: 0,
      name: "",
      val: "",
   } as SettingModel);

   const fetch = async () => {
      if (props.id) {
         setting.value = await settingService.get(props.id);
      }
   };
   const save = async () => {
      if (props.id)
         await settingService
            .create(setting.value)
            .then((res) => {
               setting.value = res;
               $toast.success("Lưu thành công");
            })
            .catch((err) => {
               $toast.error("Lưu thất bại\n" + err);
            });
      else {
         await settingService
            .update(setting.value)
            .then((res) => {
               setting.value = res;
               $toast.success("Lưu thành công");
            })
            .catch((err) => {
               $toast.error("Lưu thất bại\n" + err);
            });
      }
   };
   onMounted(() => {
      fetch();
   });
</script>
<template>
   <div class="card bg-base-100">
      <div class="card-body">
         <h2 class="card-title">Cài đặt: {{ setting.name }}</h2>
         <label for="form-control">
            <p class="text-base-content">Tên:</p>
            <input
               :disabled="!props.id != true"
               class="w-full input input-bordered"
               v-model="setting.name" />
         </label>
         <label for="form-control">
            <p class="text-base-content">Mô tả:</p>
            <textarea
               class="w-full textarea textarea-bordered"
               v-model="setting.description" />
         </label>
         <label class="form-control">
            <p class="text-base-content">Giá trị:</p>
            <ClientOnly fallback-tag="div" fallback="Loading...">
               <QuillEditor
                  content-type="html"
                  toolbar="full"
                  v-model:content="setting.val">
               </QuillEditor>
            </ClientOnly>
         </label>
         <div class="flex col-span-2 gap-3 card-actions">
            <button class="btn btn-primary grow" @click="save">Lưu</button>
            <button class="btn btn-secondary grow" @click="router.back()">
               Hủy
            </button>
         </div>
      </div>
   </div>
</template>
