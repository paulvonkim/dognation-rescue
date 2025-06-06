import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "DogNation Rescue",
  description: "Donate for Dogs in need",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
