import '../styles/global.css'
import { useRouter } from "next/router"
import React, { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', 'G-5HGHEF87SL', {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState(false);

  function handleAccept() {
    setCookieConsentAccepted(true);
    setShowCookieConsent(false);
  }

  function handleDecline() {
    setShowCookieConsent(false);
  }

  return (
    <>
      {showCookieConsent && !cookieConsentAccepted && (
        <div className="cookie-consent">
          <p>We use cookies to provide the best experience on our website. By clicking "Accept", you consent to the use of all cookies.</p>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      )}

      <Component {...pageProps} />
    </>
  )
}
