"use client";

import Stripe from "stripe";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  products: Stripe.Product[];
}

export const ProductCarousel = ({ products }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4"
          >
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:scale-105 h-full flex flex-col">
              <div className="relative h-56 w-full">
                {product.images && product.images[0] && (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill={true}
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {/* Top section */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                      Donation
                    </span>
                    {product.metadata?.location && (
                      <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                        {product.metadata.location}
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-1 truncate"
                    title={product.name}
                  >
                    {product.name}
                  </h3>

                  {/* Description with fade */}
                  <div className="h-20 overflow-hidden relative mt-2">
                    {product.description && (
                      <p className="text-neutral-600 text-sm">
                        {product.description}
                      </p>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                </div>

                {/* Bottom section */}
                <div className="mt-auto pt-4 flex flex-col items-center">
                  <Button asChild className="rounded-full px-6">
                    <Link href={`/products/${product.id}`}>
                      Donation Details
                    </Link>
                  </Button>

                  {product.default_price && (
                    <p className="mt-3 text-sm text-neutral-600">
                      Suggested: €
                      {(
                        (product.default_price as Stripe.Price).unit_amount! /
                        100
                      ).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8">
        <CarouselPrevious className="mr-4 bg-white shadow-sm hover:bg-neutral-50" />
        <CarouselNext className="ml-4 bg-white shadow-sm hover:bg-neutral-50" />
      </div>
    </Carousel>
  );
};
