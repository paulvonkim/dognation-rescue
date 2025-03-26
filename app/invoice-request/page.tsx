"use client";

import { useState } from "react";
import Link from "next/link";

export default function InvoiceRequest() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Request Your Donation Invoice
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          We provide tax receipts for all donations. Enter your email address
          below and we will send your donation invoice for tax purposes.
        </p>
      </div>

      {/* Form card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-md mx-auto">
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Request Received</h3>
              <p className="text-neutral-600">
                We will send your invoice to your email shortly.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="rounded-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-medium"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-medium"
                >
                  Request Invoice
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Impact information */}
      <div className="max-w-md mx-auto mt-12 bg-neutral-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-4">About Your Donation</h3>
        <p className="text-neutral-600 mb-4">
          Your donations to DogNation may be tax-deductible depending on your
          local tax regulations. The invoice we provide includes all the
          information needed for your tax return.
        </p>
        <p className="text-neutral-600">
          Need assistance? Contact us at{" "}
          <a
            href="mailto:support@dognationrescue.com"
            className="text-orange-500 hover:underline"
          >
            support@dognationrescue.com
          </a>
        </p>
      </div>
    </div>
  );
}
