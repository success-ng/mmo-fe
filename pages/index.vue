<script setup lang="ts">
   import { useApiSettingService } from "~/composables/api/setting.service";
   import type { SettingModel } from "~/composables/models/setting.model";
   import "~/assets/css/main.css";
   const settingService = useApiSettingService();
   const intro = ref<SettingModel>({} as SettingModel);
   const dialog = ref<SettingModel>({} as SettingModel);
   const loading = ref(true);

   // SEO Optimization for Google and Google Ads
   useHead({
      title: "Cung Cấp Via Việt Cổ - BM Facebook Uy Tín | Bảo Hành 1 Đổi 1",
      meta: [
         {
            name: "description",
            content:
               "Kho nguyên liệu ''xịn sò'' dành cho anh em chạy Facebook Ads! Chuyên cung cấp via chất lượng cao, BM uy tín, page sạch đủ loại – tối ưu cho mọi chiến dịch quảng cáo. Thanh toán tự động – Hỗ trợ tận tâm 24/7 – Bảo hành đầy đủ Giải pháp tối ưu giúp bạn scale camp mượt mà, ổn định, bền vững!",
         },
         {
            name: "keywords",
            content:
               "via2fa, via cổ, via xmdt, via 902, mua BM, via fb, via facebook, facebook ads, quảng cáo facebook, tài khoản facebook, bm facebook, page facebook",
         },
         {
            property: "og:title",
            content:
               "Cung Cấp Via Việt Cổ - BM Facebook Uy Tín | Bảo Hành 1 Đổi 1",
         },
         {
            property: "og:description",
            content:
               "Kho nguyên liệu ''xịn sò'' dành cho anh em chạy Facebook Ads! Chuyên cung cấp via chất lượng cao, BM uy tín, page sạch đủ loại – tối ưu cho mọi chiến dịch quảng cáo.",
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
            content: "Via Việt Cổ - BM Facebook Uy Tín",
         },
         {
            name: "twitter:card",
            content: "summary_large_image",
         },
         {
            name: "twitter:title",
            content: "Cung Cấp Via Việt Cổ - BM Facebook Uy Tín",
         },
         {
            name: "twitter:description",
            content:
               "Kho nguyên liệu ''xịn sò'' dành cho anh em chạy Facebook Ads! Chuyên cung cấp via chất lượng cao, BM uy tín.",
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
            content: "Via Việt Cổ",
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
               name: "Via Việt Cổ - BM Facebook Uy Tín",
               url: "https://viabmtrust.com",
               logo: "https://s1.uphinh.org/2021/12/15/Capture.png",
               description:
                  "Chuyên cung cấp via chất lượng cao, BM uy tín, page sạch đủ loại – tối ưu cho mọi chiến dịch quảng cáo Facebook Ads",
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
               name: "Via Việt Cổ",
               url: "https://viabmtrust.com",
               description:
                  "Kho nguyên liệu xịn sò dành cho anh em chạy Facebook Ads",
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
