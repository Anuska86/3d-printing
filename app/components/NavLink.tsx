"use client";

import Link from "next/link";
import { NavLinkProps } from "../utils/types";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  //check the name of the URL
  const isActive = pathname.startsWith(href);

  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer ${
          isActive
            ? "bg-brand text-white" // Active styles
            : "text-gray-700 hover:bg-brand hover:text-white" // Inactive styles
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
