"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookie-consent");
    if (!consentGiven) {
      // Show banner if no choice has been made
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
            <p className="text-neutral-600 text-sm">
              We use cookies to enhance your browsing experience, analyze site
              traffic, and for Stripe payment processing. This site is for
              demonstration purposes only and uses Stripe in test mode.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={declineCookies}
              variant="outline"
              className="rounded-full px-5"
            >
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              className="rounded-full px-5 bg-orange-500 hover:bg-orange-600 text-black"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
