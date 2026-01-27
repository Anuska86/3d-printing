import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {" "}
        <header className="w-full bg-white sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-16">
            <Link href="/" className="relative">
              {/* Desktop logo */}
              <img
                src="/printforge-logo.svg"
                alt="PrintForge Logo"
                className="w-[200px] h-auto hidden md:block"
              />
              {/* Mobile logo */}
              <img
                src="/printforge-logo-icon.svg"
                alt="PrintForge Logo"
                className="w-[40px] h-auto block md:hidden"
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
