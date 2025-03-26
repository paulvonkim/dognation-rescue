import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-neutral-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About DogNation</h3>
            <p className="text-neutral-600 text-sm">
              We connect donors with trusted organizations working to save and
              care for stray dogs worldwide. Every donation makes a difference.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Email: support@dognationrescue.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8 text-center text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} DogNation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
