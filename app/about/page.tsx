import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export const metadata = {
  title: "About DogNation Rescue",
  description: "Learn about our mission and how we're helping dogs in need",
};

export default function AboutPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8 mb-16">
      {/* Hero Section */}
      {/* <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          About DogNation Rescue
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A personal project with a mission—combining technology and compassion
          for dogs in need.
        </p>
      </div> */}

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">About DogNation Rescue</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          A personal project with a mission—combining technology and compassion
          for dogs in need.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-10 flex justify-center">
        <div className="relative w-full max-w-2xl aspect-[3/2] rounded-lg overflow-hidden">
          <Image
            src="/about-hero.jpg"
            alt="Rescued dogs"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold">Why DogNation Rescue?</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          DogNation Rescue started as a simple{" "}
          <strong>e-commerce project</strong> but quickly evolved into something
          more meaningful—a{" "}
          <strong>platform to support dog rescue efforts</strong> through
          donations. While it&apos;s a <strong>passion project</strong>, the
          concept and technical implementation are designed to be fully{" "}
          <strong>realistic and transferable</strong> to real-world initiatives.
        </p>
      </div>

      {/* Learning & Tech Stack */}
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Built with Passion & Technology
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center">
          This project is also a way for me to{" "}
          <strong>learn and practice</strong> modern web development
          technologies while creating something that could make a real
          difference.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">⚡ Next.js</h3>
              <p className="text-muted-foreground text-sm">
                React framework for fast, scalable web apps.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">🟦 TypeScript</h3>
              <p className="text-muted-foreground text-sm">
                Ensuring type safety and maintainability.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">🎨 ShadCN</h3>
              <p className="text-muted-foreground text-sm">
                Modern UI components with great accessibility.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">💳 Stripe</h3>
              <p className="text-muted-foreground text-sm">
                Seamless donation payments with Stripe.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="mt-12 text-center space-y-4">
        <h2 className="text-2xl font-bold">Want to Get Involved?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          While DogNation Rescue is currently a <strong>passion project</strong>
          , the idea behind it can be implemented in real rescue initiatives. If
          you believe in this mission and want to collaborate, feel free to
          reach out!
        </p>
        <a href="mailto:paulkim.designs@gmail.com">
          <Button size="lg" className="mt-4 rounded-full" variant="default">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
}
