"use client";

import React, { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "./CookieBanner";

const CONSENT_KEY = "esposito_cookie_consent";

export default function AnalyticsWrapper() {
  const [consentState, setConsentState] = useState<"granted" | "denied" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved === "granted" || saved === "denied") {
      setConsentState(saved);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsentState("granted");
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsentState("denied");
  };

  if (!mounted) return null;

  return (
    <>
      {/* Conditionally activate Google Analytics ONLY if user accepted consent */}
      {consentState === "granted" && <GoogleAnalytics gaId="G-8CZNNZNHGT" />}

      {/* Render Cookie Consent Banner if user has not yet made a choice */}
      <CookieBanner
        isVisible={consentState === null}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </>
  );
}
