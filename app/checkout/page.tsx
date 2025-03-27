"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">No Donations Selected</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Every donation helps provide food, shelter, and medical care for
            dogs in need. <br />
            Start making a difference today!
          </p>
          <Button
            asChild
            className="rounded-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black"
          >
            <Link href="/products">Browse Donations</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header section - matching product detail */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Complete Your Donation</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Every contribution helps rescue, feed, and heal dogs in need. Thank
          you for your kindness.
        </p>
      </div>

      {/* Main content card - improved mobile layout */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-4xl mx-auto">
        <div className="p-4 md:p-8">
          <h2 className="text-xl font-semibold mb-6">Donation Summary</h2>

          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.id} className="border-b pb-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Product image - hidden on mobile */}
                  <Link
                    href={`/products/${item.id}`}
                    className="hidden sm:block relative h-32 w-32 md:h-48 md:w-48 flex-shrink-0 rounded-xl overflow-hidden"
                  >
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover transition-opacity hover:opacity-90"
                      />
                    ) : (
                      <div className="bg-neutral-100 w-full h-full flex items-center justify-center">
                        <span className="text-neutral-400">No image</span>
                      </div>
                    )}
                  </Link>

                  {/* Product details - improved mobile layout */}
                  <div className="flex-grow">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                          Donation
                        </span>
                        <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                          #{item.id.slice(-5)}
                        </span>
                      </div>
                      <h3 className="font-semibold">{item.name}</h3>

                      {/* Price - always visible and clear */}
                      <p className="font-semibold mt-4 text-neutral-800">
                        €{((item.price * item.quantity) / 100).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity controls - better for mobile */}
                    <div className="flex items-center mt-4">
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="outline"
                          onClick={() => removeItem(item.id)}
                          className="rounded-full w-8 h-8 hover:bg-orange-50 hover:border-orange-200  cursor-pointer"
                          disabled={item.quantity === 0}
                        >
                          –
                        </Button>
                        <span className="text-lg font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          onClick={() => addItem({ ...item, quantity: 1 })}
                          className="rounded-full w-8 h-8 cursor-pointer bg-white hover:bg-orange-500 text-black"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-neutral-100">
            <div className="flex justify-between items-center mb-6">
              <p className="text-lg md:text-2xl font-semibold">
                Donation Total
              </p>
              <p className="text-lg md:text-2xl font-semibold">
                €{(total / 100).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-center">
              <form action={checkoutAction}>
                <input
                  type="hidden"
                  name="items"
                  value={JSON.stringify(items)}
                />
                <Button
                  type="submit"
                  className="w-full sm:w-auto rounded-full px-6 py-3 cursor-pointer bg-orange-500 hover:bg-orange-600 text-black font-medium"
                >
                  Complete Donation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Impact information - matching product detail impact section */}
      <div className="max-w-4xl mx-auto mt-12 bg-neutral-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-4">Your Impact</h3>
        <p className="text-neutral-600">
          Your donation directly supports our rescue efforts worldwide. We
          provide food, shelter, medical care, and rehabilitation for dogs in
          need. Thank you for making a difference in their lives.
        </p>
      </div>
    </div>
  );
}
