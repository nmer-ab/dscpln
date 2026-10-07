"use client";

import { useEffect } from "react";
import { storeUrlForDevice } from "@/lib/store-url";

export function StoreRedirect() {
  useEffect(() => {
    const url = storeUrlForDevice();
    // replace(): Back from the store shouldn't land here and bounce again.
    if (url) window.location.replace(url);
  }, []);

  return null;
}
