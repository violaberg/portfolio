'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const GA_TRACKING_ID = 'G-91EHH4BSNX';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID);
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
    </>
  );
}
