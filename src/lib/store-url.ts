import { APP_STORE_URL, PLAY_STORE_URL } from "@/config/links";

// Browser only. Returns "" for desktops, other devices, or a store whose URL isn't set yet.
export function storeUrlForDevice() {
  const ua = navigator.userAgent;
  // iPadOS reports itself as a Mac; touch support gives it away.
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (isIOS) return APP_STORE_URL;
  if (/Android/i.test(ua)) return PLAY_STORE_URL;
  return "";
}
