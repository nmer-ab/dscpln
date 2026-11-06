import { APP_STORE_URL } from "@/config/links";

// Browser only. Returns "" for anything that isn't an iPhone or iPad.
export function storeUrlForDevice() {
  const ua = navigator.userAgent;
  // iPadOS reports itself as a Mac; touch support gives it away.
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  return isIOS ? APP_STORE_URL : "";
}
