import Link from "next/link";
import { NavLinkProps } from "../utils/types";

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer ${
          isActive
            ? "bg-brand text-white"
            : "text-gray-700 hover:bg-brand hover:text-white"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
