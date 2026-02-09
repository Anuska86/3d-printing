"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-50 py-4 px-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <img
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-50 h-auto hidden md:block"
            />
            {/* Mobile Logo */}
            <img
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-10 h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <NavLink href="/models" isActive={pathname.startsWith("/models")}>
            3D Models
          </NavLink>

          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
