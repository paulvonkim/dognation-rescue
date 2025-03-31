"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
    icon?: React.ReactNode;
  }[];
}

export default function Footer() {
  const menuItems: MenuItem[] = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", url: "/" },
        { text: "Projects", url: "/projects" },
        { text: "Donate", url: "/products" },
        { text: "Request Donation Receipt", url: "/invoice-request" },
        { text: "About", url: "/about" },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          text: "Email",
          url: "mailto:paulkim.designs@gmail.com",
          icon: <Mail className="h-5 w-5" />,
        },
        {
          text: "LinkedIn",
          url: "https://linkedin.com/in/paulkimdesigns",
          icon: <Linkedin className="h-5 w-5" />,
        },
        {
          text: "GitHub",
          url: "https://github.com/paulvonkim/dognation-rescue",
          icon: <Github className="h-5 w-5" />,
        },
      ],
    },
  ];

  const copyright = `© ${new Date().getFullYear()} DogNation Rescue. All rights reserved.`;

  return (
    <footer className="bg-gray-50 border-t border-neutral-200">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline Section - now taking just 1 column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">DogNation Rescue</h2>
            </div>
            {/* <p className="mt-4 text-neutral-600 text-sm">
              We connect donors with trusted organizations to save dogs.
            </p> */}
          </div>

          {/* Menu Items */}
          {menuItems.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              {section.title === "Contact" ? (
                // Special handling for contact section - horizontal icons
                <div className="flex space-x-4">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target={
                        link.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-neutral-600 hover:text-orange-500"
                      aria-label={link.text}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              ) : (
                // Regular link list for other sections
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="text-neutral-600 hover:text-orange-500"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-neutral-600 mb-3">
              Stay updated on our rescue efforts and new dogs available for
              adoption.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-white"
                />
                <Button
                  type="submit"
                  className="rounded-full bg-black hover:bg-orange-600 text-white"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-neutral-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-neutral-200 mt-10 pt-6 text-center text-sm text-neutral-600">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
