<script setup lang="ts">
useHead({
   title: "Thông tin doanh nghiệp | Viabmtrust",
   meta: [
      {
         name: "description",
         content:
            "Thông tin doanh nghiệp, kênh hỗ trợ và nguyên tắc vận hành dịch vụ tại Viabmtrust.",
      },
      { name: "robots", content: "index, follow" },
   ],
});
</script>

<template>
   <section class="mx-auto max-w-4xl space-y-4 rounded-xl bg-base-100 p-6 shadow-md">
      <h1 class="text-2xl font-bold">Thông tin doanh nghiệp</h1>
      <p>
         Viabmtrust cung cấp dịch vụ số với quy trình giao dịch minh bạch, hỗ trợ
         khách hàng qua các kênh liên hệ công khai và chính sách rõ ràng.
      </p>
      <p>
         Chúng tôi cam kết hiển thị đầy đủ thông tin điều khoản sử dụng, chính sách
         bảo mật và chính sách hoàn tiền để người dùng dễ dàng kiểm tra trước khi
         giao dịch.
      </p>
      <p>
         Mọi vấn đề phát sinh được tiếp nhận qua trang <NuxtLink to="/contact" class="link">Liên hệ</NuxtLink>
         và xử lý theo quy trình hỗ trợ tiêu chuẩn.
      </p>
   </section>
</template>
