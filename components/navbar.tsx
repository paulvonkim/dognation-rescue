"use client";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import NextImage from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className=" flex items-center">
          <NextImage
            src="/logo.svg"
            alt="DogNation Logo"
            width={120}
            height={40}
            className="object-contain w-auto h-8 md:h-10"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/projects" className="hover:text-orange-600">
            Projects
          </Link>
          <Link href="/products" className="hover:text-orange-600">
            Donations
          </Link>
          <Link href="/" className="hover:text-orange-600">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-full flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="w-5 h-5" />
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-gray-100 shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/projects" className="block hover:text-orange-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-orange-600">
                Donations
              </Link>
            </li>
            <li>
              <Link href="/" className="block hover:text-orange-600">
                About
              </Link>
            </li>
            {/* <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li> */}
          </ul>
        </nav>
      )}
    </nav>
  );
};
