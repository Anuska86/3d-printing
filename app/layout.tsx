import "./globals.css";
import type { RootLayoutProps } from "./utils/types";
import Link from "next/link";
import Image from "next/image";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";

//Fonts

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable}`}
      >
        {" "}
        <header className="w-full bg-white sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-16">
            <Link href="/" className="relative">
              {/* Desktop logo */}
              <Image
                src="/printforge-logo.svg"
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
                width={100}
                height={100}
              />
              {/* Mobile logo */}
              <Image
                src="/printforge-logo-icon.svg"
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
                width={80}
                height={80}
              />
            </Link>
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/models"
                  className="text-xs font-semibold uppercase tracking-widest hover:text-gray-500 transition-colors"
                >
                  3D Models
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs font-semibold uppercase tracking-widest hover:text-gray-500 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
