type AdsEventParams = Record<string, string | number | boolean | undefined>;

const isBrowser = () => typeof window !== "undefined";

const runGtag = (command: string, eventName: string, params?: AdsEventParams) => {
   if (!isBrowser() || typeof window.gtag !== "function") return;
   window.gtag(command, eventName, params || {});
};

export const trackAdsPageView = (pagePath: string) => {
   runGtag("event", "page_view", { page_path: pagePath });
};

export const trackAdsConversion = (
   sendTo: string,
   params: AdsEventParams = {},
) => {
   runGtag("event", "conversion", {
      send_to: sendTo,
      ...params,
   });
};

declare global {
   interface Window {
      gtag?: (
         command: string,
         eventName: string,
         params?: AdsEventParams,
      ) => void;
   }
}

export {};
