import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div className="container mx-auto px-4 py-8 mb-16 text-center">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
        Ways You Can Help
      </h1>
      <ProductList products={products.data} />
    </div>
  );
}
