<script setup lang="ts">
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";
   import "~/assets/css/main.css";
   const settingService = useApiSettingService();
   const intro = ref<SettingModel>({} as SettingModel);
   const dialog = ref<SettingModel>({} as SettingModel);
   const loading = ref(true);

   // SEO metadata aligned with Google Ads landing page quality.
   useHead({
      title: "Nền tảng dịch vụ số minh bạch | Hỗ trợ 24/7",
      meta: [
         {
            name: "description",
            content:
               "Nền tảng cung cấp dịch vụ số minh bạch, thanh toán rõ ràng, hỗ trợ khách hàng 24/7 và chính sách bảo hành - hoàn tiền công khai.",
         },
         {
            name: "keywords",
            content:
               "dịch vụ số, thanh toán trực tuyến, hỗ trợ khách hàng, chính sách hoàn tiền, điều khoản dịch vụ",
         },
         {
            property: "og:title",
            content:
               "Nền tảng dịch vụ số minh bạch | Hỗ trợ 24/7",
         },
         {
            property: "og:description",
            content:
               "Dịch vụ minh bạch, chính sách rõ ràng, hỗ trợ nhanh và quy trình giao dịch an toàn.",
         },
         {
            property: "og:image",
            content: "https://s1.uphinh.org/2021/12/15/Capture.png",
         },
         {
            property: "og:url",
            content: "https://viabmtrust.com",
         },
         {
            property: "og:type",
            content: "website",
         },
         {
            property: "og:site_name",
            content: "Nền tảng dịch vụ số",
         },
         {
            name: "twitter:card",
            content: "summary_large_image",
         },
         {
            name: "twitter:title",
            content: "Nền tảng dịch vụ số minh bạch",
         },
         {
            name: "twitter:description",
            content:
               "Dịch vụ minh bạch, hỗ trợ tận tâm, thông tin pháp lý và chính sách công khai.",
         },
         {
            name: "twitter:image",
            content: "https://s1.uphinh.org/2021/12/15/Capture.png",
         },
         {
            name: "robots",
            content:
               "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
         },
         {
            name: "googlebot",
            content:
               "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
         },
         {
            name: "author",
            content: "Viabmtrust",
         },
         {
            name: "language",
            content: "vi",
         },
         {
            name: "geo.region",
            content: "VN",
         },
         {
            name: "geo.placename",
            content: "Việt Nam",
         },
         {
            name: "distribution",
            content: "global",
         },
         {
            name: "rating",
            content: "general",
         },
         {
            name: "revisit-after",
            content: "1 days",
         },
         {
            name: "google-site-verification",
            content: "your-verification-code-here",
         },
      ],
      link: [
         {
            rel: "canonical",
            href: "https://viabmtrust.com",
         },
         {
            rel: "alternate",
            hreflang: "vi",
            href: "https://viabmtrust.com",
         },
      ],
      script: [
         {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "Organization",
               name: "Viabmtrust",
               url: "https://viabmtrust.com",
               logo: "https://s1.uphinh.org/2021/12/15/Capture.png",
               description:
                  "Nền tảng dịch vụ số minh bạch với chính sách rõ ràng và hỗ trợ khách hàng 24/7.",
               address: {
                  "@type": "PostalAddress",
                  addressCountry: "VN",
                  addressRegion: "Việt Nam",
               },
               contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "Vietnamese",
               },
               sameAs: ["https://viabmtrust.com"],
            }),
         },
         {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "WebSite",
               name: "Viabmtrust",
               url: "https://viabmtrust.com",
               description:
                  "Nền tảng giao dịch dịch vụ số với thông tin minh bạch và hỗ trợ 24/7.",
               potentialAction: {
                  "@type": "SearchAction",
                  target:
                     "https://viabmtrust.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
               },
            }),
         },
      ],
   });

   onMounted(async () => {
      loading.value = true;
      try {
         const [introRes, dialogRes] = await Promise.all([
            settingService.getByName("INTRO"),
            settingService.getByName("DIALOG"),
         ]);
         intro.value = introRes;
         dialog.value = dialogRes;
      } finally {
         loading.value = false;
      }
   });
</script>

<template>
   <div
      class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <!-- Hero Section -->
      <section class="container px-4 py-8 mx-auto">
         <div class="mx-auto max-w-4xl">
            <div
               class="overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-xl">
               <div class="p-8 md:p-12">
                  <div
                     v-if="loading"
                     class="flex justify-center items-center py-12">
                     <div
                        class="loading loading-spinner loading-lg text-primary"></div>
                  </div>
                  <div v-else class="max-w-none prose prose-lg">
                     <div
                        v-html="intro.val"
                        class="leading-relaxed text-gray-700"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Categories Section -->
      <section class="container px-4 pb-8 mx-auto">
         <CustomCategory />
      </section>

      <!-- Welcome Dialog -->
      <MaterialDialog :is-open="true" title="Chào mừng bạn!">
         <div class="max-w-none prose prose-sm">
            <div v-html="dialog.val" class="text-gray-600"></div>
         </div>
         <div v-if="loading" class="flex justify-center py-4">
            <div class="loading loading-spinner loading-md text-primary"></div>
         </div>
      </MaterialDialog>
   </div>
</template>

<style scoped>
   .prose {
      color: #374151;
   }

   .prose h1,
   .prose h2,
   .prose h3,
   .prose h4,
   .prose h5,
   .prose h6 {
      color: #1f2937;
      font-weight: 600;
   }

   .prose a {
      color: #3b82f6;
      text-decoration: none;
   }

   .prose a:hover {
      color: #2563eb;
      text-decoration: underline;
   }
</style>
