"use client";

import Link from "next/link";
import Image from "next/image";
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
            <Image
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="hidden md:block h-10 w-auto"
              width={200}
              height={50}
              priority
            />
            {/* Mobile Logo */}
            <Image
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="block md:hidden h-10 w-10"
              width={40}
              height={40}
              priority
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
