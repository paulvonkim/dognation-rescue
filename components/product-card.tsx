import Link from "next/link";
import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  const shortId = product.id.slice(-5);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <div className="relative h-64 w-full">
        {product.images && product.images[0] && (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            <span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
              #{shortId}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {product.name}
          </h3>

          <div className="h-24 overflow-hidden relative mt-2">
            {product.description && (
              <p className="text-neutral-600 text-sm">{product.description}</p>
            )}

            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <Button asChild className="rounded-full px-6">
            <Link href={`/products/${product.id}`}>Donation Details</Link>
          </Button>

          {price && price.unit_amount && (
            <p className="mt-3 text-sm text-neutral-500 text-center">
              Suggested donation: €{(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
