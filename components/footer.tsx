import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-neutral-200">
      <div className="container mx-auto px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center md:justify-items-start">
          {/* About section */}
          <div className="w-full text-left">
            <h3 className="font-semibold text-lg mb-4">DogNation Rescue</h3>
            <p className="text-neutral-600 text-sm">
              We connect donors with trusted organizations working to save and
              care for stray dogs worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-neutral-600 hover:text-orange-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-600 hover:text-orange-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-neutral-600 hover:text-orange-500"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/invoice-request"
                  className="text-neutral-600 hover:text-orange-500"
                >
                  Request Tax Receipt
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 hover:text-orange-500"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="pt-2">
                <div className="flex space-x-4">
                  <a
                    href="mailto:paulkim.designs@gmail.com"
                    className="flex items-center text-neutral-600 hover:text-orange-500"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/paulkimdesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-orange-500"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/paulvonkim/dognation-rescue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-orange-500"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-10 pt-6 text-center text-sm text-neutral-600">
          <p>
            © {new Date().getFullYear()} DogNation Rescue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
