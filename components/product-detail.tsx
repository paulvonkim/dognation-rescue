"use client";

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          {product.description ||
            "Your support makes a real difference for dogs in need."}
        </p>
      </div>

      {/* Product detail card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image section */}
          <div className="relative h-[450px]">
            {product.images && product.images[0] && (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>

          {/* Content section */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                  Donation
                </span>
                {product.metadata?.location && (
                  <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                    {product.metadata.location}
                  </span>
                )}
                <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                  #{product.id.slice(-5)}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-3">{product.name}</h2>
              {product.description && (
                <p className="text-neutral-600 mb-6">{product.description}</p>
              )}

              {price && price.unit_amount && (
                <div className="mb-6">
                  <p className="text-sm text-neutral-500 mb-1">
                    Donation amount
                  </p>
                  <p className="text-2xl font-semibold">
                    ${(price.unit_amount / 100).toFixed(2)}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => removeItem(product.id)}
                className="rounded-full w-8 h-8 cursor-pointer"
                disabled={quantity === 0}
              >
                –
              </Button>
              <span className="text-lg font-semibold w-8 text-center">
                {quantity}
              </span>
              <Button
                onClick={onAddItem}
                className="rounded-full w-8 h-8 cursor-pointer bg-orange-500 hover:bg-orange-600 text-black"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-neutral-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-4">Your Impact</h3>
        <p className="text-neutral-600">
          Your donation helps us provide essential care, food, and medical
          treatment to dogs in need. Every contribution makes a difference in
          their lives.
        </p>
      </div>
    </div>
  );
};
