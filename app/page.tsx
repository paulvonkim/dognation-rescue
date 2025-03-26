import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductCarousel } from "@/components/carousel";
import StatsSection from "@/components/stats-section";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div className="container mx-auto px-4 py-8 min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="bg-neutral-100 rounded-xl overflow-hidden">
          <div className="mx-auto grid grid-cols-1 items-center gap-4 p-4 md:p-12 md:grid-cols-2">
            <div className="max-w-md space-y-2">
              <h1 className="text-3xl font-bold mb-4 md:text-4xl">
                Bringing Help to Dogs, <br />
                One Donation at a Time
              </h1>
              <p className="text-neutral-600 max-w-2xl">
                We connect you with trusted organizations working to save and
                care for stray dogs. Support life-changing rescue projects with
                a donation today.
              </p>
              <Button
                asChild
                variant="default"
                className="rounded-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black"
              >
                <Link href="/products">Support Now</Link>
              </Button>
            </div>
            <div className="flex justify-end px-0 md:pr-12">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  alt="Hero Image"
                  src="/hero_img.jpg"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact So Far</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Every donation helps us make a real difference in the lives of dogs
            in need around the world.
          </p>
        </div>
        <StatsSection />
      </section>

      {/* Ways to Help Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ways You Can Help</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Choose a donation option below to support our ongoing projects and
            help dogs in need find comfort, care, and loving homes.
          </p>
        </div>
        <ProductCarousel products={products.data} />
      </section>

      {/* Call to Action Section */}
      <section className="mb-16">
        <div className="bg-orange-50 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Help?
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Together we can make a real difference in the lives of dogs in need.
            Every donation counts, no matter how small.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="rounded-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black"
            >
              <Link href="/products">Make a Donation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 py-3"
            >
              <Link href="/invoice-request">Request Tax Receipt</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
